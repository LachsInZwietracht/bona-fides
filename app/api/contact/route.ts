import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, caseType, message } = await request.json();

    // Basic validation
    if (!name || !email || !caseType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create case type mapping for better readability
    const caseTypeMap: Record<string, string> = {
      private: 'Private Ermittlungen',
      corporate: 'Unternehmenssicherheit',
      background: 'Hintergrundprüfungen',
      infidelity: 'Untreue-Ermittlungen',
      fraud: 'Betrugserkennung',
      missing: 'Vermisste Personen',
      other: 'Sonstige Ermittlungen'
    };

    const caseTypeLabel = caseTypeMap[caseType] || caseType;

    // Send email
    const data = await resend.emails.send({
      from: 'Bona Fides Contact Form <onboarding@resend.dev>', // You'll update this with your domain
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'], // Uses environment variable
      subject: `Neue Fallanfrage: ${caseTypeLabel}`,
      html: `
        <div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; background-color: #f8f8f8; border: 1px solid #ddd; padding: 20px;">
          <div style="background-color: #1a1a1a; color: #C2B16D; padding: 15px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">FALLAUFNAHME-PROTOKOLL</h1>
            <p style="margin: 5px 0 0 0; font-size: 12px; letter-spacing: 1px;">OPERATION BONA FIDES</p>
          </div>

          <div style="background-color: white; padding: 20px; border: 1px solid #ddd;">
            <div style="border-bottom: 2px solid #C2B16D; padding-bottom: 10px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #333; font-size: 18px;">MANDANTENDATEN</h2>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #666; width: 30%;">NAME:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">E-MAIL:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #C2B16D;">${email}</a></td>
              </tr>
              ${phone ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">TELEFON:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
                </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">FALLTYP:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee; color: #C2B16D; font-weight: bold;">${caseTypeLabel}</td>
              </tr>
            </table>

            <div style="border-bottom: 2px solid #C2B16D; padding-bottom: 10px; margin-bottom: 15px;">
              <h2 style="margin: 0; color: #333; font-size: 18px;">FALLBESCHREIBUNG</h2>
            </div>

            <div style="background-color: #f8f8f8; padding: 15px; border-left: 4px solid #C2B16D; margin-bottom: 20px;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="border-top: 2px solid #ddd; padding-top: 15px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 12px; letter-spacing: 1px;">
                ⏰ EINGANGSDATUM: ${new Date().toLocaleDateString('de-DE')} ${new Date().toLocaleTimeString('de-DE')}
              </p>
              <p style="margin: 5px 0 0 0; color: #C2B16D; font-weight: bold; font-size: 12px;">
                📧 AUTOMATISCHE BENACHRICHTIGUNG - ANTWORT BINNEN 24H
              </p>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}