import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    return res.status(200).json({ status: "ok" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { name, email, phone, position, coverPage, appRef, resumeName, resumeBase64 } = data;

    if (!name || !email || !phone || !position || !coverPage) {
      return res.status(422).json({ success: false, message: "Missing required fields." });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.vevrapackaging.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "no-reply@vevrapackaging.com",
        pass: process.env.SMTP_PASS || "NR_vevra@26#",
      },
      tls: { rejectUnauthorized: false },
    });

    const ref = appRef || `APP-VVR-${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Admin Email
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background: #0B1930; color: #fff; padding: 20px;">
          <h2 style="margin: 0; color: #fff;">New Job Application Received</h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #f87171;">Ref: ${ref} &bull; ${position}</p>
        </div>
        <div style="padding: 24px; color: #1e293b;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; width: 35%;">Candidate Name:</td><td>${name}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Position Applied:</td><td style="color: #D9232A; font-weight: bold;">${position}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Resume:</td><td>${resumeName || "Attached/Uploaded"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Cover Letter:</td><td style="white-space: pre-line;">${coverPage}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #64748b;">Submitted on: ${submissionTime}</p>
        </div>
      </div>
    `;

    // Candidate Auto-Reply
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background: #0B1930; color: #fff; padding: 24px;">
          <h2 style="margin: 0; color: #fff;">Application Received — Vevra Packaging</h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #94a3b8;">Talent Acquisition & HR Desk</p>
        </div>
        <div style="padding: 24px; color: #334155; line-height: 1.6;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for applying for the <strong>${position}</strong> position at Vevra Packaging Pvt. Ltd.</p>
          <p>Your application reference ID is <strong><span style="color: #D9232A;">${ref}</span></strong>.</p>
          <p>Our hiring team is currently reviewing your application. If your profile matches our requirements, we will contact you directly to schedule an interview.</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="margin: 0; font-size: 13px; font-weight: bold; color: #0B1930;">Best Regards,</p>
          <p style="margin: 2px 0 0; font-size: 14px; font-weight: bold; color: #D9232A;">Talent Acquisition Team</p>
          <p style="margin: 2px 0 0; font-size: 12px; color: #64748b;">Vevra Packaging Pvt. Ltd.</p>
        </div>
      </div>
    `;

    const attachments: any[] = [];
    if (resumeBase64 && resumeName) {
      attachments.push({
        filename: resumeName,
        content: Buffer.from(resumeBase64, "base64"),
      });
    }

    await transporter.sendMail({
      from: '"Vevra Careers" <no-reply@vevrapackaging.com>',
      to: process.env.ADMIN_EMAIL || "nikita.nagargoje@cybaemtech.com",
      replyTo: `${name} <${email}>`,
      subject: `New Job Application: ${name} - ${position} (${ref})`,
      html: adminHtml,
      attachments,
    });

    await transporter.sendMail({
      from: '"Vevra Packaging" <no-reply@vevrapackaging.com>',
      to: email,
      subject: `Application Received: ${position} — Vevra Packaging (${ref})`,
      html: userHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
      appRef: ref,
    });
  } catch (error: any) {
    console.error("Careers API Error:", error);
    return res.status(500).json({
      success: false,
      message: error?.message || "Failed to process application.",
    });
  }
}
