// src/scripts/webmcp.ts
// WebMCP tool definitions for aunova.net
// Loaded as <script type="module"> in the base layout
// Provides structured, callable tools to AI agents via navigator.modelContext

import '@mcp-b/global';

// ---- Tool: System Families ----
navigator.modelContext.registerTool({
  name: 'explore_system_families',
  description:
    'Get structured information about Aunova system families including Greenblocks ' +
    '(community impact infrastructure for sustainability) and future system families ' +
    'in development. Returns scope, capabilities, partnership status, and URLs.',
  inputSchema: {
    type: 'object',
    properties: {
      family: {
        type: 'string',
        description: 'Which system family to explore',
        enum: ['greenblocks', 'all', 'future'],
      },
    },
    required: ['family'],
  },
  async execute(args: { family: string }) {
    const families = {
      greenblocks: {
        name: 'Greenblocks by Aunova',
        status: 'Active - seeking founding partners',
        category: 'Community Impact Infrastructure',
        description:
          'Foundational infrastructure layer for sustainable, healthy, living communities.',
        capabilities: [
          'Verified sustainability and environmental impact data across assets and operations',
          'Accountable ESG and environmental reporting infrastructures',
          'Incentive systems that financially reward provable sustainable action',
          'New economic and operational models powered by trusted environmental data',
        ],
        url: 'https://aunova.net/greenblocks',
        partnership_model: 'Maximum 2-3 founding partners per system family',
      },
      future: [
        { name: 'Human data and identity infrastructure', status: 'In development' },
        { name: 'Responsible AI and governance layers', status: 'In development' },
        { name: 'Healthcare and care-tech systems', status: 'In development' },
        { name: 'Privacy-preserving computation platforms', status: 'In development' },
      ],
    };

    const result =
      args.family === 'greenblocks'
        ? families.greenblocks
        : args.family === 'future'
          ? { future_families: families.future }
          : families;

    return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
  },
});

// ---- Tool: Partnership Criteria ----
navigator.modelContext.registerTool({
  name: 'get_partnership_criteria',
  description:
    'Returns Aunova partnership criteria, strategic alignment questions, partnership ' +
    'stages, and next steps. Helps potential partners assess fit before scheduling a call.',
  inputSchema: { type: 'object', properties: {} },
  async execute() {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              model: 'Long-term systems partnership (not vendor relationship)',
              max_partners_per_family: '2-3 founding partners',
              alignment_questions: [
                'Solving a mission-critical problem for society or the environment?',
                'Thinking in decades, valuing shared foundational infrastructure?',
                'Ready to apply strict principles for responsible system design and governance?',
                'Exploring tokenized incentives and novel ecosystems for measurable impact?',
                'Prepared to move beyond vendor transactions to true partnership?',
                'Aligned to invest both capital and strategic effort over a long-term horizon?',
              ],
              not_a_fit: ['Short-term projects', 'Feature factories', 'Cosmetic solutions'],
              stages: [
                'Strategic Alignment',
                'Co-Design',
                'Proof of Concept',
                'System Development',
                'Long-Term Alliance',
              ],
              next_step: {
                action: 'Schedule a strategic conversation',
                url: 'https://cal.com/ngmisl/aunova',
              },
            },
            null,
            2,
          ),
        },
      ],
    };
  },
});

// ---- Tool: Schedule Call ----
navigator.modelContext.registerTool({
  name: 'schedule_strategic_call',
  description:
    'Provides booking link and preparation guidance for a strategic conversation ' +
    'with Aunova leadership. Use when a potential partner wants to explore collaboration.',
  inputSchema: {
    type: 'object',
    properties: {
      context: {
        type: 'string',
        description:
          'Brief context about what the potential partner wants to discuss (optional)',
      },
    },
  },
  async execute(args: { context?: string }) {
    const response: Record<string, string> = {
      booking_url: 'https://cal.com/ngmisl/aunova',
      what_to_expect:
        'Focused conversation about strategic alignment, system-level needs, and partnership fit.',
      preparation: 'Review the partnership criteria questions beforehand.',
    };
    if (args.context) response.partner_context = args.context;
    return { content: [{ type: 'text', text: JSON.stringify(response, null, 2) }] };
  },
});

// ---- Tool: Company Overview ----
navigator.modelContext.registerTool({
  name: 'get_aunova_overview',
  description:
    'Structured overview of Aunova: mission, philosophy, operational base, ' +
    'differentiators, domains of work, and contact information.',
  inputSchema: { type: 'object', properties: {} },
  async execute() {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              name: 'Aunova',
              legal_entity: 'Aunova OU (Estonian company)',
              operations: 'Valencia, Spain',
              tagline:
                'Long-term systems partner for human- and planet-critical infrastructure',
              philosophy:
                'Not a software vendor. Long-term systems partners co-building foundational ' +
                'digital infrastructure for domains where failure has real human or ' +
                'environmental consequences.',
              differentiators: [
                'Human and planet-critical focus',
                'Systems for decades, not products for quarters',
                'Partnership over vendor relationships',
                'Selective, high-trust collaboration',
                'Measurable real-world impact',
              ],
              domains: [
                'Sustainability and environmental infrastructure',
                'Human data and identity',
                'Responsible AI and governance',
                'Healthcare and care-tech',
                'Privacy-preserving computation',
              ],
              languages: ['English', 'Spanish'],
              contact: {
                schedule: 'https://cal.com/ngmisl/aunova',
                website: 'https://aunova.net',
                linkedin: 'https://www.linkedin.com/company/aunova-ou/',
              },
            },
            null,
            2,
          ),
        },
      ],
    };
  },
});

// ---- Page Context (ambient metadata for agents) ----
navigator.modelContext?.provideContext?.({
  siteName: 'Aunova',
  siteDescription:
    'Long-term systems partner for human- and planet-critical infrastructure',
  currentLanguage: document.documentElement.lang || 'en',
  availableLanguages: ['en', 'es'],
  currentPage: window.location.pathname,
});

console.log('[Aunova WebMCP] 4 tools registered');
