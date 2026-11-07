/**
 * The micro-apps shown on /en/apps and /es/apps. Adding an app is one entry
 * here plus its images in public/images/apps/.
 *
 * Keep the copy, in both languages, to what the shipped app does. Do not claim
 * "nothing leaves your phone", "no tracking", "100% private" or "no ads"
 * (only "no ads with Pro"), and never show download counts, user numbers or
 * ratings. Screenshots must not show an emulator's device name, its RAM or a
 * billing message.
 */

import type { Lang } from "./company";

export interface AppScreenshot {
  src: string;
  alt: Record<Lang, string>;
  width: number;
  height: number;
}

export interface AppCopy {
  pitch: string;
  /** Three to five plain lines on what the app does. */
  details: readonly string[];
  /** Price and ads, in one line. */
  pricing: string;
}

export interface MicroApp {
  id: string;
  name: string;
  icon: string;
  copy: Record<Lang, AppCopy>;
  playUrl: string;
  /** The notices are published in English only. */
  privacyUrl: string;
  screenshots: readonly AppScreenshot[];
}

const freeWithAd: Record<Lang, string> = {
  en: "Free, with one banner ad after you give consent.",
  es: "Gratis, con un único anuncio de banner después de que des tu consentimiento.",
};

export const apps: readonly MicroApp[] = [
  {
    id: "blubelt",
    name: "BluBelt",
    icon: "/images/apps/blubelt-icon.webp",
    copy: {
      en: {
        pitch: "A martial arts training log on the BJJ belt system.",
        details: [
          "Log each session with its date and the martial art you trained.",
          "Your belt and stripes fill in as sessions add up, and you set how many sessions a stripe takes.",
          "Stats per martial art for this week, this month, this year, all time or any date range you pick.",
          "Works offline with no account. Your log stays on your phone.",
        ],
        pricing: `${freeWithAd.en} Pro is a one-time purchase that removes the ads and adds backup and restore.`,
      },
      es: {
        pitch: "Un registro de entrenamiento de artes marciales con el sistema de cinturones del BJJ.",
        details: [
          "Registra cada sesión con su fecha y el arte marcial que entrenaste.",
          "Tu cinturón y tus grados se completan a medida que sumas sesiones, y tú decides cuántas sesiones vale cada grado.",
          "Estadísticas por arte marcial para esta semana, este mes, este año, desde siempre o el rango de fechas que elijas.",
          "Funciona sin conexión y sin cuenta. Tu registro se queda en tu teléfono.",
        ],
        pricing: `${freeWithAd.es} Pro es una compra única que elimina los anuncios y añade copia de seguridad y restauración.`,
      },
    },
    playUrl: "https://play.google.com/store/apps/details?id=com.aunova.blubelt",
    privacyUrl: "/en/privacy/blubelt",
    screenshots: [
      {
        src: "/images/apps/blubelt-01-belt.webp",
        alt: {
          en: "BluBelt home screen: a blue belt with three stripes, 390 total sessions and 50 sessions to the next stripe.",
          es: "Pantalla de inicio de BluBelt: un cinturón azul con tres grados, 390 sesiones en total y 50 sesiones hasta el siguiente grado.",
        },
        width: 540,
        height: 960,
      },
      {
        src: "/images/apps/blubelt-02-log.webp",
        alt: {
          en: "BluBelt Log tab: sessions this week and this month, the day streak, and a form to log a session by date and martial art.",
          es: "Pestaña Log de BluBelt: sesiones de esta semana y de este mes, la racha de días y un formulario para registrar una sesión por fecha y arte marcial.",
        },
        width: 540,
        height: 960,
      },
      {
        src: "/images/apps/blubelt-05-stats.webp",
        alt: {
          en: "BluBelt Stats tab: a date range picker and sessions per martial art with their share of the total.",
          es: "Pestaña Stats de BluBelt: un selector de rango de fechas y las sesiones por arte marcial con su parte del total.",
        },
        width: 540,
        height: 960,
      },
      {
        src: "/images/apps/blubelt-03-history.webp",
        alt: {
          en: "BluBelt History tab: past sessions by date and a session count per discipline.",
          es: "Pestaña History de BluBelt: sesiones anteriores por fecha y el número de sesiones por disciplina.",
        },
        width: 540,
        height: 960,
      },
    ],
  },
  {
    id: "modelmeter",
    name: "ModelMeter",
    icon: "/images/apps/modelmeter-icon.webp",
    copy: {
      en: {
        pitch: "See which local AI models your phone can run.",
        details: [
          "Reads your phone's hardware, including its memory and storage.",
          "Lists the local AI models from a curated Hugging Face snapshot that fit, grouped by how well they run.",
          "Shows the math for each model: the model file, the context reserve and what it needs in total.",
          "Filter the list by download size and tag.",
        ],
        pricing: `${freeWithAd.en} Pro is a one-time purchase that removes the ads.`,
      },
      es: {
        pitch: "Descubre qué modelos de IA locales puede ejecutar tu teléfono.",
        details: [
          "Lee el hardware de tu teléfono, incluidas su memoria y su almacenamiento.",
          "Muestra los modelos de IA locales de una instantánea seleccionada de Hugging Face que caben, agrupados según lo bien que funcionan.",
          "Enseña las cuentas de cada modelo: el archivo del modelo, la reserva de contexto y lo que necesita en total.",
          "Filtra la lista por tamaño de descarga y etiqueta.",
        ],
        pricing: `${freeWithAd.es} Pro es una compra única que elimina los anuncios.`,
      },
    },
    playUrl: "https://play.google.com/store/apps/details?id=com.aunova.modelmeter",
    privacyUrl: "/en/privacy/modelmeter",
    screenshots: [
      {
        src: "/images/apps/modelmeter-results.webp",
        alt: {
          en: "ModelMeter model list: models that run well on the phone, each with its download size and the memory it needs, with size and tag filters.",
          es: "Lista de modelos de ModelMeter: modelos que funcionan bien en el teléfono, cada uno con su tamaño de descarga y la memoria que necesita, con filtros por tamaño y etiqueta.",
        },
        width: 540,
        height: 1200,
      },
      {
        src: "/images/apps/modelmeter-model-detail.webp",
        alt: {
          en: "ModelMeter model detail for SmolLM2 135M Instruct: the memory math, model file plus context reserve equals what it needs.",
          es: "Detalle de ModelMeter para SmolLM2 135M Instruct: las cuentas de memoria, archivo del modelo más reserva de contexto igual a lo que necesita.",
        },
        width: 540,
        height: 620,
      },
    ],
  },
];
