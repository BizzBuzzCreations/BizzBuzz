import { getLatestThreeBlogsMongo } from "@/actions/blogActions";
import { getFeaturedImage } from "@/lib/getFeaturedImage";
import Link from "next/link";
import he from "he";
import { ImageOff, ArrowUpRight, CalendarDays } from "lucide-react";

export default async function LatestBlogs() {
  const res = await getLatestThreeBlogsMongo();
  const blogs = res.data || [];

  function truncateHTML(html, limit = 120) {
        if (!html) return "";

        const text = he.decode(html.replace(/<[^>]*>/g, "")); // remove HTML tags

        return text.length > limit ? text.slice(0, limit) + "..." : text;
      }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="text-center px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0B60B0] mb-3">
          From the Blog
        </p>
        <h2 className="md:text-4xl text-3xl font-bold text-black mb-3">
          Our Latest Blogs
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore, discover, and find inspiration through these exciting
          blogs.
        </p>
      </div>

      {/* Latest blogs */}
      <div className="px-8 pt-12 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 mb-14">
          {blogs.length > 0 &&
            blogs.map((e, index) => {
              const featuredImage = getFeaturedImage(e);
              return (
              <div
                className="group rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B60B0]/30 hover:shadow-xl"
                key={index}
              >
                <Link
                  href={`/blog/${e?.slug}`}
                  className="block overflow-hidden aspect-[1.91/1] bg-gray-100"
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
                <div className="p-5 sm:p-6">
                  <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#0B60B0] mb-3">
                    <CalendarDays size={13} />
                    {new Date(e?.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span className="text-gray-300 font-normal normal-case">
                      · by {e?.author}
                    </span>
                  </p>
                  <Link href={`/blog/${e?.slug}`} className="block mb-3">
                    <h3 className="text-lg font-bold leading-snug text-black transition-colors duration-200 group-hover:text-[#0B60B0]">
                      {e?.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {truncateHTML(e?.excerpt, 130)}
                  </p>

                  <Link
                    href={`/blog/${e?.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B60B0] hover:underline"
                    aria-label={`Read more about ${e?.title}`}
                  >
                    Read More
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
              );
            })}
        </div>
        <div className="text-center">
          <Link href="/blog" className="inline-block">
            <button className="relative cursor-pointer border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg overflow-hidden group">
              <span className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
              <span className="relative z-10 group-hover:text-white">
                View All Blogs
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
