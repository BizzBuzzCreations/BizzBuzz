import { notFound } from "next/navigation";
import { getBlogById } from "@/actions/blogActions";
import BlogEditor from "@/components/sections/blogEditor";

export default async function EditBlogPost({ params, searchParams }) {
  const { id } = await params;
  const { token } = await searchParams;

  if (!token || token !== process.env.ADMIN_PAGE_TOKEN) {
    notFound();
  }

  const res = await getBlogById(id);
  if (!res?.success) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <BlogEditor initialData={res.data} />
    </div>
  );
}
