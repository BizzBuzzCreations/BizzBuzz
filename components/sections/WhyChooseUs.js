import React from "react";
import Image from "next/image";

// `dark` is opt-in — homepage keeps the original light theme, only pages
// that pass dark (About) get the black-background version.
export default function WhyChooseUs({ dark = false }) {
  return (
    <div className={`mx-10 flex flex-wrap justify-center gap-10 items-center px-5 mx-auto ${dark ? "bg-black py-20" : "mb-20"}`}>
      <Image
        src="/why-choose-image.png"
        alt="banner"
        width={400}
        height={400}
      />
      <div className="lg:text-left text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-10 max-w-2xl ${dark ? "text-white" : ""}`}>
          Why Businesses Continue Working With Us
        </h2>
        <div className="flex flex-wrap justify-content items-center max-w-2xl gap-3">
          <div
            className={`max-w-xs p-5 rounded-lg mx-auto border shadow-md ${
              dark
                ? "bg-white/5 border-white/10 shadow-black/40"
                : "bg-gray-200 border-gray-300 shadow-gray-400"
            }`}
          >
            <h3 className={`font-bold mb-2 ${dark ? "text-white" : ""}`}>Transparent Reporting</h3>
            <p className={`text-sm ${dark ? "text-white/60" : ""}`}>
              Know exactly where your marketing budget is invested with detailed reports and actionable insights.
            </p>
          </div>
          <div
            className={`max-w-xs p-5 rounded-lg mx-auto border shadow-md ${
              dark
                ? "bg-white/5 border-white/10 shadow-black/40"
                : "bg-gray-200 border-gray-300 shadow-gray-400"
            }`}
          >
            <h3 className={`font-bold mb-2 ${dark ? "text-white" : ""}`}>Dedicated Marketing Experts</h3>
            <p className={`text-sm ${dark ? "text-white/60" : ""}`}>
              Our team continuously monitors industry trends,
              and emerging technologies to keep your business ahead of competitors.
            </p>
          </div>
          <div
            className={`max-w-xs p-5 rounded-lg mx-auto border shadow-md ${
              dark
                ? "bg-white/5 border-white/10 shadow-black/40"
                : "bg-gray-200 border-gray-300 shadow-gray-400"
            }`}
          >
            <h3 className={`font-bold mb-2 ${dark ? "text-white" : ""}`}>Data-Driven Decision Making</h3>
            <p className={`text-sm ${dark ? "text-white/60" : ""}`}>
              Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions.
            </p>
          </div>
          <div
            className={`max-w-xs p-5 rounded-lg mx-auto border shadow-md ${
              dark
                ? "bg-white/5 border-white/10 shadow-black/40"
                : "bg-gray-200 border-gray-300 shadow-gray-400"
            }`}
          >
            <h3 className={`font-bold mb-2 ${dark ? "text-white" : ""}`}>Long-Term Partnership</h3>
            <p className={`text-sm ${dark ? "text-white/60" : ""}`}>
              We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
