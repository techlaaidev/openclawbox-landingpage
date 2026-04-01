/**
 * OpenClawBox Order Modal
 * Captures customer info + saves to Supabase with affiliate ref_code
 * Shows QR code for bank transfer payment
 */

(function () {
  // ============================================================================
  // CONFIG — Same Supabase project as affiliate.js
  // ============================================================================
  const SUPABASE_URL = "https://lyofqtfthsylmpxktcky.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5b2ZxdGZ0aHN5bG1weGt0Y2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDI1MzEsImV4cCI6MjA4ODU3ODUzMX0.dlUr8xnI-j0KYJLpfOppkb0YDiGiTj5bTquUI-gX0wk";
  const TABLE_NAME = "orders";

    // Bank transfer config
    const BANK_ACCOUNT = 'MS01T17213302551927';
    const BANK_NAME = 'Techcombank';
    const BANK_HOLDER = 'CONG TY TNHH TECHLA AI';

    // VAT rate
    const VAT_RATE = 0.08;

    // Shipping rates (Viettel Post Standard, ~1kg, from Hanoi)
    const SHIPPING_RATES = { local: 16500, region: 39600, inter: 46200 };

    // 63 provinces → shipping zone
    const PROVINCES = {
        'Hà Nội': 'local',
        'Hải Phòng': 'region', 'Quảng Ninh': 'region', 'Bắc Ninh': 'region', 'Bắc Giang': 'region',
        'Hải Dương': 'region', 'Hưng Yên': 'region', 'Thái Bình': 'region', 'Nam Định': 'region',
        'Ninh Bình': 'region', 'Hà Nam': 'region', 'Phú Thọ': 'region', 'Vĩnh Phúc': 'region',
        'Thái Nguyên': 'region', 'Tuyên Quang': 'region', 'Lạng Sơn': 'region', 'Cao Bằng': 'region',
        'Bắc Kạn': 'region', 'Hà Giang': 'region', 'Lào Cai': 'region', 'Yên Bái': 'region',
        'Sơn La': 'region', 'Điện Biên': 'region', 'Lai Châu': 'region', 'Hòa Bình': 'region',
        // Trung + Nam → inter
        'Thanh Hóa': 'inter', 'Nghệ An': 'inter', 'Hà Tĩnh': 'inter', 'Quảng Bình': 'inter',
        'Quảng Trị': 'inter', 'Thừa Thiên Huế': 'inter', 'Đà Nẵng': 'inter', 'Quảng Nam': 'inter',
        'Quảng Ngãi': 'inter', 'Bình Định': 'inter', 'Phú Yên': 'inter', 'Khánh Hòa': 'inter',
        'Ninh Thuận': 'inter', 'Bình Thuận': 'inter', 'Kon Tum': 'inter', 'Gia Lai': 'inter',
        'Đắk Lắk': 'inter', 'Đắk Nông': 'inter', 'Lâm Đồng': 'inter',
        'TP. Hồ Chí Minh': 'inter', 'Bình Dương': 'inter', 'Đồng Nai': 'inter', 'Bà Rịa - Vũng Tàu': 'inter',
        'Long An': 'inter', 'Tây Ninh': 'inter', 'Bình Phước': 'inter', 'Tiền Giang': 'inter',
        'Bến Tre': 'inter', 'Vĩnh Long': 'inter', 'Trà Vinh': 'inter', 'Cần Thơ': 'inter',
        'Đồng Tháp': 'inter', 'An Giang': 'inter', 'Kiên Giang': 'inter', 'Hậu Giang': 'inter',
        'Sóc Trăng': 'inter', 'Bạc Liêu': 'inter', 'Cà Mau': 'inter'
    };

    // ============================================================================
    // DOM References
    // ============================================================================
    const overlay = document.getElementById('orderModalOverlay');
    const modal = document.getElementById('orderModal');
    const closeBtn = document.getElementById('orderModalClose');
    const form = document.getElementById('orderForm');
    const submitBtn = document.getElementById('orderSubmitBtn');
    const successView = document.getElementById('orderSuccess');
    const formView = document.getElementById('orderFormView');
    const errorMsg = document.getElementById('orderError');
    const refBadge = document.getElementById('orderRefBadge');
    const refCodeSpan = document.getElementById('orderRefCode');

  // Shipping rates (Viettel Post Standard, ~1kg, from Hanoi)
  const SHIPPING_RATES = { local: 16500, region: 39600, inter: 46200 };

    // ============================================================================
    // Tier Mapping
    // ============================================================================
    const TIER_PRICES = {
        'premium': 4999000
    };

    const TIER_LABELS = {
        'premium': 'Premium'
    };

  if (!overlay || !form) return;

  // ============================================================================
  // Tier Mapping
  // ============================================================================
  const TIER_PRICES = {
    starter: 1199000,
    standard: 2999000,
    premium: 4999000,
    enterprise: 7999000,
  };

  const TIER_LABELS = {
    starter: "Starter",
    standard: "Standard",
    premium: "Premium",
    enterprise: "Enterprise",
  };

  // ============================================================================
  // Modal Open/Close
  // ============================================================================

        // Show modal
        overlay.classList.add('active');
        document.body.classList.add('modal-open');

        // Show breakdown
        updateBreakdownUI();

        // Focus first input
        setTimeout(() => {
            const firstInput = form.querySelector('input[type="text"]');
            if (firstInput) firstInput.focus();
        }, 300);
    }

    // Show ref code badge if exists
    const refCode = getRefCode();
    if (refCode && refBadge && refCodeSpan) {
      refCodeSpan.textContent = refCode;
      refBadge.classList.add("visible");
    }

    // Reset state
    errorMsg.classList.remove("visible");
    successView.classList.remove("visible");
    formView.style.display = "block";
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;

    // Show modal
    overlay.classList.add("active");
    document.body.classList.add("modal-open");

    // Show breakdown
    updateBreakdownUI();

    // Focus first input
    setTimeout(() => {
      const firstInput = form.querySelector('input[type="text"]');
      if (firstInput) firstInput.focus();
    }, 300);
  }

    function interceptCTAButtons() {
        const orderButtons = document.querySelectorAll('#premiumOrderBtn, .hero-cta .btn-primary, .cta-buttons .btn-primary');

        orderButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal('premium');
            });
        });
    }
  });

  // ============================================================================
  // Intercept CTA Buttons
  // ============================================================================

    function validateForm() {
        const name = form.querySelector('#orderName').value.trim();
        const phone = form.querySelector('#orderPhone').value.trim();
        const province = form.querySelector('#orderProvince')?.value;

    orderButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const tierCard = btn.closest(".pricing-tier");
        let tier = "standard";

        if (tierCard) {
          const tierName = tierCard.querySelector(".pricing-tier-name");
          if (tierName) {
            const name = tierName.textContent.toLowerCase().trim();
            if (name === "starter") tier = "starter";
            else if (name === "enterprise") tier = "enterprise";
            else if (name === "premium") tier = "premium";
            else tier = "standard";
          }
        }

        if (!province) {
            showError('Vui lòng chọn tỉnh/thành phố');
            form.querySelector('#orderProvince').classList.add('error');
            form.querySelector('#orderProvince').focus();
            return false;
        }

        return true;
    }

    if (!phone) {
      showError("Vui lòng nhập số điện thoại");
      form.querySelector("#orderPhone").classList.add("error");
      form.querySelector("#orderPhone").focus();
      return false;
    }

    const phoneClean = phone.replace(/[\s.-]/g, "");
    if (!/^(0|\+84)\d{8,10}$/.test(phoneClean)) {
      showError("Số điện thoại không hợp lệ");
      form.querySelector("#orderPhone").classList.add("error");
      form.querySelector("#orderPhone").focus();
      return false;
    }

    if (!province) {
      showError("Vui lòng chọn tỉnh/thành phố");
      form.querySelector("#orderProvince").classList.add("error");
      form.querySelector("#orderProvince").focus();
      return false;
    }

    return true;
  }

  function showError(msg) {
    errorMsg.textContent = msg;
    errorMsg.classList.add("visible");
  }

  function clearErrors() {
    errorMsg.classList.remove("visible");
    form
      .querySelectorAll(".error")
      .forEach((el) => el.classList.remove("error"));
  }

  // ============================================================================
  // Get Ref Code from Affiliate Tracking
  // ============================================================================

  function getRefCode() {
    if (window.OpenClawBoxAffiliate && window.OpenClawBoxAffiliate.getRefCode) {
      return window.OpenClawBoxAffiliate.getRefCode();
    }
    return null;
  }

  // ============================================================================
  // Format Currency
  // ============================================================================

    function formatVND(amount) {
        const num = Number(amount) || 0;
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
    }

    breakdownEl.style.display = "block";
  }

  function updateExpressOption() {
    const province = form.querySelector("#orderProvince")?.value || "";
    const expressOption = document.getElementById("expressOption");
    const expressCheckbox = document.getElementById("expressCheckbox");
    if (!expressOption) return;

    if (province === "Hà Nội") {
      expressOption.style.display = "block";
    } else {
      expressOption.style.display = "none";
      if (expressCheckbox) expressCheckbox.checked = false;
    }
    updateBreakdownUI();
  }

  // ============================================================================
  // Populate Province Dropdown
  // ============================================================================

    function generateQRUrl(amount, description) {
        const safeAmount = Number(amount) || 4999000;
        const params = new URLSearchParams({
            acc: BANK_ACCOUNT,
            bank: BANK_NAME,
            amount: safeAmount.toString(),
            des: description || '',
            template: 'compact'
        });
        return `https://qr.sepay.vn/img?${params.toString()}`;
    }
  }

  // ============================================================================
  // Submit Order
  // ============================================================================

    // ============================================================================
    // Shipping & VAT Calculation
    // ============================================================================

    function calculateBreakdown(tierPrice) {
        const vat = Math.round(tierPrice * VAT_RATE);
        const total = tierPrice + vat;
        return { price: tierPrice, vat, total };
    }

    function updateBreakdownUI() {
        const checkedRadio = form.querySelector('input[name="tier"]:checked');
        const hiddenInput = form.querySelector('input[name="tier"][type="hidden"]');
        const tier = checkedRadio?.value || hiddenInput?.value || 'premium';
        const tierPrice = TIER_PRICES[tier] || 4999000;
        const breakdownEl = document.getElementById('orderBreakdown');
        const expressRow = document.getElementById('breakdownExpressRow');
        const expressCheckbox = document.getElementById('expressCheckbox');

        if (!breakdownEl) return;

        const bd = calculateBreakdown(tierPrice);

        document.getElementById('breakdownPrice').textContent = formatVND(bd.price);
        document.getElementById('breakdownVat').textContent = formatVND(bd.vat);
        document.getElementById('breakdownTotal').textContent = formatVND(bd.total);

        // Show/hide express row
        if (expressRow) {
            expressRow.style.display = (expressCheckbox && expressCheckbox.checked) ? 'flex' : 'none';
        }

        breakdownEl.style.display = 'block';
    }

    function updateExpressOption() {
        const province = form.querySelector('#orderProvince')?.value || '';
        const expressOption = document.getElementById('expressOption');
        const expressCheckbox = document.getElementById('expressCheckbox');
        if (!expressOption) return;

        if (province === 'Hà Nội') {
            expressOption.style.display = 'block';
        } else {
            expressOption.style.display = 'none';
            if (expressCheckbox) expressCheckbox.checked = false;
        }
        updateBreakdownUI();
    }

    // ============================================================================
    // Populate Province Dropdown
    // ============================================================================

    function populateProvinces() {
        const select = form.querySelector('#orderProvince');
        if (!select) return;
        Object.keys(PROVINCES).forEach(name => {
            const opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name;
            select.appendChild(opt);
        });
        select.addEventListener('change', () => {
            updateExpressOption();
            updateBreakdownUI();
        });

        // Express checkbox listener
        const expressCheckbox = document.getElementById('expressCheckbox');
        if (expressCheckbox) {
            expressCheckbox.addEventListener('change', updateBreakdownUI);
        }
    }

    // ============================================================================
    // Submit Order
    // ============================================================================

    async function submitOrder() {
        clearErrors();

    if (!validateForm()) return;

        const name = form.querySelector('#orderName').value.trim();
        const phone = form.querySelector('#orderPhone').value.trim();
        const province = form.querySelector('#orderProvince')?.value || '';
        const addressDetail = form.querySelector('#orderAddress').value.trim();
        const fullAddress = addressDetail ? `${addressDetail}, ${province}` : province;
        const tier = form.querySelector('input[name="tier"]')?.value || 'premium';
        const notes = form.querySelector('#orderNotes').value.trim();
        const refCode = getRefCode();
        const tierPrice = TIER_PRICES[tier] || 4999000;
        const bd = calculateBreakdown(tierPrice);

        const payload = {
            full_name: name,
            phone: phone,
            address: fullAddress || null,
            selected_tier: tier,
            total_amount: bd.total,
            notes: notes || null,
            ref_code: refCode
        };

    // Show loading
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=representation",
        },
        body: JSON.stringify(payload),
      });

            if (response.ok) {
                const data = await response.json();
                const orderId = data[0]?.id || '';
                console.log('[Order] ✅ Order submitted:', { name, phone, tier, refCode, orderId, total: bd.total });
                showPayment(tier, bd.total, orderId, phone, refCode);
            } else {
                const errorText = await response.text();
                console.error('[Order] ❌ Failed:', response.status, errorText);
                showError('Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ Zalo.');
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        } catch (error) {
            console.error('[Order] ❌ Network error:', error?.message || error);
            showError('Lỗi kết nối, vui lòng kiểm tra mạng và thử lại.');
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    }
  }

  // ============================================================================
  // Payment View (QR Code)
  // ============================================================================

  function showPayment(tier, amount, orderId, phone, refCode) {
    const transferDesc = generateTransferDesc(orderId, phone, refCode);
    const qrUrl = generateQRUrl(amount, transferDesc);

    // Update payment view elements
    const qrImg = document.getElementById("paymentQRImg");
    const amountEl = document.getElementById("paymentAmount");
    const tierEl = document.getElementById("paymentTier");
    const descEl = document.getElementById("paymentDesc");
    const bankEl = document.getElementById("paymentBank");
    const holderEl = document.getElementById("paymentHolder");
    const accountEl = document.getElementById("paymentAccount");

        if (qrImg) qrImg.src = qrUrl;
        if (amountEl) amountEl.textContent = formatVND(amount);
        if (tierEl) tierEl.textContent = TIER_LABELS[tier] || 'Premium';
        if (descEl) descEl.textContent = transferDesc;
        if (bankEl) bankEl.textContent = BANK_NAME;
        if (holderEl) holderEl.textContent = BANK_HOLDER;
        if (accountEl) accountEl.textContent = BANK_ACCOUNT.replace(/(.{4})/g, '$1 ').trim();

    // Switch views
    formView.style.display = "none";
    successView.classList.add("visible");

    // Start polling for payment confirmation
    startPaymentPolling(orderId);

    // Reset form for next time
    form.reset();
    const defaultTier = form.querySelector(
      'input[name="tier"][value="premium"]',
    );
    if (defaultTier) defaultTier.checked = true;
  }

  // ============================================================================
  // Payment Polling
  // ============================================================================

  let pollingInterval = null;

  function startPaymentPolling(orderId) {
    if (pollingInterval) clearInterval(pollingInterval);

    pollingInterval = setInterval(async () => {
      try {
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/orders?id=eq.${orderId}&select=payment_status`,
          {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          if (data[0]?.payment_status === "paid") {
            clearInterval(pollingInterval);
            pollingInterval = null;
            showPaymentConfirmed();
          }
        }
      } catch (err) {
        console.error("[Order] Polling error:", err.message);
      }
    }, 5000);
  }

  function showPaymentConfirmed() {
    // Hide QR payment view
    successView.classList.remove("visible");

    // Show confirmed view
    const confirmedView = document.getElementById("orderPaymentConfirmed");
    if (confirmedView) confirmedView.classList.add("visible");
  }

  // ============================================================================
  // Copy to clipboard helper
  // ============================================================================

  window.copyPaymentInfo = function (text, btnEl) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const original = btnEl.textContent;
        btnEl.textContent = "Đã copy ✓";
        btnEl.classList.add("copied");
        setTimeout(() => {
          btnEl.textContent = original;
          btnEl.classList.remove("copied");
        }, 2000);
      })
      .catch(() => {
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        const original = btnEl.textContent;
        btnEl.textContent = "Đã copy ✓";
        btnEl.classList.add("copied");
        setTimeout(() => {
          btnEl.textContent = original;
          btnEl.classList.remove("copied");
        }, 2000);
      });
  };

  // ============================================================================
  // Event Listeners
  // ============================================================================

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitOrder();
  });

  form.querySelectorAll(".order-form-input").forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("error");
      errorMsg.classList.remove("visible");
    });
  });

  // ============================================================================
  // Initialize
  // ============================================================================

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      interceptCTAButtons();
      populateProvinces();
    });
  } else {
    interceptCTAButtons();
    populateProvinces();
  }

  // Listen for tier change to update breakdown
  form.querySelectorAll('input[name="tier"]').forEach((radio) => {
    radio.addEventListener("change", updateBreakdownUI);
  });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            interceptCTAButtons();
            populateProvinces();
        });
    } else {
        interceptCTAButtons();
        populateProvinces();
    }

    // Listen for tier change to update breakdown
    form.querySelectorAll('input[name="tier"]').forEach(radio => {
        radio.addEventListener('change', updateBreakdownUI);
    });

    window.OpenClawBoxOrder = {
        open: openModal,
        close: closeModal
    };

    console.log('[Order] ✅ Order modal initialized');
})();
