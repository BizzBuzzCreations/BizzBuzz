import { redirect, notFound } from "next/navigation";
import { getSession } from "@/actions/authActions";
import { getBlogById } from "@/actions/blogActions";
import BlogEditor from "@/components/sections/blogEditor";

export default async function EditBlogPost({ params }) {
  const { id } = await params;

  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
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
