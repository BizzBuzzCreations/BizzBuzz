"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getAllBlogsAdmin, deleteBlog } from "@/actions/blogActions";

export default function DashboardBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogs = async () => {
    setLoading(true);
    const res = await getAllBlogsAdmin();
    if (res?.success) setBlogs(res.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return blogs.filter(
      (blog) =>
        blog.title?.toLowerCase().includes(q) ||
        blog.category?.toLowerCase().includes(q),
    );
  }, [blogs, searchQuery]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this post? This cannot be undone.")) return;
    const res = await deleteBlog(id);
    if (res?.success) {
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    }
  };

  const published = blogs.filter((b) => b.status === "published").length;
  const scheduled = blogs.filter((b) => b.status === "scheduled").length;
  const drafts = blogs.length - published - scheduled;

  return (
    <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">Blog Posts</h2>
          <p className="text-xs text-slate-400">
            {published} published &middot; {scheduled} scheduled &middot; {drafts} drafts
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <input
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link
            href="/admin/dashboard/blogs/new"
            className="whitespace-nowrap rounded-[10px] bg-linear-to-br from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            New Post
          </Link>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-slate-400">Loading posts...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-3 py-2 text-left text-xs text-slate-400">
                  Title
                </th>
                <th className="px-3 py-2 text-left text-xs text-slate-400">
                  Category
                </th>
                <th className="px-3 py-2 text-left text-xs text-slate-400">
                  Status
                </th>
                <th className="px-3 py-2 text-left text-xs text-slate-400">
                  Date
                </th>
                <th className="px-3 py-2 text-left text-xs text-slate-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.map((blog) => (
                <tr key={blog._id} className="border-b border-slate-50">
                  <td className="px-3 py-3 text-sm font-semibold text-slate-800">
                    {blog.title}
                  </td>
                  <td className="px-3 py-3 text-sm text-slate-600">
                    {blog.category}
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        blog.status === "published"
                          ? "bg-green-50 text-green-600"
                          : blog.status === "scheduled"
                            ? "bg-indigo-50 text-indigo-600"
                            : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm text-slate-600">
                    {blog.status === "scheduled" && blog.scheduledAt
                      ? new Date(blog.scheduledAt).toLocaleString("en-IN", {
                          day: "numeric",
                          month: "short",
                          hour: "numeric",
                          minute: "2-digit",
                        })
                      : new Date(
                          blog.status === "published" && blog.publishedAt
                            ? blog.publishedAt
                            : blog.createdAt,
                        ).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/dashboard/blogs/${blog._id}`}
                        className="rounded-md bg-indigo-50 px-3 py-1 text-sm text-indigo-600"
                      >
                        Edit
                      </Link>
                      <button
                        className="rounded-md bg-red-50 px-3 py-1 text-sm text-red-500"
                        onClick={() => handleDelete(blog._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredBlogs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-3 py-6 text-center text-sm text-slate-400">
                    No blog posts yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
