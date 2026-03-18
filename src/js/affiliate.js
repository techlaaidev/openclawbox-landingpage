/**
 * OpenClawBox Affiliate Click Tracking
 * Detects ?ref= query param and logs click to Supabase
 */

(function () {
  // ============================================================================
  // CONFIG — Replace with your Supabase credentials
  // ============================================================================
  const SUPABASE_URL = 'https://lyofqtfthsylmpxktcky.supabase.co';       // e.g. https://xxx.supabase.co
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5b2ZxdGZ0aHN5bG1weGt0Y2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDI1MzEsImV4cCI6MjA4ODU3ODUzMX0.dlUr8xnI-j0KYJLpfOppkb0YDiGiTj5bTquUI-gX0wk';

  const TABLE_NAME = 'affiliate_clicks';
  const STORAGE_KEY = 'openclawbox-affiliate-ref';
  const SESSION_KEY = 'openclawbox-affiliate-tracked';

  // ============================================================================
  // Core Logic
  // ============================================================================

  function getRefCode() {
    const params = new URLSearchParams(window.location.search);
    return params.get('php') || params.get('ref');
  }

  function isAlreadyTracked(refCode) {
    try {
      const tracked = sessionStorage.getItem(SESSION_KEY);
      return tracked === refCode;
    } catch {
      return false;
    }
  }

  function markAsTracked(refCode) {
    try {
      sessionStorage.setItem(SESSION_KEY, refCode);
    } catch {
      // sessionStorage not available
    }
  }

  function saveRefCode(refCode) {
    try {
      localStorage.setItem(STORAGE_KEY, refCode);
    } catch {
      // localStorage not available
    }
  }

  function getSavedRefCode() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  async function trackClick(refCode) {
    if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
      console.warn('[Affiliate] Supabase chưa được cấu hình. Cập nhật SUPABASE_URL và SUPABASE_ANON_KEY trong affiliate.js');
      return;
    }

    const payload = {
      ref_code: refCode,
      page_url: window.location.href,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent || null
    };

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log(`[Affiliate] ✅ Click tracked: ref=${refCode}`);
        markAsTracked(refCode);
      } else {
        const errorText = await response.text();
        console.error(`[Affiliate] ❌ Failed to track click:`, response.status, errorText);
      }
    } catch (error) {
      console.error('[Affiliate] ❌ Network error:', error.message);
    }
  }

  // ============================================================================
  // Initialize
  // ============================================================================

  function init() {
    const refCode = getRefCode();

    if (!refCode) return;

    // Save to localStorage for future use (e.g. on purchase)
    saveRefCode(refCode);

    // Deduplicate: don't send again in same session
    if (isAlreadyTracked(refCode)) {
      console.log(`[Affiliate] ⏭️ Already tracked in this session: ref=${refCode}`);
      return;
    }

    // Track the click
    trackClick(refCode);
  }

  // Expose saved ref code for other scripts (e.g. order form)
  window.OpenClawBoxAffiliate = {
    getRefCode: getSavedRefCode
  };

  // Run
  init();
})();
