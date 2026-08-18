"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ShuffleGrid } from "@/components/ui/shuffle-grid";

const reveal = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const GRID_IMAGES = [
  { id: 1, src: "/image-1.jpg" },
  { id: 2, src: "/image-2.jpg" },
  { id: 3, src: "/image-3.jpg" },
  { id: 4, src: "/image-4.webp" },
  { id: 5, src: "/image-5.webp" },
  { id: 6, src: "/image-6.jpg" },
  { id: 7, src: "/image-7.jpg" },
  { id: 8, src: "/image-8.jpg" },
  { id: 9, src: "/image-9.jpg" },
];

export default function AboutHero() {
  return (
    <div
      className="min-h-[90vh] pt-44 md:pt-[272px] -mt-14 md:-mt-[72px] lg:text-left text-center text-white gap-10 flex 2xl:px-15 px-5 lg:flex-row flex-col justify-center items-center bg-gray-100 pb-30"
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
          Digital Marketing Agency in India — Bizzbuzz Creations
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.15 }}
          className="md:text-3xl xl:text-2xl text-xl font-bold mb-4"
        >
          Turning Bold Ideas Into Digital Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.3 }}
          className="max-w-xl mb-10"
        >
          We don't just run campaigns — we build brands that people remember, trust, and search for. From strategy to execution,
          Bizzbuzz Creations helps Indian businesses grow online with data-driven digital marketing solutions designed for real results in 2026 and beyond.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.45 }}
          className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>90+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>50+ Happy Clients Across India</span>
          </div>
        </motion.div>
        <br></br>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.6 }}
        >
          <Link href="/contact" className="inline-block">
            <button className="animated-button mx-auto">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Free Audit</span>
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
        <ShuffleGrid images={GRID_IMAGES} className="h-[420px] md:h-[620px]" />
      </motion.div>
    </div>
  );
}
