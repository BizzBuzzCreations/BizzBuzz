"use server";
import connectDB from "@/db/connect";
import nodemailer from "nodemailer";
import Job from "@/models/jobs";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

// Function to send email
export async function sendMail({ name, email, subject, text, contact }) {
  try {
    //  Verify SMTP connection
    await transporter.verify();
    console.log("SMTP connection ready");

    // Send email
    const info = await transporter.sendMail({
      from: `"BizzBuzz Website" <bizzbuzzcreation@gmail.com>`,
      to: SITE_MAIL_RECIEVER,
      subject: subject,
      html: `
    <div style="font-family: Arial, sans-serif; background:#f4f7fb; padding:20px;">
      <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; padding:20px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
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
    return {
      success: true,
      message: "Message sent!",
    };
  } catch (error) {
    console.error("Email send failed:", error);
    return {
      success: false,
      message: "Failed to send message.",
    };
  }
}

// Function to publish a job
export async function publishJob({
  title,
  department,
  experience,
  location,
  type,
  description,
  applyForm,
}) {
  await connectDB();

  if (
    !title ||
    !department ||
    !experience ||
    !location ||
    !type ||
    !description ||
    !applyForm
  ) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }
  try {
    const newJob = new Job({
      title,
      department,
      experience,
      location,
      type,
      description,
      applyForm,
    });
    await newJob.save();
    return {
      success: true,
      message: "Job published successfully.",
    };
  } catch (error) {
    console.error("Job publish failed:", error);
    return {
      success: false,
      message: "Failed to publish job.",
    };
  }
}

// Function to get all jobs
export async function getAllJobs() {
  await connectDB();
  try {
    const jobs = await Job.find({}).lean();
    const plainJobs = jobs.map((job) => ({
      ...job,
      _id: job._id.toString(), // ✅ convert ObjectId
      createdAt: job.createdAt?.toISOString(), // ✅ convert Date
      updatedAt: job.updatedAt?.toISOString(), // ✅ convert Date
    }));

    return {
      success: true,
      data: plainJobs,
    };
  } catch (error) {
    console.error("Get jobs failed:", error);
    return {
      success: false,
      message: "Failed to fetch jobs.",
    };
  }
}

//Function to delete a job
export async function deleteJob({ id }) {
  await connectDB();
  try {
    await Job.findByIdAndDelete(id);
    return {
      success: true,
      message: "Job deleted successfully.",
    };
  } catch (error) {
    console.error("Delete job failed:", error);
    return {
      success: false,
      message: "Failed to delete job.",
    };
  }
}
