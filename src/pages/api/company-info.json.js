import {
  contact,
  entities,
  positioning,
  products,
  SITE_URL,
  technologyKeys,
  technologyNames,
} from "../../utils/company";
import { translations } from "../../utils/i18n";

export async function GET() {
  const t = translations.en;
  const names = technologyNames.en;

  const companyInfo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aunova",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo-new.png`,
    "foundingDate": "2023",
    "description": positioning.en,
    "slogan": t.hero.title,

    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business Development",
      "email": contact.email,
      "url": contact.booking,
      "availableLanguage": ["English", "Spanish"]
    },

    "sameAs": [contact.linkedin, contact.bluesky, contact.github],

    "knowsAbout": [
      ...technologyKeys.map((key) => names[key]),
      "Custom software development",
      "AI agents",
      "Smart contracts",
      "Zero-knowledge proofs",
      "Fully homomorphic encryption",
      "Data pipelines and dashboards"
    ],

    "makesOffer": t.capabilities.items.map((item) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": item.title,
        "description": item.text,
        "provider": "Aunova",
        "url": `${SITE_URL}/en/services#what-we-build`
      }
    })),

    // Beyond schema.org: structured detail for agents and AI crawlers
    "technologies": technologyKeys.map((key) => ({
      "name": names[key],
      "description": t.servicesPage.tech[key].text,
      "typicalUses": t.servicesPage.tech[key].uses,
      "url": `${SITE_URL}/en/services#${key}`
    })),

    "encryptionDeepDives": [
      { "name": t.servicesPage.fhe, "url": `${SITE_URL}/en/services/fhe` },
      { "name": t.servicesPage.zk, "url": `${SITE_URL}/en/services/zero-knowledge` }
    ],

    "combined": {
      "summary": t.convergence.combined.text,
      "example": t.convergence.combined.example
    },

    "impact": t.impact.items.map((item) => ({
      "name": item.title,
      "description": item.text
    })),

    "products": products.map((product) => ({
      "name": product.name,
      ...(product.formerly ? { "formerly": product.formerly } : {}),
      "description": t.work.items[product.id].text,
      "url": product.url
    })),

    "process": t.process.steps.map((step) => ({
      "name": step.title,
      "description": step.text
    })),

    "legalEntities": entities.map((entity) => ({
      "name": entity.name,
      "address": entity.address,
      "registration": entity.registration
    })),

    "links": {
      "services": `${SITE_URL}/en/services`,
      "contact": `${SITE_URL}/en/contact`,
      "booking": contact.booking,
      "llms": `${SITE_URL}/llms.txt`,
      "llmsFull": `${SITE_URL}/llms-full.txt`,
      "agents": `${SITE_URL}/agents.txt`
    },

    "metadata": {
      "lastUpdated": new Date().toISOString(),
      "version": "2.0",
      "dataLicense": "Public Domain",
      "aiCrawlerWelcome": true,
      "preferredCitation": "Aunova, software development company (https://aunova.net)"
    }
  };

  return new Response(JSON.stringify(companyInfo, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': 'https://aunova.net',
      'X-Robots-Tag': 'index, follow',
      'X-AI-Friendly': 'true'
    }
  });
}
