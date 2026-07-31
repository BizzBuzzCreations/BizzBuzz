import connectDB from "@/db/connect";
import Blog from "@/models/blog";

export default async function sitemap() {
  await connectDB();
  const posts = await Blog.find({ status: "published" })
    .select("slug publishedAt updatedAt")
    .lean();

  const blogPages = posts.map((post) => ({
    url: `https://bizzbuzzcreations.com/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://bizzbuzzcreations.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://bizzbuzzcreations.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bizzbuzzcreations.com/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bizzbuzzcreations.com/career",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bizzbuzzcreations.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/web-development",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/search-engine-optimization",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/paid-marketing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/bpo-services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/business-consultancy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/social-media-marketing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/ai-solutions",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/marketing-automation",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://bizzbuzzcreations.com/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...blogPages,
  ];
}
