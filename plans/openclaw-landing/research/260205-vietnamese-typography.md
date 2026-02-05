# Research Report: Vietnamese Typography for Web Design

## Executive Summary

Vietnamese typography requires special consideration due to its complex diacritical marks. Successful Vietnamese web typography balances **readability**, **aesthetic appeal**, and **technical compatibility**. Key requirements include:
- Fonts with complete Vietnamese character coverage
- Adequate line height to prevent diacritic overlap
- Careful letter-spacing to maintain mark visibility
- Testing across devices and rendering engines

## Vietnamese Character Requirements

### Diacritical Marks
Vietnamese uses multiple diacritical marks that can stack:
- **Tone marks**: Acute (á), grave (à), hook (ả), tilde (ã), dot below (ạ)
- **Vowel marks**: Circumflex (â), breve (ă), horn (ơ, ư)
- **Special**: Đ/đ (crossed D)

### Combined Examples
- ằ, ắ, ẳ, ẵ, ặ (breve + tone marks)
- ầ, ấ, ẩ, ẫ, ậ (circumflex + tone marks)
- ờ, ớ, ở, ỡ, ợ (horn + tone marks)

## Google Fonts with Excellent Vietnamese Support

### Sans-Serif (Modern, Professional)

**Tier 1: Premium Choice**
1. **Inter**
   - Modern, highly legible
   - 9 weights (100-900)
   - Excellent diacritic rendering
   - Used by: Figma, GitHub, Mozilla
   - **Recommended for: Body text, UI elements**

2. **Manrope**
   - Geometric, friendly
   - 8 weights (200-800)
   - Clean diacritic positioning
   - **Recommended for: Headings, marketing copy**

3. **Be Vietnam Pro**
   - Designed specifically for Vietnamese
   - 9 weights (100-900)
   - Perfect diacritic spacing
   - **Recommended for: Vietnamese-primary sites**

4. **Lexend**
   - Designed for readability
   - 9 weights (100-900)
   - Excellent for dyslexic users
   - **Recommended for: Accessibility-focused sites**

**Tier 2: Solid Options**
5. **IBM Plex Sans**
   - Technical, professional
   - Good Vietnamese coverage
   - **Recommended for: Tech products**

6. **DM Sans**
   - Geometric, modern
   - Clean and minimal
   - **Recommended for: Minimalist designs**

7. **Work Sans**
   - Versatile, readable
   - Good weight range
   - **Recommended for: General purpose**

8. **Outfit**
   - Geometric, contemporary
   - Stylish but readable
   - **Recommended for: Modern brands**

### Serif (Traditional, Elegant)

1. **Spectral**
   - Designed for screens
   - Excellent Vietnamese rendering
   - **Recommended for: Editorial content**

2. **Playfair Display**
   - High-contrast serif
   - Elegant, sophisticated
   - **Recommended for: Premium brands**

3. **Crimson Pro**
   - Classic book serif
   - Highly readable
   - **Recommended for: Long-form content**

### Monospace (Technical, Code)

1. **JetBrains Mono**
   - Modern coding font
   - Excellent Vietnamese support
   - **Recommended for: Code snippets, technical specs**

2. **IBM Plex Mono**
   - Clean, technical
   - Good diacritic spacing
   - **Recommended for: Technical documentation**

## Font Pairing Recommendations for OpenClaw

### Option 1: Modern & Clean (Recommended)
- **Display**: Inter Bold (800-900) - Headings, hero text
- **Body**: Inter Regular (400-500) - Body text, descriptions
- **Accent**: Inter Medium (600) - Subheadings, callouts
- **Technical**: JetBrains Mono - Specifications, code

**Rationale**: Single font family creates cohesion, Inter has perfect Vietnamese rendering, versatile weight range.

### Option 2: Geometric & Friendly
- **Display**: Manrope ExtraBold (800) - Headings
- **Body**: Be Vietnam Pro Regular (400) - Body text
- **Accent**: Manrope SemiBold (600) - Subheadings
- **Technical**: IBM Plex Mono - Specifications

**Rationale**: Geometric headings for modern tech feel, native Vietnamese font for body ensures perfect rendering.

### Option 3: Technical & Professional
- **Display**: IBM Plex Sans Bold (700) - Headings
- **Body**: IBM Plex Sans Regular (400) - Body text
- **Accent**: IBM Plex Sans Medium (500) - Subheadings
- **Technical**: IBM Plex Mono - Specifications

**Rationale**: Consistent IBM Plex family creates professional, technical aesthetic.

### Option 4: Contemporary & Stylish
- **Display**: Outfit Bold (700-800) - Headings
- **Body**: DM Sans Regular (400) - Body text
- **Accent**: Outfit SemiBold (600) - Subheadings
- **Technical**: JetBrains Mono - Specifications

**Rationale**: Stylish modern combination, both have excellent Vietnamese support.

## Typography Best Practices

### Line Height (Leading)
- **Headings**: 1.1 - 1.3 (tighter for impact)
- **Body text**: 1.6 - 1.8 (Vietnamese needs more space)
- **Small text**: 1.5 - 1.6 (footer, captions)

**Why higher for Vietnamese**: Diacritical marks need vertical space to avoid clipping.

### Font Sizes
```css
/* Mobile-first scale */
--text-xs: 0.75rem;   /* 12px - captions, legal */
--text-sm: 0.875rem;  /* 14px - small text */
--text-base: 1rem;    /* 16px - body text */
--text-lg: 1.125rem;  /* 18px - large body */
--text-xl: 1.25rem;   /* 20px - subheadings */
--text-2xl: 1.5rem;   /* 24px - headings */
--text-3xl: 1.875rem; /* 30px - section titles */
--text-4xl: 2.25rem;  /* 36px - page titles */
--text-5xl: 3rem;     /* 48px - hero text */
--text-6xl: 3.75rem;  /* 60px - display text */

/* Desktop adjustments */
@media (min-width: 768px) {
  --text-5xl: 4rem;   /* 64px */
  --text-6xl: 5rem;   /* 80px */
}
```

### Letter Spacing
- **Headings**: -0.02em to -0.03em (tighter for large text)
- **Body**: 0 (default, don't adjust)
- **Small caps**: +0.05em to +0.1em (wider for clarity)
- **Buttons**: +0.02em to +0.05em (slightly wider)

### Weight Usage
- **Light (300)**: Avoid for Vietnamese (diacritics too thin)
- **Regular (400)**: Body text
- **Medium (500-600)**: Subheadings, emphasis
- **Bold (700)**: Headings, important text
- **ExtraBold (800-900)**: Hero text, display headings

## Loading Strategy

### Performance Optimization
```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load only needed weights and subsets -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Font Display Strategy
```css
@font-face {
  font-family: 'Inter';
  font-display: swap; /* Show fallback immediately, swap when loaded */
}
```

### Fallback Fonts
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

## Testing Checklist

- [ ] Test with common Vietnamese phrases
- [ ] Check diacritic rendering on Windows (ClearType)
- [ ] Check diacritic rendering on macOS (CoreText)
- [ ] Check on Android (various manufacturers)
- [ ] Check on iOS (Safari, Chrome)
- [ ] Test at various zoom levels (100%, 125%, 150%)
- [ ] Verify no clipping of marks at all sizes
- [ ] Check printing (if applicable)

## Common Pitfalls

1. **Insufficient line height**: Causes diacritics to overlap
2. **Too-light weights**: Makes marks hard to see
3. **Aggressive letter-spacing**: Can separate marks from base characters
4. **Small font sizes**: Makes stacked marks illegible
5. **System fonts without Vietnamese**: Causes fallback to unmatched fonts

## Recommendations for OpenClaw

**Primary Recommendation: Inter**
- Single font family (simplicity)
- Weights: 400, 500, 600, 700, 800
- Perfect Vietnamese rendering
- Modern, professional, technical aesthetic
- Excellent performance
- Used by top tech companies

**Implementation**:
```css
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```
