// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://aunova.net",
  output: "static",
  // Greenblocks (now Aunova Trust Infrastructure) lives on aunova.ae.
  redirects: {
    "/greenblocks": "https://aunova.ae/",
    "/es/greenblocks": "https://aunova.ae/",
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
        },
      },
    },
    ssr: {
      noExternal: ["zustand"],
    },
  },
  // Telemetry disabled via: astro telemetry disable
});
