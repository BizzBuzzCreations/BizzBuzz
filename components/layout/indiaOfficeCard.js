"use client";

import React, { useState } from "react";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

// Emoji flags render as plain letters on some systems (common on Windows),
// so the flag is drawn as an inline SVG, same as the footer's UK flag.
function IndiaFlag() {
  return (
    <svg
      viewBox="0 0 60 40"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="60" height="13.3" fill="#FF9933" />
      <rect width="60" height="13.4" y="13.3" fill="#FFFFFF" />
      <rect width="60" height="13.3" y="26.7" fill="#138808" />
      <circle
        cx="30"
        cy="20"
        r="5"
        fill="none"
        stroke="#000080"
        strokeWidth="1"
      />
      <circle cx="30" cy="20" r="1" fill="#000080" />
    </svg>
  );
}

// Headquarters first — the card opens on it, the right arrow reveals the rest.
const INDIA_OFFICES = [
  {
    tag: "Headquarters",
    address: (
      <>
        43/33, Tej Bahdur Sapru Rd,
        <br />
        Agnipath Colony, Civil Lines,
        <br />
        Prayagraj, Uttar Pradesh 211001
      </>
    ),
  },
  {
    tag: null,
    address: (
      <>
        Plot no. 218, Harjindar Nagar,
        <br />
        Lal Bangla, J K Puri,
        <br />
        Kanpur, UP 208007
      </>
    ),
  },
];

export default function IndiaOfficeCard() {
  const [index, setIndex] = useState(0);
  const last = INDIA_OFFICES.length - 1;

  return (
    <div className="relative block rounded-2xl border border-white/15 bg-white/[0.03] p-5 hover:border-[#40A2D8]/50 hover:bg-white/[0.05] transition-colors">
      {/* Arrows sit in the header row (top-right) so the card is no taller
          than the UK card next to it. */}
      <div className="absolute top-5 right-5 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          aria-label="Previous address"
          className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#40A2D8] hover:bg-white/5 transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft size={14} />
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(i + 1, last))}
          disabled={index === last}
          aria-label="Next address"
          className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-[#40A2D8] hover:bg-white/5 transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      {/* All slides share one grid cell so the card keeps the height of the
          tallest address and doesn't jump when switching. */}
      <div className="grid">
        {INDIA_OFFICES.map(({ tag, address }, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className={`[grid-area:1/1] transition-opacity duration-300 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-3 mb-3 pr-20">
              <span className="w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-white/20">
                <IndiaFlag />
              </span>
              <span className="font-semibold text-white text-base">
                India
                {tag && (
                  <>
                    <span className="mx-2 text-white/40">|</span>
                    <span className="font-medium text-[#8fd0f2]">({tag})</span>
                  </>
                )}
              </span>
            </div>
            <p className="text-sm text-[#8fd0f2] leading-relaxed flex gap-2.5">
              <MapPin size={16} className="shrink-0 mt-0.5 text-[#40A2D8]" />
              <span>{address}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
