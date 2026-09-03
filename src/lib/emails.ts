import { BRAND_FULL, BRAND_NAME, OWNER_NAME, TAGLINE } from "@/lib/brand";

const INK = "#0F172A";
const CHALK = "#F7F5F2";
const AMBER = "#EA580C";
const PAPER = "#FFFDF9";
const SLATE = "#475569";
const MIST = "#E7E3DC";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailShell(input: { preview: string; body: string }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>${escapeHtml(BRAND_NAME)}</title>
  </head>
  <body style="margin:0;padding:0;background:${CHALK};color:${INK};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      ${escapeHtml(input.preview)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CHALK};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${PAPER};border-radius:24px;overflow:hidden;border:1px solid ${MIST};">
            <tr>
              <td style="background:${INK};padding:28px 36px 24px;">
                <div style="width:72px;height:6px;background:${AMBER};border-radius:99px;margin-bottom:18px;"></div>
                <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.2;color:${CHALK};">
                  ${escapeHtml(BRAND_NAME)}
                </p>
                <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:${AMBER};">
                  ${escapeHtml(BRAND_FULL)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 36px 8px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:${INK};">
                ${input.body}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 36px 32px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:${SLATE};">
                ${escapeHtml(TAGLINE)}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function fieldRow(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid ${MIST};font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${AMBER};width:120px;vertical-align:top;">
      ${escapeHtml(label)}
    </td>
    <td style="padding:10px 0;border-bottom:1px solid ${MIST};font-family:Arial,Helvetica,sans-serif;font-size:16px;color:${INK};">
      ${value}
    </td>
  </tr>`;
}

export function inquiryEmailHtml(input: {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
}) {
  const emailLink = `<a href="mailto:${escapeHtml(input.email)}" style="color:${AMBER};text-decoration:none;">${escapeHtml(input.email)}</a>`;
  const phoneValue = input.phone
    ? escapeHtml(input.phone)
    : `<span style="color:${SLATE};">Not provided</span>`;

  const body = `
    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:${AMBER};">
      New inquiry
    </p>
    <h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:${INK};">
      ${escapeHtml(input.businessName)}
    </h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${fieldRow("Name", escapeHtml(input.name))}
      ${fieldRow("Email", emailLink)}
      ${fieldRow("Phone", phoneValue)}
      ${fieldRow("Business", escapeHtml(input.businessName))}
    </table>
    <p style="margin:24px 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:${AMBER};">
      Message
    </p>
    <div style="background:${CHALK};border-radius:16px;padding:18px 20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:${INK};white-space:pre-wrap;">
      ${escapeHtml(input.message)}
    </div>
  `;

  return emailShell({
    preview: `New project inquiry from ${input.businessName}`,
    body,
  });
}

export function inquiryEmailText(input: {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
}) {
  return [
    `New inquiry from ${input.businessName}`,
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "Not provided"}`,
    `Business: ${input.businessName}`,
    "",
    input.message,
  ].join("\n");
}

export function followUpEmailHtml(input: {
  name: string;
  businessName: string;
}) {
  const body = `
    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:${AMBER};">
      Message received
    </p>
    <h1 style="margin:0 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:${INK};">
      Hi ${escapeHtml(input.name)},
    </h1>
    <p style="margin:0 0 16px;">
      Thanks for writing to ${escapeHtml(BRAND_NAME)}. This is a confirmation that your message about ${escapeHtml(input.businessName)} arrived.
    </p>
    <p style="margin:0 0 16px;">
      I read every note myself, and I will reply with next steps, usually a short call and a written scope.
    </p>
    <p style="margin:0 0 24px;">
      If you need to add anything, reply to this email.
    </p>
    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:18px;color:${INK};">
      ${escapeHtml(OWNER_NAME)}
    </p>
    <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${SLATE};">
      ${escapeHtml(BRAND_NAME)}
    </p>
  `;

  return emailShell({
    preview: `I got your note about ${input.businessName}`,
    body,
  });
}

export function followUpEmailText(input: {
  name: string;
  businessName: string;
}) {
  return [
    `Hi ${input.name},`,
    "",
    `Thanks for writing to ${BRAND_NAME}. This is a confirmation that your message about ${input.businessName} arrived.`,
    "",
    "I read every note myself, and I will reply with next steps, usually a short call and a written scope.",
    "",
    "If you need to add anything, reply to this email.",
    "",
    OWNER_NAME,
    BRAND_NAME,
  ].join("\n");
}
