export default async function sitemap() {
  const wpApi = "https://blog.bizzbuzzcreations.com/wp-json/wp/v2/posts";

  let page = 1;
  let allPosts = [];
  let hasMore = true;

  // Fetch all posts (handles pagination)
  while (hasMore) {
    const res = await fetch(
      `${wpApi}?per_page=100&page=${page}&_fields=id,date,slug,link`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) break;

    const posts = await res.json();

    if (posts.length === 0) {
      hasMore = false;
    } else {
      allPosts = [...allPosts, ...posts];
      page++;
    }
  }

  const blogPages = allPosts.map((post) => ({
    url: `https://bizzbuzzcreations.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
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
