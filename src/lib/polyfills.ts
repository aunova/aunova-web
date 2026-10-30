import Buffer from "buffer";

/**
 * Browser polyfills required by nostr-tools' NIP-44 path.
 *
 * SSR-safe: Astro evaluates this module during SSR even though the island is
 * client-only, so nothing here may throw in Node. Every mutation is guarded and
 * only touches globals that already exist in both Node and the browser.
 */

// Some deps in the NIP-44 chain expect a global Buffer (present in Node, absent
// in the browser). Provide it from the `buffer` package when missing.
if (typeof globalThis !== "undefined" && !globalThis.Buffer) {
  globalThis.Buffer = Buffer.Buffer;
}

// AbortSignal.any() — combine multiple signals. Node 20+ and modern browsers
// have it natively; polyfill only when absent.
if (typeof AbortSignal !== "undefined" && !AbortSignal.any) {
  AbortSignal.any = function (signals: AbortSignal[]): AbortSignal {
    if (signals.length === 0) {
      return new AbortController().signal;
    }
    if (signals.length === 1) {
      return signals[0];
    }
    for (const signal of signals) {
      if (signal.aborted) {
        const controller = new AbortController();
        controller.abort(signal.reason);
        return controller.signal;
      }
    }
    const controller = new AbortController();
    const onAbort = (event: Event) => {
      const target = event.target as AbortSignal;
      controller.abort(target.reason);
    };
    for (const signal of signals) {
      signal.addEventListener("abort", onAbort, { once: true });
    }
    controller.signal.addEventListener(
      "abort",
      () => {
        for (const signal of signals) {
          signal.removeEventListener("abort", onAbort);
        }
      },
      { once: true },
    );
    return controller.signal;
  };
}

// AbortSignal.timeout() — abort after N milliseconds.
if (typeof AbortSignal !== "undefined" && !AbortSignal.timeout) {
  AbortSignal.timeout = function (milliseconds: number): AbortSignal {
    const controller = new AbortController();
    setTimeout(() => {
      controller.abort(
        new DOMException("The operation was aborted due to timeout", "TimeoutError"),
      );
    }, milliseconds);
    return controller.signal;
  };
}
