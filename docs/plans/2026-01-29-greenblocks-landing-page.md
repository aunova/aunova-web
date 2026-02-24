# Greenblocks Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a unique, atmospheric `/greenblocks` landing page within the Aunova website that showcases Greenblocks as "Community Impact Infrastructure" with its own distinct visual identity while maintaining integration with the Aunova site.

**Architecture:** The page will be a standalone Astro page at `/src/pages/greenblocks.astro` using the existing `PageLayout` wrapper but with a completely custom dark green atmospheric design. We'll add the Greenblocks-specific fonts (Clash Display, Satoshi) and create a self-contained stylesheet using the provided `greenblocks.css` as reference. The page structure follows the 9-section content outline from the design brief.

**Tech Stack:** Astro 5.x, CSS Custom Properties, lucide-astro icons, PageLayout wrapper

---

## Task 1: Add Greenblocks Fonts to Public Directory

**Files:**
- Verify: `public/fonts/ClashDisplay-Bold.woff2` (already exists per git status)
- Verify: `public/fonts/ClashDisplay-Semibold.woff2` (already exists per git status)
- Verify: `public/fonts/Satoshi-Bold.woff2` (already exists per git status)
- Verify: `public/fonts/Satoshi-Regular.woff2` (already exists per git status)

**Step 1: Verify fonts exist**

Run: `ls -la /home/christian/dev/astro/aunova/aunova-new/public/fonts/*.woff2`

Expected: All 4 Greenblocks fonts listed (ClashDisplay-Bold, ClashDisplay-Semibold, Satoshi-Bold, Satoshi-Regular)

**Step 2: Commit fonts if not already tracked**

Run: `cd /home/christian/dev/astro/aunova/aunova-new && git status public/fonts/`

If untracked:
```bash
git add public/fonts/ClashDisplay-Bold.woff2 public/fonts/ClashDisplay-Semibold.woff2 public/fonts/Satoshi-Bold.woff2 public/fonts/Satoshi-Regular.woff2
git commit -m "feat: add Greenblocks fonts (Clash Display, Satoshi)"
```

---

## Task 2: Create the Greenblocks Page Structure

**Files:**
- Create: `src/pages/greenblocks.astro`

**Step 1: Create basic page scaffold**

```astro
---
import PageLayout from "../layouts/PageLayout.astro";
import {
  Leaf,
  Building2,
  Users,
  Heart,
  TreeDeciduous,
  Sparkles,
  Target,
  Handshake,
  Clock,
  ArrowRight,
} from "lucide-astro";

const lang = "en";
---

<PageLayout
  title="Greenblocks by Aunova - Community Impact Infrastructure"
  description="The foundational infrastructure layer for sustainable, healthy, and living communities. Greenblocks enables a new way of living where environmental responsibility, healthy living, and human connection are embedded into how communities function."
  lang={lang}
>
  <link slot="head" rel="preload" as="font" type="font/woff2" href="/fonts/ClashDisplay-Semibold.woff2" crossorigin />
  <link slot="head" rel="preload" as="font" type="font/woff2" href="/fonts/Satoshi-Regular.woff2" crossorigin />

  <div class="gb-page">
    <!-- Atmospheric background -->
    <div class="gb-atmosphere"></div>

    <!-- Floating particles -->
    <div class="gb-particles" aria-hidden="true">
      <div class="gb-particle" style="left: 10%; animation-delay: 0s;"></div>
      <div class="gb-particle" style="left: 25%; animation-delay: 2s;"></div>
      <div class="gb-particle" style="left: 40%; animation-delay: 4s;"></div>
      <div class="gb-particle" style="left: 55%; animation-delay: 6s;"></div>
      <div class="gb-particle" style="left: 70%; animation-delay: 8s;"></div>
      <div class="gb-particle" style="left: 85%; animation-delay: 10s;"></div>
    </div>

    <!-- Content sections will go here -->
    <p style="color: white; padding: 100px; text-align: center;">Greenblocks page scaffold - content coming next</p>
  </div>
</PageLayout>

<style>
  /* Greenblocks styles will be added in subsequent tasks */
</style>
```

**Step 2: Verify page renders**

Run: `cd /home/christian/dev/astro/aunova/aunova-new && bun run dev`

Expected: Navigate to http://localhost:4321/greenblocks - page loads with scaffold message

**Step 3: Commit scaffold**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: add Greenblocks landing page scaffold"
```

---

## Task 3: Add Greenblocks CSS Foundation

**Files:**
- Modify: `src/pages/greenblocks.astro` (add `<style>` section)

**Step 1: Add font-face declarations and CSS custom properties**

Add to the `<style>` section in `greenblocks.astro`:

```css
/* Greenblocks Fonts */
@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Bold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

/* Greenblocks Design Tokens */
.gb-page {
  --gb-bg-primary: #0c1a0f;
  --gb-bg-secondary: #132416;
  --gb-bg-tertiary: #1a2f1c;
  --gb-text-primary: #f4f7f4;
  --gb-text-secondary: #8fa68f;
  --gb-text-muted: #5a6e5a;
  --gb-accent: #7dd87d;
  --gb-accent-dim: #5cb85c;
  --gb-accent-glow: rgba(125, 216, 125, 0.35);
  --gb-warm: #d4a574;
  --gb-warm-glow: rgba(212, 165, 116, 0.25);

  --gb-font-display: 'Clash Display', system-ui, sans-serif;
  --gb-font-body: 'Satoshi', system-ui, sans-serif;

  --gb-section-padding: clamp(4rem, 10vw, 8rem);
  --gb-container-max: 1200px;

  --gb-ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --gb-duration-fast: 0.4s;
  --gb-duration-normal: 0.7s;
}

/* Base page styles */
.gb-page {
  font-family: var(--gb-font-body);
  background: var(--gb-bg-primary);
  color: var(--gb-text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  position: relative;
  min-height: 100vh;
}

/* Atmospheric background gradient */
.gb-atmosphere {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 15% 100%, rgba(125, 216, 125, 0.12) 0%, transparent 55%),
    radial-gradient(ellipse 60% 50% at 85% 10%, rgba(212, 165, 116, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 50% 40% at 50% 50%, rgba(125, 216, 125, 0.05) 0%, transparent 60%),
    linear-gradient(180deg, var(--gb-bg-primary) 0%, var(--gb-bg-secondary) 50%, var(--gb-bg-tertiary) 100%);
  z-index: -2;
  pointer-events: none;
}

/* Floating particles */
.gb-particles {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.gb-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--gb-accent);
  border-radius: 50%;
  opacity: 0;
  bottom: -10px;
  animation: gb-particle-float 12s ease-in-out infinite;
}

@keyframes gb-particle-float {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
  5% { opacity: 0.6; }
  95% { opacity: 0.6; }
  100% {
    transform: translateY(-100vh) translateX(30px) scale(0.5);
    opacity: 0;
  }
}

/* Container */
.gb-container {
  max-width: var(--gb-container-max);
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}

/* Section base */
.gb-section {
  padding: var(--gb-section-padding) 0;
  position: relative;
}

@media (prefers-reduced-motion: reduce) {
  .gb-particle {
    animation: none;
    opacity: 0.3;
  }
}
```

**Step 2: Verify styles apply**

Run: `bun run dev` (if not running)

Expected: Dark green atmospheric background with floating particles visible at http://localhost:4321/greenblocks

**Step 3: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: add Greenblocks CSS foundation with atmospheric effects"
```

---

## Task 4: Implement Hero Section (Section 1)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add Hero section HTML**

Replace the placeholder `<p>` tag with:

```astro
<!-- Section 1: Hero -->
<section class="gb-hero gb-section">
  <div class="gb-container">
    <div class="gb-hero-content">
      <span class="gb-label">Greenblocks by Aunova</span>
      <h1 class="gb-title gb-title-lg">
        Community Impact<br />
        <span class="gb-highlight">Infrastructure</span>
      </h1>
      <div class="gb-divider gb-divider-center"></div>
      <p class="gb-text gb-text-lg" style="margin: 0 auto; text-align: center;">
        The foundational infrastructure layer for sustainable, healthy, and living communities.
      </p>
      <p class="gb-text" style="margin: var(--space-lg) auto 0; text-align: center; max-width: 600px;">
        Greenblocks enables a new way of living — where environmental responsibility,
        healthy living, and human connection are embedded into how communities function.
      </p>
      <div class="gb-hero-cta">
        <a href="/en/contact" class="gb-btn gb-btn-primary">
          Begin a Conversation
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add Hero CSS**

Add to `<style>`:

```css
/* Hero Section */
.gb-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.gb-hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.gb-hero-cta {
  margin-top: var(--space-2xl);
}

/* Typography */
.gb-label {
  font-family: var(--gb-font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gb-accent);
  margin-bottom: 1.5rem;
  display: block;
}

.gb-title {
  font-family: var(--gb-font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  color: var(--gb-text-primary);
}

.gb-title-lg {
  font-size: clamp(3.5rem, 10vw, 7rem);
  line-height: 1;
}

.gb-text {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: var(--gb-text-secondary);
  line-height: 1.7;
  max-width: 700px;
}

.gb-text-lg {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
}

.gb-highlight {
  color: var(--gb-accent);
  text-shadow: 0 0 60px var(--gb-accent-glow);
}

.gb-warm {
  color: var(--gb-warm);
  text-shadow: 0 0 60px var(--gb-warm-glow);
}

/* Divider */
.gb-divider {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gb-accent), transparent);
  margin: 2rem 0;
}

.gb-divider-center {
  margin-left: auto;
  margin-right: auto;
}

/* Buttons */
.gb-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-family: var(--gb-font-body);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s var(--gb-ease-out-expo);
  cursor: pointer;
  border: none;
}

.gb-btn-primary {
  background: var(--gb-accent);
  color: var(--gb-bg-primary);
}

.gb-btn-primary:hover {
  background: var(--gb-accent-dim);
  transform: translateY(-2px);
  box-shadow: 0 10px 40px var(--gb-accent-glow);
  text-decoration: none;
  color: var(--gb-bg-primary);
}

.gb-btn :global(svg) {
  width: 18px;
  height: 18px;
}
```

**Step 3: Verify hero renders correctly**

Expected: Full-height hero with large "Community Impact Infrastructure" title, green accent text, and CTA button

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks hero section"
```

---

## Task 5: Implement Problem Section (Section 2)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add Problem section HTML**

Add after the hero section:

```astro
<!-- Section 2: The Problem -->
<section class="gb-section" id="problem">
  <div class="gb-container">
    <span class="gb-label">The Challenge</span>
    <h2 class="gb-heading">Modern communities are <span class="gb-warm">structurally blind</span></h2>

    <div class="gb-content-grid">
      <div class="gb-content-text">
        <p class="gb-text">
          People live in buildings, but not in communities. Daily life produces
          environmental, health, and social consequences — yet these remain largely invisible.
        </p>
        <p class="gb-text">
          Cities and developments today operate without real infrastructure to:
        </p>
        <ul class="gb-feature-list">
          <li>understand their environmental impact</li>
          <li>support healthy living by default</li>
          <li>connect daily behavior to long-term outcomes</li>
          <li>cultivate real community life</li>
        </ul>
      </div>
      <div class="gb-content-aside">
        <div class="gb-card">
          <p class="gb-card-text" style="font-style: italic; color: var(--gb-text-secondary);">
            Sustainability becomes reporting.<br />
            Health becomes an individual struggle.<br />
            Community becomes accidental.
          </p>
          <div class="gb-divider" style="margin: 1.5rem 0;"></div>
          <p class="gb-card-text" style="color: var(--gb-accent); font-weight: 600;">
            What is missing is community impact infrastructure.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add Problem section CSS**

Add to `<style>`:

```css
/* Headings */
.gb-heading {
  font-family: var(--gb-font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  color: var(--gb-text-primary);
}

/* Content Grid */
.gb-content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .gb-content-grid {
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
  }
}

.gb-content-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Feature List */
.gb-feature-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.gb-feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1rem;
  color: var(--gb-text-secondary);
  line-height: 1.6;
}

.gb-feature-list li::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--gb-accent);
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
  box-shadow: 0 0 12px var(--gb-accent-glow);
}

/* Cards */
.gb-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.4s var(--gb-ease-out-expo);
}

.gb-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(125, 216, 125, 0.2);
  transform: translateY(-4px);
}

.gb-card-text {
  font-size: 0.95rem;
  color: var(--gb-text-secondary);
  line-height: 1.7;
  margin: 0;
}
```

**Step 3: Verify section renders**

Expected: Two-column layout with problem description on left, insight card on right

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks problem section"
```

---

## Task 6: Implement The Shift Section (Section 3)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add The Shift section HTML**

Add after problem section:

```astro
<!-- Section 3: The Shift -->
<section class="gb-section gb-section-alt" id="shift">
  <div class="gb-container">
    <span class="gb-label">The Transformation</span>
    <h2 class="gb-heading">From isolated living to <span class="gb-highlight">conscious community life</span></h2>

    <p class="gb-text" style="max-width: 800px;">
      Greenblocks exists to support a shift in how communities are designed and operated.
    </p>

    <div class="gb-shift-grid">
      <div class="gb-shift-card gb-shift-from">
        <h3 class="gb-subheading" style="color: var(--gb-text-muted);">From</h3>
        <ul class="gb-shift-list">
          <li>buildings as assets</li>
          <li>sustainability as a label</li>
          <li>health as a personal responsibility</li>
        </ul>
      </div>

      <div class="gb-shift-arrow">
        <ArrowRight size={32} />
      </div>

      <div class="gb-shift-card gb-shift-to">
        <h3 class="gb-subheading" style="color: var(--gb-accent);">To</h3>
        <ul class="gb-shift-list gb-shift-list-accent">
          <li>communities as living systems</li>
          <li>sustainability as infrastructure</li>
          <li>health and wellbeing as shared outcomes</li>
        </ul>
      </div>
    </div>

    <div class="gb-card" style="margin-top: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">
      <p class="gb-card-text" style="text-align: center; color: var(--gb-text-primary);">
        A Greenblocks-enabled community is one where people can understand:
      </p>
      <ul class="gb-feature-list" style="margin-top: 1.5rem;">
        <li>how their actions affect the planet</li>
        <li>how their lifestyle affects their own bodies</li>
        <li>how the community evolves as a whole</li>
      </ul>
    </div>
  </div>
</section>
```

**Step 2: Add The Shift section CSS**

Add to `<style>`:

```css
/* Section alternate background */
.gb-section-alt {
  background: rgba(0, 0, 0, 0.2);
}

/* Subheading */
.gb-subheading {
  font-family: var(--gb-font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: var(--gb-text-primary);
}

/* Shift Grid */
.gb-shift-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  align-items: center;
}

@media (min-width: 768px) {
  .gb-shift-grid {
    grid-template-columns: 1fr auto 1fr;
    gap: 2rem;
  }
}

.gb-shift-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
}

.gb-shift-from {
  border-color: rgba(255, 255, 255, 0.1);
}

.gb-shift-to {
  border-color: rgba(125, 216, 125, 0.3);
  background: rgba(125, 216, 125, 0.05);
}

.gb-shift-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gb-accent);
}

@media (max-width: 767px) {
  .gb-shift-arrow {
    transform: rotate(90deg);
  }
}

.gb-shift-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.gb-shift-list li {
  font-size: 1rem;
  color: var(--gb-text-muted);
  line-height: 1.5;
  padding-left: 1rem;
  border-left: 2px solid var(--gb-text-muted);
}

.gb-shift-list-accent li {
  color: var(--gb-text-secondary);
  border-left-color: var(--gb-accent);
}
```

**Step 3: Verify section renders**

Expected: From/To comparison with arrow between, insight card below

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks shift section"
```

---

## Task 7: Implement The System Section (Section 4)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add The System section HTML**

Add after shift section:

```astro
<!-- Section 4: The System -->
<section class="gb-section" id="system">
  <div class="gb-container">
    <span class="gb-label">The Infrastructure</span>
    <h2 class="gb-heading">Community operating <span class="gb-highlight">infrastructure</span></h2>

    <p class="gb-text" style="max-width: 800px;">
      Greenblocks is not a product layer. It is an infrastructure layer that connects:
    </p>

    <div class="gb-layers">
      <div class="gb-layer">
        <div class="gb-layer-icon">
          <Building2 size={24} />
        </div>
        <span>Physical environments</span>
      </div>
      <div class="gb-layer">
        <div class="gb-layer-icon">
          <TreeDeciduous size={24} />
        </div>
        <span>Environmental systems</span>
      </div>
      <div class="gb-layer">
        <div class="gb-layer-icon">
          <Users size={24} />
        </div>
        <span>Human behavior</span>
      </div>
      <div class="gb-layer">
        <div class="gb-layer-icon">
          <Building2 size={24} />
        </div>
        <span>Institutional frameworks</span>
      </div>
    </div>

    <p class="gb-text" style="margin-top: 2rem; max-width: 800px;">
      ...into a shared community impact system.
    </p>

    <div class="gb-card" style="margin-top: 2rem;">
      <h3 class="gb-subheading" style="color: var(--gb-warm);">At its core, Greenblocks provides:</h3>
      <ul class="gb-feature-list">
        <li>continuous understanding of environmental and human impact</li>
        <li>visible and shared consequences</li>
        <li>incentives aligned with sustainable and healthy living</li>
        <li>wellbeing and planetary responsibility embedded into operations</li>
        <li>support for new community-centered economic and operational models</li>
      </ul>
      <div class="gb-divider" style="margin: 2rem 0;"></div>
      <p class="gb-card-text" style="font-size: 1.1rem; color: var(--gb-accent); font-weight: 600;">
        You are not adding a tool. You are enabling a system.
      </p>
    </div>
  </div>
</section>
```

**Step 2: Add Layers CSS**

Add to `<style>`:

```css
/* Layers */
.gb-layers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.gb-layer {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(90deg, rgba(125, 216, 125, 0.08) 0%, transparent 100%);
  border-left: 3px solid var(--gb-accent);
  border-radius: 0 12px 12px 0;
  transition: all 0.4s var(--gb-ease-out-expo);
  color: var(--gb-text-secondary);
  font-size: 1rem;
}

.gb-layer:hover {
  background: linear-gradient(90deg, rgba(125, 216, 125, 0.15) 0%, transparent 100%);
  transform: translateX(8px);
}

.gb-layer-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gb-accent);
}

.gb-layer-icon :global(svg) {
  width: 24px;
  height: 24px;
}
```

**Step 3: Verify section renders**

Expected: Four stacked layers with green accent, card with capabilities list

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks system section"
```

---

## Task 8: Implement Capabilities Section (Section 5)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add Capabilities section HTML**

Add after system section:

```astro
<!-- Section 5: What it Enables -->
<section class="gb-section gb-section-alt" id="capabilities">
  <div class="gb-container">
    <span class="gb-label">Capabilities</span>
    <h2 class="gb-heading">What Greenblocks <span class="gb-highlight">enables</span></h2>

    <div class="gb-capabilities-grid">
      <div class="gb-capability-card">
        <div class="gb-capability-icon">
          <Target size={28} />
        </div>
        <h3 class="gb-card-title">Continuous Impact Understanding</h3>
        <p class="gb-card-text">Real-time awareness of environmental and community impact across all community operations.</p>
      </div>

      <div class="gb-capability-card">
        <div class="gb-capability-icon">
          <Leaf size={28} />
        </div>
        <h3 class="gb-card-title">Sustainability by Default</h3>
        <p class="gb-card-text">Communities designed where sustainable and healthy living are the natural outcome, not the exception.</p>
      </div>

      <div class="gb-capability-card">
        <div class="gb-capability-icon">
          <Users size={28} />
        </div>
        <h3 class="gb-card-title">Shared Awareness</h3>
        <p class="gb-card-text">Understanding of how daily actions affect both the planet and human wellbeing.</p>
      </div>

      <div class="gb-capability-card">
        <div class="gb-capability-icon">
          <Sparkles size={28} />
        </div>
        <h3 class="gb-card-title">Aligned Incentives</h3>
        <p class="gb-card-text">Economic systems that reward positive community outcomes and sustainable behaviors.</p>
      </div>

      <div class="gb-capability-card">
        <div class="gb-capability-icon">
          <Building2 size={28} />
        </div>
        <h3 class="gb-card-title">New Development Models</h3>
        <p class="gb-card-text">Operational frameworks for next-generation communities that prioritize long-term value.</p>
      </div>

      <div class="gb-capability-card">
        <div class="gb-capability-icon">
          <Clock size={28} />
        </div>
        <h3 class="gb-card-title">Long-term Intelligence</h3>
        <p class="gb-card-text">Environmental and community intelligence that grows more valuable over time.</p>
      </div>
    </div>

    <p class="gb-text" style="margin-top: 3rem; text-align: center; max-width: 600px; margin-left: auto; margin-right: auto; font-style: italic;">
      These are not applications. They are conditions that allow new kinds of communities to exist.
    </p>
  </div>
</section>
```

**Step 2: Add Capabilities CSS**

Add to `<style>`:

```css
/* Capabilities Grid */
.gb-capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.gb-capability-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.4s var(--gb-ease-out-expo);
}

.gb-capability-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(125, 216, 125, 0.2);
  transform: translateY(-4px);
}

.gb-capability-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(125, 216, 125, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: var(--gb-accent);
}

.gb-capability-icon :global(svg) {
  width: 28px;
  height: 28px;
}

.gb-card-title {
  font-family: var(--gb-font-display);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--gb-text-primary);
}
```

**Step 3: Verify section renders**

Expected: 6 capability cards in responsive grid

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks capabilities section"
```

---

## Task 9: Implement Partners Section (Section 6)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add Partners section HTML**

Add after capabilities section:

```astro
<!-- Section 6: Who it is for -->
<section class="gb-section" id="partners">
  <div class="gb-container">
    <span class="gb-label">The Right Partners</span>
    <h2 class="gb-heading">Who Greenblocks is <span class="gb-highlight">built with</span></h2>

    <p class="gb-text" style="max-width: 800px;">
      Greenblocks is co-created with organizations actively shaping how people will live.
    </p>

    <div class="gb-partners-grid">
      <div class="gb-partners-for">
        <h3 class="gb-subheading" style="color: var(--gb-accent);">Typically</h3>
        <ul class="gb-feature-list">
          <li>Real estate developers building communities, not only buildings</li>
          <li>Master-planned or mixed-use developments</li>
          <li>Long-term asset owners and operators</li>
          <li>City-adjacent or urban innovation entities</li>
        </ul>

        <h3 class="gb-subheading" style="color: var(--gb-accent); margin-top: 2rem;">Partners who</h3>
        <ul class="gb-feature-list">
          <li>think in decades</li>
          <li>care about way of living, not only assets</li>
          <li>are willing to integrate systems into operations</li>
          <li>want to co-design something foundational</li>
        </ul>
      </div>

      <div class="gb-partners-not">
        <div class="gb-card" style="border-color: rgba(212, 165, 116, 0.3);">
          <h3 class="gb-subheading" style="color: var(--gb-warm);">Greenblocks is not</h3>
          <ul class="gb-not-list">
            <li>a marketing layer</li>
            <li>a sustainability badge</li>
            <li>a resident app</li>
            <li>a short-term pilot</li>
          </ul>
          <div class="gb-divider" style="margin: 1.5rem 0; background: linear-gradient(90deg, transparent, var(--gb-warm), transparent);"></div>
          <p class="gb-card-text" style="color: var(--gb-warm); font-weight: 600;">
            We do not build features. We build systems.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add Partners CSS**

Add to `<style>`:

```css
/* Partners Grid */
.gb-partners-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .gb-partners-grid {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
  }
}

.gb-not-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.gb-not-list li {
  font-size: 1rem;
  color: var(--gb-text-muted);
  line-height: 1.5;
  padding-left: 1.5rem;
  position: relative;
}

.gb-not-list li::before {
  content: '×';
  position: absolute;
  left: 0;
  color: var(--gb-warm);
  font-weight: 600;
}
```

**Step 3: Verify section renders**

Expected: Two-column layout with partner criteria and "not for" card

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks partners section"
```

---

## Task 10: Implement Partnership Model Section (Section 7)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add Partnership Model section HTML**

Add after partners section:

```astro
<!-- Section 7: Partnership Model -->
<section class="gb-section gb-section-alt" id="partnership">
  <div class="gb-container">
    <span class="gb-label">How We Work</span>
    <h2 class="gb-heading">Built through <span class="gb-warm">long-term system partnerships</span></h2>

    <p class="gb-text" style="max-width: 700px;">
      Greenblocks is not bought. It is co-created.
    </p>

    <p class="gb-text" style="max-width: 700px;">
      We work with a small number of founding partners to:
    </p>

    <div class="gb-steps">
      <div class="gb-step">
        <div class="gb-step-number">1</div>
        <div class="gb-step-content">
          <span>Explore where current community models fail</span>
        </div>
      </div>
      <div class="gb-step">
        <div class="gb-step-number">2</div>
        <div class="gb-step-content">
          <span>Define what kind of system is missing</span>
        </div>
      </div>
      <div class="gb-step">
        <div class="gb-step-number">3</div>
        <div class="gb-step-content">
          <span>Design the community impact infrastructure together</span>
        </div>
      </div>
      <div class="gb-step">
        <div class="gb-step-number">4</div>
        <div class="gb-step-content">
          <span>Build focused system foundations</span>
        </div>
      </div>
      <div class="gb-step">
        <div class="gb-step-number">5</div>
        <div class="gb-step-content">
          <span>Grow them into long-term operational layers</span>
        </div>
      </div>
    </div>

    <div class="gb-card" style="margin-top: 3rem; text-align: center; max-width: 600px; margin-left: auto; margin-right: auto;">
      <p class="gb-card-text" style="font-size: 1.1rem; color: var(--gb-text-primary);">
        Greenblocks represents our partnership model: a shared ambition to build community infrastructure that can endure for <span style="color: var(--gb-warm); font-weight: 600;">decades</span>.
      </p>
    </div>
  </div>
</section>
```

**Step 2: Add Steps CSS**

Add to `<style>`:

```css
/* Steps */
.gb-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  max-width: 600px;
}

.gb-step {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 1.75rem;
  background: linear-gradient(90deg, rgba(212, 165, 116, 0.08) 0%, transparent 100%);
  border-left: 3px solid var(--gb-warm);
  border-radius: 0 12px 12px 0;
  transition: all 0.4s var(--gb-ease-out-expo);
}

.gb-step:hover {
  background: linear-gradient(90deg, rgba(212, 165, 116, 0.15) 0%, transparent 100%);
  transform: translateX(8px);
}

.gb-step-number {
  font-family: var(--gb-font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gb-warm);
  min-width: 2rem;
}

.gb-step-content {
  color: var(--gb-text-secondary);
  font-size: 1rem;
}
```

**Step 3: Verify section renders**

Expected: Five numbered steps with warm accent color

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks partnership model section"
```

---

## Task 11: Implement Long View Section (Section 8)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add Long View section HTML**

Add after partnership section:

```astro
<!-- Section 8: The Long View -->
<section class="gb-section" id="vision">
  <div class="gb-container">
    <span class="gb-label">The Vision</span>
    <h2 class="gb-heading">A different default for <span class="gb-highlight">future communities</span></h2>

    <p class="gb-text" style="max-width: 700px;">
      If Greenblocks succeeds:
    </p>

    <div class="gb-vision-cards">
      <div class="gb-vision-card">
        <p>Communities will operate with continuous awareness of their planetary and human impact.</p>
      </div>
      <div class="gb-vision-card">
        <p>Sustainability and healthy living will become system properties.</p>
      </div>
      <div class="gb-vision-card">
        <p>Cities will evolve from service providers into living systems.</p>
      </div>
      <div class="gb-vision-card">
        <p>Children will grow up inside communities that support wellbeing by design.</p>
      </div>
    </div>

    <div class="gb-vision-closing">
      <p class="gb-text-lg" style="color: var(--gb-text-primary); text-align: center; max-width: 800px; margin: 0 auto;">
        Environmental responsibility, healthy living, and community will no longer be <em>initiatives</em>.
      </p>
      <p class="gb-heading" style="text-align: center; margin-top: 1rem;">
        They will be <span class="gb-highlight">structure</span>.
      </p>
    </div>
  </div>
</section>
```

**Step 2: Add Vision CSS**

Add to `<style>`:

```css
/* Vision Cards */
.gb-vision-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0 3rem;
}

.gb-vision-card {
  background: rgba(125, 216, 125, 0.05);
  border: 1px solid rgba(125, 216, 125, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.4s var(--gb-ease-out-expo);
}

.gb-vision-card:hover {
  background: rgba(125, 216, 125, 0.1);
  border-color: rgba(125, 216, 125, 0.3);
  transform: translateY(-4px);
}

.gb-vision-card p {
  color: var(--gb-text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.gb-vision-closing {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
```

**Step 3: Verify section renders**

Expected: Four vision cards with impactful closing statement

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks long view section"
```

---

## Task 12: Implement CTA Section (Section 9)

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add CTA section HTML**

Add after vision section, before closing `</div>` of `.gb-page`:

```astro
<!-- Section 9: The Invitation -->
<section class="gb-section gb-cta-section" id="contact">
  <div class="gb-container">
    <div class="gb-cta-content">
      <span class="gb-label">The Invitation</span>
      <h2 class="gb-heading">Begin a conversation about building a <span class="gb-highlight">different kind of community</span></h2>

      <p class="gb-text" style="max-width: 700px; margin: 0 auto 2rem;">
        We are currently exploring this system with a small number of developers and institutions
        who are rethinking how communities should function.
      </p>

      <p class="gb-text" style="max-width: 700px; margin: 0 auto 2rem;">
        If you are designing or operating communities and believe the current model is incomplete,
        we welcome serious conversations.
      </p>

      <div class="gb-cta-questions">
        <h3 class="gb-subheading" style="text-align: center; color: var(--gb-text-secondary);">We'd love to learn:</h3>
        <ul class="gb-question-list">
          <li>What kind of community are you building?</li>
          <li>What feels structurally missing today?</li>
          <li>What kind of living experience do you want to enable?</li>
          <li>What is your long-term horizon?</li>
        </ul>
      </div>

      <div class="gb-cta-actions">
        <a href="/en/contact" class="gb-btn gb-btn-primary gb-btn-lg">
          <Handshake size={20} />
          Begin a Conversation
        </a>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add CTA CSS**

Add to `<style>`:

```css
/* CTA Section */
.gb-cta-section {
  background: linear-gradient(180deg, transparent 0%, rgba(125, 216, 125, 0.05) 100%);
  text-align: center;
  padding-bottom: calc(var(--gb-section-padding) + 2rem);
}

.gb-cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.gb-cta-questions {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
}

.gb-question-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.gb-question-list li {
  font-size: 1rem;
  color: var(--gb-text-secondary);
  line-height: 1.5;
  font-style: italic;
}

.gb-question-list li::before {
  content: '→ ';
  color: var(--gb-accent);
}

.gb-cta-actions {
  margin-top: 2rem;
}

.gb-btn-lg {
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
}

.gb-btn-lg :global(svg) {
  width: 20px;
  height: 20px;
}
```

**Step 3: Verify complete page renders**

Expected: Full 9-section landing page with atmospheric styling, all sections visible

**Step 4: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: implement Greenblocks CTA section - page complete"
```

---

## Task 13: Add Scroll Reveal Animations

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add reveal classes to sections**

Update each section's main content wrapper to include `class="gb-reveal"`:

For example, in the Problem section:
```astro
<section class="gb-section" id="problem">
  <div class="gb-container">
    <div class="gb-reveal">
      <span class="gb-label">The Challenge</span>
      ...
    </div>
  </div>
</section>
```

Apply `gb-reveal` to the main content wrapper in each section (2-9).

**Step 2: Add reveal CSS**

Add to `<style>`:

```css
/* Reveal animations */
.gb-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity var(--gb-duration-normal) var(--gb-ease-out-expo),
    transform var(--gb-duration-normal) var(--gb-ease-out-expo);
}

.gb-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .gb-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

**Step 3: Add IntersectionObserver script**

Add before the closing `</PageLayout>` tag:

```astro
<script>
  // Intersection Observer for reveal animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.gb-reveal').forEach(el => {
    revealObserver.observe(el);
  });
</script>
```

**Step 4: Verify animations work**

Expected: Sections fade in and slide up as they enter viewport on scroll

**Step 5: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: add scroll reveal animations to Greenblocks page"
```

---

## Task 14: Add Navigation Link to Greenblocks

**Files:**
- Modify: `src/utils/i18n.ts` (if navigation uses translations)
- Modify: `src/components/layout/Header.astro` (if navigation is hardcoded)

**Step 1: Check Header structure**

Run: `head -100 src/components/layout/Header.astro`

Examine how navigation links are defined.

**Step 2: Add Greenblocks to navigation**

If using translations in `i18n.ts`, add:
```typescript
nav: {
  // existing...
  greenblocks: 'Greenblocks',
}
```

If hardcoded in Header.astro, add a link:
```astro
<a href="/greenblocks" class="nav-link">Greenblocks</a>
```

**Step 3: Verify navigation**

Expected: Greenblocks link appears in main navigation

**Step 4: Commit**

```bash
git add src/utils/i18n.ts src/components/layout/Header.astro
git commit -m "feat: add Greenblocks to site navigation"
```

---

## Task 15: Mobile Responsive Polish

**Files:**
- Modify: `src/pages/greenblocks.astro`

**Step 1: Add mobile-specific CSS**

Add to `<style>`:

```css
/* Mobile Responsive */
@media (max-width: 768px) {
  .gb-title-lg {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }

  .gb-heading {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }

  .gb-content-grid,
  .gb-partners-grid {
    grid-template-columns: 1fr;
  }

  .gb-shift-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .gb-shift-arrow {
    transform: rotate(90deg);
    padding: 0.5rem 0;
  }

  .gb-layers {
    grid-template-columns: 1fr;
  }

  .gb-layer {
    padding: 1rem 1.25rem;
  }

  .gb-layer:hover {
    transform: translateX(4px);
  }

  .gb-capabilities-grid {
    grid-template-columns: 1fr;
  }

  .gb-vision-cards {
    grid-template-columns: 1fr;
  }

  .gb-steps {
    max-width: 100%;
  }

  .gb-step {
    padding: 1rem 1.25rem;
    gap: 1rem;
  }

  .gb-step:hover {
    transform: translateX(4px);
  }

  .gb-btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
    width: 100%;
    justify-content: center;
  }

  .gb-btn-lg {
    padding: 1rem 1.75rem;
  }

  .gb-card {
    padding: 1.5rem;
  }

  .gb-cta-questions {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .gb-section {
    padding: clamp(3rem, 8vw, 5rem) 0;
  }

  .gb-container {
    padding: 0 1rem;
  }

  .gb-hero {
    min-height: 100svh;
  }

  .gb-label {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
  }
}
```

**Step 2: Test mobile viewport**

Run: Dev server, resize to mobile width or use browser dev tools

Expected: All sections stack properly, touch-friendly tap targets, readable text

**Step 3: Commit**

```bash
git add src/pages/greenblocks.astro
git commit -m "feat: add mobile responsive styles to Greenblocks page"
```

---

## Task 16: Final QA and Polish

**Files:**
- Review: `src/pages/greenblocks.astro`

**Step 1: Run accessibility check**

Run: `bun run build && bun run preview`

Expected: Build succeeds, preview works

**Step 2: Check Lighthouse scores**

Open http://localhost:4321/greenblocks in Chrome, run Lighthouse audit

Expected: Performance > 90, Accessibility > 95, Best Practices > 90, SEO > 90

**Step 3: Verify all links work**

Click all CTA buttons, ensure they navigate to `/en/contact`

**Step 4: Test reduced motion**

Enable "Reduce motion" in OS settings, verify animations are disabled

**Step 5: Final commit**

```bash
git add .
git commit -m "feat: complete Greenblocks landing page with all sections and polish"
```

---

## Summary

This plan creates a complete Greenblocks landing page at `/greenblocks` with:

1. **Unique visual identity**: Dark atmospheric theme with green/warm accents
2. **Custom fonts**: Clash Display (headings) and Satoshi (body)
3. **9 content sections**: Hero, Problem, Shift, System, Capabilities, Partners, Partnership, Vision, CTA
4. **Atmospheric effects**: Fixed gradient background, floating particles
5. **Scroll animations**: Reveal on scroll with IntersectionObserver
6. **Mobile responsive**: Full mobile optimization
7. **Accessibility**: Reduced motion support, semantic HTML, good contrast

The page maintains integration with the Aunova site (PageLayout, Header, Footer) while having its own distinct Greenblocks personality.
