import generateBlogRedirects from "./lib/blogRedirects.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [...generateBlogRedirects()];
  },
};

export default nextConfig;
