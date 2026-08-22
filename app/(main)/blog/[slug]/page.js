import { getBlogBySlugMongo } from "@/actions/blogActions";
import { getFeaturedImage } from "@/lib/getFeaturedImage";
import { extractTableOfContents } from "@/lib/extractTableOfContents";
import { sanitizeBlogContent } from "@/lib/sanitizeBlogContent";
import BlogContactForm from "@/components/sections/blogContactForm";
import { FAQSection } from "@/components/ui/faq-accordion";
import { User, ImageOff } from "lucide-react";
import { notFound } from "next/navigation";

// Blog content is edited live through the dashboard (and auto-publishes on
// schedule) — this page must always read the current DB state, never a
// build-time or ISR-cached snapshot, or edits/scheduled posts wouldn't
// appear on the live site without a redeploy.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await getBlogBySlugMongo(slug);

  if (!res?.success) {
    return {
      title: "Blog Not Found",
    };
  }

  const post = res?.data;
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const image = post.ogImage || post.featuredImage;

  return {
    title,
    description,
    alternates: {
      canonical: `https://bizzbuzzcreations.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;

  const res = await getBlogBySlugMongo(slug);

  if (!res?.success) {
    return notFound();
  }
  const post = res?.data;

  const featuredImage = getFeaturedImage(post);

  const formattedDate = new Date(post?.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const rawContent = sanitizeBlogContent(post?.content);
  const { html: filteredData, toc } = extractTableOfContents(rawContent);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    ...(post.featuredImage ? { image: post.featuredImage } : {}),
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "BizzBuzz Creations",
      logo: {
        "@type": "ImageObject",
        url: "https://bizzbuzzcreations.com/favicon.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bizzbuzzcreations.com/blog/${slug}`,
    },
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 lg:flex lg:items-start gap-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
          <h1 className="md:text-3xl xl:text-4xl text-2xl font-bold mb-4 font-bold mb-2">
            {post?.title}
          </h1>
          <p className="text-gray-500 text-sm">
            Published on <time dateTime={post?.publishedAt}>{formattedDate}</time>
          </p>
        </div>
        {/* Featured Image */}
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={post?.title}
            className="w-full h-auto mb-8 rounded-lg"
          />
        ) : (
          <div className="w-full aspect-[1.91/1] mb-8 rounded-lg flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-400">
            <ImageOff size={36} />
            <span className="text-sm font-medium">Image unavailable</span>
          </div>
        )}
        {/* Content */}
        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: filteredData }}
        />

        {/* FAQs */}
        {post.faqs?.length > 0 && (
          <div className="my-12">
            <FAQSection
              faqs={post.faqs}
              heading="Frequently Asked Questions"
              headingClassName="text-2xl font-bold mb-6"
            />
          </div>
        )}

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
                {post?.author}
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <p className="text-gray-600 leading-relaxed text-sm">
            {post?.authorBio}
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
