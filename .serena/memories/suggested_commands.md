# Suggested Commands

## Development Commands
```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Deploy (build + add CNAME)
bun run deploy
```

## System Commands (Linux)
```bash
# File operations
ls -la
find . -name "*.astro"
grep -r "pattern" src/
cd directory_name

# Git operations
git status
git add .
git commit -m "message"
git push
```

## Package Management
```bash
# Install dependencies
bun install

# Add new dependency
bun add package-name

# Remove dependency
bun remove package-name
```

## File Structure Navigation
- `src/components/` - Astro components
- `src/content/blog/` - Blog posts (MDX)
- `src/layouts/` - Page layouts
- `src/pages/` - Route pages
- `src/styles/` - Global CSS
- `src/utils/` - Utility functions
- `public/` - Static assets