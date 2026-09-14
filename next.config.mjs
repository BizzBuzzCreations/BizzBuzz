import generateBlogRedirects from "./lib/blogRedirects.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Dashboard-uploaded images/videos (hero images, media library, blog
    // covers, etc.) are all hosted on Cloudinary — without this, any
    // next/image using one of those URLs (e.g. services/sub-services hero
    // images) throws "hostname not configured" and silently fails to
    // render, even though the exact same upload works fine wherever the
    // page uses a plain <img> or CSS background-image instead.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
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
