import { getLatestThreeBlogs } from "@/actions/serverActions";
import AllBLogs from "@/components/sections/allBLogs";
import Link from "next/link";

export const metadata = {
  title: "BizzBuzz Creations Blog | Digital Marketing & SEO Insights",
  description:
    "Explore expert tips on SEO, performance marketing, and lead generation. Learn how BizzBuzz Creations helps businesses grow with data-driven strategies.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/blog",
  },
};

export default async function Blogs() {
  const res = await getLatestThreeBlogs();
  const blogs = res.data;

  function truncateHTML(html, limit = 120) {
    if (!html) return "";

    const text = html.replace(/<[^>]*>/g, ""); // remove HTML tags

    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }

  return (
    <section className="bg-white md:py-40 py-25">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">Our Latest Blogs</h1>
        <p className="text-lg text-gray-600">
          Explore, discover, and find inspiration through these exciting Blogs.
        </p>
      </div>

      {/* Latest blogs */}
      <div className="px-8 pt-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:pt-20 sm:pt-16">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {blogs.length > 0 &&
            blogs.map((e, index) => (
              <div className="relative" key={index}>
                <Link
                  href={`/blog/${e?.slug}`}
                  className="block overflow-hidden group rounded-xl shadow-lg shadow-gray-300"
                >
                  <img
                    src={`${e?.yoast_head_json?.og_image[0]?.url}`}
                    className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                    alt={e?.title?.rendered}
                  />
                </Link>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-slate-700">
                    {new Date(e?.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    &nbsp;&nbsp; by {e?.yoast_head_json?.author}
                  </p>
                  <Link
                    href={`/blog/${e?.slug}`}
                    className="block mb-3 hover:underline"
                  >
                    <h2
                      className="text-xl lg:text-2xl leading-tight font-semibold leading-5 text-black  transition-colors duration-200 hover:text-slate-700"
                      dangerouslySetInnerHTML={{
                        __html: e?.title?.rendered,
                      }}
                    />
                  </Link>
                  <p className="text-gray-700">
                    {truncateHTML(e?.excerpt?.rendered, 150)}
                  </p>

                  <Link
                    href={`/blog/${e?.slug}`}
                    className="font-medium underline text-slate-700 hover:text-slate-900"
                    aria-label={`Read more about ${e?.title?.rendered}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      <AllBLogs />
    </section>
  );
}
