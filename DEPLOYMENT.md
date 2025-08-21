# Deployment Guide - Aunova.net

## Prerequisites

- Node.js 18.20.8+ or Bun 1.2.21+
- Git
- Access to deployment platform (Netlify/Vercel/etc.)

## Local Development

### Using Bun (Recommended)
```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Using npm/yarn
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_SITE_URL=https://aunova.net
PUBLIC_CAL_LINK=https://cal.com/ngmisl/aunova
PUBLIC_BLUESKY_URL=https://bsky.app/profile/aunova.net
```

## Build Output

The build process generates a static site in the `dist/` directory:

```
dist/
├── _astro/          # Static assets (CSS, JS)
├── en/              # English pages
├── es/              # Spanish pages
├── favicon.svg      # Site favicon
├── robots.txt       # SEO robots file
└── sitemap-*.xml    # Generated sitemaps
```

## Deployment Options

### 1. Netlify (Recommended)

#### Option A: Git Integration
1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `bun run build` or `npm run build`
   - Publish directory: `dist`
   - Node version: 18.20.8+

#### Option B: Manual Deploy
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the site
bun run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

#### Netlify Configuration
Create `netlify.toml` in root:
```toml
[build]
  command = "bun run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18.20.8"

[[redirects]]
  from = "/"
  to = "/en"
  status = 301
  conditions = {Language = ["en"]}

[[redirects]]
  from = "/"
  to = "/es"
  status = 301
  conditions = {Language = ["es"]}

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 2. Vercel

#### Option A: Git Integration
1. Import project to Vercel
2. Configure:
   - Framework Preset: Astro
   - Build Command: `bun run build`
   - Output Directory: `dist`

#### Option B: CLI Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Build and deploy
bun run build
vercel --prod
```

#### Vercel Configuration
Create `vercel.json`:
```json
{
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "redirects": [
    {
      "source": "/",
      "destination": "/en",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### 3. Cloudflare Pages

1. Connect GitHub repository
2. Configure build:
   - Build command: `bun run build`
   - Build output directory: `dist`
   - Environment variables: Set in dashboard

### 4. Traditional Hosting (Apache/Nginx)

#### Build locally:
```bash
bun run build
```

#### Upload `dist/` contents to server

#### Apache `.htaccess`:
```apache
# Redirects
RewriteEngine On
RewriteRule ^$ /en/ [R=301,L]

# Security Headers
Header set X-Frame-Options "DENY"
Header set X-Content-Type-Options "nosniff"
Header set Referrer-Policy "strict-origin-when-cross-origin"

# Caching
<FilesMatch "\.(jpg|jpeg|png|gif|webp|svg|js|css|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

#### Nginx configuration:
```nginx
server {
    listen 80;
    server_name aunova.net www.aunova.net;
    root /var/www/aunova/dist;

    # Redirects
    location = / {
        return 301 /en/;
    }

    # Security headers
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Caching
    location ~* \.(jpg|jpeg|png|gif|webp|svg|js|css|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /404.html;
    }
}
```

## Post-Deployment Checklist

### Immediate Checks
- [ ] Site loads correctly at https://aunova.net
- [ ] Language detection and switching works
- [ ] All navigation links work
- [ ] Contact form submits (if backend configured)
- [ ] Cal.com integration links work
- [ ] Cookie notice appears for new visitors
- [ ] 404 page displays correctly

### SEO Verification
- [ ] Sitemap accessible at `/sitemap-index.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Meta tags present on all pages
- [ ] Open Graph images display correctly
- [ ] Hreflang tags properly configured

### Performance Checks
- [ ] Run Lighthouse audit (target: >95)
- [ ] Test Core Web Vitals
- [ ] Verify image optimization
- [ ] Check CSS/JS minification
- [ ] Test on slow 3G connection

### Security Checks
- [ ] HTTPS enforced
- [ ] Security headers present
- [ ] No exposed sensitive data
- [ ] GDPR compliance verified

### Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

## Monitoring

### Recommended Tools
- **Analytics**: Plausible, Simple Analytics (privacy-focused)
- **Uptime**: UptimeRobot, Pingdom
- **Performance**: SpeedCurve, Calibre
- **Errors**: Sentry (privacy-compliant config)

### Key Metrics to Track
- Page load time
- Bounce rate
- Contact form submissions
- Calendar bookings
- 404 errors
- Core Web Vitals

## Rollback Procedure

### Netlify/Vercel
- Use platform dashboard to restore previous deployment

### Manual Hosting
1. Keep backup of previous `dist/` folder
2. Replace current deployment with backup
3. Clear CDN cache if applicable

## Troubleshooting

### Build Failures
- Check Node.js version (>= 18.20.8)
- Clear node_modules and reinstall
- Check for TypeScript errors
- Verify all environment variables are set

### 404 Errors
- Verify build output structure
- Check redirect rules
- Ensure fallback to 404.html is configured

### Performance Issues
- Check image sizes and formats
- Verify lazy loading is working
- Review JavaScript bundle size
- Enable caching headers

### Language Issues
- Check hreflang implementation
- Verify language detection logic
- Test with different browser languages

## Support

For deployment issues or questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the CLAUDE.md file for technical details

---

Last Updated: 2024-08-20
