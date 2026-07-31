import generateBlogRedirects from "./lib/blogRedirects.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
