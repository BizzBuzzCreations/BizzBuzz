import React from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="mx-10 flex flex-wrap justify-center gap-10 items-center px-5 mx-auto mb-20">
      <Image
        src="/why-choose-image.png"
        alt="banner"
        width={400}
        height={400}
      />
      <div className="lg:text-left text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-2xl">
          Why Businesses Continue Working With Us
        </h2>
        <div className="flex flex-wrap justify-content items-center max-w-2xl gap-3">
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg mx-auto border border-gray-300 shadow-md shadow-gray-400">
            <h3 className="font-bold mb-2">Transparent Reporting</h3>
            <p className="text-sm">
              Know exactly where your marketing budget is invested with detailed reports and actionable insights.
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg mx-auto border border-gray-300 shadow-md shadow-gray-400">
            <h3 className="font-bold mb-2">Dedicated Marketing Experts</h3>
            <p className="text-sm">
              Our team continuously monitors industry trends, 
              and emerging technologies to keep your business ahead of competitors.
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg mx-auto border border-gray-300 shadow-md shadow-gray-400">
            <h3 className="font-bold mb-2">Data-Driven Decision Making</h3>
            <p className="text-sm">
              Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions.
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg mx-auto border border-gray-300 shadow-md shadow-gray-400">
            <h3 className="font-bold mb-2">Long-Term Partnership</h3>
            <p className="text-sm">
              We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
