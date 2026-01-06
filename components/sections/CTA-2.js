import React from "react";

export default function CTA2() {
  return (
    <div className="px-5">
      <div
        className="rounded-3xl mb-20 shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
        style={{
          background: "#000000",
          backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="py-5 sm:px-10 px-5 z-10 text-white mb-10 relative h-full">
          <h2 className="md:text-2xl text-xl max-w-2xl font-bold mb-10">
            LOOKING FOR THE BEST DIGITAL MARKETING AGENCY IN PRAYAGRAJ TO BOOST
            YOUR REVENUE?
          </h2>
          <div className="bg-white rounded-3xl absolute bottom-0 left-0 p-1">
            <button className="px-4 py-2 me-2 sm:inline hidden bg-white text-black font-bold border border-gray-400 cursor-pointer rounded-full transform hover:scale-95 transition">
              Get Free Marketing Audit
            </button>
            <button className="px-6 py-2 bg-black text-white font-bold border cursor-pointer rounded-full transform hover:scale-95 transition">
              Talk to Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
