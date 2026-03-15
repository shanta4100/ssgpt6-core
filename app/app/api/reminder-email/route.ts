import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { ok: false, message: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Reminder email request prepared successfully.",
      preview: {
        email,
        subject,
        message,
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Failed to prepare reminder email." },
      { status: 500 }
    );
  }
}