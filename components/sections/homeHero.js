"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { RICH_TEXT_CLASS, richTextHTML, richTextScopeClass } from "@/components/ui/richText";

const reveal = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function HomeHero({ content }) {
  const heading = content?.heroHeading || "India’s Trusted Digital Marketing Agency";
  const subheading =
    content?.heroSubheading || "Turn Clicks Into Customers With Data-Driven Digital Marketing";
  const subtext =
    content?.heroSubtext ||
    "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.";
  const ctaText = content?.heroCtaText || "Get Free Consultation";

  return (
    <>
      <div className="relative overflow-hidden min-h-screen text-white flex flex-col justify-center pb-30 -mt-14 pt-14 md:-mt-[72px] md:pt-[72px] bg-black">
        {/* Background video — desktop/tablet only. On mobile there's no
            room for a full-bleed video behind the text without it either
            looking cramped or getting cropped oddly, so mobile gets a
            plain black background instead (below) rather than a second,
            duplicate download of the same large file.

            preload="metadata" (not "auto", and no forced <link rel=preload>
            hint) — this file is a large, uncompressed source (~13MB); auto/
            preload forced the browser to fetch and prioritize the whole
            thing ahead of the rest of the page on every visit, which is
            exactly the kind of thing that reads as the site "lagging" on
            first load. autoPlay still starts it as soon as enough has
            buffered — it just no longer competes for bandwidth with
            everything else at the very top of the load. No poster image on
            the desktop video — a poster always flashes up front (that's
            what a poster is: shown immediately, then swapped out once the
            video has a decoded frame ready), which read as a jarring
            photo-then-video glitch. Dropping it leaves a plain black frame
            for that instant instead, which blends straight into the
            section's own dark scrim/background. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hidden md:block absolute inset-0 w-full h-full object-cover bg-black"
        >
          <source src="/hero-sec.webm" type="video/webm" />
          <source src="/Sequence 01 1.mp4" type="video/mp4" />
        </video>

        {/* Dark scrim so text stays readable over any video/image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(120, 180, 255, 0.25), transparent 70%), linear-gradient(to right, rgba(0,0,0,0.88) 35%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        <div className="relative z-10 2xl:px-20 px-5 md:pt-20 pt-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reveal}
            className="md:text-3xl xl:text-4xl text-xl font-bold mb-4"
          >
            {heading}
          </motion.h1>
          <motion.svg
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.15 }}
            className="animated-text"
            viewBox="0 0 1320 220"
          >
            <text x="0" y="50%" dy=".35em" textAnchor="start">
              BizzBuzz Creations
            </text>
          </motion.svg>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.22 }}
            className="text-lg md:text-xl font-semibold text-white/90 mt-4 mb-4"
          >
            {subheading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.3 }}
            className={`max-w-xl mb-10 ${RICH_TEXT_CLASS} ${richTextScopeClass(subtext)}`}
            dangerouslySetInnerHTML={richTextHTML(subtext)}
          />

          {/* Mobile-only — the same background video, but as its own
              contained box between the paragraph and the CTA button,
              instead of playing full-bleed behind the text.
              preload="metadata" (was "auto") — on mobile, the most
              bandwidth- and data-plan-constrained visitors, forcing this
              large file to fully buffer was the single biggest thing
              standing between "page interactive" and everything else. */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.38 }}
            className="md:hidden relative w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-xl mb-8"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover bg-black"
            >
              <source src="/hero-sec.webm" type="video/webm" />
              <source src="/Sequence 01 1.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.45 }}
          >
            <Link href="/contact" className="inline-block">
              <button className="animated-button animated-button-lg whitespace-nowrap">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">{ctaText}</span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
