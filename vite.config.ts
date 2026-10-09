import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import nodemailer from "nodemailer";

function contactFormDevPlugin() {
  return {
    name: "contact-form-dev-handler",
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.method === "POST" && (req.url === "/api/careers.php" || req.url === "/careers.php" || req.url === "/api/careers")) {
          let body = "";
          req.on("data", (chunk: any) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body || "{}");
              console.log("\n========================================");
              console.log(" [CAREERS APPLICATION SUBMISSION RECEIVED]");
              console.log(" Name:", data.name);
              console.log(" Email:", data.email);
              console.log(" Phone:", data.phone);
              console.log(" Position:", data.position);
              console.log(" Cover Page:", data.coverPage);
              console.log(" Ref:", data.appRef);
              console.log("========================================\n");

              const transporter = nodemailer.createTransport({
                host: "mail.vevrapackaging.com",
                port: 587,
                secure: false,
                auth: {
                  user: "no-reply@vevrapackaging.com",
                  pass: "NR_vevra@26#",
                },
                tls: { rejectUnauthorized: false },
                connectionTimeout: 5000,
              });

              try {
                // Admin Email
                await transporter.sendMail({
                  from: '"Vevra Careers Desk" <no-reply@vevrapackaging.com>',
                  to: "nikita.nagargoje@cybaemtech.com",
                  replyTo: `${data.name} <${data.email}>`,
                  subject: `New Job Application: ${data.name} - ${data.position} (${data.appRef || "APP-VVR"})`,
                  html: `
                    <h2>New Job Application Received</h2>
                    <p><strong>Candidate Name:</strong> ${data.name}</p>
                    <p><strong>Role Applied:</strong> ${data.position}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Resume File:</strong> ${data.resumeName || "Uploaded"}</p>
                    <p><strong>Cover Letter:</strong><br>${data.coverPage}</p>
                  `,
                });
                console.log(">>> [SUCCESS] Careers admin email sent to nikita.nagargoje@cybaemtech.com");

                // Candidate Email
                await transporter.sendMail({
                  from: '"Vevra Packaging" <no-reply@vevrapackaging.com>',
                  to: data.email,
                  subject: `Application Received: ${data.position} — Vevra Packaging`,
                  html: `
                    <h2>Thank you for applying to Vevra Packaging!</h2>
                    <p>Dear ${data.name},</p>
                    <p>We have successfully received your application for the <strong>${data.position}</strong> role.</p>
                    <p>Our talent acquisition team will review your qualifications and connect with you.</p>
                    <p>Warm Regards,<br><strong>Vevra Packaging Pvt. Ltd.</strong></p>
                  `,
                });
                console.log(">>> [SUCCESS] Careers confirmation email sent to:", data.email);
              } catch (mailErr: any) {
                console.warn("[SMTP Careers Notice]:", mailErr.message);
              }

              res.setHeader("Content-Type", "application/json");
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: "Application processed successfully.", appRef: data.appRef }));
            } catch (err: any) {
              res.setHeader("Content-Type", "application/json");
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, message: err.message }));
            }
          });
          return;
        }

        if (req.method === "POST" && (req.url === "/api/contact.php" || req.url === "/contact.php" || req.url === "/api/contact")) {
          let body = "";
          req.on("data", (chunk: any) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body || "{}");
              console.log("\n========================================");
              console.log(" [CONTACT FORM SUBMISSION RECEIVED]");
              console.log(" Name:", data.fullName);
              console.log(" Email:", data.email);
              console.log(" Phone:", data.phone);
              console.log(" Company:", data.company);
              console.log(" Location:", data.location);
              console.log(" Enquiry Type:", data.enquiryType);
              console.log(" Message:", data.message);
              console.log("========================================\n");

              // Try sending via SMTP
              const transporter = nodemailer.createTransport({
                host: "mail.vevrapackaging.com",
                port: 587,
                secure: false,
                auth: {
                  user: "no-reply@vevrapackaging.com",
                  pass: "NR_vevra@26#",
                },
                tls: { rejectUnauthorized: false },
                connectionTimeout: 5000,
              });

              try {
                // 1. Admin Email
                await transporter.sendMail({
                  from: '"Vevra Packaging Portal" <no-reply@vevrapackaging.com>',
                  to: "nikita.nagargoje@cybaemtech.com",
                  replyTo: `${data.fullName} <${data.email}>`,
                  subject: `New Inquiry: ${data.fullName} - ${data.company}`,
                  html: `
                    <h2>New Inquiry Received</h2>
                    <p><strong>Name:</strong> ${data.fullName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
                    <p><strong>Company:</strong> ${data.company}</p>
                    <p><strong>Location:</strong> ${data.location}</p>
                    <p><strong>Enquiry Type:</strong> ${data.enquiryType}</p>
                    <p><strong>Message:</strong> ${data.message || "N/A"}</p>
                  `,
                });
                console.log(">>> [SUCCESS] Admin notification email sent to nikita.nagargoje@cybaemtech.com");

                // 2. User Auto-Reply Email
                await transporter.sendMail({
                  from: '"Vevra Packaging Pvt. Ltd." <no-reply@vevrapackaging.com>',
                  to: data.email,
                  subject: "Thank you for connecting with Vevra Packaging",
                  html: `
                    <h2>Thank you for connecting with Vevra Packaging!</h2>
                    <p>Dear ${data.fullName},</p>
                    <p>We have received your inquiry regarding <strong>${data.enquiryType}</strong> for <strong>${data.company}</strong>.</p>
                    <p>A packaging specialist will get in touch with you within 1 business day.</p>
                    <p>Warm Regards,<br><strong>Vevra Packaging Pvt. Ltd.</strong></p>
                  `,
                });
                console.log(">>> [SUCCESS] Confirmation email sent to user:", data.email);
              } catch (mailErr: any) {
                console.warn("[SMTP Notice]:", mailErr.message);
              }

              res.setHeader("Content-Type", "application/json");
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: "Submission processed successfully." }));
            } catch (err: any) {
              res.setHeader("Content-Type", "application/json");
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, message: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [contactFormDevPlugin()],
  },
  nitro: {
    preset: process.env["NITRO_PRESET"] || "vercel",
  },
  tanstackStart: {
    router: {
      autoCodeSplitting: false,
    },
    server: { entry: "server" },
  },
});

