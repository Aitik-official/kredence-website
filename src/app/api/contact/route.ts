import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  need?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const need = body.need?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !phone || !need) {
      return NextResponse.json(
        { ok: false, error: "Please fill name, email, mobile number, and requirement." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email is not configured yet. Add RESEND_API_KEY in website/.env.local",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM ?? "Kredence Steel <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [site.email],
      replyTo: email,
      subject: `Kredence Steel enquiry — ${need} — ${name}`,
      html: `
        <h2>New contact enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mobile:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service / Requirement:</strong> ${escapeHtml(need)}</p>
        <p><strong>Project note:</strong></p>
        <p>${escapeHtml(message || "—")}</p>
      `,
      text: [
        "New contact enquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Mobile: ${phone}`,
        `Service / Requirement: ${need}`,
        `Project note: ${message || "—"}`,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || "Failed to send email." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
