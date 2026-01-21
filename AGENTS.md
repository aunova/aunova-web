# AGENTS.md - Aunova Website

Quick reference for AI coding agents. For detailed docs, see CLAUDE.md.

## Commands

```bash
# Package manager: Bun (required)
bun install          # Install dependencies
bun run dev          # Start dev server (localhost:4321)
bun run build        # Production build to dist/
bun run preview      # Preview production build
bun run deploy       # Build + create CNAME for GitHub Pages
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
│   ├── layout/       # Header, Footer, Navigation
│   ├── ui/           # Button, Card, Badge, BlogCard
│   └── features/     # ServicePillar, CookieNotice
├── content/blog/     # MDX posts (en/, es/ subdirs)
├── layouts/          # BaseLayout, PageLayout, MarkdownLayout
├── pages/
│   ├── en/           # English routes
│   ├── es/           # Spanish routes
│   └── index.astro   # Root redirect
├── stores/           # Zustand stores (theme.ts, language.ts)
├── styles/           # global.css, utilities.css
└── utils/            # i18n.ts helpers
```

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
import { z } from 'zod';

const props = z.object({
  title: z.string(),
  variant: z.enum(['primary', 'secondary']).default('primary'),
}).parse(Astro.props);
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
const { title, description, lang } = Astro.props;
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

**Design tokens**:

```css
--color-burgundy: #672042;    /* Primary */
--color-sand: #E3DCC2;        /* Secondary */
--color-black: #0F0F0F;
--color-white: #FFFFFF;
--space-{xs,sm,md,lg,xl,2xl,3xl}  /* 4px to 64px scale */
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button.astro`, `ServicePillar.astro` |
| TypeScript files | camelCase | `i18n.ts`, `theme.ts` |
| Routes/slugs | kebab-case | `/services/zero-knowledge` |
| CSS classes | kebab-case | `.blog-card`, `.btn-primary` |
| CSS variables | kebab-case | `--color-burgundy`, `--space-md` |

### Imports

```astro
---
// 1. External packages
import { z } from 'zod';

// 2. Layouts
import BaseLayout from "../layouts/BaseLayout.astro";

// 3. Components (by category)
import Header from "../components/layout/Header.astro";
import Button from "../components/ui/Button.astro";

// 4. Utils
import { getTranslation, getCurrentLanguage } from "../utils/i18n";
---
```

## i18n

- Routes: `/en/...` and `/es/...`
- Root `/` redirects to `/en/`
- Translations in `src/utils/i18n.ts`

```typescript
import { getTranslation, getCurrentLanguage, type Language } from "../utils/i18n";

const lang = getCurrentLanguage(Astro.url);
const t = getTranslation(lang);
// Use: t.nav.home, t.hero.title, etc.
```

## Content (Blog)

MDX files in `src/content/blog/{en,es}/`:

```mdx
---
title: "Post Title"
description: "Post description"
date: 2024-01-01
image: "/images/blog/post-image.webp"
author: "Author Name"
---

Content here...
```

## Key Principles

1. **Performance first**: Minimize JS, prefer CSS-only solutions
2. **Privacy by design**: Zero telemetry, no third-party cookies
3. **Static generation**: All pages are SSG
4. **Accessibility**: WCAG 2.1 AA, keyboard nav, ARIA labels
5. **SEO/AI optimized**: Semantic HTML, JSON-LD structured data

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

*For detailed architecture, design system, and patterns, see CLAUDE.md*
