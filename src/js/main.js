/**
 * OpenClaw JavaScript v2.0 - Premium Interactions
 * Smooth animations, Modern UX
 */

// ============================================================================
// Utility Functions
// ============================================================================

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

const lerp = (start, end, factor) => start + (end - start) * factor;

// ============================================================================
// Header Scroll Effect
// ============================================================================

const initHeader = () => {
  const header = $('.header');
  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  const updateHeader = () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = scrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
  
  updateHeader();
};

// ============================================================================
// Mobile Menu
// ============================================================================

const initMobileMenu = () => {
  const toggle = $('.menu-toggle');
  const menu = $('.mobile-menu');
  const links = $$('.mobile-nav-link');

  if (!toggle || !menu) return;

  const openMenu = () => {
    toggle.classList.add('active');
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close on resize to desktop
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  }, 150));
};

// ============================================================================
// Smooth Scroll
// ============================================================================

const initSmoothScroll = () => {
  const links = $$('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = $(href);
      if (!target) return;

      e.preventDefault();

      const headerHeight = $('.header')?.offsetHeight || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });
};

// ============================================================================
// Scroll Reveal Animations
// ============================================================================

const initScrollReveal = () => {
  const elements = $$('.reveal, .stagger');
  if (elements.length === 0) return;

  const options = {
    root: null,
    rootMargin: '0px 0px -15% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
};

// ============================================================================
// FAQ Accordion
// ============================================================================

const initFAQ = () => {
  const items = $$('.faq-item');
  if (items.length === 0) return;

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all others
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      // Toggle current
      item.classList.toggle('active', !isActive);
    });
  });
};

// ============================================================================
// Number Counter Animation
// ============================================================================

const initCounters = () => {
  const counters = $$('[data-counter]');
  if (counters.length === 0) return;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.counter);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out-expo)
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (target - start) * eased);
      
      el.textContent = current.toLocaleString('vi-VN');
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
};

// ============================================================================
// Parallax Effect (Subtle)
// ============================================================================

const initParallax = () => {
  const elements = $$('[data-parallax]');
  if (elements.length === 0) return;

  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    
    elements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const rect = el.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = scrollY * speed;
        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });
    
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
};

// ============================================================================
// Image Lazy Loading
// ============================================================================

const initLazyImages = () => {
  const images = $$('img[data-src]');
  if (images.length === 0) return;

  const loadImage = (img) => {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
    img.classList.add('loaded');
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '100px' });

    images.forEach(img => observer.observe(img));
  } else {
    // Fallback
    images.forEach(loadImage);
  }
};

// ============================================================================
// Cursor Effect (Desktop only)
// ============================================================================

const initCursor = () => {
  if (window.innerWidth < 1024 || 'ontouchstart' in window) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '<div class="cursor-dot"></div>';
  document.body.appendChild(cursor);

  // Add CSS for cursor
  const style = document.createElement('style');
  style.textContent = `
    .custom-cursor {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
    }
    .cursor-dot {
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.15s ease-out, width 0.2s ease, height 0.2s ease;
    }
    .custom-cursor.hover .cursor-dot {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.3);
    }
    a, button, [role="button"] { cursor: none; }
  `;
  document.head.appendChild(style);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    cursorX = lerp(cursorX, mouseX, 0.15);
    cursorY = lerp(cursorY, mouseY, 0.15);
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animate);
  };
  animate();

  // Hover effect on interactive elements
  const hoverables = $$('a, button, [role="button"], .card, .feature-card, .feature-grid-card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
};

// ============================================================================
// Page Load Animation
// ============================================================================

const initPageLoad = () => {
  document.body.classList.add('loaded');
  
  // Animate hero elements
  const heroElements = $$('.hero .animate-fade-up');
  heroElements.forEach((el, i) => {
    el.style.animationDelay = `${i * 100}ms`;
  });
};

// ============================================================================
// Initialize Everything
// ============================================================================

const init = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }

  // Initialize all modules
  initHeader();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initFAQ();
  initCounters();
  initLazyImages();
  // initParallax(); // Disabled for performance, enable if needed
  // initCursor(); // Disabled, enable if you want custom cursor

  // Page load
  requestAnimationFrame(() => {
    initPageLoad();
  });

  console.log('🚀 OpenClaw v2.0 initialized');
};

// Start
init();

// Performance logging (dev only)
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  window.addEventListener('load', () => {
    const timing = performance.getEntriesByType('navigation')[0];
    if (timing) {
      console.log('📊 Performance:', {
        'DOM Ready': Math.round(timing.domContentLoadedEventEnd) + 'ms',
        'Full Load': Math.round(timing.loadEventEnd) + 'ms',
        'First Paint': Math.round(performance.getEntriesByType('paint')[0]?.startTime || 0) + 'ms'
      });
    }
  });
}
