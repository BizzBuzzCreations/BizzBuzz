"use client";
import { useState } from "react";
import RichText from "@/components/ui/richText";

// One card in the "Built for Every Corner of X" capabilities grid, used by
// both industryDetailPage.js (all 15 industry pages) and serviceDetailPage.js
// (all sub-service pages). When hoverReveal is on, the description used to
// only appear on :hover — which touch/mobile devices can never trigger, so
// mobile visitors could see the title but never the description. Now the
// whole card is a button: tapping it toggles the description open/closed
// (state per-card), while desktop keeps the original hover-to-reveal
// behavior untouched (hover still works even without tapping first).
//
// `icon` is a rendered element (e.g. <CapIcon size={20} />), not the icon
// component itself — a Server Component can't pass a component/function
// reference as a prop across into a "use client" component (React can't
// serialize it), but an already-rendered element is fine.
export default function CapabilityCard({ icon, title, desc, hoverReveal }) {
  const [open, setOpen] = useState(false);

  if (!hoverReveal) {
    return (
      <div className="group rounded-2xl p-6 border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20">
        <span className="flex items-center justify-center w-11 h-11 rounded-xl mb-4 bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
          {icon}
        </span>
        <h3 className="font-bold text-white mb-2">{title}</h3>
        <RichText
          as="p"
          text={desc}
          className="text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/85"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className={`group w-full text-left rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20 ${
        open
          ? "-translate-y-1.5 border-[#40A2D8]/50 bg-[#0B60B0] shadow-xl shadow-[#0B60B0]/20"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <span
        className={`flex items-center justify-center w-11 h-11 rounded-xl mb-4 transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0] ${
          open ? "bg-white text-[#0B60B0]" : "bg-white/10 text-[#40A2D8]"
        }`}
      >
        {icon}
      </span>
      <h3 className="font-bold text-white min-h-[3rem]">{title}</h3>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        {/* noLink — this card is a <button>; a nested <a> inside a
            <button> is invalid HTML, so links are stripped here while
            bold still works. */}
        <RichText
          text={desc}
          noLink
          className={`overflow-hidden text-sm leading-relaxed pt-2 transition-colors duration-300 group-hover:text-white/85 ${
            open ? "text-white/85" : "text-white/60"
          }`}
        />
      </div>
    </button>
  );
}
