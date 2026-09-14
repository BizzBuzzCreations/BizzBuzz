"use client";

import { useEffect, useState } from "react";
import {
  getPageContent,
  savePageContent,
  uploadContentImage,
  uploadContentVideo,
} from "@/actions/pageContentActions";
import { INDUSTRY_CONTENT_REGISTRY } from "@/lib/industryContentRegistry";
import { getPageMeta } from "@/lib/pageContentRegistry";
import InlineRichEditor from "@/components/ui/inlineRichEditor";
import MediaLibraryButton from "@/components/sections/mediaLibrary";

// Identical field controls to DashboardContent (components/sections/dashboardContent.js)
// — kept as a separate copy rather than a shared import so this section
// can evolve independently since it drives a generated registry, not the
// hand-authored one.
function MediaField({ value, onChange, label, kind }) {
  const [uploading, setUploading] = useState(false);
  const isVideo = kind === "video";

  const handleUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await (isVideo ? uploadContentVideo(formData) : uploadContentImage(formData));
      if (res?.success) {
        onChange(res.url);
      } else {
        alert(res?.message || "Upload failed.");
      }
    } catch (err) {
      console.error("Content media upload failed:", err);
      alert("Upload failed. The file may be too large.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {value && !isVideo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={value}
          alt=""
          className="h-16 w-16 shrink-0 rounded-lg border border-slate-200 object-cover"
        />
      )}
      {value && isVideo && (
        <video
          src={value}
          muted
          className="h-16 w-28 shrink-0 rounded-lg border border-slate-200 object-cover"
        />
      )}
      <label className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
        {uploading ? "Uploading..." : `Upload ${label || (isVideo ? "Video" : "Image")}`}
        <input
          type="file"
          accept={isVideo ? "video/*" : "image/*"}
          className="hidden"
          disabled={uploading}
          onChange={(e) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            handleUpload(file);
          }}
        />
      </label>
    </div>
  );
}

function FieldControl({ field, value, onChange }) {
  if (field.type === "textarea") {
    return <InlineRichEditor value={value} onChange={onChange} />;
  }
  if (field.type === "image" || field.type === "video") {
    return (
      <MediaField
        value={value}
        onChange={onChange}
        label={field.label}
        kind={field.type}
      />
    );
  }
  return (
    <input
      type="text"
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none focus:border-slate-400"
    />
  );
}

function ListField({ field, items, onChange }) {
  const list = Array.isArray(items) ? items : [];

  const updateItem = (index, itemKey, value) => {
    const next = list.map((item, i) =>
      i === index ? { ...item, [itemKey]: value } : item,
    );
    onChange(next);
  };

  const addItem = () => {
    const blank = {};
    for (const f of field.itemFields) blank[f.key] = "";
    onChange([...list, blank]);
  };

  const removeItem = (index) => {
    onChange(list.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {list.map((item, index) => (
        <div
          key={index}
          className="relative rounded-lg border border-slate-200 bg-white p-4"
        >
          <button
            type="button"
            onClick={() => removeItem(index)}
            className="absolute right-3 top-3 text-xs font-semibold text-red-500 hover:text-red-600"
          >
            Remove
          </button>
          <div className="grid gap-3 sm:grid-cols-2 pr-16">
            {field.itemFields.map((itemField) => (
              <div
                key={itemField.key}
                className={itemField.type !== "text" ? "sm:col-span-2" : ""}
              >
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {itemField.label}
                </label>
                {itemField.type === "list" ? (
                  <ListField
                    field={itemField}
                    items={item[itemField.key]}
                    onChange={(value) => updateItem(index, itemField.key, value)}
                  />
                ) : (
                  <FieldControl
                    field={itemField}
                    value={item[itemField.key]}
                    onChange={(value) => updateItem(index, itemField.key, value)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-500 hover:border-slate-400 hover:text-slate-700"
      >
        + Add {field.label}
      </button>
    </div>
  );
}

// Every /industries/<slug> page shares the exact same structure
// (components/sections/industryDetailPage.js), so instead of 15 separate
// dashboard entries, this is one picker: choose the industry, then edit
// that industry's hero, capabilities, service breakdown, differentiators,
// roadmap, why-choose-us, FAQ, and closing CTA — same section shapes for
// every one of the 15 pages.
export default function DashboardIndustries() {
  const [pageKey, setPageKey] = useState(INDUSTRY_CONTENT_REGISTRY[0]?.key || "");
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);

  // getPageMeta (not a raw find on INDUSTRY_CONTENT_REGISTRY) so this
  // page picks up the shared SEO/Meta section auto-appended to every page.
  const page = getPageMeta(pageKey);

  useEffect(() => {
    let cancelled = false;
    // Deferred (not called synchronously in the effect body) so this
    // doesn't trip react-hooks/set-state-in-effect — same end result,
    // just scheduled a tick later instead of during the render commit.
    const resetTimer = setTimeout(() => {
      if (!cancelled) {
        setLoading(true);
        setSavedAt(null);
      }
    }, 0);
    getPageContent(pageKey).then((data) => {
      if (!cancelled) {
        setValues(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
      clearTimeout(resetTimer);
    };
  }, [pageKey]);

  const handleChange = (key, value, fieldType) => {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      // Media fields (top-level only — nested list-item images still use
      // the normal Save Changes flow) persist the moment the upload
      // finishes, instead of sitting as an unsaved local change that
      // silently reverts to the old image if the admin navigates away
      // or forgets to click Save.
      if (fieldType === "image" || fieldType === "video") {
        savePageContent(pageKey, next).then((res) => {
          if (res?.success) {
            setSavedAt(Date.now());
          } else {
            alert(res?.message || "Failed to save the new image.");
          }
        });
      }
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setSavedAt(null);
    const res = await savePageContent(pageKey, values);
    setSaving(false);
    if (res?.success) {
      setSavedAt(Date.now());
    } else {
      alert(res?.message || "Failed to save changes.");
    }
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">Industries Pages</h2>
          <p className="text-xs text-slate-400">
            Every industry page shares the same layout — pick one below to
            edit its text and images. Design and layout stay exactly as
            built.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <MediaLibraryButton />
          <div className="relative">
            <select
              value={pageKey}
              onChange={(e) => setPageKey(e.target.value)}
              className="min-w-[200px] appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-slate-700 outline-none focus:border-slate-400"
            >
              {INDUSTRY_CONTENT_REGISTRY.map((p) => (
                <option key={p.key} value={p.key}>
                  {p.label.replace(/^Industries — /, "")}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-slate-400">Loading content...</p>
      ) : (
        <div className="space-y-6">
          {page?.sections.map((section) => (
            <div
              key={section.key}
              className="rounded-xl border border-slate-100 bg-slate-50/60 p-5"
            >
              <h3 className="mb-4 text-sm font-bold text-slate-800">
                {section.label}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {section.fields.map((field) => (
                  <div
                    key={field.key}
                    className={field.type !== "text" ? "sm:col-span-2" : ""}
                  >
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {field.label}
                    </label>
                    {field.type === "list" ? (
                      <ListField
                        field={field}
                        items={values[field.key]}
                        onChange={(next) => handleChange(field.key, next)}
                      />
                    ) : (
                      <FieldControl
                        field={field}
                        value={values[field.key]}
                        onChange={(value) => handleChange(field.key, value, field.type)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-[10px] bg-linear-to-br from-indigo-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            {savedAt && (
              <span className="text-sm text-emerald-600">
                Saved — live on the site now.
              </span>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
