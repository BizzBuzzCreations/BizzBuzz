"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ShuffleGrid } from "@/components/ui/shuffle-grid";
import { RICH_TEXT_CLASS, richTextHTML, richTextScopeClass } from "@/components/ui/richText";

const reveal = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const DEFAULT_GRID_IMAGES = [
  { id: 1, src: "/team-images/team-11.jpeg" },
  { id: 2, src: "/team-images/team-6.jpeg" },
  { id: 3, src: "/team-images/team-1.jpeg" },
  { id: 4, src: "/image-3.jpg" },
  { id: 5, src: "/image-5.webp" },
  { id: 6, src: "/image-9.jpg" },
  { id: 7, src: "/team-images/team-12.jpeg" },
  { id: 8, src: "/team-images/team-7.jpeg" },
  { id: 9, src: "/team-images/team-14.jpeg" },
];

export default function AboutHero({ content }) {
  const heading = content?.aboutHeroHeading || "India’s Digital Marketing Agency, Trusted Worldwide";
  const subheading = content?.aboutHeroSubheading || "Systems first. Campaigns second.";
  const paragraph =
    content?.aboutHeroParagraph ||
    "Built and based in India, BizzBuzz Creations helps businesses across India and worldwide grow through data-driven strategy, design, and technology, not just ads.";
  const stat1 = content?.aboutHeroStat1 || "Data-Driven Strategy, Not Guesswork";
  const stat2 = content?.aboutHeroStat2 || "Serving Businesses Across India & Worldwide";
  const buttonText = content?.aboutHeroButtonText || "Build Your Digital Growth Strategy";
  const gridImages =
    content?.aboutHeroImages?.length > 0
      ? content.aboutHeroImages.map((item, i) => ({ id: i + 1, src: item.src }))
      : DEFAULT_GRID_IMAGES;

  return (
    <div
      className="min-h-screen pt-10 md:pt-32 md:-mt-[72px] lg:text-left text-center text-white gap-10 flex 2xl:px-15 px-5 lg:flex-row flex-col justify-center items-center bg-gray-100 pb-12 md:pb-20"
      style={{
        background: "radial-gradient(circle at top, #1c1c1c, #000000)",
      }}
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reveal}
          className="md:text-3xl xl:text-4xl text-xl font-bold mb-4"
        >
          {heading}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.15 }}
          className="md:text-3xl xl:text-2xl text-xl font-bold mb-4"
        >
          {subheading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.3 }}
          className={`max-w-xl mb-10 ${RICH_TEXT_CLASS} ${richTextScopeClass(paragraph)}`}
          dangerouslySetInnerHTML={richTextHTML(paragraph)}
        />
        {/* flex-col + text-left on mobile: the two stats can each wrap to
            2 lines, and with items-center + inherited text-center from
            the hero root, the checkmark ended up vertically centered
            against a centered (ragged) text block — pinned to the left
            edge of a box whose second line drifted toward the middle,
            reading as a disconnected, floating icon. items-start +
            explicit text-left keeps the icon level with the first line,
            same as the FAQ accordion fix. Row layout returns at sm/lg. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.45 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-start sm:items-center gap-x-6 gap-y-3 text-left"
        >
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
            <span>{stat1}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
            <span>{stat2}</span>
          </div>
        </motion.div>
        <br></br>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.6 }}
        >
          <Link href="/services" className="inline-block mx-auto lg:mx-0">
            {/* animated-button-lg: the default circle-reveal only grows to
                220px, which doesn't reach the edges of a button this wide
                — leaving the outer text sitting on the still-dark
                background while the middle sits on white, which is what
                was showing up as garbled/illegible text on hover. The
                -lg variant grows the circle to 700px, comfortably
                covering the whole button regardless of text length. */}
            <button className="animated-button animated-button-lg whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{buttonText}</span>
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
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...reveal, delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        <ShuffleGrid images={gridImages} className="h-[420px] md:h-[620px]" />
      </motion.div>
    </div>
  );
}
