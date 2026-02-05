# OpenClaw Design - Visual Reference

## Color Palette

### Primary Colors
```
█ #0A0A0A Black       - Primary text, dark backgrounds
█ #666666 Gray-600    - Secondary text
█ #E5E5E5 Gray-200    - Borders, dividers
█ #FFFFFF White       - Backgrounds, light sections
█ #BD2D2D Red         - Primary accent, CTAs (Energy, Action)
```

### Color Usage Matrix

| Element          | Background      | Text            | Border/Accent   |
|-----------------|-----------------|-----------------|-----------------|
| Header          | #FFFFFF         | #0A0A0A         | #E5E5E5         |
| Hero            | #FFFFFF         | #0A0A0A         | -               |
| Features        | #F5F5F5/#FFFFFF | #0A0A0A/#666666 | -               |
| CTA Section     | #1A1A1A         | #FFFFFF         | -               |
| Footer          | #F5F5F5         | #666666         | #E5E5E5         |
| Button Primary  | #BD2D2D         | #FFFFFF         | -               |
| Button Secondary| #FFFFFF         | #0A0A0A         | #E5E5E5         |

---

## Typography Scale

### Desktop (1024px+)
```
H1 Hero:      64px / 1.2    ExtraBold (800)  "OpenClaw"
H2 Section:   48px / 1.2    Bold (700)       "Tại sao chọn OpenClaw?"
H3 Feature:   24px / 1.4    Bold (700)       "Thiết kế tinh tế"
H4 Card:      20px / 1.6    SemiBold (600)   "AI thông minh"
Body Large:   18px / 1.6    Regular (400)    Lead paragraphs
Body:         16px / 1.8    Regular (400)    Main content
Body Small:   14px / 1.6    Regular (400)    Captions
```

### Mobile (320px+)
```
H1 Hero:      32px / 1.2    ExtraBold (800)
H2 Section:   24px / 1.2    Bold (700)
H3 Feature:   20px / 1.4    Bold (700)
Body:         16px / 1.8    Regular (400)
```

---

## Layout Grid

### Desktop (1200px max-width)
```
┌────────────────────────────────────────────────────────┐
│  [Container max-width: 1200px, padding: 32px]         │
│                                                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐│
│  │  Col 1   │ │  Col 2   │ │  Col 3   │ │  Col 4   ││
│  │          │ │          │ │          │ │          ││
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘│
│                                                        │
│  Gap: 32px between columns                            │
└────────────────────────────────────────────────────────┘
```

### Mobile (320px+)
```
┌──────────────────┐
│  [Full width]    │
│  padding: 16px   │
│                  │
│  ┌────────────┐ │
│  │   Col 1    │ │
│  └────────────┘ │
│  ┌────────────┐ │
│  │   Col 2    │ │
│  └────────────┘ │
│  ┌────────────┐ │
│  │   Col 3    │ │
│  └────────────┘ │
│                  │
│  Vertical stack  │
└──────────────────┘
```

---

## Component Examples

### Button Primary
```
┌──────────────────────┐
│   Đặt hàng ngay      │ ← 16px, SemiBold, White on Blue
└──────────────────────┘
 ↑                    ↑
12px padding        24px padding
Border radius: 8px

Hover: Lifts 2px, darker blue, larger shadow
```

### Feature Card
```
┌─────────────────────────────┐
│                             │
│      [Icon 48x48px]        │
│                             │
│    Tính năng chính          │ ← 20px, SemiBold
│                             │
│  Mô tả chi tiết về tính     │ ← 16px, Regular
│  năng này giúp người dùng   │   Gray-600
│  hiểu rõ hơn về sản phẩm   │
│                             │
└─────────────────────────────┘
 ↑                           ↑
Padding: 24px (mobile)
         32px (desktop)
Background: White
Shadow: Subtle
Border radius: 12px
```

### Alternating Feature Section
```
Desktop:
┌─────────────────────────────────────────────────┐
│  [Image]              [Text Block]              │
│   50%                     50%                   │
│                                                 │
│                     Thiết kế tinh tế            │
│                                                 │
│                     OpenClaw được thiết kế...   │
│                     • Bullet point 1            │
│                     • Bullet point 2            │
└─────────────────────────────────────────────────┘

Mobile (stacked):
┌──────────────┐
│   [Image]    │
│   100% width │
├──────────────┤
│ Text Block   │
│ Heading      │
│ Description  │
│ • Bullets    │
└──────────────┘
```

---

## Animation Examples

### Fade In + Slide Up (Default scroll animation)
```
Initial State:
┌────────────┐
│            │  Opacity: 0
│  Element   │  TranslateY: 30px
│            │
└────────────┘

↓ Scroll into view ↓

Final State:
┌────────────┐
│            │  Opacity: 1
│  Element   │  TranslateY: 0
│            │
└────────────┘

Duration: 600ms
Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

### Button Hover
```
Normal:
┌──────────────┐
│    Button    │  Shadow: md
└──────────────┘

↓ Hover ↓

┌──────────────┐
│    Button    │  Lifted 2px
└──────────────┘  Shadow: lg
    ↑ 2px          Darker background

Duration: 200ms
```

---

## Page Flow Diagram

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  HEADER (Fixed)                              ┃
┃  [Logo] ──────── [Nav] [Language] [CTA]     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
         ↓
┌────────────────────────────────────────────────┐
│  HERO (100vh)                                  │
│  ┌──────────────┐                              │
│  │   Product    │  "OpenClaw"                  │
│  │   Image      │  "Trợ lý AI cá nhân của bạn" │
│  └──────────────┘  [CTA Button]                │
│                    ↓ Scroll indicator          │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  VALUE PROPOSITION                             │
│  "Tại sao chọn OpenClaw?"                      │
│                                                │
│  ┌──────┐  ┌──────┐  ┌──────┐                 │
│  │ Icon │  │ Icon │  │ Icon │                 │
│  │Title │  │Title │  │Title │                 │
│  │ Desc │  │ Desc │  │ Desc │                 │
│  └──────┘  └──────┘  └──────┘                 │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  FEATURE 1 (Image Left)                        │
│  [Image] ──────── [Text + Bullets]             │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  FEATURE 2 (Text Left)                         │
│  [Text + Bullets] ──────── [Image]             │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  TECHNICAL SPECS                               │
│  ┌────────────────────────────────────┐        │
│  │ Processor  │ Snapdragon XXX        │        │
│  │ Memory     │ 8GB RAM               │        │
│  │ Storage    │ 256GB                 │        │
│  │ Battery    │ 24 hours              │        │
│  └────────────────────────────────────┘        │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  HOW IT WORKS                                  │
│  [1] ──→ [2] ──→ [3] ──→ [4]                  │
│  Setup   Connect Customize  Enjoy              │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  PRICING                                       │
│  ┌──────────────────────┐                      │
│  │  OpenClaw            │                      │
│  │  XX.XXX.XXX đ        │                      │
│  │  • Feature 1         │                      │
│  │  • Feature 2         │                      │
│  │  [Đặt hàng ngay]     │                      │
│  └──────────────────────┘                      │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  FAQ (Accordion)                               │
│  ▼ Question 1                                  │
│    Answer 1...                                 │
│  ▶ Question 2                                  │
│  ▶ Question 3                                  │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  FINAL CTA (Dark background)                   │
│  "Sẵn sàng trải nghiệm AI cá nhân?"            │
│  [Mua OpenClaw] [Xem demo]                     │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  FOOTER                                        │
│  [Col 1]  [Col 2]  [Col 3]  [Col 4]           │
│  About    Product  Support  Social             │
│                                                │
│  © 2026 OpenClaw. All rights reserved.         │
└────────────────────────────────────────────────┘
```

---

## Spacing Reference

```
Section Vertical Padding:
Mobile:  64px (space-16)
Desktop: 96px (space-24)

Component Gaps:
Mobile:  24px (space-6)
Desktop: 32px (space-8)

Card Padding:
Mobile:  24px (space-6)
Desktop: 32px (space-8)

Button Padding:
All:     12px 24px (space-3 space-6)
```

---

## Responsive Breakpoints

```
320px ────────────────────────────────────────→
      Mobile (base styles)
                    480px ────────────────────→
                          Small Mobile
                                    768px ────→
                                          Tablet
                                                1024px ──→
                                                      Desktop
                                                            1280px →
                                                                  Large
```

---

## Icon Style Guide

```
All icons should be:
- Format: SVG (inline or sprite)
- Style: Line icons, minimal
- Stroke: 1.5-2px
- Size: 24x24px, 32x32px, 48x48px (depending on usage)
- Color: Inherit from parent (currentColor)
- NO emojis, NO decorative elements

Examples:
• Feature icons: 48x48px, 2px stroke
• UI icons: 24x24px, 1.5px stroke
• Social icons: 24x24px, monochrome
```

---

## Image Specifications

### Product Photos
- Format: WebP (with JPEG fallback)
- Background: Transparent or white
- Quality: High-res (at least 2x for retina)
- Optimization: Compressed for web
- Alt text: Descriptive Vietnamese

### Responsive Sizes
```html
<picture>
  <source media="(min-width: 1024px)" srcset="image-large.webp">
  <source media="(min-width: 768px)" srcset="image-medium.webp">
  <img src="image-small.webp" alt="OpenClaw device">
</picture>
```

---

## Accessibility Quick Reference

### Color Contrast (WCAG AA)
✅ Black on White: 19.5:1 (excellent)
✅ Gray-600 on White: 5.7:1 (pass)
✅ White on Primary Red: 5.87:1 (pass)
✅ White on Gray-900: 17.8:1 (excellent)

### Focus States
```css
:focus-visible {
  outline: 2px solid #BD2D2D;
  outline-offset: 2px;
}
```

### Touch Targets
Minimum: 44x44px for all interactive elements

---

## Performance Checklist

- [ ] Images optimized (WebP + compression)
- [ ] Lazy load below-fold images
- [ ] Minify CSS/JS
- [ ] Preload critical fonts
- [ ] GPU-accelerated animations only
- [ ] Respect prefers-reduced-motion
- [ ] Lighthouse score 90+ all categories

---

This visual reference provides quick lookup for the design system.
For complete specifications, see `docs/design-guidelines.md`
