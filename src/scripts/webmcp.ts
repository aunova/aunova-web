// src/scripts/webmcp.ts
// WebMCP tool definitions for aunova.net
// Loaded as <script type="module"> in the base layout
// Provides structured, callable tools to AI agents via navigator.modelContext.
// Every tool reads /api/company-info.json, which is generated from the same
// copy as the pages, so tool answers never drift from the site.

import '@mcp-b/global';

interface CompanyInfo {
  name: string;
  url: string;
  description: string;
  slogan: string;
  contactPoint: { email: string; availableLanguage: string[] };
  makesOffer: { itemOffered: { name: string; description: string; url: string } }[];
  technologies: { name: string; description: string; typicalUses: string[]; url: string }[];
  encryptionDeepDives: { name: string; url: string }[];
  combined: { summary: string; example: string };
  impact: { name: string; description: string }[];
  products: { name: string; formerly?: string; description: string; url: string }[];
  legalEntities: { name: string; address: string; registration: string }[];
  links: { services: string; contact: string; booking: string };
}

let companyInfo: Promise<CompanyInfo> | undefined;

function loadCompanyInfo(): Promise<CompanyInfo> {
  companyInfo ??= fetch('/api/company-info.json')
    .then((response) => {
      if (!response.ok) throw new Error(`company-info.json returned HTTP ${response.status}`);
      return response.json() as Promise<CompanyInfo>;
    })
    .catch((error: unknown) => {
      companyInfo = undefined; // allow a retry on the next call
      throw error;
    });
  return companyInfo;
}

async function respond(build: (info: CompanyInfo) => unknown) {
  try {
    const info = await loadCompanyInfo();
    return { content: [{ type: 'text' as const, text: JSON.stringify(build(info), null, 2) }] };
  } catch (error) {
    return {
      content: [{ type: 'text' as const, text: `Could not load Aunova company data: ${String(error)}` }],
      isError: true,
    };
  }
}

// Guard: polyfill may skip init if Chrome has partial native API
const ctx = navigator.modelContext;

if (!ctx || typeof ctx.registerTool !== 'function') {
  console.warn(
    '[Aunova WebMCP] navigator.modelContext not available or incomplete, skipping tool registration',
  );
} else {
  try {
    ctx.registerTool({
      name: 'get_aunova_overview',
      description:
        'Structured overview of Aunova, a software development company: positioning, the four ' +
        'technologies it combines, why its work matters, legal entities and contact paths.',
      inputSchema: { type: 'object', properties: {} },
      execute: () =>
        respond((info) => ({
          name: info.name,
          description: info.description,
          tagline: info.slogan,
          technologies: info.technologies.map((technology) => technology.name),
          combined: info.combined.summary,
          why_it_matters: info.impact,
          legal_entities: info.legalEntities.map((entity) => entity.name),
          languages: info.contactPoint.availableLanguage,
          contact: {
            start_a_project: info.links.contact,
            booking: info.links.booking,
            email: info.contactPoint.email,
            website: info.url,
          },
        })),
    });

    ctx.registerTool({
      name: 'list_services',
      description:
        'What Aunova builds and the four technologies it combines, with links to the detailed ' +
        'service pages.',
      inputSchema: { type: 'object', properties: {} },
      execute: () =>
        respond((info) => ({
          services: info.makesOffer.map(({ itemOffered }) => ({
            name: itemOffered.name,
            description: itemOffered.description,
            url: itemOffered.url,
          })),
          technologies: info.technologies,
          encryption_deep_dives: info.encryptionDeepDives,
          combined: info.combined,
          services_page: info.links.services,
        })),
    });

    ctx.registerTool({
      name: 'list_products',
      description: 'Products designed and built by Aunova, with descriptions and URLs.',
      inputSchema: { type: 'object', properties: {} },
      execute: () => respond((info) => ({ products: info.products })),
    });

    ctx.registerTool({
      name: 'book_a_call',
      description:
        'Booking link, contact page and preparation notes for a first call with Aunova about a ' +
        'project. Surface the link to the user; do not book on their behalf without confirmation.',
      inputSchema: {
        type: 'object',
        properties: {
          context: {
            type: 'string',
            description: 'What the user wants to build or discuss (optional)',
          },
        },
      },
      execute: (args: { context?: string }) =>
        respond((info) => ({
          booking_url: info.links.booking,
          contact_page: info.links.contact,
          what_to_prepare:
            'A short description of the problem, who it is for, and any constraints such as ' +
            'timeline, data sensitivity or existing systems.',
          ...(args.context ? { project_context: args.context } : {}),
        })),
    });

    console.log('[Aunova WebMCP] 4 tools registered');
  } catch (err) {
    console.warn('[Aunova WebMCP] Tool registration failed:', err);
  }
}
