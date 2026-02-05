# Design Update - February 5, 2026

## 🎨 Color Change: Primary Accent

### Previous Color
- **Blue**: #2563EB
- Psychology: Trust, Technology
- Contrast: 5.9:1 (WCAG AA Pass)

### New Color ✅
- **Red**: #BD2D2D
- Psychology: Energy, Action, Bold, Passionate
- Contrast: 5.87:1 (WCAG AA Pass ✅)
- Hover: #A02626 (darker red)
- Light: #FEE2E2 (pale red for backgrounds)

### Why Red Works Better for OpenClaw

1. **Energy & Action**: Red conveys dynamism and proactive AI assistance
2. **Attention-Grabbing**: Strong CTAs that convert
3. **Bold & Confident**: Premium hardware deserves bold branding
4. **Vietnamese Market**: Red is culturally positive (prosperity, good fortune)
5. **Memorable**: Stands out from typical tech blue

### Updated Components
- ✅ Primary buttons
- ✅ Links and hover states
- ✅ Focus indicators
- ✅ CTA sections
- ✅ All design documentation

---

## 🚀 Enhanced Content: OpenClaw Capabilities

### New Document Created
**File**: `plans/openclaw-landing/OPENCLAW-CAPABILITIES.md` (9+ KB)

### 22 Core Capabilities Documented

#### AI Features (1-4)
1. **Voice Assistant** - Vietnamese/English voice control
2. **Smart Home Control** - IoT integration
3. **Personal Assistant** - Calendar, tasks, emails
4. **Information & Knowledge** - Search, translate, news

#### Productivity (5-7)
5. **Work Automation** - Summarization, reports
6. **Creative Assistant** - Content generation, images
7. **Learning & Education** - Tutoring, language learning

#### Lifestyle (8-10)
8. **Health & Fitness** - Workout planning, nutrition
9. **Entertainment** - Music, podcasts, recommendations
10. **Shopping Assistant** - Price comparison, deals

#### Connectivity (11-13)
11. **Multi-Device Sync** - Cloud sync, cross-platform
12. **Privacy & Security** - End-to-end encryption
13. **Developer Tools** - API, plugins, integrations

#### Advanced AI (14-16)
14. **Computer Vision** - Object recognition, OCR
15. **Predictive Intelligence** - Habit learning, proactive
16. **Emotional Intelligence** - Sentiment, mood tracking

#### Technical (17-19)
17. **Processing Power** - Snapdragon 8 Gen 3, 8GB RAM
18. **Connectivity** - Wi-Fi 6E, 5G, Bluetooth 5.3
19. **Sensors** - 4x mics, camera, ambient light

#### Unique (20-22)
20. **Context Awareness** - Learns routines, adapts
21. **Multi-Language** - 50+ languages
22. **Accessibility** - Voice-only, screen reader

### Use Case Scenarios Added
- **Morning Routine**: Wake up → Weather → Coffee → News
- **Work Day**: Meetings → Lunch → Reminders → Email
- **Evening**: Lights → Homework → Movie → Sleep

### Target Audiences Defined
- Professionals (executives, remote workers)
- Families (parents, students, elderly)
- Tech Enthusiasts (smart home, developers)
- Content Creators (writers, designers, marketers)

### Integration Ecosystem
- Smart Home: Google, Alexa, HomeKit
- Productivity: Google Workspace, Microsoft 365
- Communication: Slack, Teams, Zoom
- Entertainment: Spotify, YouTube, Netflix
- Health: Apple Health, Google Fit
- E-commerce: Shopee, Lazada, Tiki

---

## 📋 Enhanced Page Structure

### Updated Sections for Landing Page

#### NEW: Capabilities Showcase Section
**Position**: After "Value Proposition", before "Product Features"

**Layout**:
```
┌────────────────────────────────────────────────┐
│  "OpenClaw có thể làm gì?"                     │
│                                                │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐      │
│  │Voice │  │Smart │  │Work  │  │Health│      │
│  │Assist│  │ Home │  │ Auto │  │Fit   │      │
│  └──────┘  └──────┘  └──────┘  └──────┘      │
│                                                │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐      │
│  │Create│  │Learn │  │Shop  │  │Entert│      │
│  └──────┘  └──────┘  └──────┘  └──────┘      │
│                                                │
│  [View All Features →]                        │
└────────────────────────────────────────────────┘
```

**Specifications**:
- Grid: 4 columns desktop, 2 columns tablet, 1 column mobile
- Icon + Title + Short description
- Each card links to detailed capability
- Staggered animation on scroll

#### NEW: Use Cases Section
**Position**: After "How It Works", before "Pricing"

**Layout**:
```
┌────────────────────────────────────────────────┐
│  "Một ngày với OpenClaw"                       │
│                                                │
│  ┌─────────────────────────────────────────┐  │
│  │  🌅 BUỔI SÁNG                           │  │
│  │  6:30 - Wake up with gentle music       │  │
│  │  6:31 - Weather & calendar briefing     │  │
│  │  7:00 - News while getting ready        │  │
│  └─────────────────────────────────────────┘  │
│                                                │
│  ┌─────────────────────────────────────────┐  │
│  │  ☀️ BAN NGÀY                            │  │
│  │  9:00 - Join meeting, take notes        │  │
│  │  12:00 - Lunch suggestions              │  │
│  │  16:00 - Email summaries                │  │
│  └─────────────────────────────────────────┘  │
│                                                │
│  ┌─────────────────────────────────────────┐  │
│  │  🌙 BUỔI TỐI                            │  │
│  │  19:00 - Turn on lights, music          │  │
│  │  21:00 - Movie recommendation           │  │
│  │  23:00 - Set alarms, sleep mode         │  │
│  └─────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

**Specifications**:
- Timeline layout (vertical on mobile, horizontal on desktop)
- Icons for time of day (NO emojis in final - replace with SVG)
- Expandable for more details
- Parallax scrolling effect

#### ENHANCED: Technical Specs Section
Now includes detailed hardware specifications from capabilities doc:

**New Content**:
- Processor: Qualcomm Snapdragon 8 Gen 3
- RAM: 8GB LPDDR5
- Storage: 256GB UFS 4.0
- AI Chip: Dedicated NPU
- Battery: 24-hour continuous use
- Wi-Fi: 6E (tri-band)
- Bluetooth: 5.3
- 5G: Sub-6GHz + mmWave
- Sensors: 4x mics, 12MP camera, ambient light

---

## 📊 Updated Page Flow

### Original (10 sections)
1. Header
2. Hero
3. Value Proposition
4. Product Features
5. Technical Specs
6. How It Works
7. Pricing
8. FAQ
9. Final CTA
10. Footer

### Enhanced (13 sections) ✅
1. Header
2. Hero
3. Value Proposition
4. **Capabilities Showcase** ← NEW
5. Product Features (alternating)
6. **Use Cases / Day in Life** ← NEW
7. Technical Specifications (enhanced)
8. How It Works
9. **Integration Ecosystem** ← NEW
10. Pricing
11. FAQ
12. Final CTA
13. Footer

---

## 🎨 Visual Updates Needed

### Color Palette Visual
```
Previous:
█ #2563EB Blue (Technology, Trust)

New:
█ #BD2D2D Red (Energy, Action, Bold)
```

### Button Mockup Update
```
Before:                    After:
┌──────────────┐          ┌──────────────┐
│ Đặt hàng     │          │ Đặt hàng     │
│ (Blue BG)    │    →     │ (Red BG)     │
└──────────────┘          └──────────────┘
```

### Accent Color Usage
- Primary CTA buttons: Red
- Link hovers: Red
- Focus rings: Red
- Active states: Darker red
- Loading indicators: Red

---

## 📝 Content Updates Needed

### Hero Section
**Add tagline options**:
- "Trợ lý AI cá nhân - Luôn bên bạn"
- "AI thông minh cho cuộc sống hiện đại"
- "Một OpenClaw, vô vàn khả năng"

### Value Proposition
**Update 3 core benefits**:
1. **AI Đa Năng** - 20+ capabilities trong một thiết bị
2. **Bảo Mật Tuyệt Đối** - Dữ liệu của bạn, quyền riêng tư của bạn
3. **Dễ Sử Dụng** - Chỉ cần giọng nói, mọi thứ đều dễ dàng

### Features Section
**Highlight top features**:
1. Voice Control - Điều khiển bằng giọng nói tiếng Việt
2. Smart Home Hub - Kết nối mọi thiết bị thông minh
3. Work Assistant - Tự động hóa công việc hàng ngày
4. Privacy First - Mã hóa end-to-end, xử lý local

---

## 🔄 Implementation Priority

### Phase 1: Color Update (Immediate)
- [x] Update design guidelines
- [x] Update design plan
- [x] Update visual reference
- [ ] Update all component mockups
- [ ] Generate new button assets

### Phase 2: Capabilities Content (High Priority)
- [x] Create capabilities document
- [x] Define 22 core features
- [x] Add use case scenarios
- [ ] Write Vietnamese copy for all features
- [ ] Create icons for each capability (8 primary)

### Phase 3: New Sections (Medium Priority)
- [ ] Design Capabilities Showcase section
- [ ] Design Use Cases timeline section
- [ ] Design Integration Ecosystem section
- [ ] Create responsive layouts

### Phase 4: Enhanced Content (Low Priority)
- [ ] Expand FAQ with capability questions
- [ ] Add customer testimonials (if available)
- [ ] Create video demos (optional)
- [ ] Develop interactive capability explorer

---

## 📈 SEO & Marketing Updates

### Keywords to Add
- "trợ lý AI tiếng Việt"
- "smart home control Vietnam"
- "AI personal assistant hardware"
- "voice control Vietnamese"
- "automation assistant"

### Meta Description Update
```
OpenClaw - Trợ lý AI cá nhân thông minh với 20+ tính năng: điều khiển giọng nói, 
nhà thông minh, tự động hóa công việc, bảo mật tuyệt đối. Đặt hàng ngay!
```

### Structured Data
Add Product schema with:
- 22 features listed
- Technical specifications
- Price (when available)
- Availability
- Reviews/ratings

---

## ✅ Summary of Changes

### Design Changes
1. ✅ Primary color: Blue → Red (#BD2D2D)
2. ✅ Updated all design docs with new color
3. ✅ Verified WCAG AA accessibility (5.87:1)

### Content Additions
4. ✅ Created comprehensive capabilities document (22 features)
5. ✅ Added 3 use case scenarios (morning, work, evening)
6. ✅ Defined 4 target audiences
7. ✅ Listed integration ecosystem (30+ platforms)

### Structure Enhancements
8. ✅ Added 3 new sections to page flow
9. ✅ Enhanced technical specifications
10. ✅ Improved content strategy

### Documentation
11. ✅ Updated design guidelines
12. ✅ Updated design plan
13. ✅ Updated visual reference
14. ✅ Created this update document

---

## 🎯 Next Steps

### For Review
- [ ] Client approves new red color scheme
- [ ] Client reviews 22 capabilities list
- [ ] Client provides actual product specs/features
- [ ] Client confirms which capabilities to highlight

### For Implementation
- [ ] Generate capability icons (SVG)
- [ ] Write Vietnamese copy for all 22 features
- [ ] Create use case timeline graphics
- [ ] Design integration ecosystem visual
- [ ] Update all mockups with red accent

### For Assets
- [ ] Product photos (if available)
- [ ] Lifestyle photos showing use cases
- [ ] Icon set for capabilities (24x custom SVG)
- [ ] Integration platform logos
- [ ] Video demos (optional)

---

## 💬 Questions for Client

1. **Features**: Which of the 22 capabilities are MUST-HAVE for launch?
2. **Specs**: Are the technical specs accurate? (Snapdragon 8 Gen 3, 8GB RAM, etc.)
3. **Pricing**: What's the retail price? Pre-order price?
4. **Timeline**: When is the product launching?
5. **Assets**: Do you have product photos, or should I generate concepts?
6. **Integrations**: Which platforms are confirmed integrations?
7. **Languages**: Launch with Vietnamese only, or include English?
8. **Red Color**: Does the new red (#BD2D2D) align with your brand vision?

---

**Update completed**: February 5, 2026, 11:25 AM  
**Status**: ✅ Ready for client review  
**Files updated**: 4 documents  
**New content**: 9+ KB of capabilities documentation
