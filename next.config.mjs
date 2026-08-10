import generateBlogRedirects from "./lib/blogRedirects.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Default Server Action body limit is 1MB — too small for featured
    // image uploads (blogEditor.js sends the file as base64 to the
    // uploadBlogImage action), which silently rejects the request before
    // it ever reaches our try/catch. Raise it to fit typical blog images.
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async redirects() {
    return [
      // Service pages renamed for clarity — 301s preserve existing SEO
      // rankings/backlinks and any bookmarked or Google-indexed old URLs.
      {
        source: "/ai-services",
        destination: "/ai-solutions",
        permanent: true,
      },
      {
        source: "/digital-marketing",
        destination: "/marketing-automation",
        permanent: true,
      },
      ...generateBlogRedirects(),
    ];
  },
};

export default nextConfig;
