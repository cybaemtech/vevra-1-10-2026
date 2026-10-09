import type { IncomingMessage, ServerResponse } from "http";
import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS Headers
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
    const { fullName, email, phone, company, location, enquiryType, message } = data;

    if (!fullName || !email || !company || !location) {
      return res.status(422).json({
        success: false,
        message: "Missing required fields.",
      });
    }

    // Configure Transporter
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

    const submissionTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 1. Admin Email
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background: #0B1930; color: #fff; padding: 20px;">
          <h2 style="margin: 0; color: #fff;">New Inquiry Received — Vevra Packaging</h2>
        </div>
        <div style="padding: 24px; color: #1e293b;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; width: 35%;">Full Name:</td><td>${fullName}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone || "Not provided"}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${company}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Location:</td><td>${location}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Enquiry Type:</td><td style="color: #D9232A; font-weight: bold;">${enquiryType}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Requirement Details:</td><td style="white-space: pre-line;">${message || "None"}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #64748b;">Submitted on: ${submissionTime}</p>
        </div>
      </div>
    `;

    // 2. User Auto-Reply Email
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background: #0B1930; color: #fff; padding: 24px;">
          <h2 style="margin: 0; color: #fff;">Thank You for Connecting With Us</h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #94a3b8;">Vevra Packaging Pvt. Ltd.</p>
        </div>
        <div style="padding: 24px; color: #334155; line-height: 1.6;">
          <p>Dear <strong>${fullName}</strong>,</p>
          <p>Thank you for reaching out to Vevra Packaging Pvt. Ltd. We have successfully received your inquiry regarding <strong>${enquiryType}</strong> for <strong>${company}</strong>.</p>
          <p>Our engineering team is currently reviewing your packaging specifications and will get in touch with you within <strong>1 business day</strong>.</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="margin: 0; font-size: 13px; font-weight: bold; color: #0B1930;">Warm Regards,</p>
          <p style="margin: 2px 0 0; font-size: 14px; font-weight: bold; color: #D9232A;">Client Solutions & Engineering Desk</p>
          <p style="margin: 2px 0 0; font-size: 12px; color: #64748b;">Vevra Packaging Pvt. Ltd.</p>
        </div>
      </div>
    `;

    // Send Admin Email
    await transporter.sendMail({
      from: '"Vevra Packaging Portal" <no-reply@vevrapackaging.com>',
      to: process.env.ADMIN_EMAIL || "nikita.nagargoje@cybaemtech.com",
      replyTo: `${fullName} <${email}>`,
      subject: `New Inquiry: ${fullName} - ${company}`,
      html: adminHtml,
    });

    // Send User Auto-Reply Email
    await transporter.sendMail({
      from: '"Vevra Packaging Pvt. Ltd." <no-reply@vevrapackaging.com>',
      to: email,
      subject: "Thank you for connecting with Vevra Packaging",
      html: userHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Inquiry submitted and emails delivered successfully.",
    });
  } catch (error: any) {
    console.error("Vercel Function Error:", error);
    return res.status(500).json({
      success: false,
      message: error?.message || "Failed to send email.",
    });
  }
}
