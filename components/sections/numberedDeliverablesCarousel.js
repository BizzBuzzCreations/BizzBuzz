"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import RichText from "@/components/ui/richText";

// Continuously auto-scrolling (left to right) numbered-card carousel —
// same Splide + AutoScroll setup already used for the onboarding steps
// carousel, reused here so "What You Get" reads as a flowing strip
// instead of a static grid.
export default function NumberedDeliverablesCarousel({ items }) {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 4,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: "1.25rem",
        drag: "free",
        focus: "center",
        pauseOnHover: true,
        pauseOnFocus: false,
        autoWidth: false,

        autoScroll: {
          speed: 0.7,
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
        },

        breakpoints: {
          1024: { perPage: 3 },
          768: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}
      extensions={{ AutoScroll }}
      className="max-w-6xl mx-auto"
    >
      {items.map(({ number, title, desc }) => (
        <SplideSlide key={number} className="h-auto py-2">
          <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40">
            <p className="text-2xl font-bold text-[#40A2D8] mb-3">{number}</p>
            <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
            <RichText as="p" text={desc} className="text-sm text-white/60 leading-relaxed" />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
