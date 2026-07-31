// One-time migration: pulls every post from the WordPress REST API
// (the same source app/(main)/blog currently reads from) and copies it
// into MongoDB with the exact same slug, so existing URLs/SEO don't break.
// Safe to re-run: already-migrated slugs are skipped.
//
// Run with: node scripts/migrateBlogsFromWordPress.mjs

import fs from "node:fs";
import dns from "node:dns/promises";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import he from "he";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");

const envText = fs.readFileSync(new URL("../.env", import.meta.url), "utf8");
const get = (key) => envText.match(new RegExp(`^${key}=(.*)$`, "m"))?.[1]?.trim();

const MONGO_URI = get("MONGO_URI");
cloudinary.config({
  cloud_name: get("CLOUDINARY_CLOUD_NAME"),
  api_key: get("CLOUDINARY_API_KEY"),
  api_secret: get("CLOUDINARY_API_SECRET"),
});

const WP_API = "https://blog.bizzbuzzcreations.com/wp-json/wp/v2/posts";

const faqSchema = new mongoose.Schema(
  { question: String, answer: String },
  { _id: false },
);
const blogSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true, index: true },
    excerpt: String,
    content: String,
    featuredImage: String,
    category: String,
    author: String,
    authorBio: String,
    status: { type: String, enum: ["draft", "scheduled", "published"] },
    metaTitle: String,
    metaDescription: String,
    ogImage: String,
    primaryKeyword: String,
    secondaryKeywords: [String],
    tags: [String],
    faqs: [faqSchema],
    scheduledAt: Date,
    publishedAt: Date,
  },
  { timestamps: true },
);
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

function stripHtml(html) {
  if (!html) return "";
  return he.decode(html.replace(/<[^>]*>/g, "")).trim();
}

function extractFeaturedImageUrl(post) {
  return (
    post?.yoast_head_json?.og_image?.[0]?.url ||
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    null
  );
}

async function fetchAllPosts(limit) {
  let page = 1;
  let allPosts = [];
  while (true) {
    const res = await fetch(
      `${WP_API}?per_page=100&page=${page}&orderby=date&order=desc&_embed`,
    );
    if (!res.ok) break;
    const posts = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) break;
    allPosts = allPosts.concat(posts);
    page++;
    if (limit && allPosts.length >= limit) {
      return allPosts.slice(0, limit);
    }
  }
  return allPosts;
}

async function migratePost(post, index, total) {
  const slug = post.slug;

  const already = await Blog.findOne({ slug }).lean();
  if (already) {
    console.log(`[${index}/${total}] SKIP (already migrated): ${slug}`);
    return "skipped";
  }

  let featuredImage = "";
  const wpImageUrl = extractFeaturedImageUrl(post);
  if (wpImageUrl) {
    try {
      const uploaded = await cloudinary.uploader.upload(wpImageUrl, {
        folder: "bizzbuzz-blog-migrated",
      });
      featuredImage = uploaded.secure_url;
    } catch (err) {
      console.warn(
        `  ! Image upload failed for "${slug}" (post kept, image left blank): ${err.message}`,
      );
    }
  }

  const categories = post._embedded?.["wp:term"]?.[0] || [];
  const tags = post._embedded?.["wp:term"]?.[1] || [];
  const author = post._embedded?.author?.[0];

  const content = (post.content?.rendered || "").replaceAll(
    "https://blog.bizzbuzzcreations.com",
    "https://bizzbuzzcreations.com",
  );

  const doc = new Blog({
    title: he.decode(post.title?.rendered || ""),
    slug,
    excerpt: stripHtml(post.excerpt?.rendered).slice(0, 300),
    content,
    featuredImage,
    category: categories[0]?.name || "General",
    tags: tags.map((t) => t.name).filter(Boolean),
    author: author?.name || "BizzBuzz Creations",
    authorBio: author?.description || "",
    status: "published",
    metaTitle: post.yoast_head_json?.title || "",
    metaDescription: post.yoast_head_json?.description || "",
    ogImage: featuredImage,
    publishedAt: new Date(post.date),
  });

  await doc.save();
  console.log(`[${index}/${total}] OK: ${slug}`);
  return "migrated";
}

async function main() {
  const limitArg = process.argv[2] ? parseInt(process.argv[2], 10) : null;

  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB.");

  console.log(
    limitArg
      ? `Fetching first ${limitArg} post(s) from WordPress (test run)...`
      : "Fetching all posts from WordPress...",
  );
  const posts = await fetchAllPosts(limitArg);
  console.log(`Found ${posts.length} posts to process.\n`);

  let migrated = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < posts.length; i++) {
    try {
      const result = await migratePost(posts[i], i + 1, posts.length);
      if (result === "migrated") migrated++;
      if (result === "skipped") skipped++;
    } catch (err) {
      failed++;
      console.error(`[${i + 1}/${posts.length}] FAILED: ${posts[i].slug} — ${err.message}`);
    }
  }

  const totalInMongo = await Blog.countDocuments({});

  console.log("\n--- Migration summary ---");
  console.log("WordPress posts found:", posts.length);
  console.log("Newly migrated:", migrated);
  console.log("Already migrated (skipped):", skipped);
  console.log("Failed:", failed);
  console.log("Total blog posts now in MongoDB:", totalInMongo);

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error("MIGRATION SCRIPT CRASHED:", err);
  process.exit(1);
});
