/**
 * OpenClawBox Internationalization (i18n)
 * Vietnamese (default) + English
 */

const translations = {
  vi: {
    // Header
    "nav.features": "Tính năng",
    "nav.specs": "Thông số",
    "nav.pricing": "Giá",
    "nav.faq": "FAQ",
    "nav.order": "Đặt hàng",
    
    // Hero
    "hero.badge": "Plug & Play • Sẵn sàng sử dụng",
    "hero.title": "OpenClawBox",
    "hero.subtitle": "AI Agent cho doanh nghiệp — Thiết lập sẵn trên Mini PC.<br>Tài chính, Marketing, Sales — Vận hành tự động 24/7.",
    "hero.price": "2.999.000₫",
    "hero.price.note": "Miễn phí vận chuyển toàn quốc",
    "hero.cta.order": "Đặt hàng ngay",
    "hero.cta.learn": "Tìm hiểu thêm",
    
    // Value Props
    "value.title": "Tại sao chọn OpenClawBox?",
    "value.subtitle": "Giải pháp AI Agent hoàn chỉnh, sẵn sàng vận hành doanh nghiệp của bạn",
    "value.1.title": "Thiết Lập Sẵn 100%",
    "value.1.desc": "Toàn bộ hệ thống AI Agent đã được cấu hình. Mở hộp, kết nối mạng — bắt đầu tự động hóa ngay lập tức.",
    "value.2.title": "AI Hiểu Doanh Nghiệp",
    "value.2.desc": "Được huấn luyện để hiểu quy trình kinh doanh. Đưa ra quyết định thông minh như một nhân viên thực thụ.",
    "value.3.title": "Đầu Tư Một Lần",
    "value.3.desc": "Thay thế hàng chục công cụ SaaS và nhân sự. Vận hành 24/7 với chi phí cố định, không phí ẩn.",
    
    // Product Size
    "size.title": "Thiết Kế Tối Ưu",
    "size.subtitle": "Kích thước nhỏ gọn, hiệu suất mạnh mẽ. Vận hành êm ái, tiết kiệm điện năng.",
    "size.label": "Thiết kế compact — Phù hợp mọi không gian làm việc",
    
    // Features
    "features.title": "Khả Năng Của OpenClawBox",
    "features.subtitle": "8 module AI Agent chuyên biệt — Tự động hóa toàn diện",
    "features.1.title": "Tài Chính & Kế Toán",
    "features.1.desc": "Quản lý thu chi, tổng hợp báo cáo thuế, phân tích doanh thu đa kênh tự động",
    "features.2.title": "Sales & Marketing",
    "features.2.desc": "Sáng tạo nội dung, tối ưu quảng cáo A/B, quản lý đa nền tảng social",
    "features.3.title": "Quản Lý Công Việc",
    "features.3.desc": "Lập lịch thông minh, nhắc nhở tự động, tối ưu năng suất cho team",
    "features.4.title": "Social Listening",
    "features.4.desc": "Theo dõi xu hướng ngành, phân tích đối thủ, gợi ý chiến lược content",
    "features.5.title": "Đánh Giá Đối Tác",
    "features.5.desc": "Phân tích uy tín nhà cung cấp, tổng hợp review, đánh giá rủi ro hợp tác",
    "features.6.title": "A/B Testing Engine",
    "features.6.desc": "Tự động tạo và phân tích hàng chục biến thể quảng cáo, tối ưu ROI liên tục",
    "features.7.title": "Omni-Channel Hub",
    "features.7.desc": "Tích hợp Instagram, TikTok, Facebook, Shopee, Lazada, Tiki trong một dashboard",
    "features.8.title": "AI Chatbot Pro",
    "features.8.desc": "Tư vấn khách hàng thông minh, chốt đơn tự động, chăm sóc sau bán 24/7",
    
    // Specs
    "specs.title": "Thông Số Kỹ Thuật",
    "specs.subtitle": "Phần cứng được tối ưu cho các tác vụ AI Agent",
    "specs.processor": "Bộ xử lý",
    "specs.processor.value": "Intel Core i3-4130 Dual Core",
    "specs.ram": "Bộ nhớ",
    "specs.ram.value": "8GB DDR3",
    "specs.storage": "Lưu trữ",
    "specs.storage.value": "128GB M.2 SSD",
    "specs.os": "Phần mềm",
    "specs.os.value": "Windows + OpenClawBox AI Agent",
    "specs.connectivity": "Kết nối",
    "specs.connectivity.value": "WiFi, Ethernet, USB 3.0",
    "specs.power": "Nguồn điện",
    "specs.power.value": "Adapter 65W (bao gồm)",
    "specs.size": "Kích thước",
    "specs.size.value": "Ultra-compact, tiết kiệm không gian",
    "specs.noise": "Độ ồn",
    "specs.noise.value": "Vận hành im lặng",
    
    // How it works
    "how.title": "Bắt Đầu Sử Dụng",
    "how.subtitle": "4 bước đơn giản để khởi chạy AI Agent",
    "how.1.title": "Nhận Hàng",
    "how.1.desc": "Kiểm tra thiết bị và phụ kiện. OpenClawBox AI Agent đã được thiết lập sẵn.",
    "how.2.title": "Kết Nối",
    "how.2.desc": "Cắm nguồn, khởi động. Kết nối WiFi hoặc cáp mạng Ethernet.",
    "how.3.title": "Cấu Hình",
    "how.3.desc": "Thiết lập thông tin doanh nghiệp để AI hiểu context và quy trình của bạn.",
    "how.4.title": "Vận Hành",
    "how.4.desc": "Kết nối các nền tảng và để OpenClawBox tự động hóa 24/7!",
    
    // Pricing
    "pricing.title": "Đặt Hàng Ngay",
    "pricing.subtitle": "Đầu tư một lần, sở hữu AI Agent vĩnh viễn",
    "pricing.name": "OpenClawBox",
    "pricing.price": "2.999.000₫",
    "pricing.period": "Thanh toán một lần • Miễn phí vận chuyển",
    "pricing.feature.1": "Mini PC Intel i3, 8GB RAM, 128GB SSD",
    "pricing.feature.2": "OpenClawBox AI Agent thiết lập sẵn",
    "pricing.feature.3": "8 module AI Agent chuyên biệt",
    "pricing.feature.4": "Tích hợp Shopee, Lazada, Tiki, Social",
    "pricing.feature.5": "Bảo hành phần cứng 12 tháng",
    "pricing.feature.6": "Hỗ trợ kỹ thuật miễn phí",
    "pricing.feature.7": "Cập nhật AI Agent trọn đời",
    "pricing.cta": "Đặt hàng ngay",
    "pricing.contact": "Liên hệ:",
    
    // FAQ
    "faq.title": "Câu Hỏi Thường Gặp",
    "faq.subtitle": "Giải đáp mọi thắc mắc về OpenClawBox",
    "faq.1.q": "OpenClawBox là gì?",
    "faq.1.a": "OpenClawBox là giải pháp AI Agent hoàn chỉnh trên nền tảng Mini PC. Hệ thống được thiết lập sẵn để tự động hóa các nghiệp vụ doanh nghiệp: tài chính, marketing, sales, chăm sóc khách hàng — vận hành liên tục 24/7.",
    "faq.2.q": "Tôi có cần kiến thức kỹ thuật không?",
    "faq.2.a": "Không cần! OpenClawBox được thiết kế theo nguyên tắc \"plug and play\". Toàn bộ hệ thống đã được cấu hình sẵn, bạn chỉ cần thiết lập thông tin doanh nghiệp cơ bản là có thể sử dụng ngay.",
    "faq.3.q": "OpenClawBox phù hợp với đối tượng nào?",
    "faq.3.a": "OpenClawBox được thiết kế cho solopreneur, doanh nghiệp SME (dưới 10 người), chủ shop online, content creator — những người cần tự động hóa để tối ưu thời gian và nguồn lực.",
    "faq.4.q": "Dữ liệu có được bảo mật không?",
    "faq.4.a": "Tuyệt đối! OpenClawBox chạy on-premise trên thiết bị của bạn, dữ liệu được lưu trữ local. Bạn kiểm soát hoàn toàn dữ liệu. Mọi kết nối external đều được mã hóa end-to-end.",
    "faq.5.q": "Có tích hợp với các sàn TMĐT không?",
    "faq.5.a": "Có! OpenClawBox tích hợp native với Shopee, Lazada, Tiki và các sàn TMĐT phổ biến. Ngoài ra còn hỗ trợ Instagram, TikTok, Facebook, Zalo, Email và nhiều nền tảng khác.",
    "faq.6.q": "Chính sách bảo hành và hỗ trợ?",
    "faq.6.a": "Bảo hành phần cứng 12 tháng. Hỗ trợ kỹ thuật và cập nhật phần mềm AI Agent miễn phí trọn đời. Đổi trả trong 7 ngày nếu phát sinh lỗi từ nhà sản xuất.",
    "faq.7.q": "Thời gian giao hàng?",
    "faq.7.a": "Miễn phí vận chuyển toàn quốc. Giao hàng: 2-3 ngày (Hà Nội/HCM), 3-5 ngày (các tỉnh thành khác).",
    
    // CTA
    "cta.title": "Sẵn Sàng Tự Động Hóa?",
    "cta.text": "Tham gia cùng hàng trăm doanh nghiệp đang vận hành với OpenClawBox AI Agent.<br>Thiết lập sẵn, sẵn sàng sử dụng — Chỉ 2.999.000₫",
    "cta.order": "Đặt hàng ngay",
    "cta.consult": "Tư vấn miễn phí",
    
    // Footer
    "footer.tagline": "AI Agent cho doanh nghiệp. Thiết lập sẵn trên Mini PC. Tự động hóa 24/7.",
    "footer.product": "Sản Phẩm",
    "footer.support": "Hỗ Trợ",
    "footer.contact": "Liên Hệ",
    "footer.guide": "Hướng dẫn",
    "footer.contact.link": "Liên hệ",
    "footer.copyright": "© 2026 OpenClawBox. All rights reserved.",
    "zalo.tooltip": "Chat với chúng tôi",
    
    // Announcement
    "announcement.text": "<strong>Cộng đồng OpenClawBox</strong> — Đào tạo AI Agent miễn phí cho doanh nghiệp",
    "announcement.cta": "Tham gia nhóm Zalo"
  },
  
  en: {
    // Header
    "nav.features": "Features",
    "nav.specs": "Specs",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.order": "Order Now",
    
    // Hero
    "hero.badge": "Plug & Play • Ready to Deploy",
    "hero.title": "OpenClawBox",
    "hero.subtitle": "AI Agent for Business — Pre-configured on Mini PC.<br>Finance, Marketing, Sales — Running 24/7 Automatically.",
    "hero.price": "2,999,000₫",
    "hero.price.note": "Free shipping nationwide",
    "hero.cta.order": "Order Now",
    "hero.cta.learn": "Learn More",
    
    // Value Props
    "value.title": "Why OpenClawBox?",
    "value.subtitle": "Complete AI Agent solution, ready to run your business",
    "value.1.title": "100% Pre-configured",
    "value.1.desc": "Entire AI Agent system ready to go. Unbox, connect network — start automating immediately.",
    "value.2.title": "Business-Aware AI",
    "value.2.desc": "Trained to understand business processes. Makes intelligent decisions like a real employee.",
    "value.3.title": "One-Time Investment",
    "value.3.desc": "Replace dozens of SaaS tools and staff. 24/7 operation with fixed cost, no hidden fees.",
    
    // Product Size
    "size.title": "Optimized Design",
    "size.subtitle": "Compact size, powerful performance. Silent operation, energy efficient.",
    "size.label": "Compact design — Fits any workspace",
    
    // Features
    "features.title": "OpenClawBox Capabilities",
    "features.subtitle": "8 specialized AI Agent modules — Comprehensive automation",
    "features.1.title": "Finance & Accounting",
    "features.1.desc": "Manage cash flow, generate tax reports, analyze multi-channel revenue automatically",
    "features.2.title": "Sales & Marketing",
    "features.2.desc": "Create content, optimize A/B ads, manage multi-platform social presence",
    "features.3.title": "Task Management",
    "features.3.desc": "Smart scheduling, automated reminders, optimize team productivity",
    "features.4.title": "Social Listening",
    "features.4.desc": "Track industry trends, analyze competitors, suggest content strategies",
    "features.5.title": "Partner Evaluation",
    "features.5.desc": "Analyze supplier credibility, aggregate reviews, assess partnership risks",
    "features.6.title": "A/B Testing Engine",
    "features.6.desc": "Auto-generate and analyze dozens of ad variants, continuous ROI optimization",
    "features.7.title": "Omni-Channel Hub",
    "features.7.desc": "Integrate Instagram, TikTok, Facebook, Shopee, Lazada, Tiki in one dashboard",
    "features.8.title": "AI Chatbot Pro",
    "features.8.desc": "Smart customer consultation, auto-closing deals, 24/7 after-sales care",
    
    // Specs
    "specs.title": "Technical Specifications",
    "specs.subtitle": "Hardware optimized for AI Agent workloads",
    "specs.processor": "Processor",
    "specs.processor.value": "Intel Core i3-4130 Dual Core",
    "specs.ram": "Memory",
    "specs.ram.value": "8GB DDR3",
    "specs.storage": "Storage",
    "specs.storage.value": "128GB M.2 SSD",
    "specs.os": "Software",
    "specs.os.value": "Windows + OpenClawBox AI Agent",
    "specs.connectivity": "Connectivity",
    "specs.connectivity.value": "WiFi, Ethernet, USB 3.0",
    "specs.power": "Power",
    "specs.power.value": "65W Adapter (included)",
    "specs.size": "Size",
    "specs.size.value": "Ultra-compact, space-saving",
    "specs.noise": "Noise Level",
    "specs.noise.value": "Silent operation",
    
    // How it works
    "how.title": "Getting Started",
    "how.subtitle": "4 simple steps to launch your AI Agent",
    "how.1.title": "Receive",
    "how.1.desc": "Check device and accessories. OpenClawBox AI Agent is pre-configured.",
    "how.2.title": "Connect",
    "how.2.desc": "Plug in power, boot up. Connect WiFi or Ethernet cable.",
    "how.3.title": "Configure",
    "how.3.desc": "Set up business info so AI understands your context and workflows.",
    "how.4.title": "Operate",
    "how.4.desc": "Connect your platforms and let OpenClawBox automate 24/7!",
    
    // Pricing
    "pricing.title": "Order Now",
    "pricing.subtitle": "One-time investment, own your AI Agent forever",
    "pricing.name": "OpenClawBox",
    "pricing.price": "2,999,000₫",
    "pricing.period": "One-time payment • Free shipping",
    "pricing.feature.1": "Mini PC Intel i3, 8GB RAM, 128GB SSD",
    "pricing.feature.2": "OpenClawBox AI Agent pre-configured",
    "pricing.feature.3": "8 specialized AI Agent modules",
    "pricing.feature.4": "Integrates Shopee, Lazada, Tiki, Social",
    "pricing.feature.5": "12-month hardware warranty",
    "pricing.feature.6": "Free technical support",
    "pricing.feature.7": "Lifetime AI Agent updates",
    "pricing.cta": "Order Now",
    "pricing.contact": "Contact:",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know about OpenClawBox",
    "faq.1.q": "What is OpenClawBox?",
    "faq.1.a": "OpenClawBox is a complete AI Agent solution on a Mini PC platform. The system is pre-configured to automate business operations: finance, marketing, sales, customer care — running continuously 24/7.",
    "faq.2.q": "Do I need technical knowledge?",
    "faq.2.a": "No! OpenClawBox is designed with \"plug and play\" principle. The entire system is pre-configured, you only need to set up basic business information to start using immediately.",
    "faq.3.q": "Who is OpenClawBox for?",
    "faq.3.a": "OpenClawBox is designed for solopreneurs, SMEs (under 10 people), online shop owners, content creators — those who need automation to optimize time and resources.",
    "faq.4.q": "Is my data secure?",
    "faq.4.a": "Absolutely! OpenClawBox runs on-premise on your device, data is stored locally. You have complete control over your data. All external connections are end-to-end encrypted.",
    "faq.5.q": "Does it integrate with e-commerce platforms?",
    "faq.5.a": "Yes! OpenClawBox natively integrates with Shopee, Lazada, Tiki and popular e-commerce platforms. Also supports Instagram, TikTok, Facebook, Zalo, Email and many more.",
    "faq.6.q": "What about warranty and support?",
    "faq.6.a": "12-month hardware warranty. Free technical support and lifetime AI Agent software updates. 7-day return if manufacturer defects occur.",
    "faq.7.q": "Delivery time?",
    "faq.7.a": "Free shipping nationwide. Delivery: 2-3 days (Hanoi/HCM), 3-5 days (other provinces).",
    
    // CTA
    "cta.title": "Ready to Automate?",
    "cta.text": "Join hundreds of businesses operating with OpenClawBox AI Agent.<br>Pre-configured, ready to deploy — Only 2,999,000₫",
    "cta.order": "Order Now",
    "cta.consult": "Free Consultation",
    
    // Footer
    "footer.tagline": "AI Agent for Business. Pre-configured on Mini PC. 24/7 Automation.",
    "footer.product": "Product",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.guide": "Guide",
    "footer.contact.link": "Contact Us",
    "footer.copyright": "© 2026 OpenClawBox. All rights reserved.",
    "zalo.tooltip": "Chat with us",
    
    // Announcement
    "announcement.text": "<strong>OpenClawBox Community</strong> — Free AI Agent Training for Business",
    "announcement.cta": "Join Zalo Group"
  }
};

// Current language
let currentLang = localStorage.getItem('openclawbox-lang') || 'vi';

// Get translation
const t = (key) => {
  return translations[currentLang][key] || translations['vi'][key] || key;
};

// Switch language with animation
const switchLanguage = (lang) => {
  if (lang === currentLang) return;
  
  // Store preference
  currentLang = lang;
  localStorage.setItem('openclawbox-lang', lang);
  
  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Get all translatable elements
  const elements = document.querySelectorAll('[data-i18n]');
  
  // Animate out
  elements.forEach(el => {
    el.style.transition = 'opacity 0.25s ease-out, transform 0.25s ease-out';
    el.style.opacity = '0';
    el.style.transform = 'translateY(-8px)';
  });
  
  // Update content and animate in
  setTimeout(() => {
    elements.forEach(el => {
      const key = el.dataset.i18n;
      const translation = t(key);
      
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.innerHTML = translation;
      }
    });
    
    // Animate in
    requestAnimationFrame(() => {
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }, 250);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
};

// Initialize language on page load
const initLanguage = () => {
  // Apply saved language
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = t(key);
    
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = translation;
    } else {
      el.innerHTML = translation;
    }
  });
  
  // Set active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
  });
  
  // Set HTML lang
  document.documentElement.lang = currentLang;
};

// Export for use
window.OpenClawBoxI18n = {
  switchLanguage,
  getCurrentLang: () => currentLang,
  t
};

// Auto-init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
