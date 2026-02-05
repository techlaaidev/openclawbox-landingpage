# OpenClaw Design Guidelines

**Version**: 1.0  
**Last Updated**: February 5, 2026  
**Product**: OpenClaw Landing Page

---

## 🎨 Design Philosophy

OpenClaw's design embodies **minimalist premium hardware** aesthetics. Inspired by molt.win and modern hardware product presentations, our design system prioritizes:

- **Clarity over decoration**
- **Function over flash**  
- **Quality over quantity**
- **Performance over bells and whistles**

### Core Principles

1. **Minimalism**: Every element serves a purpose
2. **Sophistication**: Premium feel through restraint
3. **Accessibility**: Usable by everyone
4. **Performance**: Fast, smooth, delightful
5. **Vietnamese-first**: Perfect typography and localization

### Design Constraints

- ❌ **NO GRADIENTS** - Only solid colors
- ❌ **NO EMOJIS** - Professional iconography only
- ✅ **YES TO WHITESPACE** - Let content breathe
- ✅ **YES TO SMOOTH ANIMATIONS** - Purposeful motion only

---

## 🎨 Color System

### Base Palette (Monochromatic)

```css
/* Neutrals - Primary Scale */
--color-black: #0A0A0A;
--color-gray-900: #1A1A1A;
--color-gray-800: #2A2A2A;
--color-gray-700: #404040;
--color-gray-600: #666666;
--color-gray-500: #808080;
--color-gray-400: #999999;
--color-gray-300: #CCCCCC;
--color-gray-200: #E5E5E5;
--color-gray-100: #F5F5F5;
--color-gray-50: #FAFAFA;
--color-white: #FFFFFF;
```

### Accent Colors

```css
/* Primary - Red (Energy, Action, Bold) */
--color-primary: #BD2D2D;
--color-primary-hover: #A02626;
--color-primary-light: #FEE2E2;
--color-primary-dark: #8B1F1F;

/* Semantic Colors */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

### Usage Rules

**Backgrounds**
- Primary: `--color-white`
- Secondary: `--color-gray-50`
- Dark sections: `--color-gray-900`
- Cards: `--color-white` with `--shadow-md`

**Text**
- Primary: `--color-black` (on light) or `--color-white` (on dark)
- Secondary: `--color-gray-600`
- Tertiary: `--color-gray-400`
- Links: `--color-primary` (hover: `--color-primary-hover`)

**Borders**
- Light theme: `--color-gray-200`
- Dark theme: `--color-gray-800`
- Focus: `--color-primary`

**Buttons**
- Primary CTA: `--color-primary` background, white text
- Secondary: `--color-white` background, `--color-black` text, gray border
- Ghost: Transparent background, `--color-primary` text

### Accessibility

All color combinations must meet **WCAG 2.1 AA standards**:
- Normal text: 4.5:1 contrast ratio minimum
- Large text: 3:1 contrast ratio minimum
- UI components: 3:1 contrast ratio minimum

**Tested Combinations** ✅
- Black (#0A0A0A) on White (#FFFFFF): 19.5:1
- Gray-600 (#666666) on White: 5.7:1
- White on Primary Red (#BD2D2D): 5.87:1 ✅ WCAG AA
- White on Gray-900 (#1A1A1A): 17.8:1

---

## ✍️ Typography

### Font Family

**Primary**: Inter (Google Fonts)
- Excellent Vietnamese diacritic support
- Modern, professional, highly legible
- Weights: 400, 500, 600, 700, 800

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

```css
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
```

### Font Weights

```css
--font-weight-regular: 400;    /* Body text */
--font-weight-medium: 500;     /* Emphasis, nav items */
--font-weight-semibold: 600;   /* Subheadings, buttons */
--font-weight-bold: 700;       /* Headings */
--font-weight-extrabold: 800;  /* Hero text, display */
```

### Type Scale

Mobile-first approach, scales up on larger screens:

```css
/* Mobile (Base) */
--text-xs: 0.75rem;    /* 12px - captions, legal */
--text-sm: 0.875rem;   /* 14px - small text */
--text-base: 1rem;     /* 16px - body text */
--text-lg: 1.125rem;   /* 18px - large body */
--text-xl: 1.25rem;    /* 20px - subheadings */
--text-2xl: 1.5rem;    /* 24px - section titles */
--text-3xl: 2rem;      /* 32px - hero mobile */
--text-4xl: 2.5rem;    /* 40px - display mobile */

/* Tablet (768px+) */
@media (min-width: 768px) {
  --text-3xl: 2.5rem;  /* 40px */
  --text-4xl: 3.5rem;  /* 56px */
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  --text-3xl: 3rem;    /* 48px */
  --text-4xl: 4rem;    /* 64px */
}
```

### Line Height

Vietnamese needs extra vertical space for diacritics:

```css
--leading-tight: 1.2;      /* Display text, hero */
--leading-snug: 1.4;       /* Headings */
--leading-normal: 1.6;     /* Body text */
--leading-relaxed: 1.8;    /* Long-form content */
```

### Letter Spacing

```css
--tracking-tighter: -0.03em;  /* Large display text */
--tracking-tight: -0.02em;    /* Headings */
--tracking-normal: 0;         /* Body text */
--tracking-wide: 0.025em;     /* Buttons, labels */
--tracking-wider: 0.05em;     /* Small caps */
```

### Typography Hierarchy

```css
/* H1 - Hero Title */
.h1 {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

/* H2 - Section Title */
.h2 {
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}

/* H3 - Subsection Title */
.h3 {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-snug);
}

/* H4 - Card Title */
.h4 {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--leading-normal);
}

/* Body Large */
.body-lg {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-normal);
}

/* Body */
.body {
  font-size: var(--text-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-relaxed);
}

/* Body Small */
.body-sm {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-normal);
}

/* Caption */
.caption {
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-normal);
  color: var(--color-gray-600);
}
```

### Vietnamese Typography Best Practices

1. **Never use font weights below 400** - Diacritics become too thin
2. **Always set line-height >= 1.6 for body text** - Prevents mark clipping
3. **Test with actual Vietnamese text** - "Ă Â Đ Ê Ô Ơ Ư ằ ắ ẳ ẵ ặ"
4. **Avoid excessive letter-spacing** - Can separate marks from characters
5. **Use Inter or fonts with proven Vietnamese support**

---

## 📐 Spacing System

Base unit: **4px** for consistent rhythm

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Component Spacing

- **Button padding**: `space-3 space-6` (12px 24px)
- **Card padding**: `space-6` mobile, `space-8` desktop
- **Section padding**: `space-16` mobile, `space-24` desktop
- **Grid gap**: `space-6` mobile, `space-8` desktop

---

## 🔲 Layout System

### Container

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}
```

### Breakpoints

```css
/* Mobile First */
/* xs: 0-479px (base) */

/* sm */
@media (min-width: 480px) { }

/* md (Tablet) */
@media (min-width: 768px) { }

/* lg (Desktop) */
@media (min-width: 1024px) { }

/* xl (Large Desktop) */
@media (min-width: 1280px) { }
```

### Grid System

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

/* Responsive columns */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }

@media (min-width: 768px) {
  .grid-cols-md-2 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-cols-lg-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-cols-lg-4 { grid-template-columns: repeat(4, 1fr); }
}
```

---

## 🎬 Animation System

### Performance Rules

**ONLY animate these properties** (GPU-accelerated):
- `transform: translate()`, `scale()`, `rotate()`
- `opacity`

**NEVER animate these** (CPU-bound):
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`

### Easing Functions

```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);      /* Recommended */
--ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Duration Scale

```css
--duration-instant: 100ms;    /* Button clicks */
--duration-fast: 200ms;       /* Hovers, small elements */
--duration-base: 300ms;       /* Cards, medium elements */
--duration-slow: 500ms;       /* Large elements, modals */
--duration-slower: 800ms;     /* Page transitions */
```

### Common Animations

**Fade In + Slide Up** (Primary scroll animation)
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 600ms var(--ease-out-expo),
              transform 600ms var(--ease-out-expo);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

**Hover Scale** (Buttons, cards)
```css
.hover-scale {
  transition: transform var(--duration-fast) var(--ease-out-cubic);
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

**Button Hover** (Lift effect)
```css
.btn {
  transition: transform var(--duration-fast) var(--ease-out-cubic),
              box-shadow var(--duration-fast) var(--ease-out-cubic);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn:active {
  transform: translateY(0);
  transition-duration: var(--duration-instant);
}
```

### Accessibility

**Always respect reduced motion preference**:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 🔘 Components

### Buttons

**Primary Button**
```css
.btn-primary {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-white);
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out-cubic);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

**Secondary Button**
```css
.btn-secondary {
  padding: var(--space-3) var(--space-6);
  color: var(--color-black);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
}
```

**Ghost Button**
```css
.btn-ghost {
  padding: var(--space-3) var(--space-6);
  color: var(--color-primary);
  background-color: transparent;
  border: 1px solid var(--color-primary);
}
```

### Cards

```css
.card {
  padding: var(--space-6);
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--duration-base) var(--ease-out-cubic);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

@media (min-width: 768px) {
  .card {
    padding: var(--space-8);
  }
}
```

### Inputs

```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  font-family: var(--font-family);
  color: var(--color-black);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  transition: border-color var(--duration-fast) var(--ease-out-cubic),
              box-shadow var(--duration-fast) var(--ease-out-cubic);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(189, 45, 45, 0.1);
}
```

---

## 📱 Responsive Design

### Mobile-First Strategy

1. Design for mobile (320px+) first
2. Add complexity for larger screens
3. Touch-friendly targets (44x44px minimum)
4. Simplified navigation (hamburger menu)
5. Vertical stacking (avoid complex grids)

### Touch Targets

Minimum **44x44px** for all interactive elements:
- Buttons
- Links
- Input fields
- Checkbox/radio
- Icons

### Image Optimization

```html
<!-- Responsive images with WebP -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

---

## ♿ Accessibility

### WCAG 2.1 AA Standards

- ✅ Color contrast: 4.5:1 for normal text, 3:1 for large text
- ✅ Keyboard navigation: All interactive elements focusable
- ✅ Focus indicators: Visible outline on :focus-visible
- ✅ Alt text: Descriptive text for all images
- ✅ ARIA labels: For screen readers where needed
- ✅ Semantic HTML: Proper heading hierarchy, landmarks

### Focus Styles

```css
/* Only show focus for keyboard users */
:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 🎯 SEO Best Practices

### Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OpenClaw - Trợ lý AI Cá nhân | AI Hardware Vietnam</title>
<meta name="description" content="OpenClaw là trợ lý AI cá nhân tích hợp phần cứng tiên tiến...">
<meta name="keywords" content="AI, trợ lý AI, hardware AI, OpenClaw">

<!-- Open Graph -->
<meta property="og:title" content="OpenClaw - Trợ lý AI Cá nhân">
<meta property="og:description" content="...">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="OpenClaw - Trợ lý AI Cá nhân">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="/twitter-image.jpg">
```

### Semantic HTML

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (single H1, nested H2-H6)
- Descriptive link text (not "click here")
- Alt text for all images

---

## 🔧 Performance Targets

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Scores

- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimization Checklist

- [ ] Minify CSS and JavaScript
- [ ] Optimize images (WebP, compression)
- [ ] Lazy load images below the fold
- [ ] Preload critical resources
- [ ] Use system fonts or preload custom fonts
- [ ] Minimize render-blocking resources
- [ ] Enable browser caching
- [ ] Use CDN for assets

---

## 📝 Code Standards

### CSS Organization

```css
/* 1. CSS Variables */
:root { }

/* 2. Reset/Base styles */
*, *::before, *::after { }
html { }
body { }

/* 3. Typography */
h1, h2, h3, h4, h5, h6 { }
p { }

/* 4. Layout */
.container { }
.grid { }

/* 5. Components */
.btn { }
.card { }

/* 6. Utilities */
.sr-only { }

/* 7. Responsive */
@media (min-width: 768px) { }
```

### Naming Conventions

- **Classes**: Lowercase, hyphen-separated (`.btn-primary`)
- **IDs**: camelCase (optional, prefer classes)
- **CSS Variables**: Kebab-case with prefix (`--color-primary`)
- **JavaScript hooks**: `js-` prefix (`.js-menu-toggle`)

### Comments

```css
/* ==========================================================================
   Section Title
   ========================================================================== */

/* Component Name
   ========================================================================== */

/* Subsection */
```

---

## ✅ Quality Checklist

Before considering any component complete:

- [ ] Responsive on all breakpoints (320px to 1920px+)
- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Tested on iOS and Android devices
- [ ] Perfect Vietnamese text rendering
- [ ] Keyboard navigation works
- [ ] Screen reader accessible
- [ ] Color contrast meets WCAG AA
- [ ] Animations respect prefers-reduced-motion
- [ ] Images optimized and have alt text
- [ ] No console errors or warnings
- [ ] Lighthouse score 90+ in all categories

---

## 📚 Resources

- **Design Inspiration**: Dribbble, Awwwards, Behance, Mobbin
- **Typography**: Google Fonts (Inter)
- **Icons**: Custom SVG (inline or sprite)
- **Images**: Optimized WebP with JPEG fallback
- **Testing**: BrowserStack, Chrome DevTools, Lighthouse

---

**This is a living document. Update as the design system evolves.**
