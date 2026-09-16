// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, messageType, message, attachment } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Build Resend attachments array
    const attachments =
      attachment && attachment.content && attachment.filename
        ? [
            {
              filename: attachment.filename,
              content: attachment.content, // base64 string
            },
          ]
        : undefined;

    const { data, error } = await resend.emails.send({
      from: 'LO Publications <onboarding@resend.dev>',
      to: ['layo@lomediahouse.com'],
      replyTo: email,
      subject: `[Contact] ${messageType} — ${name}`,
      attachments,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #111;">
          <div style="background: #7f1d1d; color: #fff; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 22px;">New Contact Message</h1>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 14px;">via lopublications.com/contact</p>
          </div>

          <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 28px;">
            <div style="display: inline-block; padding: 4px 12px; background: #fef2f2; color: #7f1d1d; font-size: 12px; font-weight: 600; border-radius: 999px; margin-bottom: 16px;">
              ${messageType}
            </div>

            <h2 style="margin: 0 0 4px; font-size: 18px; color: #111;">${name}</h2>
            <p style="margin: 0 0 20px; color: #6b7280; font-size: 14px;">
              <a href="mailto:${email}" style="color: #7f1d1d;">${email}</a>
            </p>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
              <h3 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280;">Message</h3>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            ${
              attachment?.filename
                ? `
              <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px;">
                <h3 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280;">Attachment</h3>
                <p style="margin: 0; font-size: 14px; color: #6b7280;">
                  📎 ${attachment.filename} — attached to this email
                </p>
              </div>
            `
                : ''
            }
          </div>

          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
            Sent from the LO Publications contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal error' },
      { status: 500 }
    );
  }
}