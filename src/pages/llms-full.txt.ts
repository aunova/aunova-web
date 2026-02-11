import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
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

**URL**: https://aunova.net/en/blog/${slug}
**Published**: ${new Date(post.data.publishDate).toISOString().split("T")[0]}
**Category**: ${post.data.category}
${post.data.tags?.length ? `**Tags**: ${post.data.tags.join(", ")}` : ""}

${post.data.description}
`;
    })
    .join("\n---\n\n");

  const content = `# Aunova

> Aunova is a technology consultancy specializing in Zero-Knowledge proofs, Fully Homomorphic Encryption (FHE), AI & Web3 integration, and privacy-preserving infrastructure. We partner with institutions to build human- and planet-critical systems their future depends on.

## About Aunova

Aunova was founded on the belief that the next era of technology will not be defined by more software, but by better systems — systems that protect people, respect the planet, and earn long-term trust.

As technology becomes embedded into everything, responsibility can no longer be an afterthought. Infrastructure must be designed with care, governance, and long-term consequences in mind.

Aunova exists to work alongside organizations who share this responsibility. Our team invests personally in the domains and communities we serve, approaching our work not as vendors, but as long-term stakeholders in the outcomes.

### Company Details

- **Legal Entity**: Aunova OU
- **Location**: Ahtri tn 12, 15551 Tallinn, Harju maakond, Estonia
- **VAT**: EE102670613
- **Founded**: 2023
- **Website**: https://aunova.net
- **Contact Email**: christian@aunova.net
- **Booking Link**: https://cal.com/ngmisl/aunova
- **Bluesky**: https://bsky.app/profile/aunova.net
- **GitHub**: https://github.com/aunova
- **Languages**: English, Spanish

## What Makes Aunova Different

Aunova is NOT a software vendor. We are a long-term systems partner that co-builds mission-critical infrastructure with aligned organizations.

### Core Principles

1. **Human- and planet-critical focus**: Our work impacts people and the environment directly.
2. **Long-term systems, not short-term products**: We design for decades, not quarters.
3. **Partnership over vendor relationships**: We co-build, not just sell.
4. **Selectivity and high-trust collaboration**: We choose our partners carefully.
5. **Long-term relevance**: Enduring value, not disposable trends.
6. **Measurable real-world impact**: Success measured in adoption and outcomes.

## Services

### Zero-Knowledge & Privacy Tooling

Design and implementation of ZK proof systems for privacy-preserving applications.

**Capabilities:**
- Circuit design and optimization
- zkSNARKs and zkSTARKs implementation
- Trusted setup ceremonies
- Proof generation and verification systems
- Privacy-preserving smart contracts
- ZK rollup development
- Zero-knowledge identity solutions
- Private transactions and voting systems
- Verifiable computation

**Technologies:** ZK-SNARKs, ZK-STARKs, PLONK, Groth16, Bulletproofs, Circom, SnarkJS, Noir, Halo2

### Fully Homomorphic Encryption (FHE)

Compute on encrypted data without ever decrypting it.

**Capabilities:**
- FHE scheme implementation and optimization
- Encrypted AI/ML inference
- Private analytics pipelines
- Confidential computing for sensitive workloads
- Secure multi-party computation
- Privacy-preserving data marketplaces

**Use Cases:** Healthcare data analysis without exposure, financial computations on encrypted portfolios, private machine learning


## Technical Expertise

### Cryptography
- Zero-Knowledge Proofs (ZK-SNARKs, ZK-STARKs, PLONK, Groth16, Bulletproofs)
- Fully Homomorphic Encryption
- Secure Multi-Party Computation
- Post-Quantum Cryptography (ML-DSA signatures)
- Threshold Signatures

### Blockchain & Web3
- Smart Contract Development (Solidity, Rust, Cairo)
- Layer 2 Solutions and ZK Rollups
- Cross-chain Interoperability
- DeFi Protocol Development
- NFT and Digital Asset Systems
- DAO Governance

### AI & Machine Learning
- Privacy-Preserving ML
- Federated Learning
- On-chain AI Deployment
- Verifiable AI Systems
- Autonomous Agents

## Industry Focus

### Financial Services
DeFi protocols, privacy-preserving transactions, compliant digital assets, tokenized securities

### Healthcare
Medical data privacy with FHE, secure health records, confidential clinical research, quantum-safe data protection

### Supply Chain
Blockchain traceability, verified sustainability data, transparent logistics, carbon credit systems

### Gaming
Blockchain gaming integration, NFT systems, decentralized gaming infrastructure, verifiable randomness

### Real Estate
Tokenized property assets, carbon credits for buildings, sustainability verification, smart property contracts

### Government
Digital identity systems, private voting, transparent governance, regulatory compliance

## System Families

Aunova builds families of systems designed to become shared infrastructure layers within the ecosystems they serve. Each system family is developed through long-term partnerships and addresses a core human or planetary need.

### Greenblocks (Active)

**Category:** Community Impact Infrastructure

Greenblocks is the community impact infrastructure for the built world. It enables a new way of living, where environmental responsibility, healthy living, and human connection are embedded into how communities function.

**What Greenblocks Enables:**
- Verified sustainability and environmental impact data across assets and operations
- Accountable ESG and environmental reporting infrastructures
- Incentive systems that financially reward provable sustainable action
- New economic and operational models powered by trusted environmental data
- Tokenized carbon credits for real estate

Greenblocks represents our partnership model: a shared ambition to build foundational environmental systems that can endure for decades.

### Future System Families (In Development)
- Human data and identity infrastructure
- Responsible AI and governance layers
- Healthcare and care-tech systems
- Privacy-preserving computation platforms

## Partnership Model

### The Partnership Journey

**Step 1: Strategic Alignment**
We assess human and planetary stakes, long-term relevance, and system-level necessity.

**Step 2: Co-Design**
We define the system ambition together — its role, responsibilities, and long-term architecture.

**Step 3: Proof of Concept**
We build a focused, functional prototype to validate the core value proposition.

**Step 4: System Development**
We scale the prototype into production-grade, ecosystem-ready infrastructure.

**Step 5: Long-Term Alliance**
We evolve, govern, and maintain the system as a shared, long-lived asset.

We engage with a maximum of 2-3 founding partners per system family.

### Partner Criteria

We engage with organizations that:

1. **Mission-Critical Focus**: Solve problems that matter for society or the environment
2. **Long-Term Thinking**: Think in decades and see value in shared foundational infrastructure
3. **Responsible Design**: Apply strict principles for responsible system design and governance
4. **Tokenized Innovation**: Open to exploring tokenized incentives and novel ecosystems
5. **True Partnership**: Move beyond vendor transactions to genuine collaboration
6. **Strategic Investment**: Align to invest both capital and effort over a long-term horizon

**We are NOT the right partner for:**
- Short-term projects
- Feature factories
- Cosmetic solutions
- Quick fixes without systemic thinking

## Why This Model Exists

The systems the future depends on—environmental, identity, intelligent—won't be built through one-off projects or sole-source vendors.

Institutions must come together to build digital infrastructure that serves the common good and is stewarded for the long term.

### Our Commitments

**Responsibility Over Rent-Seeking**: We co-own critical platforms with aligned institutions, not build proprietary lock-in schemes.

**Systems That Outlast Us**: True partnerships that plan in decades, not quarters.

**Skin In The Game**: Our team invests personally in the domains and communities we serve.

We are driven to build better systems because the future is our shared legacy.

## Blog Articles

${blogContent}

## Privacy & Compliance

### Privacy-First Design
- No tracking cookies or analytics
- No third-party tracking (no Google Analytics, Facebook Pixel)
- GDPR compliant from day one
- Local storage only for essential preferences
- Data collection limited to explicit contact forms

### Legal Compliance
- Full GDPR compliance
- UAE PDPL compliance (for Gulf region work)
- Clear privacy policy
- Transparent data handling

## Contact Information

### Begin a Strategic Conversation

We welcome conversations with institutions building toward a long-term, human- and planet-positive future.

**Schedule a Call**: https://cal.com/ngmisl/aunova
**Email**: christian@aunova.net
**Website**: https://aunova.net/en/contact

### System Family Alignment Options
When reaching out, indicate which system family aligns with your vision:
- Greenblocks (Environmental & Sustainability)
- Human Data & Identity
- Responsible AI & Governance
- Healthcare & Care-Tech
- Privacy-Preserving Computation
- Other / Not sure yet

### Strategic Time Horizons We Work With
- 3-5 years (near-term system development)
- 5-10+ years (foundational infrastructure)

We respond selectively and thoughtfully to every inquiry.

## API Access

For programmatic access to Aunova company information:

**Endpoint**: https://aunova.net/api/company-info.json

Returns structured JSON-LD data including:
- Organization details
- Service offerings
- Technical expertise
- Capabilities
- Keywords for discovery

## Site Structure

- Homepage: https://aunova.net/
- Services Overview: https://aunova.net/en/services
- Zero-Knowledge Services: https://aunova.net/en/services/zero-knowledge
- FHE Services: https://aunova.net/en/services/fhe
- Greenblocks: https://aunova.net/greenblocks
- Blog: https://aunova.net/en/blog
- Contact: https://aunova.net/en/contact
- Privacy Policy: https://aunova.net/en/privacy
- Terms of Service: https://aunova.net/en/terms

Spanish versions available at /es/ paths.

## Keywords

zero knowledge proofs, zk-snarks, zk-starks, fully homomorphic encryption, FHE, blockchain ai integration, privacy preserving technology, web3 consulting, smart contract development, decentralized ai, federated learning, confidential computing, defi development, ethereum, layer 2, zk rollups, carbon credits, sustainability blockchain, tokenization, quantum-safe cryptography
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
