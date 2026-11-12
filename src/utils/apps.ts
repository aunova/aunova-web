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
  {
    id: "carrecord",
    name: "CarReport",
    icon: "/images/apps/carrecord-icon.webp",
    copy: {
      en: {
        pitch: "Check a used car in the UAE step by step, then keep one dated PDF record of it.",
        details: [
          "Type the VIN, or photograph the Mulkiya: the VIN, plate number and expiry date are read on your phone, and the photo is then discarded.",
          "For each official check, such as the RTA vehicle status certificate, the app says what to enter and opens the official website in your browser; you file the result.",
          "A 47-point inspection, including flood-damage signs, an A/C test with a 10-minute timer and a timed test drive.",
          "Your verdict lists every issue and everything that was not checked.",
          "One dated PDF of the record, kept on your phone and shared through Android's share sheet.",
        ],
        pricing: "The checklist is free. The PDF of a record costs AED 49 through Google Play, once per record. UAE only.",
      },
      es: {
        pitch: "Revisa un coche usado en los EAU paso a paso y guarda un registro en PDF con fecha.",
        details: [
          "Escribe el VIN o fotografía la Mulkiya: el VIN, la matrícula y la fecha de vencimiento se leen en tu teléfono, y después la foto se descarta.",
          "Para cada verificación oficial, como el certificado de estado del vehículo de la RTA, la app indica qué introducir y abre el sitio web oficial en tu navegador; tú registras el resultado.",
          "Una inspección de 47 puntos, con señales de daños por inundación, una prueba del aire acondicionado con temporizador de 10 minutos y una prueba de conducción cronometrada.",
          "Tu veredicto enumera cada problema y todo lo que no se revisó.",
          "Un PDF del registro con fecha, guardado en tu teléfono y compartido mediante el menú de compartir de Android.",
        ],
        pricing: "La lista de verificación es gratis. El PDF de un registro cuesta 49 AED a través de Google Play, una vez por registro. Solo en los EAU.",
      },
    },
    playUrl: "https://play.google.com/store/apps/details?id=com.aunova.carrecord",
    privacyUrl: "/en/privacy/carrecord",
    screenshots: [
      {
        src: "/images/apps/carrecord-01-home.webp",
        alt: {
          en: "Records tab: one saved record of a Toyota Land Cruiser at 2 of 6 steps, with a New record button.",
          es: "Pestaña Records: un registro guardado de un Toyota Land Cruiser en el paso 2 de 6, con un botón New record.",
        },
        width: 540,
        height: 960,
      },
      {
        src: "/images/apps/carrecord-02-record-steps.webp",
        alt: {
          en: "A record's steps: the car with its VIN done, 2 of 7 official checks filed, the 47-point inspection with one fail, then A/C test, price range and verdict.",
          es: "Los pasos de un registro: el coche con su VIN completado, 2 de 7 verificaciones oficiales registradas, la inspección de 47 puntos con un fallo y después la prueba del aire acondicionado, el rango de precios y el veredicto.",
        },
        width: 540,
        height: 960,
      },
      {
        src: "/images/apps/carrecord-06-mulkiya-read.webp",
        alt: {
          en: "The car screen: a VIN read from a Mulkiya photo, with the manufacturer, country and model year decoded from it.",
          es: "Pantalla del coche: un VIN leído de una foto de la Mulkiya, con el fabricante, el país y el año del modelo obtenidos a partir de él.",
        },
        width: 540,
        height: 960,
      },
      {
        src: "/images/apps/carrecord-05-verdict.webp",
        alt: {
          en: "The verdict: issues found, listing the EVG check refused by the seller and failed panel gaps, with the choice to walk away.",
          es: "El veredicto: problemas encontrados, con la verificación EVG rechazada por el vendedor y los huecos entre paneles con fallo, y la opción de no comprar.",
        },
        width: 540,
        height: 960,
      },
    ],
  },
];
