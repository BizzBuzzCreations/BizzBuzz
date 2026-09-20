"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

// Real certifications only (same badges used on /our-team, /how-we-work,
// and in the footer) — auto-scrolling strip instead of a static row.
const CERTIFICATIONS = [
  { src: "/clutch.png", alt: "Clutch — Verified Partner", label: "Clutch", sub: "Verified Partner" },
  { src: "/CDL.png", alt: "Certified Google Ads Partner", label: "Google Partner", sub: "Certified" },
  { src: "/GA.png", alt: "Certified Google Analytics Partner", label: "Google Analytics", sub: "Certified" },
  { src: "/iso.png", alt: "ISO Certified", label: "ISO", sub: "Certified" },
];

export default function CertificationsCarousel() {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 4,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: "1.5rem",
        drag: "free",
        focus: "center",
        pauseOnHover: true,
        pauseOnFocus: false,
        autoWidth: false,

        autoScroll: {
          speed: 0.6,
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
        },

        breakpoints: {
          1024: { perPage: 3 },
          768: { perPage: 2 },
          480: { perPage: 1 },
        },
      }}
      extensions={{ AutoScroll }}
      className="max-w-5xl mx-auto"
    >
      {CERTIFICATIONS.map((cert) => (
        <SplideSlide key={cert.label} className="h-auto py-2">
          <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-white hover:shadow-xl hover:shadow-black/40">
            <span className="shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-[#eaf4fb]">
              <Image
                src={cert.src}
                alt={cert.alt}
                width={44}
                height={44}
                className="object-contain"
              />
            </span>
            <div>
              <p className="font-bold text-white transition-colors duration-300 group-hover:text-black">
                {cert.label}
              </p>
              <p className="text-sm text-white/50 transition-colors duration-300 group-hover:text-gray-600">
                {cert.sub}
              </p>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
