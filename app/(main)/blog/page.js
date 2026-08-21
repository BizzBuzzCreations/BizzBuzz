import { getLatestThreeBlogsMongo } from "@/actions/blogActions";
import { getFeaturedImage } from "@/lib/getFeaturedImage";
import AllBLogs from "@/components/sections/allBLogs";
import CTA from "@/components/sections/CTA";
import Link from "next/link";
import he from "he";
import { ImageOff } from "lucide-react";

// Same reasoning as the single-post page: blog content is edited/scheduled
// via the dashboard, so this listing must always read fresh from the DB.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "BizzBuzz Creations Blog | Digital Marketing & SEO Insights",
  description:
    "Explore expert tips on SEO, performance marketing, and lead generation. Learn how BizzBuzz Creations helps businesses grow with data-driven strategies.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/blog",
  },
};

export default async function Blogs() {
  const res = await getLatestThreeBlogsMongo();
  const blogs = res.data || [];

  function truncateHTML(html, limit = 120) {
    if (!html) return "";

    const text = he.decode(html.replace(/<[^>]*>/g, "")); // remove HTML tags

    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }

  return (
    <section className="relative overflow-hidden bg-black md:py-16 py-10">
      {/* Soft brand-blue glows — decorative only, sit behind everything. */}
      <div
        className="absolute -top-24 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -right-24 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
          The BizzBuzz Blog
        </p>
        <h1 className="md:text-4xl text-3xl font-bold text-white">
          Our Latest Blogs
        </h1>
        <p className="text-lg text-white/60">
          Explore, discover, and find inspiration through these exciting Blogs.
        </p>
      </div>

      {/* Latest blogs */}
      <div className="px-8 pt-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:pt-20 sm:pt-16">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {blogs.length > 0 &&
            blogs.map((e, index) => {
              const featuredImage = getFeaturedImage(e);
              return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8] hover:shadow-xl hover:shadow-black/40"
              >
                <Link
                  href={`/blog/${e?.slug}`}
                  className="block overflow-hidden rounded-xl aspect-[1.91/1] bg-white/10"
                >
                  {featuredImage ? (
                    <img
                      src={featuredImage}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      alt={e?.title}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white/5 text-white/30">
                      <ImageOff size={28} />
                      <span className="text-xs font-medium">
                        Image unavailable
                      </span>
                    </div>
                  )}
                </Link>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-white/50 transition-colors duration-300 group-hover:text-[#40A2D8]">
                    {new Date(e?.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    &nbsp;&nbsp; by {e?.author}
                  </p>
                  <Link
                    href={`/blog/${e?.slug}`}
                    className="block mb-3"
                  >
                    <h2 className="text-xl lg:text-2xl leading-tight font-semibold leading-5 text-white transition-colors duration-300 group-hover:text-[#40A2D8]">
                      {e?.title}
                    </h2>
                  </Link>
                  <p className="text-white/60 transition-colors duration-300 group-hover:text-[#40A2D8]">
                    {truncateHTML(e?.excerpt, 150)}
                  </p>

                  <Link
                    href={`/blog/${e?.slug}`}
                    className="font-medium underline text-white/70 transition-colors duration-300 group-hover:text-[#40A2D8]"
                    aria-label={`Read more about ${e?.title}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              );
            })}
        </div>
      </div>

      <AllBLogs />

      <div className="relative pt-16 md:pt-20">
        <CTA />
      </div>
    </section>
  );
}
