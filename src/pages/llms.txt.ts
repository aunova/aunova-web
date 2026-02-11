import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  // Get all blog posts
  const blogPosts = await getCollection("blog", ({ data }) => !data.draft);

  // Sort by date (newest first)
  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );

  const content = `# Aunova

> Aunova is a technology consultancy specializing in Zero-Knowledge proofs, Fully Homomorphic Encryption (FHE), AI & Web3 integration, and privacy-preserving infrastructure. We partner with institutions to build human- and planet-critical systems their future depends on.

Aunova is NOT a software vendor. We are a long-term systems partner that co-builds mission-critical infrastructure with aligned organizations. We work selectively with 2-3 founding partners per system family, designing for decades rather than quarters.

## Company Information

- **Legal Entity**: Aunova OU, Tallinn, Estonia
- **Founded**: 2023
- **Website**: https://aunova.net
- **Contact**: christian@aunova.net
- **Booking**: https://cal.com/ngmisl/aunova
- **Languages**: English, Spanish

## Core Services

### Zero-Knowledge & Privacy Tooling
Circuit design and optimization, zkSNARKs/zkSTARKs implementation, trusted setup ceremonies, proof generation and verification, privacy-preserving smart contracts, ZK rollup development, zero-knowledge identity solutions.

### Fully Homomorphic Encryption (FHE)
Compute on encrypted data without decryption, encrypted AI inference, private analytics, confidential computing for sensitive workloads.

### AI & Web3 Integration
On-chain AI model deployment, decentralized inference networks, AI-powered smart contracts, machine learning oracles, tokenized AI marketplaces, verifiable AI outputs.

### Hybrid ZK-AI Solutions
Privacy-preserving machine learning, federated learning on blockchain, confidential AI computations, verifiable AI outputs, ZK-wrapped ML models.

### Infrastructure & Dev Tools
Smart contract development frameworks, blockchain testing suites, DApp deployment pipelines, cross-chain integration tools, security audits.

## Technical Expertise

- **Cryptography**: ZK-SNARKs, ZK-STARKs, PLONK, Groth16, Bulletproofs, Homomorphic Encryption
- **Blockchain**: Ethereum, Polygon, Arbitrum, StarkNet, zkSync, Optimism
- **Languages**: Solidity, Rust, Cairo, TypeScript, Python, Go, Clojure
- **Frameworks**: Circom, SnarkJS, Noir, Halo2, Hardhat, Foundry
- **AI/ML**: TensorFlow, PyTorch, ONNX, Federated Learning

## Industry Focus

Financial Services, Healthcare, Supply Chain, Gaming, Government, Real Estate, Data Analytics

## Current System Family

**Greenblocks**: Community Impact Infrastructure for the built world, enabling environmental responsibility, healthy living, and human connection in communities. Focuses on tokenized sustainability solutions for real estate.

## Partnership Criteria

We engage with organizations that:
1. Solve mission-critical problems for society or environment
2. Think in decades, not quarters
3. Commit to responsible system design principles
4. Are open to tokenized incentive structures
5. Seek true partnership, not vendor transactions
6. Bring long-term capital and strategic investment

## Pages

- [Homepage](https://aunova.net/): Main landing page with company overview and positioning
- [Services](https://aunova.net/en/services): Overview of all service offerings
- [Zero-Knowledge Services](https://aunova.net/en/services/zero-knowledge): ZK proof implementation details
- [FHE Services](https://aunova.net/en/services/fhe): Fully Homomorphic Encryption offerings
- [Greenblocks](https://aunova.net/greenblocks): Community impact infrastructure initiative
- [Contact](https://aunova.net/en/contact): Partnership inquiry form
- [Blog](https://aunova.net/en/blog): Technical articles and insights
- [Privacy Policy](https://aunova.net/en/privacy): GDPR-compliant privacy policy
- [Terms of Service](https://aunova.net/en/terms): Terms and conditions

## API

- [Company Info API](https://aunova.net/api/company-info.json): Structured JSON-LD data about Aunova for programmatic access
- [Full LLM Context](https://aunova.net/llms-full.txt): Complete content in single file for comprehensive AI consumption

## Blog Articles

${sortedPosts
  .slice(0, 15)
  .map((post) => {
    const slug = post.id.replace(/^en\//, "").replace(/\.mdx?$/, "");
    return `- [${post.data.title}](https://aunova.net/en/blog/${slug}): ${post.data.description.slice(0, 100)}${post.data.description.length > 100 ? "..." : ""}`;
  })
  .join("\n")}

## Optional

${sortedPosts
  .slice(15)
  .map((post) => {
    const slug = post.id.replace(/^en\//, "").replace(/\.mdx?$/, "");
    return `- [${post.data.title}](https://aunova.net/en/blog/${slug})`;
  })
  .join("\n")}
- [Spanish Homepage](https://aunova.net/es/): Spanish language version
- [Spanish Services](https://aunova.net/es/services): Services in Spanish
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
