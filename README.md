# Aunova Website

Modern website for Aunova - Zero-Knowledge Proofs, AI & Web3 Integration, and Decentralized Infrastructure Solutions.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v5.13
- **Package Manager**: [Bun](https://bun.sh)
- **Deployment**: GitHub Pages
- **Domain**: aunova.net

## 📦 Installation

```bash
# Install dependencies with bun
bun install
```

## 🛠️ Development

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 📝 Project Structure

```
/
├── public/
│   ├── CNAME          # GitHub Pages custom domain
│   ├── .nojekyll      # Disable Jekyll processing
│   └── images/        # Static images
├── src/
│   ├── components/    # Astro components
│   ├── content/       # Blog posts (MDX)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
└── .github/
    └── workflows/
        └── deploy.yml # GitHub Actions deployment
```

## 🌐 Deployment

The site is automatically deployed to GitHub Pages when pushing to the `main` branch.

### Manual Deployment

1. Build the site:
```bash
bun run build
```

2. The built files will be in the `dist/` directory
3. Push to the `main` branch to trigger automatic deployment

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The custom domain (aunova.net) is configured via the CNAME file

### Domain Configuration

The domain `aunova.net` should have the following DNS records:

- A record: `185.199.108.153`
- A record: `185.199.109.153`
- A record: `185.199.110.153`
- A record: `185.199.111.153`
- CNAME record (www): `[your-github-username].github.io`

## 🔧 Configuration

- **Site URL**: Configured in `astro.config.mjs`
- **SEO/Meta**: Default meta tags in `src/layouts/PageLayout.astro`
- **i18n**: Language support for English and Spanish

## 📄 Content Management

### Blog Posts

Blog posts are stored in `src/content/blog/` as MDX files with frontmatter:

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

### Services

Service pages are located in `src/pages/en/services/` and include:
- Zero-Knowledge Proofs
- AI & Web3 Integration
- Hybrid ZK-AI Applications
- Infrastructure & Dev Tools

## 🎨 Styling

The site uses CSS custom properties for theming. Main style files:
- `src/styles/globals.css` - Global styles and CSS variables
- Component-specific styles using Astro's scoped styles

## 📊 Analytics

Google Analytics can be configured by adding the tracking ID to the site configuration.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📜 License

© 2024 Aunova. All rights reserved.
