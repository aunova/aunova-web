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
      systemFamilies: "System Families",
      partnership: "Partnership",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title:
        "We partner with institutions to build the human- and planet-critical systems their future depends on.",
      subtitle:
        "We are not a software vendor. We are long-term systems partners, co-building foundational digital infrastructure for domains where failure has real human or environmental consequences.",
      supportingLine:
        "We work with a small number of aligned organizations to design systems that protect people, respect the planet, and endure.",
      cta: {
        primary: "Begin a Strategic Conversation",
        secondary: "Explore our partnership model",
      },
    },
    differentCompany: {
      title: "A Different Kind of Technology Company",
      body: [
        "Aunova exists to partner with forward-looking companies and institutions to design and build foundational systems of trust, sustainability, and responsibility.",
        "We work in domains where technology directly shapes human wellbeing and planetary outcomes. Our role is not to deliver features, but to co-create the long-term infrastructure our partners and their ecosystems will depend on.",
        "We engage selectively, build for decades, and design systems meant to become shared layers within the worlds they serve.",
      ],
      callout:
        "Our first system partnership initiative is <strong>GreenBlocks</strong> — environmental and sustainability infrastructure for the built world.",
      principles: [
        {
          title: "Human-and planet-critical focus",
          description: "Our work impacts people and the environment.",
        },
        {
          title: "Long-term systems, not short-term products",
          description: "We design for decades, not quarters.",
        },
        {
          title: "Partnership over vendor relationships",
          description: "We co-build, not just sell.",
        },
        {
          title: "Selectivity and high-trust collaboration",
          description: "We choose our partners carefully.",
        },
        {
          title: "Long-term relevance",
          description: "Enduring value, not disposable trends.",
        },
        {
          title: "Measurable real-world impact",
          description: "Success measured in adoption and outcomes.",
        },
      ],
    },
    systemFamilies: {
      title: "System Families We Are Developing With Partners",
      intro:
        "Aunova builds families of systems designed to become shared infrastructure layers within the ecosystems they serve. Each system family is developed through long-term partnerships and addresses a core human or planetary need.",
      sustainability: {
        name: "GreenBlocks by Aunova",
        category: "Environmental & Sustainability Infrastructure",
        tagline:
          "The verifiable data and accountability layer for sustainable communities and assets.",
        description:
          "We are co-creating GreenBlocks with forward-looking organizations to turn sustainability commitments into measurable, accountable, and economically meaningful realities. GreenBlocks provides the environmental infrastructure layer that allows sustainable behavior, assets, and operations to be verified, incentivized, and integrated into real business and community systems.",
        examples: [
          "Verified sustainability and environmental impact data across assets and operations",
          "Accountable ESG and environmental reporting infrastructures",
          "Incentive systems that financially reward provable sustainable action",
          "New economic and operational models powered by trusted environmental data",
        ],
        closingLine:
          "GreenBlocks represents our partnership model: a shared ambition to build foundational environmental systems that can endure for decades.",
      },
      future: {
        title: "Future system families",
        items: [
          "Human data and identity infrastructure",
          "Responsible AI and governance layers",
          "Healthcare and care-tech systems",
          "Privacy-preserving computation platforms",
        ],
        note: "In development with future partners.",
      },
    },
    partnership: {
      title: "From Shared Vision to Shared Infrastructure",
      intro:
        "We do not begin with requirements documents. We begin with strategic alignment. Our partnerships are long-term, selective, and structured around building systems that become shared assets.",
      stepsTitle: "The partnership journey",
      steps: [
        {
          number: 1,
          title: "Strategic Alignment",
          description:
            "We assess human and planetary stakes, long-term relevance, and system-level necessity.",
        },
        {
          number: 2,
          title: "Co-Design",
          description:
            "We define the system ambition together — its role, responsibilities, and long-term architecture.",
        },
        {
          number: 3,
          title: "Proof of Necessity",
          description:
            "We build a focused, functional prototype to validate the core value and system logic.",
        },
        {
          number: 4,
          title: "System Development",
          description:
            "We scale the prototype into production-grade, ecosystem-ready infrastructure.",
        },
        {
          number: 5,
          title: "Long-Term Alliance",
          description:
            "We evolve, govern, and maintain the system as a shared, long-lived asset.",
        },
      ],
      callout:
        "We deliberately engage with a limited number of founding partners per system family to protect depth, responsibility, and system integrity.",
    },
    partnerCriteria: {
      title: "Is This Partnership Model Right for You?",
      intro: "Aunova partners with organizations that:",
      criteria: [
        "are building for 10+ year horizons",
        "operate in domains with real human or environmental impact",
        "seek to co-create infrastructure, not purchase software",
        "are willing to invest in shared systems and shared responsibility",
        "value long-term trust over short-term delivery",
      ],
      boundary:
        "If you are looking for a fast implementation, a branded app, a feature roadmap, or a short-term pilot, we are probably not the right partner. We build for the long term.",
    },
    whyAunova: {
      title: "Why Aunova Exists",
      body: [
        "Aunova was founded on the belief that the next era of technology will not be defined by more software, but by better systems — systems that protect people, respect the planet, and earn long-term trust.",
        "As technology becomes embedded into everything, responsibility can no longer be an afterthought. Infrastructure must be designed with care, governance, and long-term consequences in mind.",
        "Aunova exists to work alongside organizations who share this responsibility.",
      ],
      credibility:
        "Our team invests personally in the domains and communities we serve, approaching our work not as vendors, but as long-term stakeholders in the outcomes.",
    },
    contact: {
      title: "Begin a Strategic Conversation",
      intro:
        "We are currently developing our system families with a small number of aligned partners. We welcome conversations with institutions building toward a long-term, human- and planet-positive future.",
      form: {
        name: "Name",
        organization: "Organization",
        systemFamily: "Which system family aligns with your vision?",
        systemFamilyOptions: [
          "GreenBlocks (Environmental & Sustainability)",
          "Human Data & Identity",
          "Responsible AI & Governance",
          "Healthcare & Care-Tech",
          "Privacy-Preserving Computation",
          "Other / Not sure yet",
        ],
        criticalSystem: "What critical system does your future depend on?",
        timeHorizon: "What is your strategic time horizon?",
        timeHorizonOptions: ["3–5 years", "5–10+ years"],
        submit: "Send Message",
      },
      closing: "We respond selectively and thoughtfully to every inquiry.",
    },
    footer: {
      company: "Company",
      resources: "Resources",
      connect: "Connect",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      scheduleCall: "Schedule Call",
      rights: "© 2025 Aunova. All rights reserved.",
      builtWith:
        "Building systems that protect people and respect the planet.",
    },
    cookie: {
      message: "We respect your privacy. This site uses no tracking cookies.",
      accept: "Understood",
    },
    about: {
      title: "About Aunova",
      description: [
        "Aunova was founded on the belief that the next era of technology will not be defined by more software, but by better systems — systems that protect people, respect the planet, and earn long-term trust.",
        "As technology becomes embedded into everything, responsibility can no longer be an afterthought. Infrastructure must be designed with care, governance, and long-term consequences in mind.",
        "Aunova exists to work alongside organizations who share this responsibility.",
      ],
      credibility:
        "Our team invests personally in the domains and communities we serve, approaching our work not as vendors, but as long-term stakeholders in the outcomes.",
    },
    blog: {
      title: "Blog",
      subtitle: "Insights on systems thinking, sustainability, and technology",
      readMore: "Read More",
      readTime: "min read",
      relatedPosts: "Related Posts",
      categories: {
        technical: "Technical",
        business: "Business",
        news: "News",
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
      systemFamilies: "Familias de Sistemas",
      partnership: "Asociación",
      about: "Nosotros",
      blog: "Blog",
      contact: "Contacto",
    },
    hero: {
      title:
        "Nos asociamos con instituciones para construir los sistemas críticos para humanos y el planeta de los que depende su futuro.",
      subtitle:
        "No somos un proveedor de software. Somos socios de sistemas a largo plazo, co-construyendo infraestructura digital fundamental para dominios donde el fracaso tiene consecuencias reales para humanos o el medio ambiente.",
      supportingLine:
        "Trabajamos con un pequeño número de organizaciones alineadas para diseñar sistemas que protejan a las personas, respeten el planeta y perduren.",
      cta: {
        primary: "Iniciar una Conversación Estratégica",
        secondary: "Explorar nuestro modelo de asociación",
      },
    },
    differentCompany: {
      title: "Una Empresa de Tecnología Diferente",
      body: [
        "Aunova existe para asociarse con empresas e instituciones con visión de futuro para diseñar y construir sistemas fundamentales de confianza, sostenibilidad y responsabilidad.",
        "Trabajamos en dominios donde la tecnología da forma directamente al bienestar humano y los resultados planetarios. Nuestro papel no es entregar características, sino co-crear la infraestructura a largo plazo de la que dependerán nuestros socios y sus ecosistemas.",
        "Nos comprometemos selectivamente, construimos para décadas y diseñamos sistemas destinados a convertirse en capas compartidas dentro de los mundos a los que sirven.",
      ],
      callout:
        "Nuestra primera iniciativa de asociación de sistemas se enfoca en infraestructura ambiental y de sostenibilidad para el mundo construido.",
      principles: [
        {
          title: "Enfoque crítico para humanos y el planeta",
          description: "Nuestro trabajo impacta a las personas y el medio ambiente.",
        },
        {
          title: "Sistemas a largo plazo, no productos a corto plazo",
          description: "Diseñamos para décadas, no trimestres.",
        },
        {
          title: "Asociación sobre relaciones de proveedor",
          description: "Co-construimos, no solo vendemos.",
        },
        {
          title: "Selectividad y colaboración de alta confianza",
          description: "Elegimos nuestros socios cuidadosamente.",
        },
        {
          title: "Relevancia a largo plazo",
          description: "Valor duradero, no tendencias desechables.",
        },
        {
          title: "Impacto real y medible en el mundo",
          description: "Éxito medido en adopción y resultados.",
        },
      ],
    },
    systemFamilies: {
      title: "Familias de Sistemas que Desarrollamos con Socios",
      intro:
        "Aunova construye familias de sistemas diseñados para convertirse en capas de infraestructura compartida dentro de los ecosistemas a los que sirven. Cada familia de sistemas se desarrolla a través de asociaciones a largo plazo y aborda una necesidad humana o planetaria central.",
      sustainability: {
        name: "Sistemas Ambientales y de Sostenibilidad",
        category: "Infraestructura Ambiental y de Sostenibilidad",
        tagline:
          "La capa de datos verificables y responsabilidad para comunidades y activos sostenibles.",
        description:
          "Estamos asociándonos con organizaciones con visión de futuro para convertir los compromisos de sostenibilidad en realidades medibles, responsables y económicamente significativas.",
        examples: [
          "Datos verificados de sostenibilidad e impacto ambiental en activos y operaciones",
          "Infraestructuras de informes ESG y ambientales responsables",
          "Sistemas de incentivos que recompensan financieramente la acción sostenible demostrable",
          "Nuevos modelos económicos y operativos impulsados por datos ambientales confiables",
        ],
        closingLine:
          "Esta familia de sistemas representa nuestro modelo de asociación: una ambición compartida de construir sistemas ambientales fundamentales que puedan perdurar durante décadas.",
      },
      future: {
        title: "Futuras familias de sistemas (en desarrollo)",
        items: [
          "Infraestructura de datos humanos e identidad",
          "Capas de IA responsable y gobernanza",
          "Sistemas de salud y tecnología de cuidado",
          "Plataformas de computación que preservan la privacidad",
        ],
        note: "En desarrollo con futuros socios.",
      },
    },
    partnership: {
      title: "De Visión Compartida a Infraestructura Compartida",
      intro:
        "No comenzamos con documentos de requisitos. Comenzamos con alineación estratégica. Nuestras asociaciones son a largo plazo, selectivas y estructuradas en torno a la construcción de sistemas que se convierten en activos compartidos.",
      stepsTitle: "El viaje de asociación",
      steps: [
        {
          number: 1,
          title: "Alineación Estratégica",
          description:
            "Evaluamos las implicaciones humanas y planetarias, la relevancia a largo plazo y la necesidad a nivel de sistema.",
        },
        {
          number: 2,
          title: "Co-Diseño",
          description:
            "Definimos juntos la ambición del sistema — su rol, responsabilidades y arquitectura a largo plazo.",
        },
        {
          number: 3,
          title: "Prueba de Necesidad",
          description:
            "Construimos un prototipo funcional y enfocado para validar el valor central y la lógica del sistema.",
        },
        {
          number: 4,
          title: "Desarrollo del Sistema",
          description:
            "Escalamos el prototipo a infraestructura de grado de producción, lista para el ecosistema.",
        },
        {
          number: 5,
          title: "Alianza a Largo Plazo",
          description:
            "Evolucionamos, gobernamos y mantenemos el sistema como un activo compartido y duradero.",
        },
      ],
      callout:
        "Nos comprometemos deliberadamente con un número limitado de socios fundadores por familia de sistemas para proteger la profundidad, la responsabilidad y la integridad del sistema.",
    },
    partnerCriteria: {
      title: "¿Es Este Modelo de Asociación Adecuado para Usted?",
      intro: "Aunova se asocia con organizaciones que:",
      criteria: [
        "construyen para horizontes de 10+ años",
        "operan en dominios con impacto real humano o ambiental",
        "buscan co-crear infraestructura, no comprar software",
        "están dispuestas a invertir en sistemas y responsabilidad compartidos",
        "valoran la confianza a largo plazo sobre la entrega a corto plazo",
      ],
      boundary:
        "Si está buscando una implementación rápida, una aplicación de marca, una hoja de ruta de características o un piloto a corto plazo, probablemente no seamos el socio adecuado. Construimos para el largo plazo.",
    },
    whyAunova: {
      title: "Por Qué Existe Aunova",
      body: [
        "Aunova fue fundada con la creencia de que la próxima era de la tecnología no estará definida por más software, sino por mejores sistemas — sistemas que protejan a las personas, respeten el planeta y ganen confianza a largo plazo.",
        "A medida que la tecnología se integra en todo, la responsabilidad ya no puede ser una ocurrencia tardía. La infraestructura debe diseñarse con cuidado, gobernanza y consecuencias a largo plazo en mente.",
        "Aunova existe para trabajar junto a organizaciones que comparten esta responsabilidad.",
      ],
      credibility:
        "Nuestro equipo invierte personalmente en los dominios y comunidades a los que servimos, abordando nuestro trabajo no como proveedores, sino como partes interesadas a largo plazo en los resultados.",
    },
    contact: {
      title: "Iniciar una Conversación Estratégica",
      intro:
        "Actualmente estamos desarrollando nuestras familias de sistemas con un pequeño número de socios alineados. Damos la bienvenida a conversaciones con instituciones que construyen hacia un futuro positivo para humanos y el planeta a largo plazo.",
      form: {
        name: "Nombre",
        organization: "Organización",
        systemFamily: "¿Qué familia de sistemas se alinea con su visión?",
        systemFamilyOptions: [
          "Sistemas Ambientales y de Sostenibilidad",
          "Datos Humanos e Identidad",
          "IA Responsable y Gobernanza",
          "Salud y Tecnología de Cuidado",
          "Computación que Preserva la Privacidad",
          "Otro / Aún no estoy seguro",
        ],
        criticalSystem: "¿De qué sistema crítico depende su futuro?",
        timeHorizon: "¿Cuál es su horizonte de tiempo estratégico?",
        timeHorizonOptions: ["3–5 años", "5–10+ años"],
        submit: "Enviar Mensaje",
      },
      closing:
        "Respondemos de manera selectiva y reflexiva a cada consulta.",
    },
    footer: {
      company: "Empresa",
      resources: "Recursos",
      connect: "Conectar",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      scheduleCall: "Agendar Llamada",
      rights: "© 2025 Aunova. Todos los derechos reservados.",
      builtWith:
        "Construyendo sistemas que protegen a las personas y respetan el planeta.",
    },
    cookie: {
      message:
        "Respetamos tu privacidad. Este sitio no usa cookies de rastreo.",
      accept: "Entendido",
    },
    about: {
      title: "Sobre Aunova",
      description: [
        "Aunova fue fundada con la creencia de que la próxima era de la tecnología no estará definida por más software, sino por mejores sistemas — sistemas que protejan a las personas, respeten el planeta y ganen confianza a largo plazo.",
        "A medida que la tecnología se integra en todo, la responsabilidad ya no puede ser una ocurrencia tardía. La infraestructura debe diseñarse con cuidado, gobernanza y consecuencias a largo plazo en mente.",
        "Aunova existe para trabajar junto a organizaciones que comparten esta responsabilidad.",
      ],
      credibility:
        "Nuestro equipo invierte personalmente en los dominios y comunidades a los que servimos, abordando nuestro trabajo no como proveedores, sino como partes interesadas a largo plazo en los resultados.",
    },
    blog: {
      title: "Blog",
      subtitle:
        "Perspectivas sobre pensamiento sistémico, sostenibilidad y tecnología",
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

  if (pathname === "/" || pathname === "") {
    return "en";
  }

  const [, lang] = pathname.split("/");
  if (lang in languages) return lang as Language;

  return defaultLang;
}
