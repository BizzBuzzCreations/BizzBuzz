import React from "react";
import Link from "next/link";

const steps = [
  {
    title: "Free Consultation & Business Audit",
    description:
      "We study your business, competitors, and current online presence to spot quick wins and growth gaps.",
  },
  {
    title: "Custom Strategy Design",
    description:
      "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget.",
  },
  {
    title: "Campaign Execution",
    description:
      "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics.",
  },
  {
    title: "Reporting & Continuous Optimization",
    description:
      "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding.",
  },
];

export default function WhatMAkesUs() {
  return (
    <div className="container py-20 mx-auto p-4 flex flex-col justify-center gap-5 items-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 max-w-4xl">
          Our Process
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          <b>A Proven Framework for Measurable Digital Growth.</b>
        </p>
      </div>

      <div className="relative w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
        <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#0766ad]/40"></div>

        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative z-10 flex flex-col items-center text-center px-2"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 bg-linear-to-br from-[#0766ad] to-[#29adb2] shadow-md">
              {index + 1}
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <Link href="/contact" className="inline-block mt-10">
        <button
          className="animated-button mx-auto"
          style={{ backgroundColor: "#0766ad" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Book Your Free Audit</span>
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
    </div>
  );
}
