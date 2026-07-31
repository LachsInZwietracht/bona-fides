import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { caseTypes, labelFor, urgencyOptions } from '@/lib/contact-options';

/**
 * Empfänger der Formularanfragen. Über CONTACT_EMAIL überschreibbar,
 * mehrere Adressen kommasepariert.
 */
const contactRecipients = [...new Set(
  (process.env.CONTACT_EMAIL || 'kontakt@bona-fides-detektei.de')
    .split(',')
    .map((recipient) => recipient.trim())
    .filter(Boolean)
)];

/** Anfragen landen unescaped in einer HTML-Mail – hier wird das entschärft. */
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function row(label: string, value: string, highlight = false): string {
  return `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #666; width: 34%;">${label}</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;${
        highlight ? ' color: #8f8047; font-weight: bold;' : ''
      }">${value}</td>
    </tr>`;
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const {
      name,
      company,
      role,
      email,
      phone,
      caseType,
      urgency,
      message,
      nda,
      consent,
    } = await request.json();

    if (!name || !email || !caseType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (consent !== true) {
      return NextResponse.json({ error: 'Consent required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const caseTypeLabel = labelFor(caseTypes, caseType);
    const urgencyLabel = urgency ? labelFor(urgencyOptions, urgency) : 'Keine Angabe';
    const isUrgent = urgency === 'immediate';
    const subjectPrefix = isUrgent ? '[EILT] ' : '';
    const organisation = company ? String(company) : 'Keine Angabe (ggf. Privatmandat)';

    await resend.emails.send({
      from: 'Bona Fides Kontaktformular <onboarding@resend.dev>',
      to: contactRecipients,
      replyTo: email,
      subject: `${subjectPrefix}Neue Fallanfrage: ${caseTypeLabel}${company ? ` – ${company}` : ''}`,
      html: `
        <div style="font-family: 'Courier New', monospace; max-width: 640px; margin: 0 auto; background-color: #f8f8f8; border: 1px solid #ddd; padding: 20px;">
          <div style="background-color: #1a1a1a; color: #C2B16D; padding: 15px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 22px; letter-spacing: 2px;">FALLAUFNAHME-PROTOKOLL</h1>
            <p style="margin: 5px 0 0 0; font-size: 12px; letter-spacing: 1px;">BONA FIDES DETEKTEI</p>
          </div>

          ${
            isUrgent
              ? `<div style="background-color: #b91c1c; color: white; padding: 10px; text-align: center; margin-bottom: 20px; font-weight: bold; letter-spacing: 1px;">
                   EILT – ANFRAGENDE PARTEI NENNT LAUFENDE FRISTEN
                 </div>`
              : ''
          }

          <div style="background-color: white; padding: 20px; border: 1px solid #ddd;">
            <div style="border-bottom: 2px solid #C2B16D; padding-bottom: 10px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #333; font-size: 17px;">MANDANTENDATEN</h2>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              ${row('ANSPRECHPARTNER:', escapeHtml(name))}
              ${row('UNTERNEHMEN:', escapeHtml(organisation))}
              ${role ? row('FUNKTION:', escapeHtml(role)) : ''}
              ${row(
                'E-MAIL:',
                `<a href="mailto:${escapeHtml(email)}" style="color: #8f8047;">${escapeHtml(email)}</a>`,
              )}
              ${phone ? row('TELEFON:', escapeHtml(phone)) : ''}
              ${row('FALLTYP:', escapeHtml(caseTypeLabel), true)}
              ${row('DRINGLICHKEIT:', escapeHtml(urgencyLabel), isUrgent)}
              ${row('NDA GEWÜNSCHT:', nda ? 'JA – vor dem Erstgespräch zusenden' : 'Nein', Boolean(nda))}
            </table>

            <div style="border-bottom: 2px solid #C2B16D; padding-bottom: 10px; margin-bottom: 15px;">
              <h2 style="margin: 0; color: #333; font-size: 17px;">SACHVERHALT</h2>
            </div>

            <div style="background-color: #f8f8f8; padding: 15px; border-left: 4px solid #C2B16D; margin-bottom: 20px;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>

            <div style="border-top: 2px solid #ddd; padding-top: 15px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 12px; letter-spacing: 1px;">
                EINGANG: ${new Date().toLocaleDateString('de-DE')} ${new Date().toLocaleTimeString('de-DE')}
              </p>
              <p style="margin: 5px 0 0 0; color: #8f8047; font-weight: bold; font-size: 12px;">
                ZUGESAGTE ERSTBEWERTUNG: BINNEN 24 STUNDEN
              </p>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
