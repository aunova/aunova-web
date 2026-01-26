# AGENTS.md - Aunova Website Quick reference for AI coding agents

## Summary

**Brand**: Aunova - Long-term systems partner for human- and planet-critical infrastructure.

**Positioning**: We are not a software vendor. We are long-term systems partners, co-building foundational digital infrastructure for domains where failure has real human or environmental consequences.

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
│   ├── layout/      # Header, Footer, Navigation
│   ├── ui/          # Button, Card, Badge, BlogCard
│   └── features/    # SystemFamilyCard, PartnershipJourney, CriteriaList
├── content/blog/    # MDX posts (en/, es/ subdirs)
├── layouts/         # BaseLayout, PageLayout, MarkdownLayout
├── pages/
│   ├── en/          # English routes
│   ├── es/          # Spanish routes
│   └── index.astro  # Root redirect
├── stores/          # Zustand stores (theme.ts, language.ts)
├── styles/          # global.css, utilities.css
├── utils/           # i18n.ts helpers
└── schemas/         # Shared Zod schemas
```

## Website Sections

The homepage consists of these sections (in order):
1. **Hero** - Partnership invitation with hero image
2. **Different Company** - "A Different Kind of Technology Company"
3. **System Families** - GreenBlocks featured, future families teaser
4. **Partnership Journey** - 5-step process (Alignment → Co-Design → Proof → Development → Alliance)
5. **Partner Criteria** - Who we work with + boundary statement
6. **Why Aunova** - Mission and philosophy
7. **CTA** - "Begin a Strategic Conversation"

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
| Components | PascalCase | `Button.astro`, `SystemFamilyCard.astro` |
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

1. **Long-term thinking**: Build for 10+ year horizons
2. **Selective partnerships**: Quality over quantity
3. **Human & planetary impact**: Real-world consequences matter
4. **Shared infrastructure**: Systems become shared assets
5. **Trust over transactions**: Partnership model, not vendor relationship

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
