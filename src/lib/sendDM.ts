import {
  generateSecretKey,
  getPublicKey,
  finalizeEvent,
  getEventHash,
  nip44,
  nip19,
} from "nostr-tools";
import type { UnsignedEvent, Event } from "nostr-tools";

/**
 * In-browser end-to-end-encrypted contact send.
 *
 * The visitor's enquiry is sealed to Aunova's key using the NIP-17 gift-wrap
 * flow (kind:14 rumor -> kind:13 seal via NIP-44 -> kind:1059 gift wrap signed
 * by a fresh throwaway key) and published to several public relays. The relays
 * carry only ciphertext with a randomized past timestamp; only Aunova's key can
 * decrypt. Fire-and-forget: no reply/polling, no identity persistence, nothing
 * stored — a fresh ephemeral key is minted for every submission.
 *
 * User-facing copy never references any of this machinery by name.
 */

/** Dedicated Aunova enquiry key (npub) — messages are delivered here. */
export const RECIPIENT_NPUB =
  "npub14ymqgaw2wnyt4a9m0zjat9arqd0yehhlrqtgs2qtxf2lvym2trtqvz67zr";

/**
 * The recipient's DM inbox relays (their published kind:10050). Most require
 * NIP-42 AUTH to accept a gift wrap — the sender satisfies it with a throwaway
 * key (see publishViaWebSocket); nip17.com is open. Auth-gated relays keep the
 * recipient metadata (the p-tag) readable only by the authenticated recipient.
 */
export const RELAYS = [
  "wss://relay.nmail.li",
  "wss://nostr-01.uid.ovh",
  "wss://auth.nostr1.com",
  "wss://nip17.com",
  "wss://nostr-02.uid.ovh",
];

function npubToPubkey(npub: string): string {
  const decoded = nip19.decode(npub);
  if (decoded.type !== "npub") {
    throw new Error(`RECIPIENT_NPUB must be an "npub" identifier, received "${npub}".`);
  }
  return decoded.data;
}

/** Recipient pubkey as 32-byte hex, derived from RECIPIENT_NPUB. */
const RECIPIENT_PUBKEY = npubToPubkey(RECIPIENT_NPUB);

/** Strip CR/LF, control + format chars (prevents forging extra payload lines and bidi/zero-width spoofing), collapse runs of whitespace, trim, and cap length. */
function sanitizeLine(value: string, max: number): string {
  return value
    .replace(/[\p{Cc}\p{Cf}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

/** Validate + normalize an optional contact email. Returns '' when empty or clearly invalid. */
export function sanitizeEmail(value: string): string {
  const v = sanitizeLine(value, 254);
  if (!v) return "";
  // Single @, non-empty local part, a dot in the domain, no spaces.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? v : "";
}

/** Sanitize a source tag to a safe host/URL-ish charset. */
function sanitizeSource(value: string): string {
  // Allow letters, digits, dot, hyphen, colon, slash, underscore; cap at 200.
  return value.replace(/[^\w.\-:/]/g, "").slice(0, 200);
}

/** Compose the enquiry body delivered to the recipient from the visitor's inputs. */
export function composeDmBody(opts: {
  message: string;
  email?: string;
  company?: string;
  source?: string;
}): string {
  const email = opts.email ? sanitizeEmail(opts.email) : "";
  const company = opts.company ? sanitizeLine(opts.company, 200) : "";
  const source = opts.source ? sanitizeSource(opts.source) : "";
  const header: string[] = [];
  if (email) header.push(`Email: ${email}`);
  if (company) header.push(`Company: ${company}`);
  if (source) header.push(`Source: ${source}`);
  const body = sanitizeLine(opts.message, 4000);
  return header.length ? `${header.join("\n")}\n\n${body}` : body;
}

const TWO_DAYS = 2 * 24 * 60 * 60;

/** A randomized timestamp within the last ~2 days, so relays learn no real send time. */
function randomNow(): number {
  return Math.round(Date.now() / 1000) - Math.round(Math.random() * TWO_DAYS);
}

/** NIP-44 v2 encrypt a JSON-serializable value from privateKey to publicKey. */
function nip44Encrypt(data: unknown, privateKey: Uint8Array, publicKey: string): string {
  const conversationKey = nip44.v2.utils.getConversationKey(privateKey, publicKey);
  return nip44.v2.encrypt(JSON.stringify(data), conversationKey);
}

/**
 * Publish one event to one relay, satisfying NIP-42 AUTH on demand: if the relay
 * sends an AUTH challenge (or rejects with auth-required), authenticate with a
 * fresh throwaway key and (re)send the event. Resolves on OK-accept of the
 * event; rejects on a non-auth rejection, a failed authed attempt, or timeout.
 */
function publishViaWebSocket(event: Event, relayUrl: string): Promise<void> {
  const { promise, resolve, reject } = Promise.withResolvers<void>();
  const ws = new WebSocket(relayUrl);
  let resolved = false;
  let authEventId: string | null = null;
  let authTried = false;
  let authResent = false;

  const finish = (fn: () => void) => {
    if (resolved) return;
    resolved = true;
    clearTimeout(timeout);
    try {
      ws.close();
    } catch {
      /* ignore */
    }
    fn();
  };

  const timeout = setTimeout(
    () => finish(() => reject(new Error("WebSocket connection timed out"))),
    15000,
  );

  ws.onopen = () => ws.send(JSON.stringify(["EVENT", event]));

  ws.onmessage = (msg) => {
    let data: unknown;
    try {
      data = JSON.parse(msg.data as string);
    } catch {
      return;
    }
    if (!Array.isArray(data)) return;
    const type = data[0] as string;

    // NIP-42 challenge → authenticate with a fresh throwaway key (any authed key
    // is accepted by these DM relays), then resend the event once auth succeeds.
    if (type === "AUTH" && typeof data[1] === "string" && !authTried) {
      authTried = true;
      const authEvt = finalizeEvent(
        {
          kind: 22242,
          created_at: Math.round(Date.now() / 1000),
          tags: [
            ["relay", relayUrl],
            ["challenge", data[1]],
          ],
          content: "",
        },
        generateSecretKey(),
      );
      authEventId = authEvt.id;
      ws.send(JSON.stringify(["AUTH", authEvt]));
      return;
    }

    if (type !== "OK") return; // NOTICE / EOSE / etc.
    const id = data[1] as string;
    const ok = data[2] === true;
    const reason = String(data[3] ?? "");

    if (authEventId !== null && id === authEventId) {
      if (ok) {
        authResent = true;
        ws.send(JSON.stringify(["EVENT", event]));
      } else {
        finish(() => reject(new Error(`Auth rejected: ${reason}`)));
      }
      return;
    }
    if (id === event.id) {
      if (ok) {
        finish(() => resolve());
        return;
      }
      const isAuth = /auth/i.test(reason);
      // Auth-required before we've completed an authed resend → wait for the
      // AUTH challenge / auth round-trip (or eventual timeout).
      if (isAuth && !authResent) return;
      // Genuine non-auth rejection, or the authed attempt itself failed.
      if ((!isAuth && !authTried) || authResent) {
        finish(() => reject(new Error(`Relay rejected: ${reason}`)));
      }
    }
  };

  ws.onerror = () =>
    finish(() => reject(new Error("WebSocket connection failed")));
  ws.onclose = () =>
    finish(() => reject(new Error("WebSocket connection closed unexpectedly")));

  return promise;
}

/** Unsigned kind:14 rumor carrying the enquiry, addressed to the recipient. */
function createRumor(
  message: string,
  senderPub: string,
  recipientPubkey: string,
  relayUrl: string,
): UnsignedEvent & { id: string } {
  const rumor: UnsignedEvent = {
    kind: 14,
    pubkey: senderPub,
    created_at: Math.round(Date.now() / 1000),
    content: message,
    tags: [["p", recipientPubkey, relayUrl]],
  };
  return { ...rumor, id: getEventHash(rumor) };
}

/** Kind:13 seal — the rumor encrypted to the recipient and signed by the ephemeral sender key. */
function createSeal(
  rumor: UnsignedEvent & { id: string },
  senderPriv: Uint8Array,
  recipientPubkey: string,
): Event {
  return finalizeEvent(
    {
      kind: 13,
      content: nip44Encrypt(rumor, senderPriv, recipientPubkey),
      created_at: randomNow(),
      tags: [],
    },
    senderPriv,
  ) as Event;
}

/**
 * Kind:1059 gift wrap — the seal encrypted to the recipient and signed by a
 * SEPARATE fresh one-time key (never the sender's ephemeral key). Its only
 * clear field is the p-tag to the recipient; sender identity + content stay
 * encrypted. Created_at is randomized so no real send time leaks.
 */
function createGiftWrap(seal: Event, recipientPubkey: string, relayUrl: string): Event {
  const randomKey = generateSecretKey();
  return finalizeEvent(
    {
      kind: 1059,
      content: nip44Encrypt(seal, randomKey, recipientPubkey),
      created_at: randomNow(),
      tags: [["p", recipientPubkey, relayUrl]],
    },
    randomKey,
  ) as Event;
}

/**
 * Build ONE kind:1059 gift wrap for `message`: a fresh ephemeral sender key
 * signs the kind:13 seal, a separate one-time key signs the wrap. Exported so
 * the rumor -> seal -> wrap chain can be checked against a throwaway recipient.
 */
export function wrapMessage(
  message: string,
  recipientPubkey: string,
  relayHint: string,
): Event {
  const senderPriv = generateSecretKey();
  const rumor = createRumor(message, getPublicKey(senderPriv), recipientPubkey, relayHint);
  const seal = createSeal(rumor, senderPriv, recipientPubkey);
  return createGiftWrap(seal, recipientPubkey, relayHint);
}

export interface SendDMResult {
  /** Number of relays that accepted the gift wrap. */
  accepted: number;
  /** Number of relays attempted. */
  total: number;
}

/**
 * Encrypt the message ONCE and publish the SAME gift-wrap event to every relay.
 * One wrap = one event id, so a recipient reading several relays dedupes it to a
 * single message (re-wrapping per relay would mint a distinct id each time and
 * show up as duplicates). Waits for every relay to settle; resolves if at least
 * one accepted, rejects only if all fail.
 */
export async function sendDM(
  message: string,
  relays: string[] = RELAYS,
): Promise<SendDMResult> {
  // The relay hint carried in the p-tags (single URL per NIP-17/59); the wrap
  // itself is published to every relay in `relays` below.
  const wrap = wrapMessage(message, RECIPIENT_PUBKEY, relays[0] ?? "");

  const results = await Promise.allSettled(
    relays.map((relay) => publishViaWebSocket(wrap, relay)),
  );

  const accepted = results.filter((r) => r.status === "fulfilled").length;
  if (accepted === 0) {
    throw new Error("Could not reach a relay. Please try again.");
  }
  return { accepted, total: relays.length };
}
