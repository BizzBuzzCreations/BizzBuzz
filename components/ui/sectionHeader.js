"use client";

// Title row for a dashboard content section, with a Remove / Restore
// button. "Removed" sections stay in the editor (greyed, collapsed) and
// keep their content, but are left off the live page.
export default function SectionHeader({ title, removable, removed, onToggle }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <h3
        className={`text-sm font-bold ${
          removed ? "text-slate-400 line-through" : "text-slate-800"
        }`}
      >
        {title}
      </h3>
      <div className="flex items-center gap-2">
        {removed && (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
            Removed from the live page
          </span>
        )}
        {removable && (
          <button
            type="button"
            onClick={() => {
              if (
                removed ||
                window.confirm(
                  `Remove "${title}" from the live page? Its content is kept — you can restore it any time. (Click Save Changes to apply.)`,
                )
              ) {
                onToggle();
              }
            }}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
              removed
                ? "border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50"
                : "border-red-200 bg-white text-red-600 hover:bg-red-50"
            }`}
          >
            {removed ? "Restore section" : "Remove section"}
          </button>
        )}
      </div>
    </div>
  );
}
