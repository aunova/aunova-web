/**
 * Company facts shared by pages, feeds and agent-facing surfaces.
 *
 * Plain data with no imports, so client scripts can read it without pulling
 * the full translation tables (src/utils/i18n.ts) into the browser bundle.
 */

export type Lang = "en" | "es";

export const SITE_URL = "https://aunova.net";

/**
 * Names of the four technologies Aunova combines, in display order.
 *
 * "DA" in the owner's brief is read as Data Analytics. Every page, feed and
 * agent surface takes the name from this table. If it should read Data
 * Availability, change `analytics` here (both languages) and review the
 * descriptions under `convergence.steps.analytics` and
 * `servicesPage.tech.analytics` in src/utils/i18n.ts.
 */
export const technologyNames = {
  en: {
    ai: "AI",
    blockchain: "Blockchain",
    analytics: "Data Analytics",
    encryption: "Encryption",
  },
  es: {
    ai: "IA",
    blockchain: "Blockchain",
    analytics: "Analítica de datos",
    encryption: "Cifrado",
  },
} as const;

export type TechnologyKey = keyof (typeof technologyNames)["en"];

export const technologyKeys: readonly TechnologyKey[] = [
  "ai",
  "blockchain",
  "analytics",
  "encryption",
];

/** "AI, Blockchain, Data Analytics and Encryption", in the given language. */
export function technologyList(lang: Lang): string {
  const names = technologyNames[lang];
  const and = lang === "es" ? "y" : "and";
  return `${names.ai}, ${names.blockchain}, ${names.analytics} ${and} ${names.encryption}`;
}

/** The positioning statement, in the owner's words. */
export const positioning: Record<Lang, string> = {
  en: `Aunova is a software development company whose development solutions care about the environment, humanity and the future society, using cutting-edge technologies, combining ${technologyList("en")} to deliver the best solution.`,
  es: `Aunova es una empresa de desarrollo de software cuyas soluciones cuidan del medio ambiente, de la humanidad y de la sociedad del futuro, con tecnologías de vanguardia que combinan ${technologyList("es")} para ofrecer la mejor solución.`,
};

export const contact = {
  email: "christian@aunova.net",
  booking: "https://cal.com/ngmisl/aunova",
  linkedin: "https://www.linkedin.com/company/aunova-ou/",
  bluesky: "https://bsky.app/profile/aunova.net",
  github: "https://github.com/aunova",
} as const;

export type ProductId = "ati" | "casabook" | "metaend-grade";

/** Products built by Aunova. Descriptions live in i18n.ts under `work.items`. */
export const products: readonly {
  id: ProductId;
  name: string;
  formerly?: string;
  url: string;
}[] = [
  {
    id: "ati",
    name: "Aunova Trust Infrastructure",
    formerly: "Greenblocks",
    url: "https://aunova.ae",
  },
  { id: "casabook", name: "CasaBook", url: "https://casabook.app" },
  {
    id: "metaend-grade",
    name: "metaend Grade",
    url: "https://metaend-grade.fly.dev",
  },
];

/** Legal entities, as published in the privacy notices. */
export const entities = [
  {
    name: "Aunova OÜ",
    place: { en: "Estonia", es: "Estonia" },
    address: "Ahtri tn 12, 15551 Tallinn, Harju maakond, Estonia",
    registration: "Registry code 16837438, VAT EE102670613",
  },
  {
    name: "Aunova Technologies Ltd",
    place: { en: "DIFC, Dubai", es: "DIFC, Dubái" },
    address:
      "GA-00-SZ-L1-RT-164, Level 1, Gate Avenue - South Zone, Dubai International Financial Centre, Dubai, United Arab Emirates",
    registration: "DIFC licence CL13718",
  },
] as const;
