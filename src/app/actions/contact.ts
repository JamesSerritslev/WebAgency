"use server";

import { Resend } from "resend";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";
import {
  followUpEmailHtml,
  followUpEmailText,
  inquiryEmailHtml,
  inquiryEmailText,
} from "@/lib/emails";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("company_website") ?? "").trim();
  if (honeypot) {
    return {
      status: "success",
      message: "Thanks. Your note is in. Expect a reply with next steps.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    return { status: "error", message: "Please add your name." };
  }
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please add a valid email address." };
  }
  if (businessName.length < 2) {
    return { status: "error", message: "Please add your business name." };
  }
  if (message.length < 12) {
    return {
      status: "error",
      message: "Tell me a bit more about what you need (at least a sentence).",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Email is not configured yet. Add a Resend API key, or email directly.",
    };
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ??
    `${BRAND_NAME} <onboarding@resend.dev>`;
  const to = process.env.CONTACT_EMAIL ?? CONTACT_EMAIL;

  const notify = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New project inquiry from ${businessName}`,
    text: inquiryEmailText({ name, email, phone, businessName, message }),
    html: inquiryEmailHtml({ name, email, phone, businessName, message }),
  });

  if (notify.error) {
    return {
      status: "error",
      message: "The message could not be sent. Please try again in a moment.",
    };
  }

  const autoReply = await resend.emails.send({
    from,
    to: email,
    subject: `I got your note | ${BRAND_NAME}`,
    text: followUpEmailText({ name, businessName }),
    html: followUpEmailHtml({ name, businessName }),
  });

  if (autoReply.error) {
    return {
      status: "success",
      message:
        "Thanks. Your note reached me. A confirmation email may arrive after the sending domain is verified.",
    };
  }

  return {
    status: "success",
    message:
      "Thanks. Your note is in, and a confirmation is on the way. Expect a reply with next steps.",
  };
}
