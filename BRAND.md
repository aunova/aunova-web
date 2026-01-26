# BRAND.md - Aunova Brand Guidelines

## Brand Positioning

**Who We Are**: Aunova is a long-term systems partner for human- and planet-critical infrastructure.

**What We Do**: We co-build foundational digital infrastructure for domains where failure has real human or environmental consequences.

**How We're Different**: We are not a software vendor. We engage selectively, build for decades, and design systems meant to become shared layers within the worlds they serve.

---

## Core Messaging

### Primary Headline
> We partner with institutions to build the human- and planet-critical systems their future depends on.

### Subheadline
> We are not a software vendor. We are long-term systems partners, co-building foundational digital infrastructure for domains where failure has real human or environmental consequences.

### Supporting Line
> We work with a small number of aligned organizations to design systems that protect people, respect the planet, and endure.

### Primary CTA
> Begin a Strategic Conversation

---

## Tone of Voice

| Attribute | Description |
|-----------|-------------|
| **Professional** | Serious about long-term impact, not casual or trendy |
| **Mission-Driven** | Every word reflects purpose and responsibility |
| **Selective** | We choose partners carefully; language reflects exclusivity |
| **Long-Term** | 10+ year horizons; we think in decades, not sprints |
| **Warm but Formal** | Approachable expertise, not cold corporate speak |

### Writing Guidelines
- Use "we" and "our partners" language
- Avoid jargon and buzzwords
- Be direct about what we don't do (boundary statements)
- Lead with purpose, not features
- Emphasize shared responsibility and co-creation

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
| **Green (GreenBlocks)** | `#22c55e` | GreenBlocks system family accent |
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

### Buttons

**Primary Button**
- Background: `--color-burgundy`
- Text: White
- Padding: `0.5rem 2rem`
- Border radius: `0.5rem`
- Hover: Slightly darker, subtle lift (`translateY(-2px)`)

**Outline Button**
- Background: Transparent
- Border: `2px solid --color-burgundy`
- Text: `--color-burgundy`
- Hover: Fill with burgundy, text white

### Cards
- Background: `--color-sand-light` or white
- Border: `1px solid` sand-dark or very subtle
- Border radius: `0.75rem` - `1rem`
- Padding: `1.5rem` - `2rem`
- Hover: Subtle lift, slightly stronger border

### Section Headers
- Centered text
- Title in burgundy or dark
- Subtitle in muted gray
- Generous vertical spacing (`4rem` - `6rem`)

---

## System Families Visual Identity

### GreenBlocks
- **Accent Color**: `#22c55e` (Green)
- **Icon**: Leaf + building combined
- **Feeling**: Environmental responsibility, sustainable growth

### Future Families (Placeholder Style)
- Muted/gray treatment
- "In development" label
- Consistent icon style but desaturated

---

## Photography & Imagery

### Hero Image Style
- Architectural imagery with green/sustainable elements
- Golden hour lighting preferred
- Human scale (people in environment)
- Modern, forward-looking architecture
- Nature integrated with built environment

### Image Treatment
- Format: WebP with fallback
- Lazy loading for non-critical images
- Aspect ratios: 16:9 for heroes, 4:3 for cards
- Subtle overlay for text readability if needed

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
  
  /* System Families */
  --color-greenblocks: #22c55e;
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
- Lead with mission and purpose
- Use warm, inviting imagery
- Maintain consistent spacing and typography

### Don't
- Use bright blues, greens (except GreenBlocks accent), or corporate colors
- Overcrowd layouts with too many elements
- Use startup/tech jargon
- Add decorative elements without purpose
- Sacrifice readability for style
