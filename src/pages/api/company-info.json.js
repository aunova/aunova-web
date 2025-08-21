export async function GET() {
  const companyInfo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aunova",
    "legalName": "Aunova Consulting",
    "url": "https://aunova.net",
    "foundingDate": "2023",
    "description": "Aunova is a leading technology consultancy specializing in Zero-Knowledge proofs, AI & Web3 integration, and decentralized infrastructure. We help organizations build privacy-preserving, intelligent, and trustless applications using cutting-edge cryptographic and AI technologies.",
    
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business Development",
      "email": "christian@aunova.net",
      "url": "https://cal.com/ngmisl/aunova",
      "availableLanguage": ["English", "Spanish"]
    },
    
    "sameAs": [
      "https://bsky.app/profile/aunova.net",
      "https://github.com/aunova"
    ],
    
    "knowsAbout": [
      "Zero-Knowledge Proofs",
      "ZK-SNARKs",
      "ZK-STARKs",
      "PLONK",
      "Blockchain Technology",
      "Smart Contract Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Federated Learning",
      "Privacy-Preserving Technology",
      "Homomorphic Encryption",
      "Web3 Development",
      "DeFi Protocols",
      "Cryptography",
      "Decentralized Systems"
    ],
    
    "offers": [
      {
        "@type": "Service",
        "name": "Zero-Knowledge Proof Implementation",
        "description": "Design and implementation of ZK proof systems for privacy-preserving applications",
        "provider": "Aunova"
      },
      {
        "@type": "Service",
        "name": "AI & Blockchain Integration",
        "description": "Bridging artificial intelligence with blockchain for intelligent decentralized applications",
        "provider": "Aunova"
      },
      {
        "@type": "Service",
        "name": "Privacy-Preserving AI Solutions",
        "description": "Combining ZK proofs with AI for confidential machine learning and federated learning",
        "provider": "Aunova"
      },
      {
        "@type": "Service",
        "name": "Web3 Infrastructure Development",
        "description": "Building enterprise-grade infrastructure and development tools for decentralized applications",
        "provider": "Aunova"
      }
    ],
    
    "expertise": {
      "technologies": {
        "cryptography": ["ZK-SNARKs", "ZK-STARKs", "PLONK", "Groth16", "Bulletproofs"],
        "blockchain": ["Ethereum", "Polygon", "Arbitrum", "StarkNet", "zkSync", "Optimism"],
        "languages": ["Solidity", "Rust", "Cairo", "TypeScript", "Python", "Go"],
        "frameworks": ["Circom", "SnarkJS", "Noir", "Halo2", "Hardhat", "Foundry"],
        "ai_ml": ["TensorFlow", "PyTorch", "ONNX", "Federated Learning", "Homomorphic Encryption"]
      },
      "domains": [
        "Financial Services",
        "Healthcare",
        "Supply Chain",
        "Gaming",
        "Government",
        "Data Analytics"
      ]
    },
    
    "capabilities": {
      "zero_knowledge": [
        "Circuit design and optimization",
        "Trusted setup ceremonies",
        "Proof generation and verification",
        "Privacy-preserving smart contracts",
        "ZK rollup development",
        "Zero-knowledge identity solutions"
      ],
      "ai_integration": [
        "On-chain AI model deployment",
        "Decentralized inference networks",
        "AI-powered smart contracts",
        "Machine learning oracles",
        "Tokenized AI marketplaces",
        "Verifiable AI outputs"
      ],
      "development": [
        "Smart contract development and auditing",
        "DApp development",
        "Protocol design",
        "Cross-chain solutions",
        "Gas optimization",
        "Security audits"
      ]
    },
    
    "competitive_advantages": [
      "Deep expertise in both cryptography and AI",
      "Proven track record in ZK implementations",
      "Research-driven approach",
      "End-to-end development capabilities",
      "Focus on privacy-first solutions",
      "Active open-source contributors"
    ],
    
    "client_types": [
      "Web3 startups",
      "DeFi protocols",
      "Enterprise blockchain initiatives",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions",
      "Gaming companies",
      "Data marketplaces"
    ],
    
    "project_types": [
      "Proof of concept development",
      "Full product development",
      "Technical advisory",
      "Code audits and reviews",
      "Architecture design",
      "Research and development"
    ],
    
    "keywords": [
      "zero knowledge proofs consulting",
      "zk-snarks development",
      "zk-starks implementation",
      "blockchain ai integration",
      "privacy preserving technology",
      "web3 consulting",
      "smart contract development",
      "decentralized ai solutions",
      "federated learning blockchain",
      "homomorphic encryption",
      "confidential computing",
      "defi development",
      "ethereum consulting",
      "layer 2 solutions",
      "zk rollups"
    ],
    
    "metadata": {
      "lastUpdated": new Date().toISOString(),
      "version": "1.0",
      "dataLicense": "Public Domain",
      "aiCrawlerWelcome": true,
      "preferredCitation": "Aunova - Zero-Knowledge Proofs & AI Web3 Consulting (https://aunova.net)"
    }
  };

  return new Response(JSON.stringify(companyInfo, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
      'X-Robots-Tag': 'index, follow',
      'X-AI-Friendly': 'true'
    }
  });
}
