import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false },
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, default: "" },
    content: { type: String, required: true },
    featuredImage: { type: String, default: "" },
    category: { type: String, default: "Uncategorized" },
    author: { type: String, default: "BizzBuzz Creations" },
    authorBio: { type: String, default: "" },
    status: {
      type: String,
      enum: ["draft", "scheduled", "published"],
      default: "draft",
    },
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    ogImage: { type: String, default: "" },
    primaryKeyword: { type: String, default: "" },
    secondaryKeywords: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    faqs: { type: [faqSchema], default: [] },
    scheduledAt: { type: Date, default: null },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
