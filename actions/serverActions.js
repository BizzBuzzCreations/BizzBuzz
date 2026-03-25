"use server";
import connectDB from "@/db/connect";
import Job from "@/models/jobs";
import Submission from "@/models/submissions";
import Comment from "@/models/comments";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const lastRequestMap = new Map();

// Function to send email
export async function sendMail({ name, email, subject, text, contact }) {
  const now = Date.now();

  if (!email) {
    return {
      success: false,
      message: "Email is required.",
    };
  }

  const key = email;
  const lastTime = lastRequestMap.get(key) || 0;

  //  Block if request comes within 10 seconds
  if (now - lastTime < 10000) {
    return {
      success: false,
      message: "Please wait before sending another message.",
    };
  }

  await connectDB();

  try {
    // Send email
    const { data, error } = await resend.emails.send({
      from: "BizzBuzz Website <contact@bizzbuzzcreations.com>",
      to: process.env.SITE_MAIL_RECIEVER,
      replyTo: email,
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
    if (error) {
      console.error("EMAIL ERROR:", error);
      return { success: false, message: "Email failed to send" };
    }

    lastRequestMap.set(key, now);

    // Store submission in database
    const newSub = new Submission({
      name,
      email,
      subject,
      phone: contact,
      message: text,
    });

    await newSub.save();

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

// Function to get all submissions
export async function getAllSubmissions() {
  await connectDB();
  try {
    const submissions = await Submission.find({}).lean();
    const plainSubmissions = submissions.map((sub) => ({
      ...sub,
      _id: sub._id.toString(), // ✅ convert ObjectId
      createdAt: sub.createdAt?.toISOString(), // ✅ convert Date
      updatedAt: sub.updatedAt?.toISOString(), // ✅ convert Date
    }));

    return {
      success: true,
      data: plainSubmissions,
    };
  } catch (error) {
    console.error("Get submissions failed:", error);
    return {
      success: false,
      message: "Failed to fetch submissions.",
    };
  }
}

// Function to post comment
export async function postComment(name, message, blog) {
  await connectDB();

  if (!name || !message || !blog) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }
  try {
    const newComment = new Comment({
      name,
      message,
      blog,
    });
    await newComment.save();
    return {
      success: true,
      message: "Comment added successfully.",
      data: newComment,
    };
  } catch (error) {
    console.error("Posting comment failed:", error);
    return {
      success: false,
      message: "Failed to add comment.",
    };
  }
}

// Function to get all comments
export async function getAllComments(slug) {
  await connectDB();
  try {
    let comments = null;
    if (!slug) {
      comments = await Comment.find({}).lean();
    } else {
      comments = await Comment.find({ blog: slug }).lean();
    }

    const plainComments = comments.map((com) => ({
      ...com,
      _id: com._id.toString(), // ✅ convert ObjectId
      createdAt: com.createdAt?.toISOString(), // ✅ convert Date
      updatedAt: com.updatedAt?.toISOString(), // ✅ convert Date
    }));

    return {
      success: true,
      data: plainComments,
    };
  } catch (error) {
    console.error("Get comments failed:", error);
    return {
      success: false,
      message: "Failed to fetch comments.",
    };
  }
}

//Function to delete a comment
export async function deleteComment({ id }) {
  await connectDB();
  try {
    await Comment.findByIdAndDelete(id);
    return {
      success: true,
      message: "Comment deleted successfully.",
    };
  } catch (error) {
    console.error("Delete Comment failed:", error);
    return {
      success: false,
      message: "Failed to delete Comment.",
    };
  }
}

// Fetch latest 3 blogs
export async function getLatestThreeBlogs() {
  try {
    const res = await fetch(
      `https://blog.bizzbuzzcreations.com/wp-json/wp/v2/posts?per_page=3&orderby=date&order=desc&_fields=id,date,slug,link,title,excerpt,yoast_head_json`,
      {
        next: { revalidate: 3600 },
      },
    );

    const response = await res.json();

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error("Failed to fetch latest blogs:", error);

    return {
      success: false,
      message: "Failed to fetch latest blogs.",
    };
  }
}

//Fetch all blogs
export async function getLatestBlogs(page, categoryId, posts) {
  try {
    const skip = categoryId && categoryId !== "all" ? 0 : 3;
    const offset = skip + (page - 1) * posts;
    const res = await fetch(
      `https://blog.bizzbuzzcreations.com/wp-json/wp/v2/posts?per_page=${posts}&offset=${offset}${
        categoryId && categoryId !== "all" ? `&categories=${categoryId}` : ""
      }&_fields=id,date,slug,link,title,excerpt,yoast_head_json`,
    );
    const totalPages = res.headers.get("X-WP-TotalPages");
    const response = await res.json();
    return {
      success: true,
      data: response,
      totalPages,
    };
  } catch (error) {
    console.error("Failded to fetch blogs:", error);
    return {
      success: false,
      message: "Failded to fetch blogs.",
    };
  }
}

// Fetch single blog by slug
export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(
      `https://blog.bizzbuzzcreations.com/wp-json/wp/v2/posts?slug=${slug}&_embed&_fields=id,date,slug,link,title,content,excerpt,yoast_head_json,_embedded`,
      {
        next: { revalidate: 3600 },
      },
    );

    const response = await res.json();
    const post = response?.[0];

    if (!post) {
      return {
        success: false,
        message: "Blog not found.",
      };
    }

    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return {
      success: false,
      message: "Failed to fetch blog.",
    };
  }
}

// Fetch every blog category
export async function getBlogsCategory() {
  try {
    const res = await fetch(
      `https://blog.bizzbuzzcreations.com/wp-json/wp/v2/categories?per_page=100&_fields=name,count,id`,
      {
        next: { revalidate: 3600 },
      },
    );

    const response = await res.json();

    if (!response) {
      return {
        success: false,
        message: "Blog categories not found.",
      };
    }

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error("Failed to fetch blog categories:", error);
    return {
      success: false,
      message: "Failed to fetch blog categories.",
    };
  }
}
