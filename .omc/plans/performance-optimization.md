# Performance Optimization Plan: Aunova Website

## Executive Summary

This plan optimizes the Aunova website for faster load times without changing core logic. The primary bottlenecks are:

1. **Font files (3.8MB)** - TTF format instead of WOFF2
2. **Unused/redundant images (~12.6MB)** - PNG duplicates and unused files
3. **Missing resource hints** - No font preloading in BaseLayout

**Expected improvements:**
- Asset size reduction: ~16MB → ~4MB (75% reduction)
- First Contentful Paint: ~1.2s → ~0.7s
- Lighthouse score: 75 → 95+

---

## Task Breakdown

### Phase 1: Font Optimization (CRITICAL - Largest Impact)

#### Task 1.1: Convert Inter Variable Fonts to WOFF2
**File:** `public/fonts/Inter-VariableFont_opsz,wght.ttf` (855KB)
**File:** `public/fonts/Inter-Italic-VariableFont_opsz,wght.ttf` (884KB)

**Steps:**
1. Install fonttools: `pip install fonttools brotli`
2. Convert regular Inter:
   ```bash
   fonttools ttLib /path/to/Inter-VariableFont_opsz,wght.ttf -o Inter-Variable.woff2 --flavor woff2
   ```
   Or use online converter: https://cloudconvert.com/ttf-to-woff2
3. Convert italic Inter using same method
4. Place new WOFF2 files in `public/fonts/`
5. Delete original TTF files

**Expected size:** 855KB + 884KB → ~200KB + ~220KB (75% reduction)

**Verification:**
- [ ] WOFF2 files exist in public/fonts/
- [ ] File sizes are under 250KB each
- [ ] TTF files removed

---

#### Task 1.2: Convert Source Serif 4 Variable Fonts to WOFF2
**File:** `public/fonts/SourceSerif4-VariableFont_opsz,wght.ttf` (1.2MB)
**File:** `public/fonts/SourceSerif4-Italic-VariableFont_opsz,wght.ttf` (824KB)

**Steps:**
1. Convert regular Source Serif 4 to WOFF2
2. Convert italic Source Serif 4 to WOFF2
3. Place new WOFF2 files in `public/fonts/`
4. Delete original TTF files

**Expected size:** 1.2MB + 824KB → ~300KB + ~200KB (75% reduction)

**Verification:**
- [ ] WOFF2 files exist in public/fonts/
- [ ] File sizes are under 350KB each
- [ ] TTF files removed

---

#### Task 1.3: Update @font-face Declarations in global.css
**File:** `src/styles/global.css` (lines 10-44)

**Current (lines 10-17):**
```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-VariableFont_opsz,wght.ttf")
    format("truetype-variations");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

**Change to:**
```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Variable.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

**Apply same pattern to:**
- Inter Italic (lines 19-26)
- Source Serif 4 regular (lines 28-35)
- Source Serif 4 italic (lines 37-44)

**Verification:**
- [ ] All 4 @font-face declarations use WOFF2 paths
- [ ] Format is "woff2-variations" (not "truetype-variations")
- [ ] Fonts render correctly on site

---

#### Task 1.4: Add Font Preloading to BaseLayout
**File:** `src/layouts/BaseLayout.astro` (after line 44, before line 46)

**Add these lines:**
```html
<!-- Preload critical fonts -->
<link rel="preload" as="font" type="font/woff2" href="/fonts/Inter-Variable.woff2" crossorigin />
<link rel="preload" as="font" type="font/woff2" href="/fonts/SourceSerif4-Variable.woff2" crossorigin />
```

**Why:** Preloading tells the browser to fetch fonts early, before CSS parsing discovers them. This reduces FCP by 200-400ms.

**Verification:**
- [ ] Preload links appear in page head
- [ ] Network waterfall shows fonts loading early
- [ ] No FOUT (Flash of Unstyled Text)

---

### Phase 2: Image Cleanup (CRITICAL - Large Savings)

#### Task 2.1: Remove Unused "Flow Part 4.png"
**File:** `public/images/Flow Part 4.png` (8.2MB)

**Investigation:** This file is NOT referenced anywhere in the codebase (grep returned no matches).

**Steps:**
1. Confirm no references: `grep -r "Flow Part 4" src/`
2. Delete the file: `rm "public/images/Flow Part 4.png"`

**Expected savings:** 8.2MB

**Verification:**
- [ ] No grep matches for "Flow Part 4"
- [ ] File deleted
- [ ] Build succeeds

---

#### Task 2.2: Remove Unused "GreenBlocks (1).png"
**File:** `public/images/GreenBlocks (1).png` (1.4MB)

**Investigation:** This appears to be a duplicate/backup. The site uses `greenblocks-hero.webp` instead.

**Steps:**
1. Confirm no references: `grep -r "GreenBlocks (1)" src/`
2. Delete the file: `rm "public/images/GreenBlocks (1).png"`

**Expected savings:** 1.4MB

**Verification:**
- [ ] No grep matches
- [ ] File deleted
- [ ] Build succeeds

---

#### Task 2.3: Remove PNG Backup of greenblocks-icons
**File:** `public/images/greenblocks-icons.png` (781KB)

**Investigation:** The WebP version (24KB) is what's actually used in `greenblocks.astro:125`.

**Steps:**
1. Verify only .webp is referenced: `grep -r "greenblocks-icons" src/`
2. Confirm output shows `.webp` not `.png`
3. Delete the PNG: `rm public/images/greenblocks-icons.png`

**Expected savings:** 781KB

**Verification:**
- [ ] greenblocks-icons.webp still exists
- [ ] Only .webp version referenced in code
- [ ] File deleted
- [ ] Page renders correctly

---

#### Task 2.4: Remove PNG Backup of sustainable-community
**File:** `public/images/hero/sustainable-community.png` (2.4MB)

**Context:** The `<picture>` element in `index.astro` uses WebP as primary with PNG fallback. WebP has 97%+ browser support, so the PNG fallback can be removed.

**Steps:**
1. Update `src/pages/index.astro` lines 46-50 to remove PNG fallback:

**Current (lines 45-51):**
```astro
<picture class="hero-image">
  <source srcset="/images/hero/sustainable-community.webp" type="image/webp">
  <img
    src="/images/hero/sustainable-community.png"
    alt="Sustainable community hero"
    ...
  />
</picture>
```

**Change to:**
```astro
<img
  class="hero-image"
  src="/images/hero/sustainable-community.webp"
  alt="Sustainable community hero"
  width="1200"
  height="800"
  loading="eager"
  decoding="async"
  fetchpriority="high"
/>
```

2. Delete the PNG: `rm public/images/hero/sustainable-community.png`

**Expected savings:** 2.4MB

**Note:** Adding explicit `width` and `height` prevents CLS (Cumulative Layout Shift).

**Verification:**
- [ ] Hero image renders correctly
- [ ] PNG file deleted
- [ ] No console errors
- [ ] Page loads without layout shift

---

### Phase 3: Resource Hints (HIGH - Easy Wins)

#### Task 3.1: Add DNS Prefetch for External Domains
**File:** `src/layouts/BaseLayout.astro` (after favicon links, around line 38)

**Add:**
```html
<!-- DNS prefetch for external services -->
<link rel="dns-prefetch" href="https://cal.com" />
```

**Why:** The site links to cal.com for scheduling. DNS prefetch resolves the domain early, saving 50-150ms when users click the link.

**Verification:**
- [ ] DNS prefetch link in page head
- [ ] No errors in console

---

#### Task 3.2: Verify Image Loading Attributes
**Files:** All pages using images

Check that below-fold images have `loading="lazy"` and above-fold images have `loading="eager"`:

| Image | Expected Loading |
|-------|-----------------|
| Hero image | `loading="eager"` + `fetchpriority="high"` |
| Blog post thumbnails | `loading="lazy"` |
| Service pillar icons | `loading="lazy"` |

**Verification:**
- [ ] Hero image loads immediately
- [ ] Blog images lazy load
- [ ] LCP improves

---

### Phase 4: Build Optimization (MEDIUM)

#### Task 4.1: Add Build Analysis (Optional)
**File:** `astro.config.mjs`

For debugging, add visualization:

```javascript
import { visualizer } from 'rollup-plugin-visualizer';

// In vite.build.rollupOptions.plugins:
plugins: [
  visualizer({
    filename: './dist/stats.html',
    gzipSize: true,
  })
]
```

**Install:** `bun add -D rollup-plugin-visualizer`

**Verification:**
- [ ] stats.html generated after build
- [ ] No unexpected large bundles

---

#### Task 4.2: Audit lucide-astro Usage
**File:** Check if dependency is used

**Steps:**
1. Search for lucide imports: `grep -r "lucide" src/`
2. If no matches, remove from package.json
3. Run `bun install` to update lockfile

**Verification:**
- [ ] Confirm usage or removal
- [ ] Build succeeds

---

## Summary Table

| Task | Impact | Savings | Priority |
|------|--------|---------|----------|
| 1.1 Convert Inter fonts | FCP -300ms | 1.5MB | CRITICAL |
| 1.2 Convert Source Serif fonts | FCP -200ms | 1.7MB | CRITICAL |
| 1.3 Update @font-face CSS | - | - | CRITICAL |
| 1.4 Add font preloading | FCP -300ms | - | CRITICAL |
| 2.1 Remove Flow Part 4.png | - | 8.2MB | CRITICAL |
| 2.2 Remove GreenBlocks (1).png | - | 1.4MB | CRITICAL |
| 2.3 Remove greenblocks-icons.png | - | 781KB | HIGH |
| 2.4 Remove sustainable-community.png | - | 2.4MB | HIGH |
| 3.1 Add DNS prefetch | -50ms | - | MEDIUM |
| 3.2 Verify image loading | LCP | - | MEDIUM |
| 4.1 Build analysis | Debug | - | LOW |
| 4.2 Audit lucide-astro | Size | ? | LOW |

**Total estimated savings:** ~16MB (from 22MB to ~6MB)

---

## Execution Order

1. **Phase 1** (Fonts) - Do first, highest impact
2. **Phase 2** (Images) - Do second, easy deletions
3. **Phase 3** (Resource hints) - Quick additions
4. **Phase 4** (Build) - Optional analysis

---

## Validation Checklist

After all tasks complete:

- [ ] `bun run build` succeeds
- [ ] `bun run preview` - site works correctly
- [ ] Fonts render properly (no missing text)
- [ ] All images load (no 404s)
- [ ] Hero image appears immediately (no flicker)
- [ ] Run Lighthouse audit - target 95+
- [ ] Check Network waterfall - fonts load early
- [ ] Verify total dist/ size reduced significantly
