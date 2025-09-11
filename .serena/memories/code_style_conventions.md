# Code Style and Conventions

## File Naming
- Components: PascalCase (e.g., `Header.astro`, `ServicePillar.astro`)
- Utilities: camelCase (e.g., `i18n.ts`, `seo.ts`)
- Pages: lowercase with hyphens (e.g., `index.astro`)
- Styles: lowercase with hyphens (e.g., `global.css`)

## Astro Components
- Use Zod schemas for complex prop validation
- Prefer named slots for flexibility
- Avoid client directives unless absolutely necessary
- Use scoped styles or CSS modules
- No comments unless explicitly requested

## CSS Conventions
- Use CSS custom properties for theming
- System fonts only (no web font downloads)
- Modern CSS features (container queries, subgrid, etc.)
- Mobile-first responsive design
- Semantic color naming (--color-primary, --color-text)

## TypeScript
- Strict typing with Zod validation
- Type-safe i18n with defined translation keys
- No any types unless absolutely necessary

## Content
- Blog posts in MDX format with frontmatter
- Structured data for SEO optimization
- Bilingual content (English/Spanish)

## Performance
- Minimize JavaScript usage
- CSS-only solutions preferred
- WebP images with lazy loading
- Target <1s First Contentful Paint