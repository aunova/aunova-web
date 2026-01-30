# CLAUDE.md - Aunova.net Website Rebuild Documentation

## Codebase Index

**Before exploring unfamiliar parts of the codebase, consult `.context/relationships.json`**

This file contains:

- **files**: Per-file breakdown of imports, exports, and defined symbols
- **symbols**: Global symbol-to-location index (find any function/var instantly)  
- **dependencyGraph**: Which files depend on which

### Usage patterns

1. **Finding where something is defined:**

   ```
   Look up "MyComponent" in symbols → gives you file + line number
   ```

2. **Understanding a file's dependencies:**

   ```
   Check files["src/views/main.cljs"].imports → see what it pulls in
   ```

3. **Impact analysis (what breaks if I change X):**

   ```
   Search dependencyGraph for files that import the target file
   ```

### Regenerating the index

```bash
# Manual
go run tools/indexer/main.go -root . -out .context/relationships.json

# Or it runs automatically on commit (see .git/hooks/post-commit)
```

## Tech Stack

- **Frontend**: Vite + ClojureScript (shadow-cljs)
- **Languages indexed**: .cljs, .clj, .cljc, .js, .ts, .jsx, .tsx

## Project Overview

This document serves as the comprehensive guide for AI agents (Claude or other LLMs) working on the Aunova.net website rebuild. The project involves migrating from an older Astro-based site to a modern, performant, and privacy-focused web presence.

### Migration Context

- **Source**: `aunova-old/` - Legacy Astro site with Tailwind CSS and telemetry
- **Target**: `aunova-new/` - Modern Astro 5.x with minimal JavaScript
- **Timeline**: Q3 2024
- **Status**: Active Development

## Core Principles

### 1. Performance First

- Minimize JavaScript usage - prefer CSS-only solutions
- Static Site Generation (SSG) for all pages
- System fonts only - no web font downloads
- WebP images with proper lazy loading
- Target < 1s First Contentful Paint

### 2. Privacy by Design

- Zero telemetry or tracking scripts
- GDPR compliant from day one
- No third-party cookies
- Local-first data storage (Zustand for state)
- Explicit consent for any data collection

### 3. AI & SEO Optimized

- Structured data for AI crawlers
- Semantic HTML5 markup
- Clear content hierarchy
- Descriptive meta tags
- JSON-LD schema implementation

## Technical Architecture

### Stack

```
- Runtime: Bun 1.2.21+
- Framework: Astro 5.13.2+
- State Management: Zustand
- Validation: Zod
- CSS: Modern CSS with custom properties
- Build: Static Site Generation
```

### Dependencies Policy

- **Minimal**: Only essential packages
- **Verified**: Security audit all dependencies
- **Tree-shakeable**: Prefer ES modules
- **Type-safe**: TypeScript or Zod validation

## File Structure

```
aunova-new/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── LanguageSwitch.astro
│   │   └── features/
│   │       ├── ServicePillar.astro
│   │       ├── BlogCard.astro
│   │       └── CookieNotice.astro
│   ├── content/
│   │   ├── blog/
│   │   │   ├── en/
│   │   │   └── es/
│   │   └── config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── en/
│   │   ├── es/
│   │   └── index.astro
│   ├── stores/
│   │   └── language.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── utilities.css
│   └── utils/
│       ├── i18n.ts
│       └── seo.ts
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Design System

### Color Palette

```css
:root {
  --color-burgundy: #6c0001;    /* Primary brand color */
  --color-sand: #E3DCC2;        /* Secondary accent */
  --color-black: #0F0F0F;       /* Text/Background */
  --color-white: #FFFFFF;       /* Background/Text */
  --color-gray-100: #F5F5F5;   /* Neutral light */
  --color-gray-500: #737373;   /* Neutral medium */
  --color-gray-900: #171717;   /* Neutral dark */
}
```

### Typography

```css
:root {
  --font-system: system-ui, -apple-system, BlinkMacSystemFont, 
                 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
                 'Helvetica Neue', sans-serif;
  --font-mono: 'SF Mono', Monaco, Inconsolata, 'Fira Code', 
               'Droid Sans Mono', 'Source Code Pro', monospace;
}
```

### Spacing Scale

```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
}
```

## Component Guidelines

### Astro Components

1. **Props validation**: Use Zod schemas for complex props
2. **Slots**: Prefer named slots for flexibility
3. **Client directives**: Avoid unless absolutely necessary
4. **Styling**: Use scoped styles or CSS modules

Example pattern:

```astro
---
import { z } from 'zod';

const props = z.object({
  title: z.string(),
  variant: z.enum(['primary', 'secondary']).default('primary'),
}).parse(Astro.props);
---

<div class:list={['component', props.variant]}>
  <h2>{props.title}</h2>
  <slot />
</div>

<style>
  .component {
    /* Base styles */
  }
  .primary {
    color: var(--color-burgundy);
  }
</style>
```

### CSS Modern Features

#### Using attr() with CSS

The CSS `attr()` function now supports advanced type casting and semantic attribute usage (Chrome 133+). This enables powerful dynamic styling directly from HTML attributes.

**Basic Syntax:**

```css
/* With type casting and fallback */
property: attr(attribute-name type(<type>), fallback-value);
```

**Available Types:**

- `<angle>`: deg, turn, rad
- `<color>`: named colors, rgb, hsl, oklch, etc.
- `<custom-ident>`: custom identifiers for naming
- `<integer>`: whole numbers
- `<length>`: number + unit (px, rem, em, etc.)
- `<length-percentage>`: length or percentage values
- `<number>`: fractional numbers
- `<percentage>`: percentage values
- `<resolution>`: dpi, dpcm, dppx
- `<time>`: seconds (s) or milliseconds (ms)
- `<transform-function>`: rotate(), scale(), etc.

**Dynamic Color Values:**

```css
/* Product cards with dynamic colors */
[data-color] {
  background-color: attr(data-color type(<color>), var(--color-gray-200));
  border-color: color-mix(in srgb, attr(data-color type(<color>)), black 20%);
}
```

**Star Rating System:**

```css
/* Convert rating (0-5) to percentage fill */
.star-rating {
  --fill-percent: calc(attr(data-rating type(<number>)) * 20%);
  background: linear-gradient(
    to right, 
    gold var(--fill-percent), 
    transparent var(--fill-percent)
  );
}
```

**Grid Placement:**

```css
/* Dynamic grid positioning */
.grid-item {
  grid-column: attr(data-col type(<integer>));
  grid-row: attr(data-row type(<integer>));
}
```

**Anchor Positioning:**

```css
/* Popover anchoring with custom identifiers */
.menu {
  --anchor-id: attr(data-anchor type(<custom-ident>));
}

.menu button {
  anchor-name: var(--anchor-id);
}

.menu [popover] {
  position-anchor: var(--anchor-id);
}
```

**Security Limitations:**

- Cannot use with `url()` or image functions
- Cannot be "laundered" through custom properties
- No support for background-image or src attributes

#### Container Queries

```css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

#### CSS Grid Subgrid

```css
.service-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.pillar-card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
```

## Content Strategy

### Service Pillars Content

#### 1. Zero-Knowledge & Privacy Tooling

- zkSNARKs/zkSTARKs implementation
- Privacy-preserving smart contracts
- Anonymous credential systems
- Confidential computing solutions

#### 2. Generative AI + Web3 Integration

- On-chain AI model deployment
- Decentralized AI inference
- NFT generation with AI
- DAO governance automation

#### 3. Hybrid ZK-AI Applications

- Privacy-preserving machine learning
- Federated learning on blockchain
- Confidential AI computations
- Verifiable AI outputs

#### 4. Decentralized Infrastructure & Dev Tools

- Smart contract development frameworks
- Blockchain testing suites
- DApp deployment pipelines
- Cross-chain integration tools

### Blog Migration

- Preserve URL structure for SEO
- Update metadata and excerpts
- Enhance content quality
- Add structured data
- Implement related posts

#### Published Blog Posts

- **2025-12-05**: "Why Dubai Luxury Real Estate Needs Blockchain Carbon Credits" (en)
  - Topic: Blockchain carbon credits for luxury real estate
  - Service pillars: Zero-Knowledge & Privacy, Web3 Integration, Hybrid ZK-AI, Decentralized Infrastructure
  - Technical focus: Smart contracts, wallet abstraction, privacy-preserving architecture, GDPR/UAE PDPL compliance
  - Call-to-action: Aunova's tokenized sustainability solutions

## i18n Implementation

### Language Structure

```
/en/          - English routes
/es/          - Spanish routes
/             - Auto-detect and redirect
```

### Translation Keys

```typescript
// src/utils/i18n.ts
export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      blog: 'Blog',
      contact: 'Contact',
    },
    // ...
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      blog: 'Blog',
      contact: 'Contacto',
    },
    // ...
  }
};
```

### Language Persistence

```typescript
// src/stores/language.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-preference',
    }
  )
);
```

## SEO & AI Visibility

### Meta Tags Template

```astro
---
const { title, description, image } = Astro.props;
---
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{title} | Aunova</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta name="twitter:card" content="summary_large_image" />
```

### Structured Data

```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aunova",
  "url": "https://aunova.net",
  "logo": "https://aunova.net/logo.svg",
  "sameAs": [
    "https://bsky.app/profile/aunova.net"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "url": "https://cal.com/ngmisl/aunova"
  }
}
</script>
```

## GDPR Compliance

### Cookie Notice Component

```astro
---
// CookieNotice.astro
---
<div id="cookie-notice" class="cookie-notice" hidden>
  <p>We respect your privacy. This site uses no tracking cookies.</p>
  <button onclick="acceptCookies()">Understood</button>
</div>

<script>
  function acceptCookies() {
    localStorage.setItem('cookies-accepted', 'true');
    document.getElementById('cookie-notice').hidden = true;
  }
  
  if (!localStorage.getItem('cookies-accepted')) {
    document.getElementById('cookie-notice').hidden = false;
  }
</script>
```

### Privacy Policy Requirements

- Data collection disclosure
- Third-party services listing
- User rights explanation
- Contact information
- Update history

## Performance Checklist

### Build Optimization

- [ ] Enable Astro compression
- [ ] Minify HTML/CSS/JS
- [ ] Generate sitemap
- [ ] Create robots.txt
- [ ] Optimize images to WebP
- [ ] Implement critical CSS

### Runtime Performance

- [ ] Lazy load images
- [ ] Defer non-critical scripts
- [ ] Use CSS containment
- [ ] Implement service worker
- [ ] Enable browser caching
- [ ] Preconnect to external domains

## Testing Guidelines

### Accessibility

- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios
- Focus indicators
- ARIA labels

### Cross-browser

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest 2 versions)
- Mobile browsers

### Performance Metrics

- Lighthouse score > 95
- First Contentful Paint < 1s
- Time to Interactive < 2s
- Cumulative Layout Shift < 0.1

## Deployment Notes

### Build Command

```bash
bun run build
```

### Environment Variables

```env
PUBLIC_SITE_URL=https://aunova.net
PUBLIC_CAL_LINK=https://cal.com/ngmisl/aunova
PUBLIC_BLUESKY_URL=https://bsky.app/profile/aunova.net
```

### Static Hosting

- Netlify/Vercel recommended
- Enable compression
- Set cache headers
- Configure redirects for i18n

## Common Patterns

### Responsive Images

```astro
<picture>
  <source srcset="/images/hero.webp" type="image/webp">
  <img src="/images/hero.jpg" alt="Hero image" loading="lazy">
</picture>
```

### Dynamic Styles with CSS Variables

```astro
---
const { color } = Astro.props;
---
<span style={`--accent-color: ${color}`}>
  Content
</span>

<style>
  span {
    color: var(--accent-color, var(--color-burgundy));
  }
</style>
```

### Advanced attr() Patterns

#### Service Pillar Cards with Dynamic Colors

```astro
---
// ServicePillar.astro
const { title, icon, color } = Astro.props;
---
<article class="service-pillar" data-theme-color={color}>
  <div class="pillar-icon">{icon}</div>
  <h3>{title}</h3>
  <slot />
</article>

<style>
  .service-pillar {
    --pillar-color: attr(data-theme-color type(<color>), var(--color-burgundy));
    border-left: 4px solid var(--pillar-color);
    background: color-mix(in srgb, var(--pillar-color), transparent 95%);
  }
  
  .pillar-icon {
    color: var(--pillar-color);
  }
</style>
```

#### Dynamic Grid Layout for Blog Cards

```astro
---
// BlogCard.astro with priority-based grid placement
const { priority, featured } = Astro.props;
---
<article 
  class="blog-card" 
  data-priority={priority}
  data-span={featured ? 2 : 1}
>
  <slot />
</article>

<style>
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .blog-card {
    grid-column: span attr(data-span type(<integer>));
    order: attr(data-priority type(<integer>));
  }
</style>
```

#### Theme-aware Components

```astro
---
// Component with theme data attributes
---
<div class="theme-aware" data-theme="dark" data-accent="blue">
  <slot />
</div>

<style>
  .theme-aware {
    --theme-bg: light-dark(
      var(--color-white), 
      attr(data-theme type(<custom-ident>))
    );
    --accent-color: attr(data-accent type(<custom-ident>));
    
    background-color: var(--theme-bg);
    accent-color: var(--accent-color);
  }
</style>
```

### Conditional Rendering

```astro
---
const { showCTA } = Astro.props;
---
{showCTA && (
  <div class="cta">
    <a href="/contact">Get Started</a>
  </div>
)}
```

## Troubleshooting

### Common Issues

1. **Build failures**: Check Node/Bun version compatibility
2. **Style conflicts**: Ensure CSS custom properties are defined
3. **i18n routing**: Verify language detection logic
4. **Image optimization**: Confirm WebP support and fallbacks

### Debug Mode

```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    logLevel: 'info',
    build: {
      sourcemap: true,
    },
  },
});
```

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Modern CSS Features](https://web.dev/css)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Structured Data Testing](https://search.google.com/test/rich-results)

## Update Log

- **2025-01-21**: Enhanced CSS attr() documentation with new capabilities
- Added advanced type casting examples (Chrome 133+ features)
- Included practical patterns for service pillars, blog grids, and theming
- **2024-08-20**: Initial documentation created
- Migration from aunova-old initiated
- Core design system established
- Component architecture defined

---

*This document should be updated as the project evolves. All AI agents should reference this as the source of truth for project guidelines and patterns.*
