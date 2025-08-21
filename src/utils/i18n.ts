export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      zeroKnowledge: 'Zero-Knowledge & Privacy',
      aiWeb3: 'AI + Web3 Integration',
      hybridZkAi: 'Hybrid ZK-AI',
      infrastructure: 'Infrastructure & Tools',
      ourStory: 'Our Story',
      team: 'Team',
      partners: 'Partners',
    },
    hero: {
      title: 'Build the Future with Zero-Knowledge & AI',
      subtitle: 'Innovation hub for blockchain, zero-knowledge, and decentralized AI solutions',
      cta: {
        primary: 'Explore Services',
        secondary: 'Schedule Consultation',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Cutting-edge solutions at the intersection of privacy, AI, and Web3',
      pillars: {
        zk: {
          title: 'Zero-Knowledge & Privacy Tooling',
          description: 'Implement zkSNARKs, zkSTARKs, and privacy-preserving smart contracts to protect sensitive data while maintaining transparency.',
          features: [
            'zkSNARK/zkSTARK implementation',
            'Privacy-preserving smart contracts',
            'Anonymous credential systems',
            'Confidential computing solutions',
          ],
        },
        ai: {
          title: 'Generative AI + Web3 Integration',
          description: 'Deploy AI models on-chain and create decentralized AI inference networks for truly autonomous applications.',
          features: [
            'On-chain AI model deployment',
            'Decentralized inference networks',
            'NFT generation with AI',
            'Smart contract automation with LLMs',
          ],
        },
        hybrid: {
          title: 'Hybrid ZK-AI Applications',
          description: 'Combine zero-knowledge proofs with AI to create privacy-preserving machine learning solutions.',
          features: [
            'Privacy-preserving machine learning',
            'Federated learning on blockchain',
            'Confidential AI computations',
            'Verifiable AI outputs',
          ],
        },
        infra: {
          title: 'Decentralized Infrastructure & Dev Tools',
          description: 'Build robust decentralized applications with our comprehensive development frameworks and tools.',
          features: [
            'Smart contract frameworks',
            'Blockchain testing suites',
            'DApp deployment pipelines',
            'Cross-chain integration tools',
          ],
        },
      },
      learnMore: 'Learn More',
    },
    footer: {
      company: 'Company',
      resources: 'Resources',
      connect: 'Connect',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      documentation: 'Documentation',
      openSource: 'Open Source',
      newsletter: 'Newsletter',
      scheduleCall: 'Schedule Call',
      rights: '© 2024 Aunova. All rights reserved.',
      builtWith: 'Built with privacy and performance in mind.',
    },
    cookie: {
      message: 'We respect your privacy. This site uses no tracking cookies.',
      accept: 'Understood',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to build privacy-preserving, decentralized solutions?',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        budget: 'Budget Range',
        timeline: 'Timeline',
        submit: 'Send Message',
        consent: 'I agree to the privacy policy',
      },
      calendar: {
        title: 'Schedule a Consultation',
        description: 'Book a 30-minute call to discuss your project',
        button: 'Book Meeting',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Insights on Zero-Knowledge, AI, and Web3',
      readMore: 'Read More',
      readTime: 'min read',
      relatedPosts: 'Related Posts',
      categories: {
        technical: 'Technical',
        business: 'Business',
        news: 'News',
      },
    },
    about: {
      title: 'About Aunova',
      mission: {
        title: 'Our Mission',
        description: 'To democratize access to privacy-preserving technologies and decentralized AI, enabling organizations to build trustless, secure, and intelligent applications.',
      },
      values: {
        title: 'Our Values',
        privacy: 'Privacy First',
        privacyDesc: 'We believe privacy is a fundamental right.',
        innovation: 'Innovation',
        innovationDesc: 'Pushing the boundaries of what\'s possible.',
        transparency: 'Transparency',
        transparencyDesc: 'Open and honest in everything we do.',
        excellence: 'Excellence',
        excellenceDesc: 'Delivering exceptional results.',
      },
    },
    error: {
      '404': {
        title: 'Page Not Found',
        description: 'The page you\'re looking for doesn\'t exist.',
        button: 'Go Home',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      blog: 'Blog',
      contact: 'Contacto',
      zeroKnowledge: 'Zero-Knowledge y Privacidad',
      aiWeb3: 'Integración IA + Web3',
      hybridZkAi: 'ZK-IA Híbrido',
      infrastructure: 'Infraestructura y Herramientas',
      ourStory: 'Nuestra Historia',
      team: 'Equipo',
      partners: 'Socios',
    },
    hero: {
      title: 'Construye el Futuro con Zero-Knowledge e IA',
      subtitle: 'Centro de innovación para blockchain, zero-knowledge y soluciones de IA descentralizada',
      cta: {
        primary: 'Explorar Servicios',
        secondary: 'Agendar Consulta',
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones de vanguardia en la intersección de privacidad, IA y Web3',
      pillars: {
        zk: {
          title: 'Herramientas de Zero-Knowledge y Privacidad',
          description: 'Implementa zkSNARKs, zkSTARKs y contratos inteligentes que preservan la privacidad para proteger datos sensibles manteniendo la transparencia.',
          features: [
            'Implementación zkSNARK/zkSTARK',
            'Contratos inteligentes privados',
            'Sistemas de credenciales anónimas',
            'Soluciones de computación confidencial',
          ],
        },
        ai: {
          title: 'Integración de IA Generativa + Web3',
          description: 'Despliega modelos de IA en cadena y crea redes de inferencia de IA descentralizadas para aplicaciones verdaderamente autónomas.',
          features: [
            'Despliegue de modelos IA en cadena',
            'Redes de inferencia descentralizadas',
            'Generación de NFT con IA',
            'Automatización de contratos con LLMs',
          ],
        },
        hybrid: {
          title: 'Aplicaciones Híbridas ZK-IA',
          description: 'Combina pruebas de conocimiento cero con IA para crear soluciones de aprendizaje automático que preservan la privacidad.',
          features: [
            'Aprendizaje automático privado',
            'Aprendizaje federado en blockchain',
            'Cómputos de IA confidenciales',
            'Salidas de IA verificables',
          ],
        },
        infra: {
          title: 'Infraestructura Descentralizada y Herramientas',
          description: 'Construye aplicaciones descentralizadas robustas con nuestros frameworks y herramientas de desarrollo.',
          features: [
            'Frameworks de contratos inteligentes',
            'Suites de pruebas blockchain',
            'Pipelines de despliegue DApp',
            'Herramientas de integración cross-chain',
          ],
        },
      },
      learnMore: 'Más Información',
    },
    footer: {
      company: 'Empresa',
      resources: 'Recursos',
      connect: 'Conectar',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      documentation: 'Documentación',
      openSource: 'Código Abierto',
      newsletter: 'Boletín',
      scheduleCall: 'Agendar Llamada',
      rights: '© 2024 Aunova. Todos los derechos reservados.',
      builtWith: 'Construido con privacidad y rendimiento en mente.',
    },
    cookie: {
      message: 'Respetamos tu privacidad. Este sitio no usa cookies de rastreo.',
      accept: 'Entendido',
    },
    contact: {
      title: 'Contacta con Nosotros',
      subtitle: '¿Listo para construir soluciones descentralizadas que preservan la privacidad?',
      form: {
        name: 'Nombre',
        email: 'Correo',
        company: 'Empresa',
        message: 'Mensaje',
        budget: 'Rango de Presupuesto',
        timeline: 'Cronograma',
        submit: 'Enviar Mensaje',
        consent: 'Acepto la política de privacidad',
      },
      calendar: {
        title: 'Agenda una Consulta',
        description: 'Reserva una llamada de 30 minutos para discutir tu proyecto',
        button: 'Agendar Reunión',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Perspectivas sobre Zero-Knowledge, IA y Web3',
      readMore: 'Leer Más',
      readTime: 'min de lectura',
      relatedPosts: 'Publicaciones Relacionadas',
      categories: {
        technical: 'Técnico',
        business: 'Negocios',
        news: 'Noticias',
      },
    },
    about: {
      title: 'Sobre Aunova',
      mission: {
        title: 'Nuestra Misión',
        description: 'Democratizar el acceso a tecnologías que preservan la privacidad y la IA descentralizada, permitiendo a las organizaciones construir aplicaciones inteligentes, seguras y sin confianza.',
      },
      values: {
        title: 'Nuestros Valores',
        privacy: 'Privacidad Primero',
        privacyDesc: 'Creemos que la privacidad es un derecho fundamental.',
        innovation: 'Innovación',
        innovationDesc: 'Empujando los límites de lo posible.',
        transparency: 'Transparencia',
        transparencyDesc: 'Abiertos y honestos en todo lo que hacemos.',
        excellence: 'Excelencia',
        excellenceDesc: 'Entregando resultados excepcionales.',
      },
    },
    error: {
      '404': {
        title: 'Página No Encontrada',
        description: 'La página que buscas no existe.',
        button: 'Ir al Inicio',
      },
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Language = defaultLang) {
  return translations[lang] || translations[defaultLang];
}

export function getCurrentLanguage(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}
