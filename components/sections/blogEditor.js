"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import slugify from "slugify";
import { createBlog, updateBlog, uploadBlogImage } from "@/actions/blogActions";
import RichTextEditor from "@/components/ui/richTextEditor";
import { Plus, Trash2 } from "lucide-react";

const CATEGORIES = [
  "SEO",
  "Social Media Marketing",
  "Paid Marketing",
  "Web Development",
  "AI Solutions",
  "Marketing Automation",
  "BPO",
  "Business Consultancy",
  "General",
];

const arrayToText = (arr) => (Array.isArray(arr) ? arr.join(", ") : "");
const textToArray = (text) =>
  text
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

// Converts a stored ISO date into the local "YYYY-MM-DDTHH:mm" value a
// <input type="datetime-local"> expects (it always shows local time).
const toDatetimeLocalValue = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export default function BlogEditor({ initialData = null }) {
  const router = useRouter();
  const isEditMode = Boolean(initialData?._id);

  const [form, setForm] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    featuredImage: initialData?.featuredImage || "",
    category: initialData?.category || CATEGORIES[0],
    author: initialData?.author || "BizzBuzz Creations",
    authorBio: initialData?.authorBio || "",
    status: initialData?.status || "draft",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    primaryKeyword: initialData?.primaryKeyword || "",
    secondaryKeywords: arrayToText(initialData?.secondaryKeywords),
    tags: arrayToText(initialData?.tags),
  });
  const [faqs, setFaqs] = useState(
    initialData?.faqs?.length
      ? initialData.faqs
      : [{ question: "", answer: "" }],
  );
  const [scheduledAt, setScheduledAt] = useState(
    toDatetimeLocalValue(initialData?.scheduledAt),
  );
  const [slugTouched, setSlugTouched] = useState(isEditMode);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleTitleChange = (value) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugTouched ? prev.slug : slugify(value, { lower: true, strict: true }),
    }));
  };

  const handleFeaturedImageUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await uploadBlogImage(formData);
      if (res?.success) {
        setForm((prev) => ({ ...prev, featuredImage: res.url }));
      } else {
        alert(res?.message || "Image upload failed.");
      }
    } catch (err) {
      console.error("Featured image upload failed:", err);
      alert("Image upload failed. The file may be too large.");
    } finally {
      setUploadingImage(false);
    }
  };

  const addFaq = () => setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  const removeFaq = (index) =>
    setFaqs((prev) => prev.filter((_, i) => i !== index));
  const updateFaq = (index, field, value) =>
    setFaqs((prev) =>
      prev.map((faq, i) => (i === index ? { ...faq, [field]: value } : faq)),
    );

  const handleSubmit = async (status) => {
    setError("");
    if (!form.title.trim() || !form.content.trim()) {
      setError("Title and content are required.");
      return;
    }

    if (status === "scheduled") {
      if (!scheduledAt) {
        setError("Pick a date and time to schedule this post for.");
        return;
      }
      if (new Date(scheduledAt).getTime() <= Date.now()) {
        setError("Scheduled time must be in the future.");
        return;
      }
    }

    setSaving(true);
    const payload = {
      ...form,
      status,
      scheduledAt: status === "scheduled" ? scheduledAt : null,
      secondaryKeywords: textToArray(form.secondaryKeywords),
      tags: textToArray(form.tags),
      faqs: faqs.filter((faq) => faq.question.trim() && faq.answer.trim()),
    };

    const res = isEditMode
      ? await updateBlog(initialData._id, payload)
      : await createBlog(payload);

    setSaving(false);

    if (res?.success) {
      router.push("/admin/dashboard?tab=blogs");
      router.refresh();
    } else {
      setError(res?.message || "Something went wrong.");
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-slate-900">
          {isEditMode ? "Edit Post" : "New Post"}
        </h1>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSubmit("draft")}
            className="rounded-[10px] border border-slate-200 bg-white px-[18px] py-2.5 text-sm font-semibold text-slate-600 disabled:opacity-50"
          >
            Save Draft
          </button>
          <input
            type="datetime-local"
            value={scheduledAt}
            onChange={(e) => setScheduledAt(e.target.value)}
            className="rounded-[10px] border border-slate-200 px-3 py-2.5 text-sm text-slate-600 outline-none"
          />
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSubmit("scheduled")}
            className="rounded-[10px] border border-indigo-200 bg-indigo-50 px-[18px] py-2.5 text-sm font-semibold text-indigo-600 disabled:opacity-50"
          >
            Schedule
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSubmit("published")}
            className="rounded-[10px] bg-linear-to-br from-indigo-500 to-violet-500 px-[18px] py-2.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            Publish
          </button>
        </div>
      </div>

      {initialData?.status === "scheduled" && initialData?.scheduledAt && (
        <div className="mb-4 rounded-lg bg-indigo-50 px-4 py-3 text-sm text-indigo-600">
          Scheduled to publish on{" "}
          {new Date(initialData.scheduledAt).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </div>
      )}

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {/* --- Core content --- */}
        <input
          className="rounded-lg border border-slate-200 px-4 py-2.5 text-lg font-semibold outline-none"
          placeholder="Post title"
          value={form.title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
            Slug (URL: /blog/{form.slug || "..."})
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true);
              setForm((prev) => ({ ...prev, slug: e.target.value }));
            }}
          />
        </div>

        <textarea
          className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
          rows={2}
          placeholder="Short excerpt (shown on blog cards)"
          value={form.excerpt}
          onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
              Category
            </label>
            <select
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
              value={form.category}
              onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
              Author name
            </label>
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
              placeholder="Author"
              value={form.author}
              onChange={(e) => setForm((prev) => ({ ...prev, author: e.target.value }))}
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
            Author description / bio
          </label>
          <textarea
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
            rows={2}
            placeholder="Shown under the article, next to the author's name"
            value={form.authorBio}
            onChange={(e) => setForm((prev) => ({ ...prev, authorBio: e.target.value }))}
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
            Featured image
          </label>
          {form.featuredImage && (
            <img
              src={form.featuredImage}
              alt="Featured"
              className="mb-2 h-40 w-full max-w-xs rounded-lg object-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFeaturedImageUpload}
            disabled={uploadingImage}
          />
          {uploadingImage && (
            <p className="mt-1 text-xs text-slate-400">Uploading...</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
            Content
          </label>
          <RichTextEditor
            content={form.content}
            onChange={(html) => setForm((prev) => ({ ...prev, content: html }))}
          />
        </div>

        {/* --- Keywords & tags --- */}
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Keywords &amp; Tags
          </p>
          <div className="mb-3">
            <label className="mb-1 block text-xs text-slate-500">
              Primary keyword
            </label>
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
              placeholder="e.g. digital marketing agency in Prayagraj"
              value={form.primaryKeyword}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, primaryKeyword: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label className="mb-1 block text-xs text-slate-500">
              Secondary keywords (comma separated)
            </label>
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
              placeholder="e.g. SEO services, local SEO, Google ranking"
              value={form.secondaryKeywords}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, secondaryKeywords: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-500">
              Tags (comma separated)
            </label>
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
              placeholder="e.g. SEO, marketing, 2026"
              value={form.tags}
              onChange={(e) => setForm((prev) => ({ ...prev, tags: e.target.value }))}
            />
          </div>
        </div>

        {/* --- SEO / meta --- */}
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Meta Title &amp; Description (falls back to title/excerpt if left blank)
          </p>
          <input
            className="mb-3 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
            placeholder="Meta title"
            value={form.metaTitle}
            onChange={(e) => setForm((prev) => ({ ...prev, metaTitle: e.target.value }))}
          />
          <textarea
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
            rows={2}
            placeholder="Meta description"
            value={form.metaDescription}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, metaDescription: e.target.value }))
            }
          />
        </div>

        {/* --- FAQ schema --- */}
        <div className="rounded-lg border border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              FAQ Schema (adds an FAQPage block to Google + an FAQ section on the post)
            </p>
            <button
              type="button"
              onClick={addFaq}
              className="flex items-center gap-1 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600"
            >
              <Plus size={14} /> Add FAQ
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-slate-50 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    FAQ {index + 1}
                  </span>
                  {faqs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFaq(index)}
                      className="text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
                <input
                  className="mb-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none"
                  placeholder="Question"
                  value={faq.question}
                  onChange={(e) => updateFaq(index, "question", e.target.value)}
                />
                <textarea
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none"
                  rows={2}
                  placeholder="Answer"
                  value={faq.answer}
                  onChange={(e) => updateFaq(index, "answer", e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-400">
          Article schema is generated automatically from the title, meta description,
          featured image, author, and publish date — no extra input needed here.
        </p>
      </div>
    </div>
  );
}
