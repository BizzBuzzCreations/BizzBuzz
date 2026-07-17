import { getBlogBySlug } from "@/actions/serverActions";
import { getFeaturedImage } from "@/lib/getFeaturedImage";
import { extractTableOfContents } from "@/lib/extractTableOfContents";
import BlogContactForm from "@/components/sections/blogContactForm";
import { User } from "lucide-react";
import { notFound } from "next/navigation";

function sanitizeBlogContent(html) {
  if (!html) return html;
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<link[^>]*>/gi, "");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await getBlogBySlug(slug);

  if (!res?.success) {
    return {
      title: "Blog Not Found",
    };
  }

  const post = res?.data;
  const seo = post?.yoast_head_json;

  if (!seo) {
    return {
      title: post.title?.rendered || "Blog",
      description: post.excerpt?.rendered?.replace(/<[^>]+>/g, ""),
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://bizzbuzzcreations.com/blog/${slug}`,
    },
    openGraph: {
      title: seo.og_title,
      description: seo.og_description,
      images: seo.og_image?.map((img) => ({
        url: img.url,
      })),
    },
  };
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;

  const res = await getBlogBySlug(slug);

  if (!res?.success) {
    return notFound();
  }
  const post = res?.data;

  const featuredImage = getFeaturedImage(post);

  const formattedDate = new Date(post?.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const rawContent = sanitizeBlogContent(
    post?.content.rendered.replaceAll(
      "https://blog.bizzbuzzcreations.com",
      "https://bizzbuzzcreations.com",
    ),
  );

  const { html: filteredData, toc } = extractTableOfContents(rawContent);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 lg:flex lg:items-start gap-8">
      {/* Table of Contents */}
      {toc.length > 0 && (
        <aside className="hidden lg:block w-56 shrink-0 sticky top-28 self-start">
          <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-4">
              Contents
            </h3>
            <ol className="space-y-3">
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`flex gap-2 text-sm text-gray-600 hover:text-black transition-colors ${
                      item.level === 3 ? "pl-4" : ""
                    }`}
                  >
                    <span className="font-semibold text-black shrink-0">
                      {index + 1}.
                    </span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      )}

      {/* Blog content */}
      <div className="max-w-3xl mx-auto lg:mx-0 flex-1 min-w-0">
        {/* Header */}
        <div className="py-8">
          <h1
            className="md:text-3xl xl:text-4xl text-2xl font-bold mb-4 font-bold mb-2"
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
          />
          <p className="text-gray-500 text-sm">
            Published on <time dateTime={post?.date}>{formattedDate}</time>
          </p>
        </div>
        {/* Featured Image */}
        {featuredImage && (
          <img
            src={featuredImage}
            alt={post?.title?.rendered}
            className="w-full h-auto mb-8 rounded-lg"
          />
        )}
        {/* Content */}
        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: filteredData }}
        />
        <div className="my-12 p-6 border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            {/* Avatar */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200">
              <User size={22} className="text-gray-600" />
            </div>

            {/* Author Info */}
            <div>
              <p className="text-sm text-gray-500">Written by</p>
              <p className="text-lg font-semibold text-gray-900">
                {post?._embedded?.author?.[0]?.name}
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <p className="text-gray-600 leading-relaxed text-sm">
            {post?._embedded?.author?.[0]?.description}
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <aside className="lg:w-80 shrink-0 sticky top-28 self-start mt-8 lg:mt-0">
        <BlogContactForm />
      </aside>
    </div>
  );
}
