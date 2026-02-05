# OpenClawBox SEO Setup Guide

## Cần Làm Trước Khi Deploy

### 1. Cập nhật Domain
Thay `https://openclawbox.vn/` bằng domain thật của bạn trong:
- `index.html` (canonical, og:url, twitter:url, schema.org)
- `robots.txt`
- `sitemap.xml`

### 2. Tạo OG Image (1200x630px)
File hiện tại: `src/assets/images/og-image.svg`

**Khuyến nghị**: Chuyển sang PNG/JPG để tương thích tốt hơn:
- Kích thước: 1200 x 630 pixels
- Format: PNG hoặc JPG
- File size: < 300KB
- Nội dung: Logo, tagline, giá, hình sản phẩm

Tool đề xuất:
- Canva (free)
- Figma (free)
- Adobe Express (free)

### 3. Cập nhật Zalo App ID (Optional)
Nếu có Zalo Official Account:
```html
<meta property="zalo:app_id" content="YOUR_APP_ID">
<meta property="zalo:official_account_id" content="YOUR_OA_ID">
```

### 4. Thêm Google Analytics / Facebook Pixel
Thêm trước `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## SEO Features Đã Có

### Meta Tags
- [x] Title tag tối ưu (< 60 ký tự)
- [x] Meta description (< 160 ký tự)
- [x] Keywords
- [x] Canonical URL
- [x] Robots meta
- [x] Language meta
- [x] Author meta

### Open Graph (Facebook, Zalo)
- [x] og:type
- [x] og:url
- [x] og:site_name
- [x] og:title
- [x] og:description
- [x] og:image (1200x630)
- [x] og:image:width/height
- [x] og:locale

### Twitter Card (Twitter, TikTok)
- [x] twitter:card (summary_large_image)
- [x] twitter:url
- [x] twitter:title
- [x] twitter:description
- [x] twitter:image

### Schema.org (Google Rich Results)
- [x] Product schema (tên, giá, mô tả)
- [x] Organization schema
- [x] FAQPage schema

### Technical SEO
- [x] robots.txt
- [x] sitemap.xml
- [x] Semantic HTML (h1, h2, h3...)
- [x] Alt text cho images
- [x] Mobile responsive
- [x] Fast loading (no heavy frameworks)

---

## Kiểm Tra SEO

### Tools Miễn Phí
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **Google Rich Results Test**: https://search.google.com/test/rich-results
4. **Google PageSpeed Insights**: https://pagespeed.web.dev/
5. **Schema Markup Validator**: https://validator.schema.org/

### Checklist Trước Deploy
- [ ] Test OG image trên Facebook Debugger
- [ ] Test Twitter Card
- [ ] Test Schema.org trên Google
- [ ] Kiểm tra tốc độ load < 3s
- [ ] Submit sitemap lên Google Search Console
- [ ] Submit URL lên Bing Webmaster Tools

---

## Kết Quả Mong Đợi

### Khi Share Facebook/Zalo:
```
┌─────────────────────────────────────┐
│ [OG Image 1200x630]                 │
│                                     │
│ OpenClawBox - AI Agent cho DN       │
│ Thiết lập sẵn trên Mini PC...       │
│ openclawbox.vn                      │
└─────────────────────────────────────┘
```

### Khi Tìm Trên Google:
```
OpenClawBox - AI Agent cho Doanh Nghiệp | Thiết Lập Sẵn
https://openclawbox.vn
OpenClawBox - AI Agent cho doanh nghiệp, thiết lập sẵn 
trên Mini PC. Tự động hóa Tài chính, Marketing, Sales 24/7...

⭐⭐⭐⭐⭐ 4.9/5 (50 reviews) · 2.999.000₫ · In Stock

FAQ:
▸ OpenClawBox là gì?
▸ Tôi có cần kiến thức kỹ thuật không?
```

---

## Hỗ Trợ

Liên hệ: admin@techlaai.com
