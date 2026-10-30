# AGENTS.md - Aunova Website Quick reference for AI coding agents

## Summary

**Brand**: Aunova - Software development company. Development solutions that care about the environment, humanity and the future society.

**Positioning**: Aunova is a software development company whose development solutions care about the environment, humanity and the future society, using cutting-edge technologies, combining AI, Blockchain, Data Analytics and Encryption to deliver the best solution. A builder you can hire: lead with what we build and why it matters, then how (the four technologies, combined).

**Single source**: the positioning sentence, the technology names, products, contact links and legal entities live in `src/utils/company.ts`. "DA" in the owner's brief is read as Data Analytics; swap it there (EN + ES) if it should be Data Availability. All page copy (EN + ES) lives in `src/utils/i18n.ts`; llms.txt, llms-full.txt, agents.txt, `/api/company-info.json` and `/ai-metadata.json` are generated from both.

**Products shown as "Our work"** (link out, describe modestly, no metrics): Aunova Trust Infrastructure (formerly Greenblocks, https://aunova.ae), CasaBook (https://casabook.app), metaend Grade (https://metaend-grade.fly.dev).

**Goal**: Maximize static generation, minimize client JS, optimize LLM token usage.

## Commands

```bash
bun install        # Install dependencies
bun run dev       # Start dev server (localhost:4321)
bun run build     # Production build to dist/
bun run preview   # Preview production build
bun run deploy    # Build + create CNAME for GitHub Pages
```

**No test suite configured.** Verify changes with `bun run build`.

## Stack

- **Runtime**: Bun 1.2.21+
- **Framework**: Astro 5.13+ (Static Site Generation)
- **Validation**: Zod
- **State**: Zustand (avoid client-side JS when possible)
- **CSS**: Modern CSS custom properties, no Tailwind

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header (popover menu), Footer
│   ├── home/        # Home, Hero (OGL network), Convergence (GSAP + Lenis), Impact, Work
│   ├── sections/    # Capabilities, Process, CtaBand, PageHero (shared by home and services)
│   ├── services/    # ServicesPage (en + es), DeepDive (Encryption deep dives)
│   ├── ui/          # Button, Badge, BlogCard (blog pages)
│   └── features/    # CookieNotice
├── content/blog/    # MDX posts (en/, es/ subdirs)
├── layouts/         # BaseLayout, PageLayout, MarkdownLayout
├── pages/
│   ├── en/          # English routes
│   ├── es/          # Spanish routes
│   └── index.astro  # English home (/en/ redirects here)
├── stores/          # Zustand stores (theme.ts, language.ts)
├── styles/          # global.css, utilities.css
├── scripts/         # hero-network.ts (OGL), convergence.ts (GSAP + Lenis), webmcp.ts
└── utils/           # i18n.ts (EN + ES copy), company.ts (shared facts)
```

## Website Sections

The homepage (`/` and `/es/`, both rendered by `components/home/Home.astro`) consists of these sections (in order):
1. **Hero** - Positioning headline and subline over a living OGL node network (static `hero.webp` fallback); CTAs "Start a project" and "What we build"
2. **What we build** (`#services`) - Custom software, AI systems and agents, verifiable records and blockchain, privacy-preserving data systems, data analytics
3. **Four technologies, one solution** (`#technology`) - Pinned GSAP narrative: AI, Blockchain, Data Analytics, Encryption, resolving into one solution with a plain example
4. **Why it matters** (`#impact`) - Environment, humanity, future society
5. **Our work** (`#work`) - The three products, linking out
6. **How we work** (`#process`) - Discover, Design, Build, Run & improve
7. **CTA band** (`#start`) - Start a project / Book a call

## Motion

- Page-to-page: native cross-document View Transitions (`@view-transition` in global.css). No JS router: do not reintroduce `<ClientRouter />` or rely on `astro:page-load`.
- Section reveals: CSS scroll-driven animations (`.reveal`), behind `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference`. Write them with animation longhands; the minifier folds `animation-timeline` into the `animation` shorthand, which browsers reject.
- GSAP ScrollTrigger + Lenis: only the home convergence narrative, dynamically imported on large screens with motion allowed.
- OGL: only the home hero network, loaded after `load` on idle, paused off-screen and on hidden tabs.
- Everything must read fully without JavaScript and with reduced motion.

## Code Style

### TypeScript

- Strict mode enabled (`astro/tsconfigs/strict`)
- Use `as const` for literal objects
- Prefer explicit types over inference for exports
- **NEVER use**: `as any`, `@ts-ignore`, `@ts-expect-error`

### Astro Components

**Props validation with Zod** (required for complex props):

```astro
---
import { blogSchema } from "../schemas/blog";
const props = blogSchema.parse(Astro.props);
---
```

**Interface Props** (for layouts):

```astro
---
export interface Props {
  title: string;
  description?: string;
  lang?: "en" | "es";
}

const { title, description, lang = "en" } = Astro.props;
---
```

**Class lists**:

```astro
<div class:list={['base-class', props.variant, props.class]} />
```

### CSS

- Use CSS custom properties from global.css
- Prefer scoped `<style>` in components
- Container queries and subgrid are encouraged
- **No web fonts** - system fonts only

**Design tokens** (see BRAND.md for full details):

```css
/* Primary Colors */
--color-burgundy: #6c0001;    /* Primary brand color */
--color-sand: #E3DCC2;        /* Secondary/background */
--color-black: #0F0F0F;       /* Text */
--color-white: #FFFFFF;

/* Spacing Scale */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button.astro`, `CtaBand.astro` |
| TypeScript files | camelCase | `i18n.ts`, `theme.ts` |
| Routes/slugs | kebab-case | `/en/about`, `/en/contact` |
| CSS classes | kebab-case | `.hero-section`, `.btn-primary` |
| CSS variables | kebab-case | `--color-burgundy`, `--space-md` |

### Imports Order

```astro
---
// 1. External packages
import { z } from 'zod';

// 2. Shared schemas/utils
import { blogSchema } from "../schemas/blog";
import { getTranslation } from "../utils/i18n";

// 3. Components (by category)
import Header from "../components/layout/Header.astro";
import Button from "../components/ui/Button.astro";

// 4. Layouts
import BaseLayout from "../layouts/BaseLayout.astro";
---
```

## i18n Optimization

- Routes: `/en/...` and `/es/...`
- Root `/` redirects to `/en/`
- Translations in `src/utils/i18n.ts`

```typescript
export function getTranslation(lang: "en" | "es") {
  return translations[lang] || translations[defaultLang];
}

export function getCurrentLanguage(url: URL): "en" | "es" {
  const path = url.pathname;
  return path.startsWith("/es/") ? "es" : "en";
}
```

## Content (Blog) Optimization

MDX files in `src/content/blog/{en,es}/`:

```mdx
---
title: "Post Title"
description: "Post description"
date: 2024-01-01
image: "/images/blog/post-image.webp"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Content here...
```

## Key Principles

1. **Performance first**: Minimize JS, prefer CSS-only solutions
2. **Privacy by design**: Zero telemetry, no third-party cookies
3. **Static generation**: All pages are SSG
4. **Accessibility**: WCAG 2.1 AA, keyboard nav, ARIA labels
5. **SEO/AI optimized**: Semantic HTML, JSON-LD structured data

## Brand Principles

1. **Builder you can hire**: Confident, concrete and warm. Lead with what we build, not with who we turn away
2. **Impact on planet, people and society**: Every solution is weighed for the environment, humanity and the future society
3. **Four technologies, combined**: AI, Blockchain, Data Analytics and Encryption are strongest together, and only where the problem needs them
4. **Truth first**: No invented clients, logos, testimonials, numbers, team size, years, certifications or awards; no regulator or government endorsements
5. **Plain copy**: No em dashes in visible copy (use commas, colons, full stops), no hype words

## Constraints

- **No client directives** (`client:load`, etc.) unless absolutely required
- **No web fonts** - use system font stack
- **No tracking scripts** - privacy first
- **WebP images** with lazy loading
- **Target Lighthouse > 95**

## Error Handling

- Validate props with Zod at component boundary
- Graceful fallbacks for missing translations
- 404 page at `/404.astro`

## Before Committing

1. Run `bun run build` - must succeed
2. Check for TypeScript errors
3. Verify i18n: both `/en/` and `/es/` routes work
4. Test responsive layout at mobile/tablet/desktop

---

*For detailed brand guidelines, colors, and typography, see BRAND.md*
