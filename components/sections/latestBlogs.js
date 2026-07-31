import { getLatestThreeBlogsMongo } from "@/actions/blogActions";
import { getFeaturedImage } from "@/lib/getFeaturedImage";
import Link from "next/link";
import he from "he";
import { ImageOff } from "lucide-react";

export default async function LatestBlogs() {
  const res = await getLatestThreeBlogsMongo();
  const blogs = res.data || [];

  function truncateHTML(html, limit = 120) {
        if (!html) return "";

        const text = he.decode(html.replace(/<[^>]*>/g, "")); // remove HTML tags

        return text.length > limit ? text.slice(0, limit) + "..." : text;
      }

  return (
    <section className="bg-white">
      <div className="text-center">
        <h2 className="md:text-4xl text-3xl font-bold text-black">
          Our Latest Blogs
        </h2>
        <p className="text-lg text-gray-600">
          Explore, discover, and find inspiration through these exciting Blogs.
        </p>
      </div>

      {/* Latest blogs */}
      <div className="px-8 pt-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 sm:pt-15 mb-5">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 mb-15">
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
                    <h3 className="text-xl lg:text-2xl leading-tight font-semibold leading-5 text-black  transition-colors duration-200 hover:text-slate-700">
                      {e?.title}
                    </h3>
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
