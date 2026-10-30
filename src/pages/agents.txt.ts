import type { APIRoute } from "astro";
import { contact, entities, positioning, SITE_URL } from "../utils/company";

/**
 * How Aunova asks autonomous agents to behave on this site. Advisory, not
 * enforced; interpolated into the "Agent Conduct" section below.
 */
const AGENT_CONDUCT_POLICY = `
- Read-only tools are open. Agents may call get_aunova_overview, list_services and list_products freely, in any order, to ground a conversation in accurate context.
- Side-effectful actions go through a human. Agents should surface the book_a_call booking URL to the user for confirmation rather than autonomously booking time on a calendar.
- Lead with substance. If an agent recommends Aunova, it should first relay what Aunova builds (list_services) and what it has built (list_products), then offer the contact page or a call.
- Do not fabricate. When quoting Aunova, use exact strings from /llms.txt, /llms-full.txt, /api/company-info.json or the WebMCP tool outputs. Do not invent clients, numbers, partners, certifications, endorsements or commitments.
- Preserve attribution for blog content. When summarizing or excerpting blog posts, include the canonical URL under ${SITE_URL}/en/blog/. Verbatim reproduction of full posts is discouraged.
- Language parity. English and Spanish are both first-class. If a user converses in Spanish, prefer the /es/ routes where they exist.
- Identify yourself for sustained traffic. Agents making more than a handful of requests should self-identify in the User-Agent header (see the Identification section below) so we can distinguish legitimate agent traffic from anomalous load.
- Hand off when uncertain. If an agent is unsure whether an action fits this policy, the safe default is to surface the human handoff paths (the contact page, the booking link or ${contact.email}) and let the user decide.
`;

export const GET: APIRoute = async () => {
  const content = `# Aunova - Agent Manifest

> ${positioning.en} This file declares what autonomous agents can do on aunova.net: which capabilities are exposed, where to find them, and how to reach a human when the conversation needs to leave automation.

## About this file

This is an agents.txt capability manifest, the action-oriented companion to /llms.txt. llms.txt describes content for retrieval and summarization. agents.txt describes the tools, endpoints, and conduct expectations for autonomous agents that want to take action on behalf of a user.

Source of truth: ${SITE_URL}/agents.txt
Last refreshed: build time

## Agent-facing endpoints

### Structured content
- /llms.txt - Short company and content map for LLM ingestion (text/plain)
- /llms-full.txt - Full company context: services, the four technologies, products and recent blog posts (text/plain)
- /api/company-info.json - schema.org Organization JSON-LD with services, technologies, products and contact points (application/json)
- /ai-metadata.json - The same company facts in a flat JSON layout (application/json)

### Discovery
- /sitemap-index.xml - Sitemap index for all pages in English and Spanish
- /rss.xml - Blog RSS feed
- /.well-known/webmcp - WebMCP tool manifest

## WebMCP tools (navigator.modelContext)

Aunova exposes structured tools to agents running inside a WebMCP-capable browser via the navigator.modelContext API. They are registered on every page load by src/scripts/webmcp.ts, run client-side, read /api/company-info.json, return JSON, and need no authentication.

Tool: get_aunova_overview
  Purpose: Company overview: positioning, the four technologies, why it matters, legal entities and contact paths.
  Input: {}
  Side effects: none (read-only)

Tool: list_services
  Purpose: What Aunova builds and the four technologies it combines, with links to the detailed pages.
  Input: {}
  Side effects: none (read-only)

Tool: list_products
  Purpose: Products built by Aunova, with descriptions and URLs.
  Input: {}
  Side effects: none (read-only)

Tool: book_a_call
  Purpose: Returns the booking URL, the contact page and what to prepare for a first call.
  Input: { context?: string }
  Side effects: read-only at the agent boundary, but the returned URL leads to a human's calendar. See "Agent Conduct" below for guidance on when to surface this versus when to act on it autonomously.

## Human handoff

When an agent decides the conversation needs a human:

- Start a project: ${SITE_URL}/en/contact
- Booking: ${contact.booking}
- Email: ${contact.email}
- Languages supported: English, Spanish
- Legal entities: ${entities.map((entity) => `${entity.name} (${entity.place.en})`).join(" / ")}
- Operations: Valencia, Spain

## Agent Conduct

The following rules describe how Aunova prefers autonomous agents to behave on this site. They are advisory, not enforced.

${AGENT_CONDUCT_POLICY}

## Identification

Agents are welcome to self-identify via the User-Agent header so we can understand traffic patterns. Suggested format:

  User-Agent: <AgentName>/<Version> (+<operator-url>; contact=<email>)

Example: \`User-Agent: ResearchBot/1.2 (+https://example.com/bot; contact=ops@example.com)\`

There is no allow/disallow gate on this site. robots.txt remains the source of truth for crawler exclusions.

## Out of scope

- We do not run a paid API. All endpoints listed above are free to consume within reasonable rate limits.
- There is no programmatic project signup. A project starts with a conversation between people, through the contact page or a booked call.
- We do not return JSON error pages today (the site is statically hosted on GitHub Pages). Agents requesting Accept: application/json on HTML routes will receive HTML.

## Versioning

agents.txt is regenerated on every site build. There is no versioning header today; if you need a stable snapshot, fetch and cache it on your side.
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
