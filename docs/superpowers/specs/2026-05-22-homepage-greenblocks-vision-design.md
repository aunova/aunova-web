# Homepage update — new Greenblocks vision

**Date:** 2026-05-22
**Scope:** Align the Aunova homepage (`/` EN and `/es/` ES) with the post-REES
Greenblocks positioning already live on `greenblocks.astro`. Elevate Greenblocks
so it reads as the shipping flagship product, not one abstract "system family"
among future ones.

## Background

`greenblocks.astro` was rewritten in May 2026: Greenblocks is a Digital Building
Passport for premium real estate, deploying at asset level in Dubai with premium
residential developers. Category: verified real estate. Product: infrastructure.

The homepage still carries the prior framing ("Community Impact Infrastructure",
"environmental and sustainability infrastructure for the built world"). This spec
brings the homepage Greenblocks copy in line and adds a live-status treatment.

Aunova stays the parent-company frame. Greenblocks is its shipping product. The
hero and company-level sections (Different Company, Partnership, Criteria, Why
Aunova, Engagement) are not in scope except where they name Greenblocks.

## Brand voice (Greenblocks copy only)

Per `CLAUDE.md`: no contractions, no em dashes, no hype words. Use periods,
colons, or new lines instead of em dashes. Verified before commit with
`grep -nE '—|don'\''t|won'\''t'`.

## Changes

### 1. Greenblocks callout box

Hardcoded markup in `src/pages/index.astro` (~lines 88-92) and
`src/pages/es/index.astro` (~lines 88-92).

**EN:**
- intro: `Our flagship system, now deploying`
- main: `<strong>Greenblocks:</strong> a Digital Building Passport that brings verified trust and transparency to premium real estate. Deploying in Dubai.`

**ES:**
- intro: `Nuestro sistema insignia, ahora en despliegue`
- main: `<strong>Greenblocks:</strong> un Pasaporte Digital de Edificio que aporta confianza y transparencia verificadas al sector inmobiliario premium. En despliegue en Dubái.`

### 2. System family card content — `systemFamilies.sustainability`

`src/utils/i18n.ts`, both the `en` block (~line 74) and `es` block (~line 363).

**EN:**
| Field | Value |
|---|---|
| name | `Greenblocks by Aunova` (unchanged) |
| category | `Digital Building Passport` |
| tagline | `Verified trust and transparency for premium real estate.` |
| description | `Greenblocks is a trust, transparency, and reputation layer for premium real estate. It turns developer claims into structured, verifiable, comparable data at asset level.` |
| examples | 1. `Verified performance data across the asset lifecycle` <br> 2. `Reputation as a measurable asset attribute, not a brand exercise` <br> 3. `Buyer-comparable projects, judged on substance` <br> 4. `Building intelligence operators, regulators, and investors can query` |
| closingLine | `Now deploying in Dubai with premium residential developers.` |
| status (new key) | `Now live · Dubai` |

**ES:**
| Field | Value |
|---|---|
| name | `Greenblocks by Aunova` (unchanged) |
| category | `Pasaporte Digital de Edificio` |
| tagline | `Confianza y transparencia verificadas para el sector inmobiliario premium.` |
| description | `Greenblocks es una capa de confianza, transparencia y reputación para el sector inmobiliario premium. Convierte las afirmaciones de los promotores en datos estructurados, verificables y comparables a nivel de activo.` |
| examples | 1. `Datos de desempeño verificados a lo largo del ciclo de vida del activo` <br> 2. `Reputación como atributo medible del activo, no como ejercicio de marca` <br> 3. `Proyectos comparables para el comprador, juzgados por su sustancia` <br> 4. `Inteligencia del edificio que operadores, reguladores e inversores pueden consultar` |
| closingLine | `Ahora en despliegue en Dubái con promotores residenciales premium.` |
| status (new key) | `En vivo · Dubái` |

### 3. Elevate mechanism

**3a. Section intro** — `systemFamilies.intro` in `src/utils/i18n.ts` (EN + ES),
reworded to name Greenblocks as live and the rest as in development.

EN: `Aunova builds families of systems designed to become shared infrastructure layers within the ecosystems they serve. Greenblocks, our Digital Building Passport for premium real estate, is live and deploying in Dubai. Further system families are in development with future partners.`

ES: `Aunova construye familias de sistemas diseñadas para convertirse en capas de infraestructura compartida dentro de los ecosistemas a los que sirven. Greenblocks, nuestro Pasaporte Digital de Edificio para el sector inmobiliario premium, está en marcha y desplegándose en Dubái. Otras familias de sistemas están en desarrollo con futuros socios.`

**3b. Status badge** — add an optional `status?: string` prop to
`src/components/features/SystemFamilyCard.astro`. When present, render a small
badge in the card content column (near `category`/`name`). Badge styling:
accent-colored pill, uses the card's existing `--accent` custom property, small
uppercase label. Badge only renders when `status` is passed, so the future-family
cards are unaffected (they do not use this component).

Wire it in both `index.astro` and `es/index.astro`:
`status={t.systemFamilies.sustainability.status}` on the Greenblocks
`SystemFamilyCard`.

### 4. Loose ends

- `differentCompany.callout` i18n key (EN + ES) — currently unused by the page
  but stale. Update to match the new callout copy for consistency.
- Contact form option `systemFamilyOptions[0]`: `Greenblocks (Environmental &
  Sustainability)` → `Greenblocks (Digital Building Passport)` (EN);
  Spanish equivalent updated to match.

## Files touched

- `src/pages/index.astro` — callout box copy, `status` prop wiring
- `src/pages/es/index.astro` — callout box copy, `status` prop wiring
- `src/components/features/SystemFamilyCard.astro` — new `status` prop + badge
- `src/utils/i18n.ts` — `systemFamilies.sustainability` (EN+ES), `systemFamilies.intro`
  (EN+ES), `differentCompany.callout` (EN+ES), `contact.form.systemFamilyOptions[0]`
  (EN+ES)

## Out of scope

- The ES `greenblocks.astro` page rewrite (separately queued per CLAUDE.md).
- Hero section copy and imagery.
- Greenblocks page visual asset refresh.
- Company-level homepage sections (Partnership, Criteria, Why Aunova, Engagement).

## Verification

- `bunx astro check` passes (no new type errors from the `status` prop).
- Greenblocks copy contains no em dashes / contractions:
  `grep -nE '—' src/utils/i18n.ts` shows no new hits in changed lines.
- Badge renders on the Greenblocks card only; future-family cards unchanged.
