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
    // Inline the (small) CSS into the HTML so it is no longer a
    // render-blocking request — the PageSpeed "Render-blocking requests"
    // insight, which was delaying first paint of the hero text.
    inlineCss: true,
    // Default Server Action body limit is 1MB — too small for featured
    // image uploads (blogEditor.js sends the file as base64 to the
    // uploadBlogImage action), which silently rejects the request before
    // it ever reaches our try/catch. Raise it to fit typical blog images.
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // /public files (images, videos, fonts) were served with max-age=0, so
  // every repeat visit re-downloaded them ("Use efficient cache lifetimes").
  async headers() {
    return [
      {
        source:
          "/:path*.(png|jpg|jpeg|webp|avif|gif|svg|ico|mp4|webm|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www -> the main (non-www) domain, which is what every canonical
      // URL, the sitemap and Search Console use. Needs the www DNS record
      // (CNAME www -> bizzbuzzcreations.com) to exist for visitors to
      // reach this at all.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bizzbuzzcreations.com" }],
        destination: "https://bizzbuzzcreations.com/:path*",
        permanent: true,
      },
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
      // Old AI section poster that never existed in /public (can still be
      // referenced by saved dashboard content or crawler caches).
      {
        source: "/aiservice.webp",
        destination: "/AI solutions 2.png",
        permanent: true,
      },
      ...generateBlogRedirects(),
    ];
  },
};

export default nextConfig;
