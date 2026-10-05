"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getRobotsSettings,
  saveRobotsSettings,
  getSitemapSettings,
  saveSitemapSettings,
  getSitemapPages,
  setSitemapInclude,
} from "@/actions/seoActions";
import RedirectManager from "@/components/sections/redirectManager";

const textareaCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 font-mono text-xs leading-relaxed outline-none focus:border-slate-400";
const primaryBtn =
  "rounded-[10px] bg-linear-to-br from-indigo-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white disabled:opacity-60";
const ghostBtn =
  "rounded-[10px] border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-60";

function Card({ title, hint, badge, children }) {
  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">{title}</h2>
          {hint && <p className="text-xs text-slate-400">{hint}</p>}
        </div>
        {badge}
      </div>
      {children}
    </section>
  );
}

function Badge({ custom }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        custom ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
      }`}
    >
      {custom ? "Custom" : "Default / auto-generated"}
    </span>
  );
}

function Status({ state }) {
  if (!state) return null;
  return (
    <span
      className={`text-sm ${state.ok ? "text-emerald-600" : "text-red-500"}`}
    >
      {state.message}
    </span>
  );
}

function RobotsEditor() {
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState("auto");
  const [text, setText] = useState("");
  const [defaultText, setDefaultText] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getRobotsSettings().then((res) => {
      if (cancelled) return;
      if (res?.success) {
        setMode(res.mode);
        setText(res.text);
        setDefaultText(res.defaultText);
      } else {
        setStatus({ ok: false, message: res?.message || "Failed to load." });
      }
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const save = async (nextMode) => {
    // "Disallow: /" under the catch-all agent blocks the whole site.
    if (
      nextMode === "custom" &&
      /user-agent:\s*\*[\s\S]*?\n\s*disallow:\s*\/\s*(\n|$)/i.test(text) &&
      !window.confirm(
        "This robots.txt blocks ALL crawlers from the entire site (Disallow: /). Google will stop crawling your pages. Save anyway?",
      )
    ) {
      return;
    }
    setBusy(true);
    setStatus(null);
    const res = await saveRobotsSettings({ mode: nextMode, text });
    setBusy(false);
    if (res?.success) {
      setMode(nextMode);
      if (nextMode === "auto") setText(defaultText);
      setStatus({
        ok: true,
        message:
          nextMode === "auto"
            ? "Reset — serving the default robots.txt."
            : "Saved — /robots.txt is updated.",
      });
    } else {
      setStatus({ ok: false, message: res?.message || "Failed to save." });
    }
  };

  return (
    <Card
      title="Robots.txt"
      hint="Controls which parts of the site search engines and AI crawlers may visit."
      badge={loaded && <Badge custom={mode === "custom"} />}
    >
      {!loaded ? (
        <p className="text-sm text-slate-400">Loading...</p>
      ) : (
        <div className="space-y-3">
          <textarea
            rows={16}
            spellCheck={false}
            className={textareaCls}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setStatus(null);
            }}
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className={primaryBtn}
              disabled={busy || !text.trim()}
              onClick={() => save("custom")}
            >
              {busy ? "Saving..." : "Save robots.txt"}
            </button>
            <button
              type="button"
              className={ghostBtn}
              disabled={busy || mode === "auto"}
              onClick={() => {
                if (window.confirm("Reset robots.txt to the default rules?")) {
                  save("auto");
                }
              }}
            >
              Reset to default
            </button>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-indigo-500"
            >
              View live file ↗
            </a>
            <Status state={status} />
          </div>
        </div>
      )}
    </Card>
  );
}

function SitemapEditor() {
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState("auto");
  const [xml, setXml] = useState("");
  const [generatedXml, setGeneratedXml] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null);
  const [pages, setPages] = useState([]);
  const [filter, setFilter] = useState("");

  const load = () =>
    Promise.all([getSitemapSettings(), getSitemapPages()]).then(
      ([settings, pageRes]) => {
        if (settings?.success) {
          setMode(settings.mode);
          setXml(settings.xml);
          setGeneratedXml(settings.generatedXml);
        } else {
          setStatus({ ok: false, message: settings?.message || "Failed to load." });
        }
        if (pageRes?.success) setPages(pageRes.data);
        setLoaded(true);
      },
    );

  useEffect(() => {
    load();
  }, []);

  const save = async (nextMode) => {
    setBusy(true);
    setStatus(null);
    const res = await saveSitemapSettings({ mode: nextMode, xml });
    setBusy(false);
    if (res?.success) {
      setStatus({
        ok: true,
        message:
          nextMode === "auto"
            ? "Reset — /sitemap.xml is auto-generated again."
            : "Saved — /sitemap.xml now serves your custom XML.",
      });
      await load();
    } else {
      setStatus({ ok: false, message: res?.message || "Failed to save." });
    }
  };

  const toggleInclude = async (row) => {
    const include = !row.include;
    setPages((prev) =>
      prev.map((p) => (p.pageKey === row.pageKey ? { ...p, include } : p)),
    );
    const res = await setSitemapInclude(row.pageKey, include);
    if (!res?.success) {
      setPages((prev) =>
        prev.map((p) => (p.pageKey === row.pageKey ? { ...p, include: !include } : p)),
      );
      setStatus({ ok: false, message: res?.message || "Failed to update the page." });
    } else if (mode === "auto") {
      // Refresh the auto-generated preview to reflect the change.
      const fresh = await getSitemapSettings();
      if (fresh?.success) {
        setGeneratedXml(fresh.generatedXml);
        setXml(fresh.xml);
      }
    }
  };

  const visible = useMemo(() => {
    const q = filter.toLowerCase().trim();
    return pages.filter(
      (p) =>
        !q || p.label.toLowerCase().includes(q) || p.path.toLowerCase().includes(q),
    );
  }, [pages, filter]);

  const includedCount = pages.filter((p) => p.include && !p.noindex).length;

  return (
    <>
      <Card
        title="XML Sitemap"
        hint="The list of pages search engines are told about. Auto-generated from the site's pages, or fully hand-edited."
        badge={loaded && <Badge custom={mode === "custom"} />}
      >
        {!loaded ? (
          <p className="text-sm text-slate-400">Loading...</p>
        ) : (
          <div className="space-y-3">
            {mode === "custom" && (
              <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
                A custom sitemap is being served, so the include/exclude
                switches below don&apos;t affect it. Reset to auto-generated
                to use them again — new pages and blog posts won&apos;t be
                added to a custom sitemap automatically.
              </p>
            )}
            <textarea
              rows={18}
              spellCheck={false}
              className={textareaCls}
              value={xml}
              onChange={(e) => {
                setXml(e.target.value);
                setStatus(null);
              }}
            />
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className={primaryBtn}
                disabled={busy || !xml.trim() || (mode === "auto" && xml === generatedXml)}
                onClick={() => save("custom")}
              >
                {busy ? "Saving..." : "Save custom sitemap"}
              </button>
              <button
                type="button"
                className={ghostBtn}
                disabled={busy || mode === "auto"}
                onClick={() => {
                  if (window.confirm("Discard the custom XML and go back to the auto-generated sitemap?")) {
                    save("auto");
                  }
                }}
              >
                Reset to auto-generated
              </button>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-indigo-500"
              >
                View live file ↗
              </a>
              <Status state={status} />
            </div>
          </div>
        )}
      </Card>

      <Card
        title="Include / Exclude Pages"
        hint={`${includedCount} of ${pages.length} pages are in the auto-generated sitemap. Noindex pages are always excluded.`}
      >
        <input
          className="mb-3 w-full max-w-sm rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-400"
          placeholder="Search pages..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="max-h-[480px] overflow-auto rounded-lg border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead className="sticky top-0 bg-slate-50">
              <tr className="text-left text-xs text-slate-400">
                <th className="px-3 py-2">Page</th>
                <th className="px-3 py-2">URL</th>
                <th className="px-3 py-2 text-right">In sitemap</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((row) => (
                <tr key={row.pageKey} className="border-t border-slate-100">
                  <td className="px-3 py-2 text-slate-700">{row.label}</td>
                  <td className="px-3 py-2 font-mono text-xs text-slate-500">
                    {row.path}
                    {row.noindex && (
                      <span className="ml-2 rounded bg-amber-50 px-1.5 py-0.5 font-sans text-[10px] font-semibold text-amber-600">
                        noindex
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <input
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer accent-indigo-500"
                      checked={row.include && !row.noindex}
                      disabled={row.noindex}
                      onChange={() => toggleInclude(row)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

// Admin-only tab: site-wide robots.txt + XML sitemap editors, the
// include/exclude list, and the all-pages view of the Redirect Manager.
export default function DashboardSeoTools() {
  return (
    <div className="mt-6 space-y-6">
      <RobotsEditor />
      <SitemapEditor />
      <Card
        title="All Redirects"
        hint="Every 301 redirect on the site. The same manager is on each page's SEO settings."
      >
        <RedirectManager />
      </Card>
    </div>
  );
}
