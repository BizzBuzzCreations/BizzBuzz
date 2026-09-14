"use client";

import { useEffect, useState } from "react";
import {
  getMediaLibrary,
  uploadMediaLibraryAsset,
  deleteMediaLibraryAsset,
} from "@/actions/mediaLibraryActions";

// Shared across all 4 content dashboard tabs (Website Content, Industries,
// Services, Sub-Services) — a single button that opens a reusable media
// pool, separate from any one page's fields. Files uploaded here save
// straight to the project's Cloudinary media folder and show up in this
// grid immediately (prepended, no re-fetch needed), so nothing ever sits
// blank waiting for a reload.
export default function MediaLibraryButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
      >
        Media Library
      </button>
      {open && <MediaLibraryModal onClose={() => setOpen(false)} />}
    </>
  );
}

function MediaLibraryModal({ onClose }) {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getMediaLibrary().then((data) => {
      if (!cancelled) {
        setAssets(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await uploadMediaLibraryAsset(formData);
      if (res?.success) {
        // Prepend the real returned asset — visible immediately, and
        // every file already in the grid stays exactly as it was.
        setAssets((prev) => [res.asset, ...prev]);
      } else {
        alert(res?.message || "Upload failed.");
      }
    } catch (err) {
      console.error("Media library upload failed:", err);
      alert("Upload failed. The file may be too large.");
    } finally {
      setUploading(false);
    }
  };

  const handleCopy = async (url, id) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      // Clipboard API can be unavailable (older browsers, non-HTTPS) —
      // fall back to a manual copy prompt instead of silently failing.
      window.prompt("Copy this URL:", url);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Remove this file from the media library?")) return;
    const prevAssets = assets;
    setAssets((list) => list.filter((a) => a.id !== id));
    const res = await deleteMediaLibraryAsset(id);
    if (!res?.success) {
      alert(res?.message || "Failed to delete.");
      setAssets(prevAssets);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">Media Library</h2>
            <p className="text-xs text-slate-400">
              Upload images/videos here to reuse anywhere — saved directly
              to the project&apos;s media folder, separate from any single
              page&apos;s fields.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        <label className="mb-5 flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-slate-200 py-6 text-sm font-medium text-slate-500 hover:border-slate-300 hover:bg-slate-50">
          {uploading ? "Uploading..." : "+ Upload New File"}
          <input
            type="file"
            accept="image/*,video/*"
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              handleUpload(file);
            }}
          />
        </label>

        {loading ? (
          <p className="text-sm text-slate-400">Loading media...</p>
        ) : assets.length === 0 ? (
          <p className="text-sm text-slate-400">No files uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {assets.map((asset) => (
              <div
                key={asset.id}
                className="group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
              >
                {asset.resourceType === "video" ? (
                  <video
                    src={asset.url}
                    muted
                    className="aspect-square w-full object-cover"
                  />
                ) : (
                  // Cloudinary URLs — plain <img> avoids configuring
                  // next/image for arbitrary remote hosts just for this
                  // admin-only preview grid.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={asset.url}
                    alt=""
                    className="aspect-square w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => handleCopy(asset.url, asset.id)}
                    className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {copiedId === asset.id ? "Copied!" : "Copy URL"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(asset.id)}
                    className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
