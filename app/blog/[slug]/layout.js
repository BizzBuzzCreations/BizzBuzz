import AllBlogScripts from "@/components/sections/allBlogScripts";

// This layout is used to inject blog-specific scripts and metadata for each blog post based on the slug.
export default async function BlogLayout({ children, params }) {
  const { slug } = await params;

  return (
    <>
      <AllBlogScripts slug={slug} />
      {children}
    </>
  );
}
