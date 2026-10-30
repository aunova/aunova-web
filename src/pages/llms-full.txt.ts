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

  // Generate blog content summaries (remove en/ prefix and .mdx extension)
  const blogContent = sortedPosts
    .map((post) => {
      const slug = post.id.replace(/^en\//, "").replace(/\.mdx?$/, "");
      return `### ${post.data.title}

**URL**: ${SITE_URL}/en/blog/${slug}
**Published**: ${new Date(post.data.publishDate).toISOString().split("T")[0]}
**Category**: ${post.data.category}
${post.data.tags?.length ? `**Tags**: ${post.data.tags.join(", ")}` : ""}

${post.data.description}
`;
    })
    .join("\n---\n\n");

  const capabilities = t.capabilities.items
    .map(
      (item) => `### ${item.title}

${item.text}

${item.points.map((point) => `- ${point}`).join("\n")}`
    )
    .join("\n\n");

  const technologies = technologyKeys
    .map(
      (key) => `### ${names[key]}

${t.convergence.steps[key]}

${t.servicesPage.tech[key].text}

**${t.servicesPage.typicalUses}**: ${t.servicesPage.tech[key].uses.join(", ")}.`
    )
    .join("\n\n");

  const content = `# Aunova

> ${positioning.en}

## About Aunova

${t.hero.subtitle}

${t.capabilities.intro}

### Company Details

${entities
  .map(
    (entity) => `- **${entity.name}**: ${entity.address} (${entity.registration})`
  )
  .join("\n")}
- **Founded**: 2023
- **Website**: ${SITE_URL}
- **Contact Email**: ${contact.email}
- **Booking Link**: ${contact.booking}
- **LinkedIn**: ${contact.linkedin}
- **Bluesky**: ${contact.bluesky}
- **GitHub**: ${contact.github}
- **Languages**: English, Spanish

## What We Build

${capabilities}

## The Four Technologies

${t.convergence.intro}

${technologies}

### Encryption Deep Dives

- **Fully homomorphic encryption (FHE)**: computation directly on encrypted data, for private analytics and private AI inference. ${SITE_URL}/en/services/fhe
- **Zero-knowledge proofs**: proving that a statement is true without revealing the data behind it (zkSNARKs, zkSTARKs, privacy-preserving smart contracts). ${SITE_URL}/en/services/zero-knowledge

### Combined: One Solution

${t.convergence.combined.text}

**${t.convergence.combined.exampleLabel}**: ${t.convergence.combined.example}

## Why It Matters

${t.impact.intro}

${t.impact.items.map((item) => `- **${item.title}**: ${item.text}`).join("\n")}

## Our Work

${t.work.intro}

${products
  .map(
    (product) => `### ${product.name}${product.formerly ? ` (formerly ${product.formerly})` : ""}

${t.work.items[product.id].text}

**URL**: ${product.url}`
  )
  .join("\n\n")}

## How We Work

${t.process.intro}

${t.process.steps.map((step, index) => `${index + 1}. **${step.title}**: ${step.text}`).join("\n")}

## Technical Toolbox

- **Cryptography**: zero-knowledge proofs (zkSNARKs, zkSTARKs, PLONK, Groth16, Bulletproofs), fully homomorphic encryption, secure multi-party computation, post-quantum signatures (ML-DSA)
- **Blockchain**: Ethereum, Polygon, Arbitrum, StarkNet, zkSync, Optimism; smart contracts in Solidity, Rust and Cairo
- **Languages**: Solidity, Rust, Cairo, TypeScript, Python, Go, Clojure
- **Frameworks**: Circom, SnarkJS, Noir, Halo2, Hardhat, Foundry
- **AI/ML**: TensorFlow, PyTorch, ONNX, federated learning, privacy-preserving machine learning

## Blog Articles

${blogContent}

## Privacy

- No tracking cookies or analytics
- No third-party tracking (no Google Analytics, no Facebook Pixel)
- Local storage only for essential preferences
- Data collection limited to explicit contact forms
- Privacy policy: ${SITE_URL}/en/privacy

## Contact

${t.cta.text}

**Start a project**: ${SITE_URL}/en/contact
**Book a call**: ${contact.booking}
**Email**: ${contact.email}

## API Access

For programmatic access to Aunova company information:

**Endpoint**: ${SITE_URL}/api/company-info.json

Returns schema.org Organization JSON-LD including:
- Positioning and description
- Services and the four technologies
- Products built by Aunova
- Legal entities and contact points

The same facts in a flat layout: ${SITE_URL}/ai-metadata.json

## Site Structure

- Homepage: ${SITE_URL}/
- Services: ${SITE_URL}/en/services
- Fully Homomorphic Encryption: ${SITE_URL}/en/services/fhe
- Zero-Knowledge Proofs: ${SITE_URL}/en/services/zero-knowledge
- Blog: ${SITE_URL}/en/blog
- Contact: ${SITE_URL}/en/contact
- Privacy Policy: ${SITE_URL}/en/privacy
- Terms of Service: ${SITE_URL}/en/terms
- Newsletter Privacy Notice: ${SITE_URL}/en/privacy/newsletter
- ModelMeter Privacy Notice: ${SITE_URL}/en/privacy/modelmeter

Spanish versions of the homepage, services and contact pages are available at /es/ paths.

## Keywords

software development, custom software, AI systems, AI agents, blockchain, verifiable records, digital passports, data analytics, dashboards, encryption, zero-knowledge proofs, fully homomorphic encryption, privacy engineering, sustainability data, digital building passport, multilingual guidebooks, AI agent readiness
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
