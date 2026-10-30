import { technologyList } from "./company";

export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "en";

// The technology names come from src/utils/company.ts so the term
// "Data Analytics" lives in one place across pages, feeds and agent surfaces.
const techEn = technologyList("en");
const techEs = technologyList("es");

export const translations = {
  en: {
    meta: {
      homeTitle:
        "Aunova | Software development that cares for the planet, people and the future",
      homeDescription: `Software development company combining ${techEn} into one solution, built with care for the environment, humanity and the future society.`,
      servicesTitle: "Services | Aunova",
      servicesDescription: `Custom software, AI systems and agents, verifiable records, privacy-preserving data systems and data analytics. Aunova combines ${techEn} into one solution.`,
    },
    nav: {
      primary: "Main navigation",
      home: "Aunova home",
      services: "Services",
      technology: "Technology",
      impact: "Impact",
      work: "Our work",
      process: "Process",
      bookCall: "Book a call",
      menu: "Menu",
      language: "Language",
      newTab: "opens in a new tab",
    },
    hero: {
      eyebrow: "Software development company",
      title: "Software that cares for the planet, its people and our future.",
      subtitle: `Aunova is a software development company. We combine ${techEn} into one solution that fits your problem, built with care for the environment, for humanity and for the future society.`,
      primaryCta: "Start a project",
      secondaryCta: "What we build",
    },
    capabilities: {
      eyebrow: "What we build",
      title: "Software that solves real problems",
      intro:
        "From a first prototype to a platform in daily use, we design, build and run software end to end. We choose the technology that fits the problem, never the other way round.",
      more: "Explore our services",
      items: [
        {
          id: "software",
          title: "Custom software and platforms",
          text: "Web and mobile apps, internal tools, APIs and complete platforms, built to be reliable, secure and easy to maintain.",
          points: [
            "Web and mobile applications",
            "Internal tools and back-office systems",
            "APIs and integrations with the systems you already use",
            "Modernizing and maintaining existing software",
          ],
        },
        {
          id: "ai",
          title: "AI systems and agents",
          text: "Assistants, document understanding, automation and AI agents that work with your data and your processes, with people kept in control.",
          points: [
            "Assistants grounded in your own documents and data",
            "Document understanding and data extraction",
            "Workflow automation and agents with human review",
            "Evaluation, guardrails and monitoring",
          ],
        },
        {
          id: "records",
          title: "Verifiable records and blockchain",
          text: "Tamper-evident records, digital passports and signed audit trails that others can check for themselves, on public or private ledgers.",
          points: [
            "Tamper-evident records and audit trails",
            "Digital passports and certificates",
            "Smart contracts on public or private ledgers",
            "Signed, time-stamped data that others can verify",
          ],
        },
        {
          id: "privacy",
          title: "Privacy-preserving data systems",
          text: "End-to-end encryption, zero-knowledge proofs and encrypted computation for data that has to stay private, even while it is used.",
          points: [
            "End-to-end encryption and key management",
            "Zero-knowledge proofs for selective disclosure",
            "Computation on encrypted data",
            "Privacy by design to support GDPR obligations",
          ],
        },
        {
          id: "analytics",
          title: "Data analytics and dashboards",
          text: "Data pipelines, metrics and dashboards that turn scattered data into clear decisions people can trust.",
          points: [
            "Data pipelines and data quality checks",
            "Metrics, reporting and dashboards",
            "Forecasting and anomaly detection",
            "Impact reporting built on verifiable data",
          ],
        },
      ],
    },
    convergence: {
      eyebrow: "Our technology",
      title: "Four technologies. One solution.",
      intro:
        "Each one is powerful on its own. Combined, they cover each other's gaps: AI that reasons over data, encryption that keeps it private, a blockchain layer that makes the record verifiable, and analytics that turns it into decisions.",
      steps: {
        ai: "AI reads, reasons and automates. It understands documents, finds patterns and answers questions over your own data, so people spend their time on decisions instead of busywork.",
        blockchain:
          "A blockchain layer makes the record verifiable. Every important entry is time-stamped and tamper-evident, so anyone with access can check what happened and when, without having to trust a single party.",
        analytics:
          "Analytics turns data into decisions. Clean pipelines, honest metrics and clear dashboards show what is really going on and what to do next.",
        encryption:
          "Encryption keeps it private. Data stays protected at rest, in transit and, with techniques such as zero-knowledge proofs and homomorphic encryption, even while it is being used.",
      },
      combined: {
        eyebrow: "Combined",
        title: "One solution",
        text: "We design the four as one system, so each covers what the others cannot.",
        exampleLabel: "A plain example",
        example:
          "A company wants to prove its sustainability figures. AI reads the energy invoices and meter data and extracts the numbers. Encryption keeps customer and supplier details private. A blockchain record time-stamps every verified figure, so it cannot be quietly changed later. Analytics turns the record into a report that buyers, investors and auditors can check for themselves.",
      },
    },
    impact: {
      eyebrow: "Why it matters",
      title: "Built for the planet, its people and the society ahead",
      intro:
        "Technology shapes how we live, so we take it seriously. Three things weigh in every decision we make.",
      items: [
        {
          id: "planet",
          title: "Environment",
          text: "We build software that helps measure, prove and reduce environmental impact, with data that can be checked instead of claims that have to be believed. And we design our own systems to run lean.",
        },
        {
          id: "people",
          title: "Humanity",
          text: "Technology should serve people. We protect privacy by design, keep humans in control of AI and make tools that people can understand and trust.",
        },
        {
          id: "future",
          title: "Future society",
          text: "Society runs more and more on digital systems. We build open, verifiable and secure foundations, so people can trust what those systems tell them, today and in the years ahead.",
        },
      ],
    },
    work: {
      eyebrow: "Our work",
      title: "Built by Aunova",
      intro:
        "Products we design, build and run ourselves. Each one puts the same principles to work.",
      formerly: "Formerly",
      items: {
        ati: {
          tag: "Real estate · Dubai",
          text: "One trusted, verifiable record for real-estate projects: the Digital Building Passport.",
          link: "Visit aunova.ae",
        },
        casabook: {
          tag: "Short-stay hosting",
          text: "Multilingual digital guidebooks for short-stay hosts, so every guest finds the answers in their own language.",
          link: "Visit casabook.app",
        },
        "metaend-grade": {
          tag: "AI readiness",
          text: "Scans a website the way an AI agent sees it and grades its agent-readiness from A to F.",
          link: "Visit metaend Grade",
        },
      },
    },
    process: {
      eyebrow: "How we work",
      title: "A clear process, from first call to running system",
      intro:
        "Short loops, visible progress and no surprises. You always know what we are building and why.",
      steps: [
        {
          title: "Discover",
          text: "We learn your problem, your users and your constraints, and agree on what success looks like.",
        },
        {
          title: "Design",
          text: "We shape the architecture and choose the right mix of AI, blockchain, analytics and encryption. Nothing more than the problem needs.",
        },
        {
          title: "Build",
          text: "We build in short iterations you can see and test, with security and privacy built in from day one.",
        },
        {
          title: "Run & improve",
          text: "We launch, monitor and keep improving, and we hand over everything you need to own what we built.",
        },
      ],
    },
    cta: {
      title: "Have a project in mind?",
      text: "Tell us what you want to build. We reply with honest feedback and a clear next step.",
      primary: "Start a project",
      secondary: "Book a call",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Software development, from first idea to running system",
      lead: `We design, build and run software that combines ${techEn}. Each solution is built with care for the environment, for people and for the future society.`,
      techTitle: "The four technologies, and what each brings",
      techIntro:
        "We combine them as the problem requires, and only where they add real value.",
      typicalUses: "Typical uses",
      tech: {
        ai: {
          text: "Language models, retrieval over your own data, classic machine learning and agents. We choose the model for the task and evaluate it before it goes live.",
          uses: [
            "Document intake and data extraction",
            "Search and question answering over your data",
            "Forecasting and classification",
            "Automation with human review",
          ],
        },
        blockchain: {
          text: "Public or private ledgers and smart contracts, used when several parties need a shared record that no single party can quietly change.",
          uses: [
            "Audit trails",
            "Digital product and building passports",
            "Certificates and credentials",
            "Processes shared between organizations",
          ],
        },
        analytics: {
          text: "Pipelines, models and dashboards that turn raw data into clear, decision-ready information.",
          uses: [
            "Operational dashboards",
            "Impact and sustainability reporting",
            "Forecasting and anomaly detection",
            "Data quality monitoring",
          ],
        },
        encryption: {
          text: "Modern cryptography that protects data at rest, in transit and in use, and proves facts without revealing the data behind them.",
          uses: [
            "End-to-end encryption and key management",
            "Zero-knowledge proofs",
            "Homomorphic encryption",
            "Post-quantum signatures",
          ],
        },
      },
      deepDives: "Deep dives",
      fhe: "Fully homomorphic encryption",
      zk: "Zero-knowledge proofs",
    },
    deepDive: {
      eyebrow: "Encryption deep dive",
      back: "All services",
      related: "Also under Encryption",
      useCases: "Where it helps",
    },
    footer: {
      tagline:
        "Software development that cares for the planet, its people and the future society.",
      company: "Company",
      products: "Our products",
      connect: "Connect",
      services: "Services",
      contact: "Contact",
      blog: "Blog",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      newsletterPrivacy: "Newsletter Privacy Notice",
      bookCall: "Book a call",
      rights: "All rights reserved.",
    },
    cookie: {
      message: "We respect your privacy. This site uses no tracking cookies.",
      accept: "Understood",
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
  },
  es: {
    meta: {
      homeTitle:
        "Aunova | Desarrollo de software que cuida del planeta, las personas y el futuro",
      homeDescription: `Empresa de desarrollo de software que combina ${techEs} en una sola solución, pensada para cuidar del medio ambiente, de la humanidad y de la sociedad del futuro.`,
      servicesTitle: "Servicios | Aunova",
      servicesDescription: `Software a medida, sistemas de IA y agentes, registros verificables, sistemas de datos que protegen la privacidad y analítica de datos. Aunova combina ${techEs} en una sola solución.`,
    },
    nav: {
      primary: "Navegación principal",
      home: "Inicio de Aunova",
      services: "Servicios",
      technology: "Tecnología",
      impact: "Impacto",
      work: "Proyectos",
      process: "Proceso",
      bookCall: "Reservar llamada",
      menu: "Menú",
      language: "Idioma",
      newTab: "se abre en una pestaña nueva",
    },
    hero: {
      eyebrow: "Empresa de desarrollo de software",
      title: "Software que cuida del planeta, de las personas y de nuestro futuro.",
      subtitle: `Aunova es una empresa de desarrollo de software. Combinamos ${techEs} en una sola solución a la medida de tu problema, pensada para cuidar del medio ambiente, de la humanidad y de la sociedad del futuro.`,
      primaryCta: "Empezar un proyecto",
      secondaryCta: "Qué construimos",
    },
    capabilities: {
      eyebrow: "Qué construimos",
      title: "Software que resuelve problemas reales",
      intro:
        "Desde un primer prototipo hasta una plataforma de uso diario, diseñamos, construimos y operamos software de principio a fin. Elegimos la tecnología que encaja con el problema, nunca al revés.",
      more: "Ver nuestros servicios",
      items: [
        {
          id: "software",
          title: "Software y plataformas a medida",
          text: "Aplicaciones web y móviles, herramientas internas, APIs y plataformas completas, fiables, seguras y fáciles de mantener.",
          points: [
            "Aplicaciones web y móviles",
            "Herramientas internas y sistemas de gestión",
            "APIs e integraciones con los sistemas que ya usas",
            "Modernización y mantenimiento de software existente",
          ],
        },
        {
          id: "ai",
          title: "Sistemas de IA y agentes",
          text: "Asistentes, comprensión de documentos, automatización y agentes de IA que trabajan con tus datos y tus procesos, siempre con personas al mando.",
          points: [
            "Asistentes basados en tus propios documentos y datos",
            "Comprensión de documentos y extracción de datos",
            "Automatización de procesos y agentes con revisión humana",
            "Evaluación, salvaguardas y supervisión",
          ],
        },
        {
          id: "records",
          title: "Registros verificables y blockchain",
          text: "Registros a prueba de manipulaciones, pasaportes digitales y trazas de auditoría firmadas que otros pueden comprobar por sí mismos, en redes públicas o privadas.",
          points: [
            "Registros a prueba de manipulaciones y trazas de auditoría",
            "Pasaportes digitales y certificados",
            "Contratos inteligentes en redes públicas o privadas",
            "Datos firmados y sellados en el tiempo que otros pueden verificar",
          ],
        },
        {
          id: "privacy",
          title: "Sistemas de datos que protegen la privacidad",
          text: "Cifrado de extremo a extremo, pruebas de conocimiento cero y computación cifrada para datos que deben seguir siendo privados, incluso mientras se usan.",
          points: [
            "Cifrado de extremo a extremo y gestión de claves",
            "Pruebas de conocimiento cero para la divulgación selectiva",
            "Computación sobre datos cifrados",
            "Privacidad desde el diseño para ayudar a cumplir el RGPD",
          ],
        },
        {
          id: "analytics",
          title: "Analítica de datos y cuadros de mando",
          text: "Flujos de datos, métricas y cuadros de mando que convierten datos dispersos en decisiones claras y fiables.",
          points: [
            "Flujos de datos y controles de calidad",
            "Métricas, informes y cuadros de mando",
            "Previsión y detección de anomalías",
            "Informes de impacto basados en datos verificables",
          ],
        },
      ],
    },
    convergence: {
      eyebrow: "Nuestra tecnología",
      title: "Cuatro tecnologías. Una solución.",
      intro:
        "Cada una es potente por sí sola. Combinadas, cubren las carencias de las demás: IA que razona sobre los datos, cifrado que los mantiene privados, una capa blockchain que hace verificable el registro y analítica que lo convierte en decisiones.",
      steps: {
        ai: "La IA lee, razona y automatiza. Entiende documentos, detecta patrones y responde preguntas sobre tus propios datos, para que las personas dediquen su tiempo a decidir y no a tareas repetitivas.",
        blockchain:
          "Una capa blockchain hace verificable el registro. Cada entrada importante queda sellada en el tiempo y a prueba de manipulaciones, de modo que cualquiera con acceso puede comprobar qué ocurrió y cuándo, sin tener que confiar en una sola parte.",
        analytics:
          "La analítica convierte los datos en decisiones. Flujos de datos limpios, métricas honestas y cuadros de mando claros muestran qué está pasando de verdad y qué hacer a continuación.",
        encryption:
          "El cifrado mantiene la privacidad. Los datos quedan protegidos en reposo, en tránsito e incluso mientras se usan, gracias a técnicas como las pruebas de conocimiento cero y el cifrado homomórfico.",
      },
      combined: {
        eyebrow: "Combinadas",
        title: "Una sola solución",
        text: "Diseñamos las cuatro como un único sistema, para que cada una cubra lo que las demás no pueden.",
        exampleLabel: "Un ejemplo sencillo",
        example:
          "Una empresa quiere demostrar sus cifras de sostenibilidad. La IA lee las facturas de energía y los datos de los contadores y extrae las cifras. El cifrado mantiene privados los datos de clientes y proveedores. Un registro blockchain sella en el tiempo cada cifra verificada, para que nadie pueda modificarla después sin que se note. La analítica convierte el registro en un informe que compradores, inversores y auditores pueden comprobar por sí mismos.",
      },
    },
    impact: {
      eyebrow: "Por qué importa",
      title: "Pensado para el planeta, para las personas y para la sociedad que viene",
      intro:
        "La tecnología define cómo vivimos, así que nos la tomamos en serio. Tres cosas pesan en cada decisión que tomamos.",
      items: [
        {
          id: "planet",
          title: "Medio ambiente",
          text: "Construimos software que ayuda a medir, demostrar y reducir el impacto ambiental, con datos que se pueden comprobar en lugar de afirmaciones que hay que creer. Y diseñamos nuestros propios sistemas para que consuman lo justo.",
        },
        {
          id: "people",
          title: "Humanidad",
          text: "La tecnología debe estar al servicio de las personas. Protegemos la privacidad desde el diseño, mantenemos a las personas al mando de la IA y creamos herramientas que se entienden y en las que se puede confiar.",
        },
        {
          id: "future",
          title: "Sociedad del futuro",
          text: "La sociedad funciona cada vez más sobre sistemas digitales. Construimos bases abiertas, verificables y seguras, para que las personas puedan confiar en lo que esos sistemas les dicen, hoy y en los años que vienen.",
        },
      ],
    },
    work: {
      eyebrow: "Nuestro trabajo",
      title: "Hecho por Aunova",
      intro:
        "Productos que diseñamos, construimos y operamos nosotros mismos. Cada uno pone en práctica los mismos principios.",
      formerly: "Antes",
      items: {
        ati: {
          tag: "Inmobiliario · Dubái",
          text: "Un único registro fiable y verificable para proyectos inmobiliarios: el Pasaporte Digital del Edificio.",
          link: "Visitar aunova.ae",
        },
        casabook: {
          tag: "Alquiler de corta estancia",
          text: "Guías digitales multilingües para anfitriones de alquiler de corta estancia, para que cada huésped encuentre las respuestas en su idioma.",
          link: "Visitar casabook.app",
        },
        "metaend-grade": {
          tag: "Preparación para IA",
          text: "Analiza un sitio web tal como lo ve un agente de IA y califica su preparación para agentes de la A a la F.",
          link: "Visitar metaend Grade",
        },
      },
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un proceso claro, desde la primera llamada hasta el sistema en marcha",
      intro:
        "Ciclos cortos, avances visibles y sin sorpresas. Siempre sabes qué estamos construyendo y por qué.",
      steps: [
        {
          title: "Descubrir",
          text: "Entendemos tu problema, a tus usuarios y tus limitaciones, y acordamos qué significa el éxito.",
        },
        {
          title: "Diseñar",
          text: "Definimos la arquitectura y elegimos la combinación adecuada de IA, blockchain, analítica y cifrado. Nada más de lo que el problema necesita.",
        },
        {
          title: "Construir",
          text: "Construimos en iteraciones cortas que puedes ver y probar, con la seguridad y la privacidad integradas desde el primer día.",
        },
        {
          title: "Operar y mejorar",
          text: "Lanzamos, supervisamos y seguimos mejorando, y te entregamos todo lo necesario para que lo construido sea tuyo.",
        },
      ],
    },
    cta: {
      title: "¿Tienes un proyecto en mente?",
      text: "Cuéntanos qué quieres construir. Te responderemos con una opinión honesta y un siguiente paso claro.",
      primary: "Empezar un proyecto",
      secondary: "Reservar una llamada",
    },
    servicesPage: {
      eyebrow: "Servicios",
      title: "Desarrollo de software, desde la primera idea hasta el sistema en marcha",
      lead: `Diseñamos, construimos y operamos software que combina ${techEs}. Cada solución está pensada para cuidar del medio ambiente, de las personas y de la sociedad del futuro.`,
      techTitle: "Las cuatro tecnologías y lo que aporta cada una",
      techIntro:
        "Las combinamos según lo que pide el problema, y solo donde aportan valor real.",
      typicalUses: "Usos habituales",
      tech: {
        ai: {
          text: "Modelos de lenguaje, búsqueda sobre tus propios datos, aprendizaje automático clásico y agentes. Elegimos el modelo según la tarea y lo evaluamos antes de ponerlo en producción.",
          uses: [
            "Recepción de documentos y extracción de datos",
            "Búsqueda y respuestas sobre tus datos",
            "Previsión y clasificación",
            "Automatización con revisión humana",
          ],
        },
        blockchain: {
          text: "Redes públicas o privadas y contratos inteligentes, cuando varias partes necesitan un registro compartido que ninguna pueda modificar sin que se note.",
          uses: [
            "Trazas de auditoría",
            "Pasaportes digitales de productos y edificios",
            "Certificados y credenciales",
            "Procesos compartidos entre organizaciones",
          ],
        },
        analytics: {
          text: "Flujos de datos, modelos y cuadros de mando que convierten datos en bruto en información clara y lista para decidir.",
          uses: [
            "Cuadros de mando operativos",
            "Informes de impacto y sostenibilidad",
            "Previsión y detección de anomalías",
            "Supervisión de la calidad de los datos",
          ],
        },
        encryption: {
          text: "Criptografía moderna que protege los datos en reposo, en tránsito y en uso, y que demuestra hechos sin revelar los datos que hay detrás.",
          uses: [
            "Cifrado de extremo a extremo y gestión de claves",
            "Pruebas de conocimiento cero",
            "Cifrado homomórfico",
            "Firmas poscuánticas",
          ],
        },
      },
      deepDives: "En profundidad",
      fhe: "Cifrado totalmente homomórfico",
      zk: "Pruebas de conocimiento cero",
    },
    deepDive: {
      eyebrow: "Cifrado en profundidad",
      back: "Todos los servicios",
      related: "También en Cifrado",
      useCases: "Dónde ayuda",
    },
    footer: {
      tagline:
        "Desarrollo de software que cuida del planeta, de las personas y de la sociedad del futuro.",
      company: "Empresa",
      products: "Nuestros productos",
      connect: "Conectar",
      services: "Servicios",
      contact: "Contacto",
      blog: "Blog",
      privacy: "Política de privacidad",
      terms: "Términos del servicio",
      newsletterPrivacy: "Aviso de privacidad del boletín",
      bookCall: "Reservar una llamada",
      rights: "Todos los derechos reservados.",
    },
    cookie: {
      message:
        "Respetamos tu privacidad. Este sitio no usa cookies de rastreo.",
      accept: "Entendido",
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
  },
};

/** The English table is canonical; the Spanish one must provide every key. */
export type Dictionary = typeof translations.en;

export function getTranslation(lang: Language = defaultLang): Dictionary {
  // Returning the Spanish table as `Dictionary` is also the compile-time
  // check that it mirrors the English keys.
  return translations[lang] ?? translations[defaultLang];
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
