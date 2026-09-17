"use client";
import { useState } from "react";
import RichText from "@/components/ui/richText";

// A card whose highlighted "hover" look (border/background color swap)
// also toggles on tap — touch devices have no :hover, so on mobile these
// cards used to just sit there, never visibly reacting to anything.
// `icon` is a rendered element (e.g. <Icon size={20} />), not the icon
// component itself, since this is a "use client" component and a Server
// Component can't pass a component/function reference across that
// boundary — only an already-rendered element.
export default function HighlightCard({ icon, title, desc }) {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setActive((a) => !a)}
      aria-pressed={active}
      className={`group w-full text-left rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20 ${
        active
          ? "-translate-y-1.5 border-[#40A2D8]/50 bg-[#0B60B0] shadow-xl shadow-[#0B60B0]/20"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <span
        className={`flex items-center justify-center w-11 h-11 rounded-xl mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0] ${
          active ? "bg-white text-[#0B60B0]" : "bg-white/10 text-[#40A2D8]"
        }`}
      >
        {icon}
      </span>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      {/* noLink — this card is a <button>; a nested <a> inside a <button>
          is invalid HTML (interactive content inside interactive
          content), so links are stripped here while bold still works. */}
      <RichText
        text={desc}
        noLink
        className={`text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/85 ${
          active ? "text-white/85" : "text-white/60"
        }`}
      />
    </button>
  );
}
