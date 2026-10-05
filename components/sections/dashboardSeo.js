"use client";

import { useMemo, useState } from "react";
import { uploadFileDirect } from "@/lib/directUpload";
import RedirectManager from "@/components/sections/redirectManager";
import {
  SCHEMA_TYPES,
  absoluteUrl,
  collectHeadings,
  collectImages,
  currentSlugFor,
  isTrue,
  parseSchemaJson,
  publicPathFor,
  schemaTemplate,
  setValueAtPath,
  splitKeywords,
} from "@/lib/seo";

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-slate-400";
const labelCls =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400";

function Group({ title, hint, defaultOpen = false, children }) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-xl border border-slate-100 bg-slate-50/60"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5">
        <span>
          <span className="block text-sm font-bold text-slate-800">{title}</span>
          {hint && <span className="block text-xs text-slate-400">{hint}</span>}
        </span>
        <svg
          className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div className="space-y-4 border-t border-slate-100 p-5">{children}</div>
    </details>
  );
}

function Field({ label, hint, counter, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className={labelCls}>{label}</label>
        {counter}
      </div>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

function Counter({ value, max }) {
  const n = String(value || "").length;
  return (
    <span
      className={`text-xs ${n > max ? "text-amber-500" : "text-slate-400"}`}
    >
      {n}/{max}
    </span>
  );
}

function ImageInput({ value, onChange }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadFileDirect(file, "bizzbuzz-page-content");
      if (res?.success) onChange(res.url);
      else alert(res?.message || "Upload failed.");
    } catch (err) {
      console.error("SEO image upload failed:", err);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={value}
          alt=""
          className="h-16 w-28 shrink-0 rounded-lg border border-slate-200 object-cover"
        />
      )}
      <div className="flex min-w-[220px] flex-1 flex-col gap-2">
        <input
          className={inputCls}
          placeholder="Paste an image URL, or upload one"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="flex items-center gap-3">
          <label className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
            {uploading ? "Uploading..." : "Upload Image"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              disabled={uploading}
              onChange={(e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                handleUpload(file);
              }}
            />
          </label>
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              className="text-xs font-semibold text-red-500"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? "bg-emerald-500" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${
            checked ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </label>
  );
}

const includesWord = (haystack, needle) =>
  !!needle && String(haystack || "").toLowerCase().includes(needle.toLowerCase());

// Per-page SEO & technical settings, shown under the page's content
// fields in Website Content / Industries / Services / Sub-Services /
// Outside Location. Everything here is stored in the same `values` map as
// the page's content (via `onChange(key, value)`), so the dashboard's
// existing "Save Changes" button saves it all together. Only the Redirect
// Manager saves on its own, instantly.
export default function SeoPanel({ pageKey, page, values, onChange }) {
  const v = (key, fallback = "") => values?.[key] ?? fallback;

  const currentSlug = currentSlugFor(pageKey);
  const slug = v("seoSlug") || currentSlug;
  const publicPath = publicPathFor(pageKey, v("seoSlug")) || "/";
  const pageUrl = absoluteUrl(publicPath);
  const isHome = publicPath === "/" && !currentSlug;

  const headings = useMemo(() => collectHeadings(page, values), [page, values]);
  const images = useMemo(() => collectImages(page, values), [page, values]);
  const alts = v("imageAlts", {}) || {};

  const setHeading = (entry, text) => {
    const next = setValueAtPath(values, entry.path, text);
    onChange(entry.path[0], next[entry.path[0]]);
  };

  const setAlt = (url, text) => onChange("imageAlts", { ...alts, [url]: text });

  const primary = v("seoPrimaryKeyword").trim();
  const secondary = splitKeywords(v("seoSecondaryKeywords"));
  const h1 = headings.find((h) => h.level === "H1");
  const keywordChecks = primary
    ? [
        ["Meta title", includesWord(v("metaTitle"), primary)],
        ["Meta description", includesWord(v("metaDescription"), primary)],
        ["H1 heading", includesWord(h1?.value, primary)],
        [
          "URL slug",
          includesWord(slug, primary.toLowerCase().replace(/[^a-z0-9]+/g, "-")),
        ],
      ]
    : [];

  const schemaType = v("schemaType");
  const schemaJson = v("schemaJson");
  const schemaEnabled = isTrue(v("schemaEnabled"), false);
  const schemaCheck = schemaJson.trim() ? parseSchemaJson(schemaJson) : null;

  const templateFor = (type) =>
    JSON.stringify(
      schemaTemplate(type, {
        url: v("seoCanonical") || pageUrl,
        title: v("metaTitle") || h1?.value || page?.label || "",
        description: v("metaDescription"),
        image: v("ogImage"),
      }),
      null,
      2,
    );

  const robotsIndex = v("robotsIndex", "index") || "index";
  const robotsFollow = v("robotsFollow", "follow") || "follow";

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold text-slate-800">
          SEO &amp; Technical Settings
        </h3>
        <p className="text-xs text-slate-400">
          These save together with the page&apos;s content when you click{" "}
          <b>Save Changes</b> below (the Redirect Manager saves on its own).
        </p>
      </div>

      <Group
        title="URL, Canonical & Keywords"
        hint="URL slug, canonical URL, primary and secondary keywords"
        defaultOpen
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="URL Slug"
            hint={
              isHome
                ? "The home page's URL can't be changed."
                : `Live URL: ${pageUrl}. Changing it 301-redirects the old URL to the new one.`
            }
          >
            <input
              type="text"
              className={inputCls}
              disabled={isHome}
              value={isHome ? "" : slug}
              placeholder={isHome ? "(home page)" : currentSlug}
              onChange={(e) =>
                onChange(
                  "seoSlug",
                  e.target.value
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, ""),
                )
              }
            />
          </Field>
          <Field
            label="Canonical URL"
            hint="Leave blank to use this page's own URL."
          >
            <input
              type="text"
              className={inputCls}
              placeholder={pageUrl}
              value={v("seoCanonical")}
              onChange={(e) => onChange("seoCanonical", e.target.value)}
            />
          </Field>
          <Field label="Primary Keyword" hint="The one phrase this page should rank for.">
            <input
              type="text"
              className={inputCls}
              value={v("seoPrimaryKeyword")}
              onChange={(e) => onChange("seoPrimaryKeyword", e.target.value)}
            />
          </Field>
          <Field label="Secondary Keywords" hint="Separate with commas.">
            <input
              type="text"
              className={inputCls}
              value={v("seoSecondaryKeywords")}
              onChange={(e) => onChange("seoSecondaryKeywords", e.target.value)}
            />
          </Field>
        </div>

        {secondary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {secondary.map((k) => (
              <span
                key={k}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
              >
                {k}
              </span>
            ))}
          </div>
        )}

        {keywordChecks.length > 0 && (
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Primary keyword appears in
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {keywordChecks.map(([label, ok]) => (
                <span key={label} className={ok ? "text-emerald-600" : "text-slate-400"}>
                  {ok ? "✓" : "✗"} {label}
                </span>
              ))}
            </div>
          </div>
        )}
      </Group>

      <Group
        title="Headings (H1 · H2 · H3)"
        hint="Edit the page's headings in one place"
      >
        {headings.length === 0 ? (
          <p className="text-sm text-slate-400">
            No editable headings found on this page.
          </p>
        ) : (
          <>
            <p className="text-xs text-slate-400">
              These are the same headings as in the content sections above —
              editing one here changes it there. Levels follow the page
              structure: the hero heading is the H1, section headings are
              H2s, and headings inside cards/lists are H3s.
            </p>
            <div className="space-y-2">
              {headings.map((h) => (
                <div key={h.path.join(".")} className="flex items-center gap-3">
                  <span
                    className={`w-9 shrink-0 rounded-md py-1 text-center text-xs font-bold ${
                      h.level === "H1"
                        ? "bg-indigo-100 text-indigo-700"
                        : h.level === "H2"
                          ? "bg-sky-100 text-sky-700"
                          : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {h.level}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="mb-0.5 truncate text-[11px] text-slate-400">
                      {h.label}
                    </p>
                    <input
                      type="text"
                      className={inputCls}
                      value={h.value}
                      onChange={(e) => setHeading(h, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Group>

      <Group
        title="Image Alt Text"
        hint="Describe each image on this page for search engines and screen readers"
      >
        {images.length === 0 ? (
          <p className="text-sm text-slate-400">
            No images found on this page.
          </p>
        ) : (
          <div className="space-y-3">
            {images.map((img) => (
              <div key={img.url} className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt=""
                  className="h-14 w-14 shrink-0 rounded-lg border border-slate-200 object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 truncate text-[11px] text-slate-400">
                    {img.label}
                  </p>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="Alt text — describe what's in the image"
                    value={alts[img.url] ?? ""}
                    onChange={(e) => setAlt(img.url, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </Group>

      <Group
        title="Social Sharing — Open Graph"
        hint="How the page looks when shared on Facebook, LinkedIn, WhatsApp"
      >
        <Field
          label="OG Title"
          counter={<Counter value={v("ogTitle")} max={70} />}
          hint="Blank = uses the Meta Title."
        >
          <input
            type="text"
            className={inputCls}
            value={v("ogTitle")}
            onChange={(e) => onChange("ogTitle", e.target.value)}
          />
        </Field>
        <Field
          label="OG Description"
          counter={<Counter value={v("ogDescription")} max={200} />}
          hint="Blank = uses the Meta Description."
        >
          <textarea
            rows={3}
            className={inputCls}
            value={v("ogDescription")}
            onChange={(e) => onChange("ogDescription", e.target.value)}
          />
        </Field>
        <Field label="OG Image" hint="Recommended 1200×630.">
          <ImageInput value={v("ogImage")} onChange={(url) => onChange("ogImage", url)} />
        </Field>
      </Group>

      <Group
        title="Social Sharing — X / Twitter"
        hint="How the page looks when shared on X"
      >
        <Field
          label="X/Twitter Title"
          counter={<Counter value={v("twTitle")} max={70} />}
          hint="Blank = uses the OG Title, then the Meta Title."
        >
          <input
            type="text"
            className={inputCls}
            value={v("twTitle")}
            onChange={(e) => onChange("twTitle", e.target.value)}
          />
        </Field>
        <Field
          label="X/Twitter Description"
          counter={<Counter value={v("twDescription")} max={200} />}
          hint="Blank = uses the OG Description, then the Meta Description."
        >
          <textarea
            rows={3}
            className={inputCls}
            value={v("twDescription")}
            onChange={(e) => onChange("twDescription", e.target.value)}
          />
        </Field>
        <Field label="X/Twitter Image" hint="Blank = uses the OG Image.">
          <ImageInput value={v("twImage")} onChange={(url) => onChange("twImage", url)} />
        </Field>
      </Group>

      <Group
        title="Schema (Structured Data)"
        hint="JSON-LD for rich results — choose a type, edit it, switch it on or off"
      >
        <Toggle
          checked={schemaEnabled}
          onChange={(on) => onChange("schemaEnabled", on)}
          label={schemaEnabled ? "Schema is enabled on this page" : "Schema is disabled"}
        />
        <div className="grid gap-4 sm:grid-cols-[220px_auto] sm:items-end">
          <Field label="Schema Type">
            <select
              className={inputCls}
              value={schemaType}
              onChange={(e) => {
                const type = e.target.value;
                onChange("schemaType", type);
                // First pick on an empty box: start from a template.
                if (type && !schemaJson.trim()) {
                  onChange("schemaJson", templateFor(type));
                }
              }}
            >
              <option value="">Select a type…</option>
              {SCHEMA_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={!schemaType}
              onClick={() => {
                if (
                  !schemaJson.trim() ||
                  window.confirm("Replace the current schema with a fresh template?")
                ) {
                  onChange("schemaJson", templateFor(schemaType));
                }
              }}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50"
            >
              Insert template
            </button>
            <button
              type="button"
              disabled={!schemaCheck?.ok}
              onClick={() =>
                onChange("schemaJson", JSON.stringify(schemaCheck.data, null, 2))
              }
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50"
            >
              Format JSON
            </button>
          </div>
        </div>
        <Field label="Schema JSON-LD">
          <textarea
            rows={12}
            spellCheck={false}
            className={`${inputCls} font-mono text-xs leading-relaxed`}
            placeholder='{ "@context": "https://schema.org", "@type": "WebPage", ... }'
            value={schemaJson}
            onChange={(e) => onChange("schemaJson", e.target.value)}
          />
        </Field>
        {schemaCheck &&
          (schemaCheck.ok ? (
            <p className="text-xs text-emerald-600">✓ Valid JSON</p>
          ) : (
            <p className="text-xs text-red-500">{schemaCheck.error}</p>
          ))}
        <p className="text-xs text-slate-400">
          Only output on the live page when enabled and the JSON is valid.
          Test it with Google&apos;s Rich Results Test.
        </p>
      </Group>

      <Group
        title="Indexing Controls"
        hint="Index / Noindex · Follow / Nofollow · Sitemap"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Search engine indexing">
            <select
              className={inputCls}
              value={robotsIndex}
              onChange={(e) => onChange("robotsIndex", e.target.value)}
            >
              <option value="index">Index — allow in search results</option>
              <option value="noindex">Noindex — keep out of search results</option>
            </select>
          </Field>
          <Field label="Link following">
            <select
              className={inputCls}
              value={robotsFollow}
              onChange={(e) => onChange("robotsFollow", e.target.value)}
            >
              <option value="follow">Follow — pass link value</option>
              <option value="nofollow">Nofollow — don&apos;t follow links</option>
            </select>
          </Field>
        </div>
        <Toggle
          checked={isTrue(v("sitemapInclude"), true) && robotsIndex !== "noindex"}
          onChange={(on) => onChange("sitemapInclude", on)}
          label="Include this page in the XML sitemap"
        />
        {robotsIndex === "noindex" && (
          <p className="text-xs text-amber-600">
            Heads up: Noindex tells Google to keep this page out of search
            results, and noindex pages are always left out of the sitemap.
          </p>
        )}
      </Group>

      <Group
        title="Redirect Manager"
        hint="301 redirects — old URL → new URL, enable/disable, edit, delete"
      >
        <RedirectManager key={publicPath} pagePath={publicPath} />
      </Group>
    </div>
  );
}
