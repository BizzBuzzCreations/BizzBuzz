"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import RichText from "@/components/ui/richText";

// One self-contained flip card: measures its own front/back face heights
// so the outer wrapper's height can animate to whichever face is current,
// in step with the rotation — instead of the grid row always reserving
// space for the taller (back) face, which used to leave a big gap under
// every collapsed card.
function FlipCard({ number, title, desc, ctaText, services }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      const front = frontRef.current?.offsetHeight || 0;
      const back = backRef.current?.offsetHeight || 0;
      setHeight(open ? back : front);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open]);

  return (
    <div className="[perspective:1500px]">
      <div
        className="relative grid [transform-style:preserve-3d] transition-[height,transform] duration-700 ease-out"
        style={{
          height: height ? `${height}px` : "auto",
          transform: open ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front — overview. The whole card is the click target (not
            just the "Know Our Services" line). */}
        <div
          ref={frontRef}
          onClick={() => setOpen(true)}
          className="[grid-area:1/1] self-start [backface-visibility:hidden] rounded-2xl p-6 border border-white/10 bg-white/[0.03] cursor-pointer"
        >
          <p className="text-xs font-bold text-[#40A2D8] mb-2">{number}</p>
          {/* min-h sized for 2 lines each, same fix as the non-flip
              variant below — each card's height here is independently
              measured via `frontRef.current.offsetHeight` (not a shared
              CSS grid row), so a shorter title/description naturally
              measured shorter than a longer one, making the cards look
              uneven. This gives every card's front face the same
              baseline height regardless of how much text it holds. */}
          <h3 className="font-bold text-lg text-white mb-3 min-h-[3.5rem]">{title}</h3>
          <RichText as="p" text={desc} className="text-sm leading-relaxed text-white/60 mb-5 min-h-[2.75rem]" />
          <span
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8]"
          >
            {ctaText || "Know Our Services"}
            <ChevronDown size={16} />
          </span>
        </div>

        {/* Back — service-tag list, flipped 180deg so it reads correctly
            once the card itself rotates into view */}
        <div
          ref={backRef}
          onClick={() => setOpen(false)}
          className="[grid-area:1/1] self-start [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl p-6 border border-[#40A2D8]/40 bg-[#0B60B0]/10 cursor-pointer"
        >
          <h3 className="font-bold text-lg text-white mb-4">{title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
            {services.map((service) => (
              <span
                key={service}
                className="flex items-center justify-center text-center min-h-[52px] text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg px-3 py-2 leading-snug transition-colors duration-200 hover:bg-[#0B60B0] hover:border-[#0B60B0] hover:text-white cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8]">
            <ArrowLeft size={16} />
            Back to Overview
          </span>
        </div>
      </div>
    </div>
  );
}

// Each card starts collapsed showing just the title + description. Clicking
// "Know Our Services" expands that one card to reveal its full service-tag
// list below — the card grows to fit, the rest of the grid is untouched.
//
// When `flip` is true (currently only the Healthcare industry page), the
// same click instead 3D-flips the whole card over to reveal the service
// list on its back face, rather than expanding downward.
export default function ServiceBreakdownGrid({ items, flip = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (flip) {
    return (
      // data-no-reveal: opts every flip card out of the site-wide
      // ScrollReveal effect (components/sections/scrollReveal.js). That
      // effect animates opacity/transform on scroll-into-view, which
      // conflicts with each card's own perspective/backface-visibility
      // 3D transform and briefly renders the front and back faces
      // overlapping (visible as doubled, overlapping text) until the
      // reveal transition settles.
      <div
        data-no-reveal
        className="grid sm:grid-cols-2 gap-x-5 gap-y-3 items-start"
      >
        {items.map((item) => (
          <FlipCard key={item.title} {...item} />
        ))}
      </div>
    );
  }

  return (
    // items-start so expanding one card's height doesn't stretch its
    // grid-row neighbor to match — without it, CSS grid defaults to
    // stretching every item in a row to the tallest one, making the card
    // next to an opened one look like it silently changed too.
    <div className="grid sm:grid-cols-2 gap-5 items-start">
      {items.map(({ number, title, desc, ctaText, services }, i) => {
        const open = openIndex === i;
        return (
          <div
            key={title}
            className="rounded-2xl p-6 border border-white/10 bg-white/[0.03] transition-colors duration-300"
          >
            <p className="text-xs font-bold text-[#40A2D8] mb-2">{number}</p>
            {/* min-h sized for 2 lines each — with `items-start` above
                keeping an opened card from stretching its row neighbor,
                the collapsed cards had nothing else forcing them to match
                each other's height, so a 1-line title/description ended
                up visibly shorter than a 2-line one. This gives every
                collapsed card the same footprint regardless of how much
                its title/desc actually wraps. */}
            <h3 className="font-bold text-lg text-white mb-3 min-h-[3.5rem]">{title}</h3>
            <RichText as="p" text={desc} className="text-sm leading-relaxed text-white/60 mb-5 min-h-[2.75rem]" />
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8] hover:text-white transition-colors duration-200"
            >
              {ctaText || "Know Our Services"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              // 4-across structured grid (4 on top, 4 below, 4 below
              // that for a 12-service list) instead of loose flex-wrap
              // pills, so the tags line up in even rows.
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5 pt-5 border-t border-white/10">
                {services.map((service) => (
                  <span
                    key={service}
                    className="flex items-center justify-center text-center min-h-[52px] text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg px-3 py-2 leading-snug transition-colors duration-200 hover:bg-[#0B60B0] hover:border-[#0B60B0] hover:text-white cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
