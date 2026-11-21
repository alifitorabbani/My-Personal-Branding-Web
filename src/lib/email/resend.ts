"use server";

import { Resend } from "resend";

let resendClient: Resend | null = null;

function getResend() {
  if (!resendClient && process.env.RESEND_API_KEY) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export interface EmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(params: EmailParams) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return { error: "Email service not configured" };
  }

  const resend = getResend();
  if (!resend) {
    return { error: "Email client initialization failed" };
  }

  try {
    const data = await resend.emails.send({
      from: "Alifito Portfolio <onboarding@resend.dev>",
      to: params.to,
      subject: params.subject,
      html: params.html,
      text: params.text,
    });
    return { data, error: null };
  } catch (error) {
    console.error("Resend error:", error);
    return { error: "Failed to send email" };
  }
}
