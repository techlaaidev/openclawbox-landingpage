/**
 * Edge Function: send-order-email
 * 
 * Trigger: Database Webhook on INSERT to `orders` table
 * 
 * Flow:
 * 1. Send order notification email to SHOP OWNER
 * 2. If order has ref_code → lookup affiliate email → send partner notification
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SHOP_OWNER_EMAIL = Deno.env.get("SHOP_OWNER_EMAIL") || "techlaai.dev@gmail.com";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

interface OrderRecord {
  id: string;
  full_name: string;
  phone: string;
  address: string | null;
  selected_tier: string;
  notes: string | null;
  ref_code: string | null;
  status: string;
  created_at: string;
}

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  record: OrderRecord;
  schema: string;
  old_record: OrderRecord | null;
}

const TIER_MAP: Record<string, string> = {
  starter: "Starter",
  standard: "Standard",
  premium: "Premium",
  enterprise: "Enterprise",
};

function formatTier(tier: string): string {
  return TIER_MAP[tier?.toLowerCase()] || tier;
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

// ============================================================================
// Email Template — Owner (full details)
// ============================================================================
function buildOwnerEmailHtml(order: OrderRecord, affiliateName?: string): string {
  const refRow = order.ref_code
    ? `<tr>
        <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;width:140px;vertical-align:top;">Mã giới thiệu</td>
        <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;">
          <span style="background:#FEE2E2;color:#8B1F1F;padding:3px 10px;border-radius:4px;font-weight:600;font-size:13px;">${order.ref_code}</span>
          ${affiliateName ? `<span style="color:#737373;margin-left:8px;">${affiliateName}</span>` : ""}
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F5F5F5;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 0 0 1px rgba(0,0,0,0.03),0 2px 4px rgba(0,0,0,0.04),0 12px 24px rgba(0,0,0,0.04);">

    <!-- Header -->
    <div style="background:#0A0A0A;padding:32px 32px 28px;">
      <h1 style="margin:0 0 6px;color:#FFFFFF;font-size:20px;font-weight:700;letter-spacing:-0.01em;">Đơn hàng mới</h1>
      <p style="margin:0;color:#A3A3A3;font-size:13px;">${formatDate(order.created_at)}</p>
    </div>

    <!-- Order ID -->
    <div style="padding:24px 32px 0;">
      <span style="background:#F5F5F5;color:#525252;padding:5px 14px;border-radius:100px;font-size:12px;font-weight:600;letter-spacing:0.02em;">
        #${order.id.slice(0, 8).toUpperCase()}
      </span>
    </div>

    <!-- Details -->
    <div style="padding:20px 32px 32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;width:140px;vertical-align:top;">Họ tên</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;font-weight:600;color:#0A0A0A;">${order.full_name}</td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Điện thoại</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;">
            <a href="tel:${order.phone}" style="color:#BD2D2D;text-decoration:none;font-weight:600;">${order.phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Địa chỉ</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;color:#0A0A0A;">${order.address || '<span style="color:#A3A3A3;">—</span>'}</td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Gói</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;font-weight:600;color:#0A0A0A;">${formatTier(order.selected_tier)}</td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Trạng thái</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;">
            <span style="background:#FAFAFA;color:#525252;padding:3px 10px;border-radius:4px;font-weight:500;font-size:13px;border:1px solid #E5E5E5;">${order.status}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Ghi chú</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;color:#0A0A0A;">${order.notes || '<span style="color:#A3A3A3;">—</span>'}</td>
        </tr>
        ${refRow}
      </table>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;border-top:1px solid #F5F5F5;">
      <p style="margin:0;color:#A3A3A3;font-size:11px;letter-spacing:0.02em;">OpenClawBox — Hệ thống đơn hàng tự động</p>
    </div>
  </div>
</body>
</html>`;
}

// ============================================================================
// Email Template — Partner (essential info only)
// ============================================================================
function buildPartnerEmailHtml(order: OrderRecord, partnerName: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F5F5F5;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 0 0 1px rgba(0,0,0,0.03),0 2px 4px rgba(0,0,0,0.04),0 12px 24px rgba(0,0,0,0.04);">

    <!-- Header -->
    <div style="background:#0A0A0A;padding:32px 32px 28px;">
      <h1 style="margin:0 0 6px;color:#FFFFFF;font-size:20px;font-weight:700;letter-spacing:-0.01em;">Đơn hàng mới từ link giới thiệu</h1>
      <p style="margin:0;color:#A3A3A3;font-size:13px;">${formatDate(order.created_at)}</p>
    </div>

    <!-- Greeting -->
    <div style="padding:28px 32px 0;">
      <p style="margin:0;font-size:15px;color:#525252;line-height:1.6;">
        Xin chào <strong style="color:#0A0A0A;">${partnerName}</strong>, có một đơn hàng mới được đặt qua link giới thiệu của bạn.
      </p>
    </div>

    <!-- Details -->
    <div style="padding:20px 32px 32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;width:140px;vertical-align:top;">Khách hàng</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;font-weight:600;color:#0A0A0A;">${order.full_name}</td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Điện thoại</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;">
            <a href="tel:${order.phone}" style="color:#BD2D2D;text-decoration:none;font-weight:600;">${order.phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Gói</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;font-weight:600;color:#0A0A0A;">${formatTier(order.selected_tier)}</td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Mã giới thiệu</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;">
            <span style="background:#FEE2E2;color:#8B1F1F;padding:3px 10px;border-radius:4px;font-weight:600;font-size:13px;">${order.ref_code}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;color:#737373;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Ghi chú</td>
          <td style="padding:14px 0;border-bottom:1px solid #E5E5E5;font-size:15px;color:#0A0A0A;">${order.notes || '<span style="color:#A3A3A3;">—</span>'}</td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;border-top:1px solid #F5F5F5;">
      <p style="margin:0;color:#A3A3A3;font-size:11px;letter-spacing:0.02em;">OpenClawBox — Hệ thống đơn hàng tự động</p>
    </div>
  </div>
</body>
</html>`;
}

// ============================================================================
// Server
// ============================================================================
serve(async (req) => {
  try {
    const payload: WebhookPayload = await req.json();

    if (payload.type !== "INSERT") {
      return new Response(JSON.stringify({ message: "Ignored: not an INSERT event" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const order = payload.record;
    let affiliateName: string | undefined;
    let affiliateEmail: string | undefined;

    // If order has ref_code, look up the affiliate name AND email
    if (order.ref_code) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      const { data } = await supabase
        .from("affiliates")
        .select("name, email")
        .eq("ref_code", order.ref_code)
        .single();

      if (data) {
        affiliateName = data.name;
        affiliateEmail = data.email;
      }
    }

    // 1. Send email to SHOP OWNER
    const ownerEmailHtml = buildOwnerEmailHtml(order, affiliateName);

    const ownerRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "ClawBox Orders <onboarding@resend.dev>",
        to: [SHOP_OWNER_EMAIL],
        subject: `Đơn hàng mới — ${order.full_name} — ${formatTier(order.selected_tier)}`,
        html: ownerEmailHtml,
      }),
    });

    const ownerData = await ownerRes.json();
    if (!ownerRes.ok) {
      console.error("Resend API error (owner):", JSON.stringify(ownerData));
    } else {
      console.log(`Owner email sent for order ${order.id}: ${ownerData.id}`);
    }

    // 2. Send email to PARTNER (if ref_code matched)
    let partnerEmailId: string | null = null;

    if (affiliateEmail && affiliateName) {
      const partnerEmailHtml = buildPartnerEmailHtml(order, affiliateName);

      const partnerRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "ClawBox Orders <onboarding@resend.dev>",
          to: [affiliateEmail],
          subject: `Đơn hàng mới qua link giới thiệu — ${order.full_name}`,
          html: partnerEmailHtml,
        }),
      });

      const partnerData = await partnerRes.json();
      if (!partnerRes.ok) {
        console.error("Resend API error (partner):", JSON.stringify(partnerData));
      } else {
        partnerEmailId = partnerData.id;
        console.log(`Partner email sent to ${affiliateEmail} for order ${order.id}: ${partnerData.id}`);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      owner_email_id: ownerData?.id || null,
      partner_email_id: partnerEmailId,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge Function error:", err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
