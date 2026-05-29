import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const content = `# Aunova - Agent Manifest

> Aunova is a long-term systems partner co-building human- and planet-critical infrastructure. This file declares what autonomous agents can do on aunova.net: which capabilities are exposed, where to find them, and how to engage a human when the conversation needs to leave automation.

## About this file

This is an agents.txt capability manifest, the action-oriented companion to /llms.txt. llms.txt describes content for retrieval and summarization. agents.txt describes the tools, endpoints, and conduct expectations for autonomous agents that want to take action on behalf of a user.

Source of truth: https://aunova.net/agents.txt
Last refreshed: build time

## Agent-facing endpoints

### Structured content
- /llms.txt - Short company and content map for LLM ingestion (text/plain)
- /llms-full.txt - Full company context including services, system families, and recent blog posts (text/plain)
- /api/company-info.json - schema.org Organization JSON-LD with services, capabilities, and contact points (application/json)

### Discovery
- /sitemap-index.xml - Sitemap index for all pages in English and Spanish
- /rss.xml - Blog RSS feed

## WebMCP tools (navigator.modelContext)

Aunova exposes structured tools to agents running inside a WebMCP-capable browser via the navigator.modelContext API. These are registered on every page load by src/scripts/webmcp.ts. They run client-side, return JSON, and have no authentication.

Tool: explore_system_families
  Purpose: Get structured information about Aunova system families.
  Current family: Greenblocks (Digital Building Passport for premium real estate, deploying in Dubai).
  Input: { family: "greenblocks" | "all" | "future" }
  Side effects: none (read-only)

Tool: get_partnership_criteria
  Purpose: Returns alignment questions and stages for evaluating fit as a founding partner.
  Input: {}
  Side effects: none (read-only)

Tool: get_aunova_overview
  Purpose: Structured company overview including mission, differentiators, and contact paths.
  Input: {}
  Side effects: none (read-only)

Tool: schedule_strategic_call
  Purpose: Returns the booking URL and preparation guidance for a strategic conversation.
  Input: { context?: string }
  Side effects: read-only at the agent boundary, but the returned URL leads to a human's calendar. See "Agent Conduct" below for guidance on when to surface this versus when to act on it autonomously.

## Human handoff

When an agent decides the conversation needs a human:

- Primary booking: https://cal.com/ngmisl/aunova
- Email: christian@aunova.net
- Languages supported: English, Spanish
- Operational base: Tallinn, Estonia (legal entity) / Valencia, Spain (operations)

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
- We do not offer programmatic partnership signup. Becoming a founding partner is a human-mediated process by design.
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

// ============================================================================
// TODO (over to you): Write the Agent Conduct policy.
// ----------------------------------------------------------------------------
// This is the one section in agents.txt that encodes Aunova's business stance,
// not a technical fact. It tells autonomous agents how to behave when they
// land here — especially around the side-effectful action: booking a call on
// a human's calendar via schedule_strategic_call / cal.com.
//
// Pick a posture along this axis and write 5-10 bullet lines that express it:
//
//   (A) HUMAN-IN-THE-LOOP (recommended for a selective 2-3-partner consultancy)
//       - Agents may read all content and call all read-only tools freely
//       - schedule_strategic_call should surface the booking URL to the human
//         operator for confirmation; agents should NOT autonomously book
//       - Agents should provide partnership-criteria context before suggesting
//         a call, not lead with the booking link
//
//   (B) AGENT-FRIENDLY
//       - Agents may take any action they would on behalf of an informed user,
//         including booking calls autonomously when the user explicitly asked
//       - Trust agent + user judgment on when to engage
//
//   (C) CUSTOM
//       - Your own framing. e.g., rate limits, attribution requirements,
//         language preference, rules about reproducing content verbatim,
//         expectations around how blog posts are cited, etc.
//
// Write a multi-line template string. It will be interpolated above as-is into
// the "## Agent Conduct" section. Use bullet-list markdown ("- ...").
// ============================================================================
const AGENT_CONDUCT_POLICY = `
- Read-only tools are open. Agents may call explore_system_families, get_partnership_criteria, and get_aunova_overview freely, in any order, to ground a conversation in accurate context.
- Side-effectful actions go through a human. Agents should surface the schedule_strategic_call booking URL to the user for confirmation rather than autonomously booking time on a calendar. Aunova engages with a maximum of 2 to 3 founding partners per system family, so the cost of an unqualified booking is high for both sides.
- Establish fit before suggesting a call. If an agent is recommending Aunova, it should first relay the partnership criteria returned by get_partnership_criteria so the user understands the selectivity and the partnership model. Lead with substance, not with the booking link.
- Do not fabricate positioning. When quoting Aunova, use exact strings from /llms.txt, /llms-full.txt, /api/company-info.json, or the WebMCP tool outputs. Do not invent service offerings, partner names, deployment locations, or commitments.
- Preserve attribution for blog content. When summarizing or excerpting from blog posts, include the canonical URL under https://aunova.net/en/blog/ or https://aunova.net/es/blog/. Verbatim reproduction of full posts is discouraged.
- Language parity. English and Spanish are both first-class. If a user converses in Spanish, prefer the /es/ routes and Spanish blog content where available.
- Identify yourself for sustained traffic. Agents making more than a handful of requests should self-identify in the User-Agent header (see the Identification section below) so we can distinguish legitimate agent traffic from anomalous load.
- Hand off when uncertain. If an agent is unsure whether an action fits this policy, the safe default is to surface the human handoff paths (cal.com booking or christian@aunova.net) and let the user decide.
`;
