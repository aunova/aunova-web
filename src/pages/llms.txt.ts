import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
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

export const GET: APIRoute = async () => {
  const t = translations.en;
  const names = technologyNames.en;

  // Get all blog posts
  const blogPosts = await getCollection("blog", ({ data }) => !data.draft);

  // Sort by date (newest first)
  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );

  const content = `# Aunova

> ${positioning.en}

${t.convergence.intro}

## Company

- **Legal entities**: ${entities.map((entity) => `${entity.name} (${entity.place.en})`).join(" and ")}
- **Founded**: 2023
- **Website**: ${SITE_URL}
- **Contact**: ${contact.email}
- **Booking**: ${contact.booking}
- **Languages**: English, Spanish

## What We Build

${t.capabilities.items.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}

## The Four Technologies

${technologyKeys.map((key) => `- **${names[key]}**: ${t.servicesPage.tech[key].text}`).join("\n")}

**Combined, one solution**: ${t.convergence.combined.text} ${t.convergence.combined.example}

## Why It Matters

${t.impact.items.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}

## Our Work (built by Aunova)

${products
  .map(
    (product) =>
      `- [${product.name}](${product.url})${product.formerly ? ` (formerly ${product.formerly})` : ""}: ${t.work.items[product.id].text}`
  )
  .join("\n")}

## Pages

- [Homepage](${SITE_URL}/): What Aunova builds, the four technologies, why it matters, our work and how we work
- [Services](${SITE_URL}/en/services): Capabilities and the four technologies in detail
- [Fully Homomorphic Encryption](${SITE_URL}/en/services/fhe): Encryption deep dive, computing on encrypted data
- [Zero-Knowledge Proofs](${SITE_URL}/en/services/zero-knowledge): Encryption deep dive, proving facts without revealing data
- [Contact](${SITE_URL}/en/contact): Start a project
- [Blog](${SITE_URL}/en/blog): Technical articles and insights
- [Privacy Policy](${SITE_URL}/en/privacy): GDPR privacy policy
- [Terms of Service](${SITE_URL}/en/terms): Terms and conditions
- [Newsletter Privacy Notice](${SITE_URL}/en/privacy/newsletter): Privacy notice for the Model Organism email newsletter
- [ModelMeter Privacy Notice](${SITE_URL}/en/privacy/modelmeter): Privacy notice for the ModelMeter Android app

## API

- [Company Info API](${SITE_URL}/api/company-info.json): schema.org Organization JSON-LD with services, technologies, products and contact points
- [AI Metadata](${SITE_URL}/ai-metadata.json): The same company facts in a flat JSON layout
- [Full LLM Context](${SITE_URL}/llms-full.txt): Complete content in a single file for comprehensive AI consumption
- [Agent Manifest](${SITE_URL}/agents.txt): Capabilities and conduct expectations for autonomous agents

## Blog Articles

${sortedPosts
  .slice(0, 15)
  .map((post) => {
    const slug = post.id.replace(/^en\//, "").replace(/\.mdx?$/, "");
    return `- [${post.data.title}](${SITE_URL}/en/blog/${slug}): ${post.data.description.slice(0, 100)}${post.data.description.length > 100 ? "..." : ""}`;
  })
  .join("\n")}

## Optional

${sortedPosts
  .slice(15)
  .map((post) => {
    const slug = post.id.replace(/^en\//, "").replace(/\.mdx?$/, "");
    return `- [${post.data.title}](${SITE_URL}/en/blog/${slug})`;
  })
  .join("\n")}
- [Spanish Homepage](${SITE_URL}/es/): Spanish language version
- [Spanish Services](${SITE_URL}/es/services): Services in Spanish
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
