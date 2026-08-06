"use server";
import connectDB from "@/db/connect";
import Blog from "@/models/blog";
import cloudinary from "@/lib/cloudinary";
import slugify from "slugify";
import { getSession } from "@/actions/authActions";

// Blog management (write side) is open to any logged-in role — admin and
// user both write/publish posts. Only the public read functions further
// down stay unauthenticated, since the live site and the cron endpoint
// depend on them.
async function requireSession() {
  const session = await getSession();
  if (!session) {
    return { success: false, message: "Unauthorized." };
  }
  return null;
}

function toPlainBlog(doc) {
  return {
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString(),
    publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toISOString() : null,
    scheduledAt: doc.scheduledAt ? new Date(doc.scheduledAt).toISOString() : null,
  };
}

// Promotes any "scheduled" post whose time has arrived to "published".
// Called opportunistically from the read functions below (no VPS/cron
// required for this to work), and also exposed via /api/publish-scheduled
// for exact-time publishing if an external cron service is pointed at it.
export async function publishDueScheduledPosts() {
  await connectDB();
  try {
    const due = await Blog.find({
      status: "scheduled",
      scheduledAt: { $lte: new Date() },
    });

    for (const post of due) {
      post.status = "published";
      post.publishedAt = post.scheduledAt;
      await post.save();
    }

    return { success: true, publishedCount: due.length };
  } catch (error) {
    console.error("Publish due scheduled posts failed:", error);
    return { success: false, message: "Failed to publish scheduled posts." };
  }
}

// ---- Admin: create / update / delete ----

export async function createBlog(data) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  await connectDB();
  try {
    if (!data?.title || !data?.content) {
      return { success: false, message: "Title and content are required." };
    }

    const slug = slugify(data.slug?.trim() || data.title, {
      lower: true,
      strict: true,
    });

    const existing = await Blog.findOne({ slug }).lean();
    if (existing) {
      return {
        success: false,
        message: "A post with this slug already exists.",
      };
    }

    if (data.status === "scheduled" && !data.scheduledAt) {
      return {
        success: false,
        message: "Pick a date and time to schedule this post for.",
      };
    }

    const blog = new Blog({
      ...data,
      slug,
      ogImage: data.ogImage || data.featuredImage || "",
      scheduledAt: data.status === "scheduled" ? new Date(data.scheduledAt) : null,
      publishedAt: data.status === "published" ? new Date() : null,
    });
    await blog.save();

    return { success: true, data: toPlainBlog(blog.toObject()) };
  } catch (error) {
    console.error("Create blog failed:", error);
    return { success: false, message: "Failed to create blog post." };
  }
}

export async function updateBlog(id, data) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  await connectDB();
  try {
    const existingDoc = await Blog.findById(id);
    if (!existingDoc) {
      return { success: false, message: "Blog post not found." };
    }

    let slug = existingDoc.slug;
    if (data.slug?.trim()) {
      const newSlug = slugify(data.slug, { lower: true, strict: true });
      if (newSlug !== existingDoc.slug) {
        const clash = await Blog.findOne({
          slug: newSlug,
          _id: { $ne: id },
        }).lean();
        if (clash) {
          return {
            success: false,
            message: "A post with this slug already exists.",
          };
        }
        slug = newSlug;
      }
    }

    if (data.status === "scheduled" && !data.scheduledAt) {
      return {
        success: false,
        message: "Pick a date and time to schedule this post for.",
      };
    }

    const wasPublished = existingDoc.status === "published";
    const willBePublished = data.status === "published";

    Object.assign(existingDoc, {
      ...data,
      slug,
      ogImage: data.ogImage || data.featuredImage || existingDoc.ogImage,
      scheduledAt: data.status === "scheduled" ? new Date(data.scheduledAt) : null,
    });
    if (!wasPublished && willBePublished) {
      existingDoc.publishedAt = new Date();
    }

    await existingDoc.save();

    return { success: true, data: toPlainBlog(existingDoc.toObject()) };
  } catch (error) {
    console.error("Update blog failed:", error);
    return { success: false, message: "Failed to update blog post." };
  }
}

export async function deleteBlog(id) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  await connectDB();
  try {
    await Blog.findByIdAndDelete(id);
    return { success: true, message: "Blog post deleted." };
  } catch (error) {
    console.error("Delete blog failed:", error);
    return { success: false, message: "Failed to delete blog post." };
  }
}

// ---- Admin: read ----

export async function getAllBlogsAdmin() {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  await connectDB();
  try {
    await publishDueScheduledPosts();
    // Order by actual publish date (falls back to createdAt for drafts,
    // which have no publishedAt yet) — not by when the DB row was inserted,
    // which for migrated posts is just the one-time migration run date.
    const blogs = await Blog.find({}).sort({ publishedAt: -1, createdAt: -1 }).lean();
    return { success: true, data: blogs.map(toPlainBlog) };
  } catch (error) {
    console.error("Get all blogs failed:", error);
    return { success: false, message: "Failed to fetch blogs." };
  }
}

export async function getBlogById(id) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  await connectDB();
  try {
    const blog = await Blog.findById(id).lean();
    if (!blog) return { success: false, message: "Blog post not found." };
    return { success: true, data: toPlainBlog(blog) };
  } catch (error) {
    console.error("Get blog failed:", error);
    return { success: false, message: "Failed to fetch blog." };
  }
}

// ---- Image upload ----

export async function uploadBlogImage(formData) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    const file = formData.get("file");
    if (!file) return { success: false, message: "No file provided." };

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "bizzbuzz-blog",
    });

    return { success: true, url: result.secure_url };
  } catch (error) {
    console.error("Image upload failed:", error);
    return { success: false, message: "Image upload failed." };
  }
}

// ---- Public read (Mongo-backed — kept separate from the WordPress ----
// ---- versions in serverActions.js until the frontend cutover) ----

export async function getPublishedBlogsMongo(page = 1, category = "all", perPage = 9) {
  await connectDB();
  try {
    await publishDueScheduledPosts();
    const filter = { status: "published" };
    const isFiltered = category && category !== "all";
    if (isFiltered) {
      filter.category = category;
    }
    // The /blog page already shows the latest 3 posts above this list, so
    // skip those 3 here to avoid duplicates — unless a category is picked,
    // since the top-3 section isn't category-filtered.
    const leadingSkip = isFiltered ? 0 : 3;
    const skip = leadingSkip + (page - 1) * perPage;
    const [blogs, total] = await Promise.all([
      Blog.find(filter)
        .sort({ publishedAt: -1 })
        .skip(skip)
        .limit(perPage)
        .lean(),
      Blog.countDocuments(filter),
    ]);
    return {
      success: true,
      data: blogs.map(toPlainBlog),
      totalPages: Math.max(1, Math.ceil((total - leadingSkip) / perPage)),
    };
  } catch (error) {
    console.error("Get published blogs failed:", error);
    return { success: false, message: "Failed to fetch blogs." };
  }
}

export async function getLatestThreeBlogsMongo() {
  await connectDB();
  try {
    await publishDueScheduledPosts();
    const blogs = await Blog.find({ status: "published" })
      .sort({ publishedAt: -1 })
      .limit(3)
      .lean();
    return { success: true, data: blogs.map(toPlainBlog) };
  } catch (error) {
    console.error("Get latest blogs failed:", error);
    return { success: false, message: "Failed to fetch blogs." };
  }
}

export async function getBlogBySlugMongo(slug) {
  await connectDB();
  try {
    await publishDueScheduledPosts();
    const blog = await Blog.findOne({ slug, status: "published" }).lean();
    if (!blog) return { success: false, message: "Blog not found." };
    return { success: true, data: toPlainBlog(blog) };
  } catch (error) {
    console.error("Get blog by slug failed:", error);
    return { success: false, message: "Failed to fetch blog." };
  }
}

export async function getBlogCategoriesMongo() {
  await connectDB();
  try {
    const categories = await Blog.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $project: { name: "$_id", id: "$_id", count: 1, _id: 0 } },
      { $sort: { name: 1 } },
    ]);
    return { success: true, data: categories };
  } catch (error) {
    console.error("Get blog categories failed:", error);
    return { success: false, message: "Failed to fetch categories." };
  }
}
