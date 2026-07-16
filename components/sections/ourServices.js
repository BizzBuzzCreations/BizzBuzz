import React from "react";
import Link from "next/link";
import {
  MoveRight,
  Rocket,
  ChartLine,
  Code,
  Video,
  Target,
  Palette,
} from "lucide-react";

export default function OurServices() {
  return (
    <>
      <div
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
        className="py-20"
      >
        <h2 className="md:text-4xl text-3xl font-bold mb-10 text-center ">Our Digital Marketing Services</h2>
        <p className="text-lg text-gray-600 text-center mb-20 max-w-2xl mx-auto px-4">
          We don&apos;t believe in one-size-fits-all marketing. Our customized
          digital strategies help businesses attract qualified customers,
          increase conversions, and grow sustainably.
        </p>

        <div className="flex flex-wrap sm:p-0 p-2 max-w-6xl mx-auto gap-10 items-center justify-center">
          <div className="group relative max-w-lg overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            {/* Animated Left Border */}
            <span className="absolute left-0 bottom-0 h-0 w-1 bg-[#0B60B0] transition-all duration-500 group-hover:h-full" />

            {/* Content */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="text-4xl text-[#0B60B0] p-4 transition-all duration-500 group-hover:rotate-y-180 group-hover:bg-[#0B60B0] group-hover:text-white rounded-full">
                <ChartLine size={28} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                <b>Increase Your Google Rankings & Drive Organic Traffic</b><br />
                 Rank higher on Google and AI-driven search engines. We combine technical SEO, local relevance, and quality content to ensure your business in Allahabad, 
                 and across India gets found however customers search.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link
                    href="/search-engine-optimization"
                    className="inline-block"
                  >
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Explore SEO Services <MoveRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative max-w-lg overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            {/* Animated Left Border */}
            <span className="absolute left-0 bottom-0 h-0 w-1 bg-[#0B60B0] transition-all duration-500 group-hover:h-full" />

            {/* Content */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="text-4xl text-[#0B60B0] p-4 transition-all duration-500 group-hover:rotate-y-180 group-hover:bg-[#0B60B0] group-hover:text-white rounded-full">
                <Code size={28} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Website Design & Development
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  <b>Build a Website That Converts Visitors Into Customers</b><br />
                  A slow website kills conversions. We build fast, responsive, 
                  and clean websites—from local business pages to custom platforms—designed to deliver a smooth user experience that turns visitors into buyers.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/web-development" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Build Your Website <MoveRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative max-w-lg overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            {/* Animated Left Border */}
            <span className="absolute left-0 bottom-0 h-0 w-1 bg-[#0B60B0] transition-all duration-500 group-hover:h-full" />

            {/* Content */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="text-4xl text-[#0B60B0] p-4 transition-all duration-500 group-hover:rotate-y-180 group-hover:bg-[#0B60B0] group-hover:text-white rounded-full">
                <Video size={28} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Social Media Marketing
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                <b>Build a Strong Brand That People Trust</b><br />
                  Stop the scroll and build a brand that sells. We create high-impact Instagram, Facebook, and YouTube Shorts campaigns, 
                  leveraging short-form video and social commerce to drive real customer engagement.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/social-media-marketing" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Grow Your Social Presence <MoveRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative max-w-lg overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            {/* Animated Left Border */}
            <span className="absolute left-0 bottom-0 h-0 w-1 bg-[#0B60B0] transition-all duration-500 group-hover:h-full" />

            {/* Content */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="text-4xl text-[#0B60B0] p-4 transition-all duration-500 group-hover:rotate-y-180 group-hover:bg-[#0B60B0] group-hover:text-white rounded-full">
                <Target size={28} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Google Ads & Paid Marketing
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                <b>Reach Customers Ready to Buy</b><br />
                  Stop wasting ad spend. We launch targeted, AI-optimized campaigns with smart audience segmentation and 
                  high-converting landing pages designed to turn clicks into genuine, scalable leads. 
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/paid-marketing" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                       Start Google Ads <MoveRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative max-w-lg overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            {/* Animated Left Border */}
            <span className="absolute left-0 bottom-0 h-0 w-1 bg-[#0B60B0] transition-all duration-500 group-hover:h-full" />

            {/* Content */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="text-4xl text-[#0B60B0] p-4 transition-all duration-500 group-hover:rotate-y-180 group-hover:bg-[#0B60B0] group-hover:text-white rounded-full">
                <Palette size={28} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Content Marketing
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                <b>Create Content That Educates, Engages & Converts</b><br />
                  Build authority with content that converts. We map out and create high-value content that answers customer questions, 
                  boosts your SEO, and seamlessly guides prospects through the buyer’s journey.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/digital-marketing" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Build Your Content Strategy <MoveRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative max-w-lg overflow-hidden rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            {/* Animated Left Border */}
            <span className="absolute left-0 bottom-0 h-0 w-1 bg-[#0B60B0] transition-all duration-500 group-hover:h-full" />

            {/* Content */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="text-4xl text-[#0B60B0] p-4 transition-all duration-500 group-hover:rotate-y-180 group-hover:bg-[#0B60B0] group-hover:text-white rounded-full">
                <Rocket size={28} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Business Consulting
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                <b>Strategic Guidance for Sustainable Growth</b><br />
                  Streamline operations and plan for sustainable growth. We bridge the gap between business fundamentals and digital strategy, 
                  giving Prayagraj businesses and scaling Indian brands a clear roadmap to success.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/business-consultancy" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Speak With a Consultant <MoveRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
