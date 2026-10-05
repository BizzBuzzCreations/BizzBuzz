"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getRedirects,
  saveRedirect,
  setRedirectEnabled,
  deleteRedirect,
} from "@/actions/seoActions";
import { normalizePath } from "@/lib/seo";

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400";

// 301 Redirect Manager. With `pagePath`, shows (and defaults new
// redirects to point at) just that page; without it, lists every redirect
// on the site. Changes save immediately — they don't wait for the page's
// "Save Changes" button — and go live within ~20 seconds.
export default function RedirectManager({ pagePath = null }) {
  const [all, setAll] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState({ from: "", to: pagePath || "" });
  // id of the row being edited + its working values
  const [editing, setEditing] = useState(null);
  const [editDraft, setEditDraft] = useState({ from: "", to: "" });

  useEffect(() => {
    let cancelled = false;
    getRedirects().then((res) => {
      if (cancelled) return;
      if (res?.success) setAll(res.data);
      else setError(res?.message || "Failed to load redirects.");
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const rows = useMemo(() => {
    if (!all) return [];
    if (!pagePath) return all;
    const here = normalizePath(pagePath);
    return all.filter(
      (r) => r.from === here || normalizePath(r.to) === here,
    );
  }, [all, pagePath]);

  const upsertLocal = (row) =>
    setAll((prev) => {
      const list = prev || [];
      return list.some((r) => r.id === row.id)
        ? list.map((r) => (r.id === row.id ? row : r))
        : [row, ...list];
    });

  const handleAdd = async () => {
    setBusy(true);
    setError("");
    const res = await saveRedirect({ ...draft, enabled: true });
    setBusy(false);
    if (res?.success) {
      upsertLocal(res.data);
      setDraft({ from: "", to: pagePath || "" });
    } else {
      setError(res?.message || "Failed to add the redirect.");
    }
  };

  const handleToggle = async (row) => {
    setError("");
    const res = await setRedirectEnabled(row.id, !row.enabled);
    if (res?.success) upsertLocal(res.data);
    else setError(res?.message || "Failed to update the redirect.");
  };

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete the redirect ${row.from} → ${row.to}?`)) return;
    setError("");
    const res = await deleteRedirect(row.id);
    if (res?.success) setAll((prev) => prev.filter((r) => r.id !== row.id));
    else setError(res?.message || "Failed to delete the redirect.");
  };

  const handleSaveEdit = async (row) => {
    setBusy(true);
    setError("");
    const res = await saveRedirect({
      id: row.id,
      ...editDraft,
      enabled: row.enabled,
    });
    setBusy(false);
    if (res?.success) {
      upsertLocal(res.data);
      setEditing(null);
    } else {
      setError(res?.message || "Failed to save the redirect.");
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400">
        Permanent (301) redirects send visitors and search engines from an
        old URL to a new one. Use a path like <b>/old-page</b>; the new URL
        can also be a full https:// address. Changes save instantly and go
        live within about 20 seconds.
      </p>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto] sm:items-end">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
            Old URL
          </label>
          <input
            className={inputCls}
            placeholder="/old-page"
            value={draft.from}
            onChange={(e) => setDraft({ ...draft, from: e.target.value })}
          />
        </div>
        <span className="hidden pb-2 text-slate-400 sm:block">→</span>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
            New URL
          </label>
          <input
            className={inputCls}
            placeholder="/new-page"
            value={draft.to}
            onChange={(e) => setDraft({ ...draft, to: e.target.value })}
          />
        </div>
        <button
          type="button"
          onClick={handleAdd}
          disabled={busy || !draft.from.trim() || !draft.to.trim()}
          className="rounded-lg bg-linear-to-br from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
        >
          Add Redirect
        </button>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {all === null && !error ? (
        <p className="text-sm text-slate-400">Loading redirects...</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-slate-400">
          {pagePath
            ? "No redirects point to or from this page yet."
            : "No redirects yet."}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs text-slate-400">
                <th className="px-3 py-2">Old URL</th>
                <th className="px-3 py-2">New URL</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-slate-50 last:border-0">
                  {editing === row.id ? (
                    <>
                      <td className="px-3 py-2">
                        <input
                          className={inputCls}
                          value={editDraft.from}
                          onChange={(e) =>
                            setEditDraft({ ...editDraft, from: e.target.value })
                          }
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          className={inputCls}
                          value={editDraft.to}
                          onChange={(e) =>
                            setEditDraft({ ...editDraft, to: e.target.value })
                          }
                        />
                      </td>
                      <td className="px-3 py-2 text-slate-400">301</td>
                      <td className="px-3 py-2">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => handleSaveEdit(row)}
                            className="rounded-md bg-indigo-50 px-3 py-1 text-indigo-600 disabled:opacity-50"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditing(null)}
                            className="rounded-md bg-slate-100 px-3 py-1 text-slate-600"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-3 py-2 font-mono text-xs text-slate-700">
                        {row.from}
                      </td>
                      <td className="px-3 py-2 font-mono text-xs text-slate-700">
                        {row.to}
                      </td>
                      <td className="px-3 py-2">
                        <button
                          type="button"
                          onClick={() => handleToggle(row)}
                          className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                            row.enabled
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-slate-100 text-slate-400"
                          }`}
                          title="Click to enable / disable"
                        >
                          {row.enabled ? "301 · Enabled" : "Disabled"}
                        </button>
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setEditing(row.id);
                              setEditDraft({ from: row.from, to: row.to });
                            }}
                            className="rounded-md bg-indigo-50 px-3 py-1 text-indigo-600"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(row)}
                            className="rounded-md bg-red-50 px-3 py-1 text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
