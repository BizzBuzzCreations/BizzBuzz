"use server";
import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({ name, email, subject, text, html }) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error,
    );
    return;
  }
  const info = await transporter.sendMail({
    from: `Bizzbuzz Website`,
    to: SITE_MAIL_RECIEVER,
    subject: subject,
    html: `
  <div style="font-family: Arial, sans-serif; background:#f4f7fb; padding:20px;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; padding:20px;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr style="margin:15px 0;" />
      <p><strong>Message:</strong></p>
      <p style="line-height:1.6;">${text}</p>
      <hr />
      <p style="font-size:12px; color:#888;">
        This message was sent from your website contact form.
      </p>
    </div>
  </div>
`,
  });

  console.log("Message Sent", info.messageId);
  return info;
}
