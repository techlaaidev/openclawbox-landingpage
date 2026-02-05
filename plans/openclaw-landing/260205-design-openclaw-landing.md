# Design Plan: OpenClaw Landing Page

**Date**: February 5, 2026  
**Product**: OpenClaw - AI Personal Assistant Hardware  
**Language**: Vietnamese (Primary), English (Optional)  
**Type**: Static Website (HTML/CSS/JS)  
**Design Philosophy**: Minimalist, Modern, No Gradients, No Emojis

---

## Executive Summary

This design plan outlines a premium, award-winning landing page for OpenClaw - an AI-integrated hardware product (personal AI assistant). Drawing inspiration from molt.win's minimalist approach while incorporating modern 2024 design trends, the site will feature:

- **Clean, minimalist aesthetic** with strong typography and whitespace
- **Smooth, performant animations** using CSS + Intersection Observer
- **Mobile-first responsive design** optimized for Vietnamese market
- **Product-centric storytelling** emphasizing both hardware quality and AI capabilities
- **No gradients, no emojis** - sophisticated, professional presentation
- **Perfect Vietnamese typography** using Inter font family

---

## Design Strategy

### Design Approach
**Minimalist Premium Hardware**
- Molt.win-inspired clean layouts with generous whitespace
- High-quality product photography as visual anchor
- Monochromatic base with strategic accent color
- Typography-driven hierarchy
- Purposeful, subtle animations
- Technical transparency through detailed specifications

### Target Audience
- Tech-savvy Vietnamese consumers
- Early adopters interested in AI technology
- Users seeking personal AI assistance
- Price-conscious but quality-focused buyers
- Mobile-first users (Vietnam has 70%+ mobile traffic)

### Brand Personality
- **Innovative**: Cutting-edge AI technology
- **Trustworthy**: Reliable, professional hardware
- **Accessible**: Easy to understand, Vietnamese-language focus
- **Sophisticated**: Premium design, attention to detail
- **Human-centric**: AI that enhances daily life

---

## Visual Design System

### Color Palette

**Base Colors** (Monochromatic Foundation)
```css
--color-black: #0A0A0A;           /* Primary text, backgrounds */
--color-gray-900: #1A1A1A;        /* Dark sections */
--color-gray-800: #2A2A2A;        /* Card backgrounds */
--color-gray-600: #666666;        /* Secondary text */
--color-gray-400: #999999;        /* Tertiary text */
--color-gray-200: #E5E5E5;        /* Borders, dividers */
--color-gray-100: #F5F5F5;        /* Light backgrounds */
--color-white: #FFFFFF;           /* Pure white */
```

**Accent Color** (Single, Strategic Use)
```css
--color-primary: #BD2D2D;         /* Red - energy, action, bold */
--color-primary-hover: #A02626;   /* Darker red for hovers */
--color-primary-light: #FEE2E2;   /* Light red for highlights */
```

**Semantic Colors**
```css
--color-success: #10B981;         /* Green - success states */
--color-warning: #F59E0B;         /* Orange - warnings */
--color-error: #EF4444;           /* Red - errors */
```

**Usage Rules**
- **NO GRADIENTS** - Only solid colors
- Backgrounds: Black, Gray-900, White
- Text: Black on light, White on dark
- CTAs: Primary red only
- Hover states: Subtle darkening, not color changes
- Borders: Gray-200 for light theme, Gray-800 for dark

### Typography

**Font Family: Inter** (Excellent Vietnamese support)
```css
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

**Type Scale** (Mobile-first, scales up on desktop)
```css
/* Mobile */
--text-xs: 0.75rem;    /* 12px - captions */
--text-sm: 0.875rem;   /* 14px - small text */
--text-base: 1rem;     /* 16px - body */
--text-lg: 1.125rem;   /* 18px - large body */
--text-xl: 1.25rem;    /* 20px - subheadings */
--text-2xl: 1.5rem;    /* 24px - section titles */
--text-3xl: 2rem;      /* 32px - hero */
--text-4xl: 2.5rem;    /* 40px - display */

/* Desktop (768px+) */
@media (min-width: 768px) {
  --text-3xl: 2.5rem;  /* 40px */
  --text-4xl: 3.5rem;  /* 56px */
}

/* Desktop Large (1024px+) */
@media (min-width: 1024px) {
  --text-3xl: 3rem;    /* 48px */
  --text-4xl: 4rem;    /* 64px */
}
```

**Line Height** (Optimized for Vietnamese diacritics)
```css
--leading-tight: 1.2;    /* Hero text, display */
--leading-normal: 1.6;   /* Body text */
--leading-relaxed: 1.8;  /* Long-form content */
```

**Letter Spacing**
```css
--tracking-tight: -0.02em;   /* Large headings */
--tracking-normal: 0;        /* Body text */
--tracking-wide: 0.025em;    /* Buttons, labels */
```

**Typography Hierarchy**
- **H1 Hero**: 4xl, ExtraBold (800), Tight leading, Tight tracking
- **H2 Section**: 3xl, Bold (700), Tight leading, Tight tracking
- **H3 Subsection**: 2xl, Bold (700), Normal leading
- **H4 Card Title**: xl, SemiBold (600), Normal leading
- **Body Large**: lg, Regular (400), Normal leading
- **Body**: base, Regular (400), Relaxed leading
- **Caption**: sm, Regular (400), Normal leading
- **Button**: base, SemiBold (600), Wide tracking, UPPERCASE

### Spacing System

**Base Unit: 4px** (Consistent rhythm)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

**Section Spacing**
- Mobile: 64px (space-16) vertical padding
- Desktop: 96px (space-24) vertical padding

**Component Spacing**
- Card padding: 24px (space-6) mobile, 32px (space-8) desktop
- Button padding: 12px 24px (space-3 space-6)
- Input padding: 12px 16px (space-3 space-4)

### Grid System

**Mobile** (320px - 767px)
```css
.container {
  max-width: 100%;
  padding: 0 var(--space-4); /* 16px gutters */
}
```

**Tablet** (768px - 1023px)
```css
.container {
  max-width: 720px;
  padding: 0 var(--space-6); /* 24px gutters */
  margin: 0 auto;
}
```

**Desktop** (1024px+)
```css
.container {
  max-width: 1200px;
  padding: 0 var(--space-8); /* 32px gutters */
  margin: 0 auto;
}
```

**Grid Columns**
- Mobile: Single column, stacked layout
- Tablet: 2 columns for features
- Desktop: 3-4 columns for features, 2 columns for specifications

### Border Radius

```css
--radius-sm: 0.25rem;    /* 4px - small elements */
--radius-md: 0.5rem;     /* 8px - cards, buttons */
--radius-lg: 0.75rem;    /* 12px - large cards */
--radius-xl: 1rem;       /* 16px - modals */
--radius-full: 9999px;   /* Pills, avatars */
```

### Shadows

**Subtle, Minimal** (No heavy drop shadows)
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.10);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

**Usage**
- Cards: shadow-md
- Hover states: shadow-lg
- Modals: shadow-xl
- Images: None (clean edges)

---

## Page Structure

### 1. Navigation Header

**Desktop**
```
[Logo] ────────────────── [Tính năng] [Thông số] [Giá] [EN/VI] [Đặt hàng]
```

**Mobile**
```
[Logo] ──────────────────────────────────────── [☰]
```

**Specifications**
- Fixed header on scroll
- Height: 64px mobile, 72px desktop
- Background: White with subtle shadow on scroll
- Logo: Left-aligned, 32px height
- Nav items: Inter Medium (500), 16px
- CTA button: Primary blue
- Mobile: Hamburger menu, slide-in drawer

### 2. Hero Section

**Layout**
```
[Full-screen section]
  [Hero Image - OpenClaw Product]
  [H1: "OpenClaw"]
  [Tagline: "Trợ lý AI cá nhân của bạn"]
  [Subtitle: Brief description]
  [CTA: "Khám phá ngay" | "Đặt trước"]
  [Scroll indicator]
```

**Specifications**
- Height: 100vh (full viewport)
- Background: White or light gray
- Product image: Center-aligned, 60% width on desktop
- Text: Center-aligned on mobile, left-aligned on desktop (option)
- Animation: Fade in on load, parallax on scroll
- Scroll indicator: Animated downward arrow

### 3. Value Proposition Section

**Layout**
```
[Container]
  [H2: "Tại sao chọn OpenClaw?"]
  [Grid: 3 columns desktop, 1 column mobile]
    [Icon | Title | Description] × 3
```

**Content Ideas**
- AI thông minh - Hiểu bạn, hỗ trợ bạn
- Bảo mật tuyệt đối - Dữ liệu của bạn, quyền riêng tư của bạn
- Dễ sử dụng - Thiết lập trong 5 phút

**Specifications**
- Icons: Simple, custom SVG (no emojis)
- Grid: 3 columns on desktop, gap 32px
- Card: Minimal, no borders, subtle hover effect
- Animation: Fade in + slide up on scroll, staggered

### 4. Product Features Section (Alternating Layout)

**Feature 1 Layout** (Image Left, Text Right)
```
[Container]
  [Image: OpenClaw close-up] ──── [Text Block]
                                   [H3: "Thiết kế tinh tế"]
                                   [Description]
                                   [Bullet points]
```

**Feature 2 Layout** (Text Left, Image Right)
```
[Container]
  [Text Block] ──── [Image: OpenClaw in use]
  [H3: "AI tiên tiến"]
  [Description]
  [Bullet points]
```

**Repeat Pattern**
- Feature 3: Image Left
- Feature 4: Image Right

**Specifications**
- 50/50 split on desktop
- Stacked on mobile (image always first)
- Images: High-quality, no backgrounds
- Animation: Fade in as user scrolls
- Minimum 3-4 feature blocks

### 5. Technical Specifications Section

**Layout**
```
[Container]
  [H2: "Thông số kỹ thuật"]
  [Two-column table on desktop, single column on mobile]
    [Specification] ─── [Value]
    [Processor]     ─── [Qualcomm Snapdragon XXX]
    [Memory]        ─── [8GB RAM]
    [Storage]       ─── [256GB]
    [Battery]       ─── [24 hours]
    [...etc]
```

**Specifications**
- Clean table design
- Inter Regular for spec names, Medium for values
- Alternating row backgrounds (subtle gray)
- Expandable sections for detailed specs (optional)
- Downloadable PDF spec sheet link

### 6. How It Works Section

**Layout**
```
[Container]
  [H2: "Cách hoạt động"]
  [Timeline/Steps: Horizontal on desktop, vertical on mobile]
    [1] ──→ [2] ──→ [3] ──→ [4]
    [Icon]  [Icon]  [Icon]  [Icon]
    [Step]  [Step]  [Step]  [Step]
```

**Content Ideas**
1. Unbox & Setup - Mở hộp và thiết lập
2. Connect - Kết nối với thiết bị
3. Customize - Tùy chỉnh theo sở thích
4. Enjoy - Trải nghiệm AI cá nhân

**Specifications**
- Number badges: Large, bold
- Connecting lines: Dashed or solid
- Icons: Custom SVG illustrations
- Animation: Reveal sequence on scroll

### 7. Pricing Section

**Layout**
```
[Container]
  [H2: "Bảng giá"]
  [Pricing Card]
    [Product Name: "OpenClaw"]
    [Price: "XX.XXX.XXX đ"]
    [Features list]
    [CTA: "Đặt hàng ngay"]
  [Payment options]
  [Shipping information]
```

**Specifications**
- Single pricing tier (not multiple plans)
- Large price display
- Feature checklist
- Trust badges (warranty, return policy)
- Payment method icons (Momo, ZaloPay, bank transfer)

### 8. FAQ Section

**Layout**
```
[Container]
  [H2: "Câu hỏi thường gặp"]
  [Accordion List]
    [Question 1 ▼]
    [Answer 1 - expanded/collapsed]
    [Question 2 ▶]
    [Question 3 ▶]
    [...etc]
```

**Content Ideas**
- Bảo hành như thế nào?
- Có hỗ trợ tiếng Việt không?
- OpenClaw hoạt động offline không?
- Dữ liệu có an toàn không?
- Giao hàng mất bao lâu?

**Specifications**
- Accordion interaction (expand/collapse)
- Smooth animation (max-height trick)
- 6-8 most common questions
- Link to full FAQ page if needed

### 9. CTA Section (Final Push)

**Layout**
```
[Full-width section, accent background]
  [H2: "Sẵn sàng trải nghiệm AI cá nhân?"]
  [Subtitle: "Đặt hàng ngay hôm nay"]
  [CTA Button: "Mua OpenClaw" + "Xem demo"]
```

**Specifications**
- Background: Dark (gray-900) with white text
- Large, prominent CTA buttons
- Social proof: "Join 1000+ happy users" (if applicable)

### 10. Footer

**Layout**
```
[Container]
  [Four columns on desktop, stacked on mobile]
  
  [Column 1: About]        [Column 2: Product]    [Column 3: Support]    [Column 4: Social]
  Logo                     Features               FAQ                    Facebook
  Tagline                  Specifications         Contact                Instagram
                           Pricing                Warranty               YouTube
  
  [Bottom Bar]
  © 2026 OpenClaw. All rights reserved. | Privacy Policy | Terms of Service
```

**Specifications**
- Background: Gray-100 or Gray-900
- Links: Gray-600, hover to primary
- Social icons: Simple, monochrome
- Language switcher: EN/VI

---

## Animation Strategy

### Scroll-Triggered Animations

**Implementation**: CSS + Intersection Observer API (no libraries)

**Animation Types**
1. **Fade In + Slide Up** (Default for most content)
   - Initial: opacity 0, translateY(30px)
   - Final: opacity 1, translateY(0)
   - Duration: 600ms
   - Easing: cubic-bezier(0.16, 1, 0.3, 1)

2. **Scale In** (For cards, images)
   - Initial: opacity 0, scale(0.95)
   - Final: opacity 1, scale(1)
   - Duration: 500ms

3. **Stagger** (For feature grids)
   - Same as #1, but with 100ms delay between items
   - Creates cascade effect

4. **Parallax** (Hero section only)
   - Subtle background movement on scroll
   - Speed: 0.5 (half the scroll speed)
   - Disabled on mobile for performance

### Hover States

**Buttons**
```css
- Transform: translateY(-2px)
- Shadow: Increase from md to lg
- Duration: 200ms
```

**Cards**
```css
- Shadow: Increase from sm to md
- Duration: 300ms
```

**Links**
```css
- Color: Gray-600 → Primary
- Underline: Slide in from left
- Duration: 200ms
```

**Images**
```css
- Scale: 1 → 1.05 (in overflow:hidden container)
- Duration: 600ms
```

### Micro-Interactions

- **Smooth scroll** to anchor links
- **Button active state**: Scale down to 0.98
- **Input focus**: Border color change + subtle shadow
- **Loading states**: Pulse animation
- **Scroll indicator**: Bounce animation

### Performance

- **GPU acceleration**: Use transform and opacity only
- **Will-change**: Applied to animating elements, removed after
- **Intersection Observer**: Lazy-trigger animations
- **Reduced motion**: Respect `prefers-reduced-motion` preference
- **60fps target**: Test on low-end devices

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
/* xs: 0-479px (base styles) */

/* sm: 480px-767px */
@media (min-width: 480px) { }

/* md: 768px-1023px (Tablet) */
@media (min-width: 768px) { }

/* lg: 1024px-1279px (Small Desktop) */
@media (min-width: 1024px) { }

/* xl: 1280px+ (Large Desktop) */
@media (min-width: 1280px) { }
```

**Mobile-First Strategy**
- Design and build mobile first
- Progressive enhancement for larger screens
- Touch-friendly targets (44x44px minimum)
- Simplified navigation (hamburger menu)
- Vertical stacking (no complex grids)

---

## Component Breakdown

### Core Components to Build

1. **Header**
   - Logo
   - Navigation menu (desktop)
   - Hamburger menu (mobile)
   - Language switcher
   - CTA button

2. **Hero**
   - Large heading
   - Subtitle
   - CTA buttons
   - Product image
   - Scroll indicator

3. **Feature Card**
   - Icon
   - Title
   - Description
   - Optional link

4. **Feature Block** (Alternating)
   - Image
   - Heading
   - Description
   - Bullet points

5. **Specification Table**
   - Two-column layout
   - Alternating row backgrounds

6. **Timeline Steps**
   - Step number
   - Icon
   - Title
   - Description

7. **Pricing Card**
   - Product name
   - Price
   - Feature list
   - CTA button

8. **FAQ Accordion**
   - Question
   - Answer (expand/collapse)
   - Icon (arrow)

9. **CTA Section**
   - Heading
   - Subtitle
   - Button group

10. **Footer**
    - Multiple columns
    - Social links
    - Copyright

---

## Content Strategy (Vietnamese)

### Tone of Voice
- **Thân thiện**: Approachable, conversational
- **Chuyên nghiệp**: Professional, trustworthy
- **Rõ ràng**: Clear, concise explanations
- **Tự hào**: Confident in product quality
- **Hỗ trợ**: Helpful, customer-focused

### Key Messaging
- **Headline**: Short, punchy, memorable
- **Value proposition**: What makes OpenClaw unique?
- **Features**: Focus on benefits, not just specs
- **Call-to-action**: Clear, action-oriented
- **Social proof**: Testimonials, reviews (if available)

### SEO Considerations
- **Title tag**: "OpenClaw - Trợ lý AI Cá nhân | AI Hardware Vietnam"
- **Meta description**: 150-160 characters, compelling summary
- **Headings**: Proper H1-H6 hierarchy, keyword-rich
- **Alt text**: Descriptive image alt tags in Vietnamese
- **Schema markup**: Product structured data

---

## Assets Required

### Images
1. **Hero product shot** - Full product, clean background
2. **Feature images** (4-5) - Close-ups, usage scenarios
3. **Detail shots** - Buttons, ports, materials
4. **Lifestyle photos** - Product in use
5. **Diagram/Exploded view** - Technical illustration

**Specifications**
- Format: WebP with JPEG fallback
- Sizes: Multiple sizes for responsive images
- Optimization: Compressed for web
- Background: Transparent PNG for product shots

### Icons
1. **Feature icons** (6-8) - Custom SVG, minimal style
2. **Social icons** - Facebook, Instagram, YouTube
3. **Payment icons** - Momo, ZaloPay, bank transfer
4. **UI icons** - Arrow, hamburger, close, chevron

**Specifications**
- Format: SVG (inline or sprite)
- Style: Line icons, 1-2px stroke
- Size: 24x24px, 32x32px, 48x48px
- Color: Currentcolor (inherit from CSS)

### Logo
- **Primary logo**: SVG, horizontal layout
- **Icon mark**: For mobile, small spaces
- **Light version**: For dark backgrounds
- **Dark version**: For light backgrounds

---

## Implementation Checklist

### Phase 1: Foundation (Day 1)
- [ ] Set up project structure (HTML, CSS, JS files)
- [ ] Create design system CSS (colors, typography, spacing)
- [ ] Load Google Fonts (Inter family)
- [ ] Set up responsive grid system
- [ ] Create base component styles (buttons, cards, inputs)
- [ ] Implement header component
- [ ] Implement footer component

### Phase 2: Core Sections (Day 2)
- [ ] Build hero section with placeholder image
- [ ] Build value proposition section (3 features)
- [ ] Build alternating feature sections (4 blocks)
- [ ] Build technical specifications table
- [ ] Implement responsive layouts for all sections

### Phase 3: Interactive Elements (Day 3)
- [ ] Add scroll-triggered animations (Intersection Observer)
- [ ] Implement smooth scroll navigation
- [ ] Add hover states and transitions
- [ ] Build FAQ accordion functionality
- [ ] Add mobile hamburger menu
- [ ] Test animations on mobile

### Phase 4: Content & Assets (Day 4)
- [ ] Generate/source product images
- [ ] Create custom SVG icons
- [ ] Write Vietnamese copy for all sections
- [ ] Optimize images (WebP, compression)
- [ ] Add alt text and ARIA labels
- [ ] Implement language switcher (if EN version)

### Phase 5: Polish & Testing (Day 5)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Performance optimization (lighthouse)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Fix any visual bugs
- [ ] Test with Vietnamese text (diacritics)
- [ ] Add meta tags and SEO
- [ ] Final review

---

## Success Metrics

### Technical Performance
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Page Load Time**: < 3 seconds on 3G
- **First Contentful Paint**: < 1.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **Largest Contentful Paint**: < 2.5 seconds

### Design Quality
- **Mobile-friendly**: 100% Google Mobile-Friendly Test
- **Accessibility**: WCAG 2.1 AA compliance
- **Browser support**: Last 2 versions of major browsers
- **Typography**: Perfect Vietnamese diacritic rendering

### User Experience
- **Clear value proposition**: Understood in < 5 seconds
- **Easy navigation**: < 2 clicks to any section
- **Smooth animations**: 60fps on most devices
- **Fast CTA**: Primary action always visible

---

## Next Steps

1. **Review this plan** with stakeholder for approval
2. **Gather content** (copy, images, technical specs)
3. **Generate assets** (product photos, icons, diagrams)
4. **Begin implementation** following phase checklist
5. **Iterate based on feedback** and testing

---

## Design Principles Summary

✅ **DO**
- Keep it clean and minimal
- Use high-quality product photography
- Ensure perfect Vietnamese typography
- Create smooth, purposeful animations
- Focus on mobile-first design
- Use solid colors only (no gradients)
- Maintain strong visual hierarchy
- Test on real devices

❌ **DON'T**
- Use gradients (per requirement)
- Use emojis (per requirement)
- Overload with animations
- Ignore accessibility
- Forget mobile optimization
- Use heavy libraries/frameworks
- Compromise on performance
- Skip Vietnamese text testing

---

**This plan is ready for stakeholder review and approval before implementation begins.**
