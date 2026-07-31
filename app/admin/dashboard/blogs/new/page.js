import { redirect } from "next/navigation";
import { getSession } from "@/actions/authActions";
import BlogEditor from "@/components/sections/blogEditor";

export default async function NewBlogPost() {
  const session = await getSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <BlogEditor />
    </div>
  );
}
