"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

const reveal = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

// Module-scoped (not React state, not sessionStorage): stays true across
// client-side route changes within the same page load, but resets to false
// on every real navigation/reload — exactly the "once per site visit" rule
// we want, since sessionStorage/localStorage would survive a reload too.
let introHasPlayed = false;

export default function HomeHero() {
  const [introDone, setIntroDone] = useState(introHasPlayed);
  const [showOverlay, setShowOverlay] = useState(!introHasPlayed);

  const handleIntroComplete = () => {
    introHasPlayed = true;
    setIntroDone(true);
  };

  return (
    <>
      {showOverlay && (
        <div
          className={`fixed inset-0 z-100 bg-black transition-opacity duration-700 ease-out ${
            introDone ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onTransitionEnd={() => introDone && setShowOverlay(false)}
        >
          <SpiralAnimation duration={2.4} onComplete={handleIntroComplete} />
        </div>
      )}

      <div
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
        }}
        className="relative overflow-hidden min-h-[90vh] md:pt-50 pt-30 text-center text-white flex 2xl:px-15 px-5 flex-col justify-center items-center pb-30 mb-10"
      >
        <div className="h-full flex items-center justify-center">
          <div className="z-10 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={reveal}
              className="md:text-3xl xl:text-4xl text-xl font-bold mb-4"
            >
              India’s Trusted Digital Marketing Agency
            </motion.h1>
            <motion.svg
              initial={{ opacity: 0, y: 24 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ ...reveal, delay: 0.15 }}
              className={introDone ? "animated-text" : ""}
              viewBox="0 0 1320 300"
            >
              <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                BizzBuzz Creations
              </text>
            </motion.svg>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ ...reveal, delay: 0.3 }}
              className="max-w-3xl mb-10 mx-auto"
            >
              Looking for a trusted digital marketing agency in Prayagraj that helps
              your business generate more leads,
              increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ ...reveal, delay: 0.45 }}
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
                  <span className="text">Get Free Consultation</span>
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
      </div>
    </>
  );
}
