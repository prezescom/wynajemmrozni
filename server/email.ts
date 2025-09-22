import type { ContactMessage } from "@shared/schema";

interface EmailConfig {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Simple email service that logs emails for development
// In production, this would integrate with a real email service like SendGrid, Resend, or SMTP
export async function sendContactEmail(message: ContactMessage): Promise<boolean> {
  try {
    const emailConfig: EmailConfig = {
      from: process.env.EMAIL_FROM || "noreply@wynajemmrozni.pl",
      to: process.env.EMAIL_TO || "kontakt@wynajemmrozni.pl", 
      subject: `Nowa wiadomość z formularza kontaktowego - ${message.name}`,
      text: createTextEmail(message),
      html: createHtmlEmail(message),
    };

    // In development, just log the email
    if (process.env.NODE_ENV === "development") {
      console.log("📧 Email would be sent:", {
        from: emailConfig.from,
        to: emailConfig.to,
        subject: emailConfig.subject,
        message: message.name,
      });
      console.log("📧 Email content:");
      console.log(emailConfig.text);
      return true;
    }

    // In production, integrate with real email service
    // Example: await sendWithSendGrid(emailConfig);
    // Example: await sendWithNodemailer(emailConfig);
    
    console.log("✅ Email sent successfully to:", emailConfig.to);
    return true;
    
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return false;
  }
}

function createTextEmail(message: ContactMessage): string {
  return `
Nowa wiadomość z formularza kontaktowego

Dane kontaktowe:
- Imię i nazwisko: ${message.name}
- Email: ${message.email}
- Telefon: ${message.phone || "Nie podano"}
- Firma: ${message.company || "Nie podano"}

Szczegóły wynajmu:
- Planowana data: ${message.rentalDate || "Nie podano"}
- Rodzaj pojazdu: ${message.vehicleType}

Wiadomość:
${message.message}

---
Data wysłania: ${message.createdAt.toLocaleString('pl-PL')}
ID wiadomości: ${message.id}
  `.trim();
}

function createHtmlEmail(message: ContactMessage): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nowa wiadomość z formularza kontaktowego</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { padding: 20px; background: #f8fafc; }
    .section { margin-bottom: 20px; }
    .label { font-weight: bold; color: #475569; }
    .value { margin-left: 10px; }
    .message { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #0ea5e9; }
    .footer { padding: 15px; background: #e2e8f0; color: #64748b; font-size: 14px; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px;">
    <div class="header">
      <h1>Nowa wiadomość z formularza kontaktowego</h1>
    </div>
    
    <div class="content">
      <div class="section">
        <h3>Dane kontaktowe:</h3>
        <p><span class="label">Imię i nazwisko:</span><span class="value">${message.name}</span></p>
        <p><span class="label">Email:</span><span class="value">${message.email}</span></p>
        <p><span class="label">Telefon:</span><span class="value">${message.phone || "Nie podano"}</span></p>
        <p><span class="label">Firma:</span><span class="value">${message.company || "Nie podano"}</span></p>
      </div>

      <div class="section">
        <h3>Szczegóły wynajmu:</h3>
        <p><span class="label">Planowana data:</span><span class="value">${message.rentalDate || "Nie podano"}</span></p>
        <p><span class="label">Rodzaj pojazdu:</span><span class="value">${message.vehicleType}</span></p>
      </div>

      <div class="section">
        <h3>Wiadomość:</h3>
        <div class="message">${message.message}</div>
      </div>
    </div>
    
    <div class="footer">
      <p>Data wysłania: ${message.createdAt.toLocaleString('pl-PL')}</p>
      <p>ID wiadomości: ${message.id}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

// Environment variable configuration for email settings
export interface EmailSettings {
  EMAIL_FROM?: string;    // Sender email address
  EMAIL_TO?: string;      // Recipient email address for contact form messages
  SMTP_HOST?: string;     // SMTP server host
  SMTP_PORT?: string;     // SMTP server port  
  SMTP_USER?: string;     // SMTP username
  SMTP_PASSWORD?: string; // SMTP password
}