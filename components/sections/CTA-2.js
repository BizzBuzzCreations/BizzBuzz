"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function CTA2() {
  const params = usePathname();

  return (
    <div className="px-5">
      <div className="rounded-3xl mb-20 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container shadow-lg shadow-gray-600">
        <div
          className="py-5 sm:px-10 px-5 z-10 text-white mb-10 relative rounded-3xl"
          style={{
            background:
              "radial-gradient(circle, rgb(86, 167, 229) 0%, rgb(4, 99, 219) 70%)",
            border: "3px solid rgb(4, 99, 219)",
          }}
        >
          <h2 className="md:text-2xl text-xl max-w-2xl font-bold mb-6">
            LOOKING FOR THE BEST DIGITAL MARKETING STRATEGIST IN PRAYAGRAJ TO BOOST
            YOUR REVENUE?
          </h2>

          <div className="flex-wrap items-center sm:gap-3 bg-white rounded-3xl p-1 inline-flex">
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
        </div>
      </div>
    </div>
  );
}
