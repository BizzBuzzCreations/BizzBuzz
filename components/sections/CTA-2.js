"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import React from "react";

export default function CTA2() {
  const params = usePathname();

  return (
    <div className="px-5">
      <div className="rounded-3xl mb-20 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container shadow-lg shadow-gray-600">
        <div
          className="relative overflow-hidden py-8 sm:px-10 px-5 z-10 text-white rounded-3xl flex flex-col items-center text-center"
          style={{
            background:
              "linear-gradient(135deg, rgb(86, 167, 229) 0%, rgb(4, 99, 219) 100%)",
            border: "3px solid rgb(4, 99, 219)",
          }}
        >
          <h2 className="uppercase md:text-2xl text-lg max-w-4xl font-extrabold mb-5 tracking-tight">
            LOOKING FOR A DIGITAL GROWTH PARTNER IN PRAYAGRAJ TO SCALE YOUR BUSINESS? 
          </h2>

          <div className="flex-wrap items-center justify-center sm:gap-3 bg-white rounded-3xl p-1 inline-flex mx-auto">
            <Link href={`${params}#CTA`}>
              <button className="px-4 py-2 sm:inline hidden bg-white text-black font-bold border border-gray-400 cursor-pointer rounded-full transform hover:scale-95 transition">
                Get Free Consultancy Now
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-6 py-2 bg-black text-white font-bold border cursor-pointer rounded-full transform hover:scale-95 transition">
                Talk to Experts
              </button>
            </Link>
          </div>

          <Sparkles
            className="hidden sm:block absolute bottom-4 right-6 text-white/60"
            size={26}
          />
        </div>
      </div>
    </div>
  );
}
