import { notFound } from "next/navigation";
import BlogEditor from "@/components/sections/blogEditor";

export default async function NewBlogPost({ searchParams }) {
  const { token } = await searchParams;

  if (!token || token !== process.env.ADMIN_PAGE_TOKEN) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <BlogEditor />
    </div>
  );
}
