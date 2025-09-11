# Consistent Box Layout Patterns

## Standard Card Grid Setup

For consistent alignment across all sections, always use this exact pattern:

### HTML Structure
```html
<section class="section-name">
  <div class="container">
    <!-- Optional: Centered content (titles, text) with max-width constraint -->
    <div class="section-content">
      <h2>Section Title</h2>
      <p>Section description</p>
    </div>
    
    <!-- Required: Full-width grid for cards -->
    <div class="cards-grid">
      <div class="card" data-attributes="values">
        <!-- Card content -->
      </div>
    </div>
  </div>
</section>
```

### CSS Requirements

#### Grid Container
```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  margin-top: var(--space-2xl);
}
```

#### Card Styling
```css
.card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  transition: all var(--transition-fast);
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}
```

#### Responsive Design
```css
@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
```

## Key Alignment Rules

### ✅ DO:
- Use `.container` div for consistent page margins
- Keep card grids at full container width
- Use `repeat(3, 1fr)` for equal column widths
- Use `var(--space-xl)` gap for consistent spacing
- Set `min-height: 280px` for uniform card heights
- Use `flex-direction: column` for consistent content flow

### ❌ DON'T:
- Put card grids inside constrained width containers (like `.solution-content`)
- Use different grid gaps between sections
- Mix padding values (always use `var(--space-xl)`)
- Forget responsive single-column layout

## CSS attr() Integration

When using dynamic styling with CSS attr():

```css
.card {
  --dynamic-color: attr(data-color type(<color>), var(--color-primary));
  --animation-delay: attr(data-delay type(<time>), 0s);
  --priority: attr(data-priority type(<integer>), 1);
  
  border-color: color-mix(in srgb, var(--dynamic-color) 20%, var(--color-border));
  animation-delay: var(--animation-delay);
  order: var(--priority);
}
```

## Examples from Codebase

### Technology Cards
- Location: `src/pages/en/index.astro`, `src/pages/es/index.astro`
- Uses: Dynamic red colors with CSS attr()
- Pattern: Full container width, outside `.solution-content`

### Solutions Cards  
- Location: Same files, `.use-cases` section
- Uses: Standard layout pattern
- Pattern: Direct `.cases-grid` inside `.container`

Both sections now use identical dimensions and alignment for perfect visual consistency.

## Implementation Checklist

When creating new card sections:
- [ ] Use `.container` wrapper
- [ ] Separate content area from grid area
- [ ] Apply standard grid CSS
- [ ] Set consistent padding and heights
- [ ] Test responsive behavior
- [ ] Verify alignment with existing sections