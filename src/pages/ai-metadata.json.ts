import type { APIRoute } from "astro";
import {
  contact,
  entities,
  positioning,
  products,
  SITE_URL,
  technologyKeys,
  technologyNames,
} from "../utils/company";
import { translations } from "../utils/i18n";

// Generated (not a static file in public/) so it reads the same company facts,
// technology names and copy as the pages, llms.txt and the company-info API.
export const GET: APIRoute = () => {
  const t = translations.en;
  const names = technologyNames.en;

  const metadata = {
    company: {
      name: "Aunova",
      type: "Software development company",
      founded: "2023",
      website: SITE_URL,
      contact: {
        email: contact.email,
        scheduling: contact.booking,
        contact_page: `${SITE_URL}/en/contact`,
      },
      description: positioning.en,
      mission: t.footer.tagline,
    },
    technologies: technologyKeys.map((key) => ({
      name: names[key],
      description: t.servicesPage.tech[key].text,
      typical_uses: t.servicesPage.tech[key].uses,
    })),
    combined: {
      summary: t.convergence.combined.text,
      example: t.convergence.combined.example,
    },
    services: t.capabilities.items.map((item) => ({
      name: item.title,
      description: item.text,
      deliverables: item.points,
    })),
    impact: t.impact.items.map((item) => ({ area: item.title, description: item.text })),
    products: products.map((product) => ({
      name: product.name,
      ...(product.formerly ? { formerly: product.formerly } : {}),
      description: t.work.items[product.id].text,
      url: product.url,
    })),
    process: t.process.steps.map((step) => ({ step: step.title, description: step.text })),
    legal_entities: entities.map((entity) => ({
      name: entity.name,
      address: entity.address,
      registration: entity.registration,
    })),
    languages: ["English", "Spanish"],
    engagement_models: [
      "Project-based development",
      "Proof of concept development",
      "Full product development",
      "Ongoing operation and improvement",
      "Technical advisory",
      "Code audits and reviews",
    ],
    keywords: [
      "software development",
      "custom software",
      "ai systems",
      "ai agents",
      "blockchain",
      "verifiable records",
      "data analytics",
      "dashboards",
      "encryption",
      "zero knowledge proofs",
      "fully homomorphic encryption",
      "privacy engineering",
      "sustainability data",
    ],
  };

  return new Response(JSON.stringify(metadata, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
