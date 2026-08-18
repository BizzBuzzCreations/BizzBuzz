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
    <section
      className="relative overflow-hidden md:py-16 py-10"
      style={{
        backgroundImage:
          "radial-gradient(rgba(11,96,176,0.08) 1px, transparent 1px), linear-gradient(180deg, #f4f9fd 0%, #eaf4fb 45%, #ffffff 100%)",
        backgroundSize: "22px 22px, 100% 100%",
      }}
    >
      {/* Soft brand-blue glows — decorative only, sit behind everything. */}
      <div
        className="absolute -top-24 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -right-24 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0B60B0] mb-3">
          The BizzBuzz Blog
        </p>
        <h1 className="md:text-4xl text-3xl font-bold text-black">
          Our Latest Blogs
        </h1>
        <p className="text-lg text-gray-600">
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
              <div className="relative" key={index}>
                <Link
                  href={`/blog/${e?.slug}`}
                  className="block overflow-hidden group rounded-xl shadow-lg shadow-gray-300 aspect-[1.91/1] bg-gray-100"
                >
                  {featuredImage ? (
                    <img
                      src={featuredImage}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      alt={e?.title}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-400">
                      <ImageOff size={28} />
                      <span className="text-xs font-medium">
                        Image unavailable
                      </span>
                    </div>
                  )}
                </Link>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-slate-700">
                    {new Date(e?.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    &nbsp;&nbsp; by {e?.author}
                  </p>
                  <Link
                    href={`/blog/${e?.slug}`}
                    className="block mb-3 hover:underline"
                  >
                    <h2 className="text-xl lg:text-2xl leading-tight font-semibold leading-5 text-black  transition-colors duration-200 hover:text-slate-700">
                      {e?.title}
                    </h2>
                  </Link>
                  <p className="text-gray-700">
                    {truncateHTML(e?.excerpt, 150)}
                  </p>

                  <Link
                    href={`/blog/${e?.slug}`}
                    className="font-medium underline text-slate-700 hover:text-slate-900"
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
