import { getLatestThreeBlogsMongo } from "@/actions/blogActions";
import { getFeaturedImage } from "@/lib/getFeaturedImage";
import Link from "next/link";
import he from "he";
import { ImageOff, ArrowUpRight, CalendarDays } from "lucide-react";

// `dark` is opt-in — /guides and /press-release keep the original light
// theme, only the homepage passes dark for its all-black section run.
export default async function LatestBlogs({ dark = false }) {
  const res = await getLatestThreeBlogsMongo();
  const blogs = res.data || [];

  function truncateHTML(html, limit = 120) {
        if (!html) return "";

        const text = he.decode(html.replace(/<[^>]*>/g, "")); // remove HTML tags

        return text.length > limit ? text.slice(0, limit) + "..." : text;
      }

  return (
    <section className={`py-16 md:py-20 ${dark ? "bg-black" : "bg-white"}`}>
      <div className="text-center px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
          From the Blog
        </p>
        <h2 className={`md:text-4xl text-3xl font-bold mb-3 ${dark ? "text-white" : "text-black"}`}>
          Our Latest Blogs
        </h2>
        <p className={`max-w-xl mx-auto ${dark ? "text-white/60" : "text-gray-600"}`}>
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
                className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                  dark
                    ? "border border-white/10 bg-white/5 hover:border-[#40A2D8]/40 hover:shadow-xl hover:shadow-black/40"
                    : "border border-gray-200 bg-white shadow-sm hover:border-[#0B60B0]/30 hover:shadow-xl"
                }`}
                key={index}
              >
                <Link
                  href={`/blog/${e?.slug}`}
                  className={`block overflow-hidden aspect-[1.91/1] ${dark ? "bg-white/10" : "bg-gray-100"}`}
                >
                  {featuredImage ? (
                    <img
                      src={featuredImage}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      alt={e?.title}
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex flex-col items-center justify-center gap-2 ${
                        dark
                          ? "bg-white/5 text-white/30"
                          : "bg-gradient-to-br from-gray-50 to-gray-200 text-gray-400"
                      }`}
                    >
                      <ImageOff size={28} />
                      <span className="text-xs font-medium">
                        Image unavailable
                      </span>
                    </div>
                  )}
                </Link>
                <div className="p-5 sm:p-6">
                  <p
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide mb-3 ${
                      dark ? "text-[#40A2D8]" : "text-[#0B60B0]"
                    }`}
                  >
                    <CalendarDays size={13} />
                    {new Date(e?.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span className={`font-normal normal-case ${dark ? "text-white/30" : "text-gray-300"}`}>
                      · by {e?.author}
                    </span>
                  </p>
                  <Link href={`/blog/${e?.slug}`} className="block mb-3">
                    <h3
                      className={`text-lg font-bold leading-snug transition-colors duration-200 ${
                        dark
                          ? "text-white group-hover:text-[#40A2D8]"
                          : "text-black group-hover:text-[#0B60B0]"
                      }`}
                    >
                      {e?.title}
                    </h3>
                  </Link>
                  <p className={`text-sm leading-relaxed mb-4 ${dark ? "text-white/60" : "text-gray-600"}`}>
                    {truncateHTML(e?.excerpt, 130)}
                  </p>

                  <Link
                    href={`/blog/${e?.slug}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold hover:underline ${
                      dark ? "text-[#40A2D8]" : "text-[#0B60B0]"
                    }`}
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
            <button
              className={`relative cursor-pointer border-2 px-6 py-3 rounded-lg overflow-hidden group ${
                dark ? "border-white text-white" : "border-gray-900 text-gray-900"
              }`}
            >
              <span
                className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition duration-300 ${
                  dark ? "bg-white" : "bg-gray-900"
                }`}
              ></span>
              <span className={`relative z-10 ${dark ? "group-hover:text-black" : "group-hover:text-white"}`}>
                View All Blogs
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
