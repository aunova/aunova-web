export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "en";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      zeroKnowledge: "Zero-Knowledge & Privacy",
      aiWeb3: "AI + Web3 Integration",
      hybridZkAi: "Hybrid ZK-AI",
      infrastructure: "Infrastructure & Tools",
      fhe: "Homomorphic Encryption (FHE)",
      ourStory: "Our Story",
      team: "Team",
      partners: "Partners",
    },
    hero: {
      title: "Private AI. Real Compliance.",
      subtitle:
        "Run AI on sensitive data — without exposing it. Powered by Zero-Knowledge Proofs, Fully Homomorphic Encryption, and Blockchain.",
      cta: {
        primary: "Let's Talk",
      },
    },
    problemSolution: {
      title: "How We Make AI Safe for Sensitive Data",
      problem: "AI needs your data. Your data needs protection.",
      solutionTitle: "",
      solution: "",
      technologies: [
        "Zero-Knowledge Proofs for verifiable results",
        "Fully Homomorphic Encryption to run AI on encrypted data",
        "Blockchain to log decisions immutably for full auditability",
      ],
    },
    useCases: {
      title: "Real Use Cases: Where AI Meets Privacy",
      subtitle: "",
      cards: {
        healthcare: {
          industry: "Healthcare",
          icon: "🏥",
          content:
            "Hospitals want to use predictive AI to improve patient care — but they can't afford to expose sensitive health data. At Aunova, we apply homomorphic encryption so models can run on encrypted medical records. We combine this with ZK verification and blockchain-based auditing, enabling compliant AI without privacy tradeoffs.",
          tech: [
            "Homomorphic Encryption",
            "ZK Verification",
            "Blockchain Auditing",
          ],
        },
        finance: {
          industry: "Finance",
          icon: "💳",
          content:
            "In finance, detecting fraud requires deep pattern analysis on private transaction data. We design privacy-preserving AI that can operate over sensitive datasets, while recording every step on-chain for transparency and security.",
          tech: [
            "Privacy-Preserving AI",
            "On-Chain Logging",
            "Pattern Analysis",
          ],
        },
        compliance: {
          industry: "Compliance",
          icon: "⚖️",
          content:
            "For companies automating decisions (like credit scoring or recruitment), regulators demand accountability. Our systems provide explainable AI, with immutable logs and verifiable zero-knowledge proofs, so decisions are not just smart — they're also auditable and fair.",
          tech: ["Explainable AI", "Immutable Logs", "ZK Proofs"],
        },
      },
    },

    services: {
      title: "Our Services",
      subtitle:
        "We build privacy-preserving solutions at the intersection of AI, Blockchain, and advanced cryptography.",
      learnMore: "Learn More",
      pillars: {
        zk: {
          title: "Zero-Knowledge & Privacy",
          description:
            "Implement cutting-edge ZK proofs to ensure data privacy and computational integrity.",
          features: [
            "zk-SNARKs & zk-STARKs",
            "Privacy-preserving smart contracts",
            "Verifiable computation",
          ],
        },
        ai: {
          title: "AI + Web3 Integration",
          description:
            "Combine the power of artificial intelligence with the security and transparency of blockchain.",
          features: [
            "Decentralized AI models",
            "On-chain machine learning",
            "Tokenized AI ecosystems",
          ],
        },
        hybrid: {
          title: "Hybrid ZK-AI Systems",
          description:
            "Create powerful, private AI solutions by running models on encrypted data with verifiable results.",
          features: [
            "Encrypted data processing",
            "Private inference",
            "Compliant AI auditing",
          ],
        },
        infra: {
          title: "Infrastructure & Tooling",
          description:
            "Develop robust infrastructure and developer tools to accelerate the adoption of decentralized tech.",
          features: [
            "Custom blockchain protocols",
            "Developer SDKs and APIs",
            "Node infrastructure",
          ],
        },
        fhe: {
          title: "Homomorphic Encryption (FHE)",
          description:
            "Process data while it remains fully encrypted, enabling computation on untrusted environments.",
          features: [
            "Private data analysis",
            "Secure cloud computing",
            "Encrypted machine learning models",
          ],
        },
      },
    },

    finalCta: {
      title: "Let's build your private AI prototype.",
      actions: {
        call: "Book a call",
        onePager: "Download one-pager",
      },
    },
    footer: {
      company: "Company",
      resources: "Resources",
      connect: "Connect",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      documentation: "Documentation",
      openSource: "Open Source",
      newsletter: "Newsletter",
      scheduleCall: "Schedule Call",
      rights: "© 2024 Aunova. All rights reserved.",
      builtWith: "Built with privacy and performance in mind.",
    },
    cookie: {
      message: "We respect your privacy. This site uses no tracking cookies.",
      accept: "Understood",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to build privacy-preserving, decentralized solutions?",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        budget: "Budget Range",
        timeline: "Timeline",
        submit: "Send Message",
        consent: "I agree to the privacy policy",
      },
      calendar: {
        title: "Schedule a Consultation",
        description: "Book a 30-minute call to discuss your project",
        button: "Book Meeting",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Insights on Zero-Knowledge, AI, and Web3",
      readMore: "Read More",
      readTime: "min read",
      relatedPosts: "Related Posts",
      categories: {
        technical: "Technical",
        business: "Business",
        news: "News",
      },
    },
    about: {
      title: "About Aunova",
      description: [
        "We are a technical team with full-stack AI, blockchain architecture, smart contract, and game engine expertise.",
        "We have built complex MVPs combining Unity, Web3, and cryptographic protocols.",
        "Now, we are focused on solving real-world problems with privacy-first technologies.",
      ],
      mission: {
        title: "Our Mission",
        description:
          "Our mission is to empower organizations to innovate without compromising privacy. We build cutting-edge, compliant AI solutions by integrating Fully Homomorphic Encryption, Zero-Knowledge Proofs, and Blockchain, turning sensitive data into a secure asset for growth.",
      },
      values: {
        title: "Our Values",
        privacy: "Privacy First",
        privacyDesc: "We believe privacy is a fundamental right.",
        innovation: "Innovation",
        innovationDesc: "Pushing the boundaries of what's possible.",
        transparency: "Transparency",
        transparencyDesc: "Open and honest in everything we do.",
        excellence: "Excellence",
        excellenceDesc: "Delivering exceptional results.",
      },
    },
    error: {
      "404": {
        title: "Page Not Found",
        description: "The page you're looking for doesn't exist.",
        button: "Go Home",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      blog: "Blog",
      contact: "Contacto",
      zeroKnowledge: "Zero-Knowledge y Privacidad",
      aiWeb3: "Integración IA + Web3",
      hybridZkAi: "ZK-IA Híbrido",
      infrastructure: "Infraestructura y Herramientas",
      fhe: "Cifrado Homomórfico (FHE)",
      ourStory: "Nuestra Historia",
      team: "Equipo",
      partners: "Socios",
    },
    hero: {
      title: "IA Privada. Cumplimiento Real.",
      subtitle:
        "Ejecuta IA en datos sensibles — sin exponerlos. Impulsado por Pruebas de Conocimiento Cero, Cifrado Totalmente Homomórfico y Blockchain.",
      cta: {
        primary: "Hablemos",
      },
    },
    problemSolution: {
      title: "Cómo Hacemos la IA Segura para Datos Sensibles",
      problem: "La IA necesita tus datos. Tus datos necesitan protección.",
      solutionTitle: "",
      solution: "",
      technologies: [
        "Pruebas de Conocimiento Cero para resultados verificables",
        "Cifrado Totalmente Homomórfico para ejecutar IA en datos cifrados",
        "Blockchain para registrar decisiones de forma inmutable con total auditabilidad",
      ],
    },
    useCases: {
      title: "Casos de Uso Reales: Donde la IA se Encuentra con la Privacidad",
      subtitle: "",
      cards: {
        healthcare: {
          industry: "Salud",
          icon: "🏥",
          content:
            "Los hospitales quieren usar IA predictiva para mejorar la atención al paciente, pero no pueden permitirse exponer datos de salud sensibles. En Aunova, aplicamos cifrado homomórfico para que los modelos puedan ejecutarse en registros médicos cifrados. Combinamos esto con verificación ZK y auditoría basada en blockchain, habilitando IA compatible sin comprometer la privacidad.",
          tech: [
            "Cifrado Homomórfico",
            "Verificación ZK",
            "Auditoría Blockchain",
          ],
        },
        finance: {
          industry: "Finanzas",
          icon: "💳",
          content:
            "En finanzas, detectar fraude requiere análisis profundo de patrones en datos de transacciones privadas. Diseñamos IA que preserva la privacidad y puede operar sobre conjuntos de datos sensibles, mientras registra cada paso en cadena para transparencia y seguridad.",
          tech: [
            "IA Preservando Privacidad",
            "Registro On-Chain",
            "Análisis de Patrones",
          ],
        },
        compliance: {
          industry: "Cumplimiento",
          icon: "⚖️",
          content:
            "Para empresas que automatizan decisiones (como puntuación crediticia o reclutamiento), los reguladores exigen responsabilidad. Nuestros sistemas proporcionan IA explicable, con registros inmutables y pruebas de conocimiento cero verificables, para que las decisiones no sean solo inteligentes, sino también auditables y justas.",
          tech: ["IA Explicable", "Registros Inmutables", "Pruebas ZK"],
        },
      },
    },

    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Construimos soluciones que preservan la privacidad en la intersección de IA, Blockchain y criptografía avanzada.",
      learnMore: "Saber Más",
      pillars: {
        zk: {
          title: "Zero-Knowledge y Privacidad",
          description:
            "Implemente pruebas ZK de vanguardia para garantizar la privacidad de los datos y la integridad computacional.",
          features: [
            "zk-SNARKs y zk-STARKs",
            "Contratos inteligentes que preservan la privacidad",
            "Computación verificable",
          ],
        },
        ai: {
          title: "Integración IA + Web3",
          description:
            "Combine el poder de la inteligencia artificial con la seguridad y transparencia de blockchain.",
          features: [
            "Modelos de IA descentralizados",
            "Aprendizaje automático on-chain",
            "Ecosistemas de IA tokenizados",
          ],
        },
        hybrid: {
          title: "Sistemas Híbridos ZK-AI",
          description:
            "Cree soluciones de IA potentes y privadas ejecutando modelos sobre datos cifrados con resultados verificables.",
          features: [
            "Procesamiento de datos cifrados",
            "Inferencia privada",
            "Auditoría de IA compatible",
          ],
        },
        infra: {
          title: "Infraestructura y Herramientas",
          description:
            "Desarrolle infraestructura robusta y herramientas para desarrolladores para acelerar la adopción de tecnología descentralizada.",
          features: [
            "Protocolos blockchain a medida",
            "SDKs y APIs para desarrolladores",
            "Infraestructura de nodos",
          ],
        },
        fhe: {
          title: "Cifrado Homomórfico (FHE)",
          description:
            "Procese datos mientras permanecen totalmente cifrados, permitiendo la computación en entornos no confiables.",
          features: [
            "Análisis de datos privados",
            "Computación segura en la nube",
            "Modelos de aprendizaje automático cifrados",
          ],
        },
      },
    },

    about: {
      title: "Sobre Nosotros",
      description: [
        "Somos un equipo técnico con experiencia en IA full-stack, arquitectura blockchain, contratos inteligentes y motores de juego.",
        "Hemos construido MVPs complejos combinando Unity, Web3 y protocolos criptográficos.",
        "Ahora nos enfocamos en resolver problemas del mundo real con tecnologías que priorizan la privacidad.",
      ],
      mission: {
        title: "Nuestra Misión",
        description:
          "Nuestra misión es capacitar a las organizaciones para que innoven sin comprometer la privacidad. Construimos soluciones de IA de vanguardia y compatibles con la normativa mediante la integración de Cifrado Totalmente Homomórfico, Pruebas de Conocimiento Cero y Blockchain, convirtiendo los datos sensibles en un activo seguro para el crecimiento.",
      },
      values: {
        title: "Nuestros Valores",
        privacy: "Privacidad Primero",
        privacyDesc: "Creemos que la privacidad es un derecho fundamental.",
        innovation: "Innovación",
        innovationDesc: "Empujando los límites de lo posible.",
        transparency: "Transparencia",
        transparencyDesc: "Abiertos y honestos en todo lo que hacemos.",
        excellence: "Excelencia",
        excellenceDesc: "Entregando resultados excepcionales.",
      },
    },
    finalCta: {
      title: "Construyamos tu prototipo de IA privada.",
      actions: {
        call: "Agendar llamada",
        onePager: "Descargar resumen",
      },
    },
    footer: {
      company: "Empresa",
      resources: "Recursos",
      connect: "Conectar",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      documentation: "Documentación",
      openSource: "Código Abierto",
      newsletter: "Boletín",
      scheduleCall: "Agendar Llamada",
      rights: "© 2024 Aunova. Todos los derechos reservados.",
      builtWith: "Construido con privacidad y rendimiento en mente.",
    },
    cookie: {
      message:
        "Respetamos tu privacidad. Este sitio no usa cookies de rastreo.",
      accept: "Entendido",
    },
    contact: {
      title: "Contacta con Nosotros",
      subtitle:
        "¿Listo para construir soluciones descentralizadas que preservan la privacidad?",
      form: {
        name: "Nombre",
        email: "Correo",
        company: "Empresa",
        message: "Mensaje",
        budget: "Rango de Presupuesto",
        timeline: "Cronograma",
        submit: "Enviar Mensaje",
        consent: "Acepto la política de privacidad",
      },
      calendar: {
        title: "Agenda una Consulta",
        description:
          "Reserva una llamada de 30 minutos para discutir tu proyecto",
        button: "Agendar Reunión",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Perspectivas sobre Zero-Knowledge, IA y Web3",
      readMore: "Leer Más",
      readTime: "min de lectura",
      relatedPosts: "Publicaciones Relacionadas",
      categories: {
        technical: "Técnico",
        business: "Negocios",
        news: "Noticias",
      },
    },
    error: {
      "404": {
        title: "Página No Encontrada",
        description: "La página que buscas no existe.",
        button: "Ir al Inicio",
      },
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Language = defaultLang) {
  return translations[lang] || translations[defaultLang];
}

export function getCurrentLanguage(url: URL): Language {
  const pathname = url.pathname;

  // Root path defaults to English
  if (pathname === "/" || pathname === "") {
    return "en";
  }

  // Extract language from path
  const [, lang] = pathname.split("/");
  if (lang in languages) return lang as Language;

  // Default to English for any unrecognized paths
  return defaultLang;
}
