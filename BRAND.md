# BRAND.md - Aunova Brand Guidelines

## Brand Positioning

**Who We Are**: Aunova is a software development company whose development solutions care about the environment, humanity and the future society, using cutting-edge technologies, combining AI, Blockchain, Data Analytics and Encryption to deliver the best solution.

**What We Do**: We design, build and run software: custom software and platforms, AI systems and agents, verifiable records and blockchain, privacy-preserving data systems, and data analytics and dashboards.

**How We're Different**: The four technologies are strongest combined. AI that reasons over data, encryption that keeps it private, a blockchain layer that makes the record verifiable, and analytics that turns it into decisions. Built for impact on the planet, on people and on the society we are heading into.

**Products we can show** (as "Our work", described modestly, linked out, no metrics):
- Aunova Trust Infrastructure (formerly Greenblocks): one trusted, verifiable record for real-estate projects, the Digital Building Passport. Dubai. https://aunova.ae
- CasaBook: multilingual digital guidebooks for short-stay hosts. https://casabook.app
- metaend Grade: scans a website the way an AI agent sees it and grades its agent-readiness from A to F. https://metaend-grade.fly.dev

**Entities**: Aunova OÜ (Estonia) and Aunova Technologies Ltd (DIFC, Dubai).

---

## Core Messaging

### Primary Headline
> Software that cares for the planet, its people and our future.

### Subheadline
> Aunova is a software development company. We combine AI, Blockchain, Data Analytics and Encryption into one solution that fits your problem, built with care for the environment, for humanity and for the future society.

### Supporting Line
> Four technologies. One solution.

### Primary CTA
> Start a project (secondary: Book a call)

"DA" in the owner's brief is read as Data Analytics. On the site the term comes from `src/utils/company.ts`, so it can be swapped in one place.

---

## Tone of Voice

| Attribute | Description |
|-----------|-------------|
| **Confident** | We know how to build this and say so plainly, without hype |
| **Concrete** | Name what we build and what it does; examples over abstractions |
| **Warm** | A builder you can hire, not an exclusive club |
| **Purposeful** | Care for the environment, humanity and the future society shows in the work, not in slogans |
| **Honest** | Modest about products, exact about technology, no claims we cannot back |

### Writing Guidelines
- Lead with what we build and why it matters, then how (the four technologies, combined)
- Use "we" and "you"; write to the person with the problem
- No em dashes in visible copy: use commas, colons and full stops
- No contractions and no hype words ("revolutionary", "game-changer", "cutting-edge" outside the positioning sentence)
- Drop the old manifesto framing entirely: no vendor disclaimer, no exclusivity or selection language, no "system families", no partner criteria
- Truth rules: no invented clients, logos, testimonials, numbers, team size, years, certifications or awards. No claim that a regulator, government body or the DLD backs, approves, certifies or works with an Aunova product. No customer or payment claims for metaend Grade, no user or sign-up claims for Tideproof, no licensing claims for WasmBox

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Burgundy** | `#6c0001` | rgb(108, 0, 1) | Primary brand, headings, icons, CTAs, navigation hover |
| **Sand** | `#E3DCC2` | rgb(227, 220, 194) | Secondary, backgrounds, subtle accents |
| **Black** | `#0F0F0F` | rgb(15, 15, 15) | Body text, dark backgrounds |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Backgrounds, text on dark |

### Extended Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Burgundy Light** | `#9b1c1f` | Hover states, lighter accents |
| **Burgundy Vivid** | `#a32125` | Active states, emphasis |
| **Sand Light** | `#F5F2E8` | Page backgrounds, card backgrounds |
| **Sand Dark** | `#c9c2a8` | Borders, muted elements |
| **Gray 50** | `#fafafa` | Light backgrounds |
| **Gray 100** | `#f5f5f5` | Card backgrounds |
| **Gray 400** | `#a3a3a3` | Muted text |
| **Gray 600** | `#525252` | Secondary text |

### Dark Mode Colors

| Element | Color |
|---------|-------|
| Background | `#0F0F0F` |
| Elevated Background | `#1a1a1a` |
| Text | `#f2f2f2` |
| Text Muted | `#9ca3af` |
| Border | `#2c2c2c` |
| Primary | `#9b1c1f` (lighter burgundy for contrast) |

---

## Typography

### Font Stack (System Fonts Only)
```css
--font-system: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

--font-mono: "SF Mono", Monaco, Inconsolata, "Fira Code", "Droid Sans Mono", "Source Code Pro", monospace;
```

### Type Scale (Responsive)

| Name | Size | Usage |
|------|------|-------|
| `text-5xl` | clamp(3rem, 2.4rem + 3vw, 3.75rem) | Hero headlines |
| `text-4xl` | clamp(2.25rem, 1.8rem + 2.25vw, 3rem) | Section titles |
| `text-3xl` | clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem) | Subsection titles |
| `text-2xl` | clamp(1.5rem, 1.3rem + 1vw, 1.875rem) | Card titles |
| `text-xl` | clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem) | Large body |
| `text-lg` | clamp(1.125rem, 1rem + 0.625vw, 1.25rem) | Lead paragraphs |
| `text-base` | clamp(1rem, 0.95rem + 0.25vw, 1.125rem) | Body text |
| `text-sm` | clamp(0.875rem, 0.8rem + 0.375vw, 1rem) | Small text |
| `text-xs` | clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem) | Captions |

### Font Weights
- **Headings**: 700 (Bold)
- **Body**: 400 (Regular)
- **Emphasis**: 600 (Semibold)
- **Buttons**: 600 (Semibold)

### Line Heights
- **Headings**: 1.2
- **Body**: 1.6-1.7
- **Tight**: 1.3

---

## Visual Style

### Design Aesthetic
- **"Boutique Tech"**: Warm, organic tones instead of corporate blues
- **Premium feel**: High use of whitespace, generous padding/margins
- **Clean and minimal**: Avoid clutter, let content breathe
- **Professional**: Sophisticated without being cold

### Borders & Corners
- **Border radius**: Soft, rounded corners (`0.5rem` - `1rem`)
- **Borders**: Thin, subtle (`1px solid`, muted colors)
- **Cards**: Light backgrounds with soft borders

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

### Iconography
- Minimalist line-art style
- Icons contained within circles
- Stroke color matches Burgundy primary
- 48-64px icon containers

---

## Spacing Scale

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
--space-5xl: 8rem;     /* 128px */
```

---

## Component Patterns

### Buttons (`.button` in global.css)

**Primary** (`.button--primary`, light backgrounds)
- Background: `--color-burgundy`, text white
- Pill shape (`border-radius: 9999px`), minimum height 48px
- Hover: darker burgundy, subtle lift

**Light** (`.button--light`, dark bands)
- Background: stone, text near-black

**Ghost** (`.button--ghost`)
- Transparent with a `currentColor` border; burgundy on light, stone on dark bands

### Cards
- Background: white on stone, or white on a light sand band
- Border: `1px solid` sand, or a 3px burgundy top rule for product and feature cards
- Border radius: `0.75rem` - `1.25rem`
- Padding: `1.5rem` - `2.5rem`
- Hover: subtle lift (`translate`, not `transform`, so it composes with scroll reveals)

### Section Headers
- Left-aligned: small uppercase eyebrow, serif title, muted intro (max ~40rem)
- Generous vertical spacing (`4.5rem` - `8.5rem` section padding)

---

## Layout and Bands

- Light editorial body (stone background, serif headings, generous whitespace)
- Dark cinematic bands for the hero, the technology narrative, calls to action and the footer: dark image or near-black, a scrim, light text, ember (`#e8a08c`) for small accents only
- Section headers are left-aligned: eyebrow, serif title, muted intro

---

## Photography & Imagery

### Image Style (`public/images/v2/`)
- Dark, cinematic, abstract-photoreal, one consistent grade: near-black with burgundy and warm ember light
- Hero: the earth at dawn with a luminous data network (`hero.webp`)
- One image per technology (`ai.webp`, `blockchain.webp`, `analytics.webp`, `encryption.webp`), one per "why it matters" theme (`planet.webp`, `people.webp`, `future.webp`) and one for craft (`build.webp`)
- Social card: `og.jpg` (1200x630, no text)

### Image Treatment
- Format: WebP, 3:2 at 1536x1024, with explicit width and height
- Lazy loading for everything below the hero
- A scrim wherever text sits on an image

---

## CSS Custom Properties Reference

```css
:root {
  /* Primary Colors */
  --color-burgundy: #6c0001;
  --color-burgundy-light: #9b1c1f;
  --color-burgundy-vivid: #a32125;
  --color-sand: #E3DCC2;
  --color-sand-light: #F5F2E8;
  --color-sand-dark: #c9c2a8;
  --color-black: #0F0F0F;
  --color-white: #FFFFFF;
  
  /* Semantic Colors */
  --color-primary: var(--color-burgundy);
  --color-primary-hover: var(--color-burgundy-light);
  --color-secondary: var(--color-sand);
  --color-background: var(--color-sand-light);
  --color-text: var(--color-black);
  --color-text-muted: #525252;
  --color-border: var(--color-sand-dark);
}
```

---

## Accessibility Requirements

- **Contrast**: WCAG 2.1 AA minimum (4.5:1 for body text)
- **Focus states**: Visible focus indicators (2px solid primary)
- **Touch targets**: Minimum 44x44px
- **Motion**: Respect `prefers-reduced-motion`
- **Alt text**: Descriptive for all meaningful images

---

## Do's and Don'ts

### Do
- Use burgundy as the primary accent color
- Keep designs clean with ample whitespace
- Lead with what we build and why it matters for the planet, people and society
- Use the dark cinematic v2 imagery, always behind a scrim when text sits on it
- Maintain consistent spacing and typography

### Don't
- Use bright blues, neon greens, or corporate colors
- Overcrowd layouts with too many elements
- Use startup/tech jargon
- Add decorative elements without purpose
- Sacrifice readability for style
