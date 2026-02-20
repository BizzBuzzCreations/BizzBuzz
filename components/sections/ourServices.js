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
        <h2 className="md:text-4xl text-3xl font-bold mb-10 text-center ">
          Our Digital Marketing Services
        </h2>

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
                  SEO Optimization
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Top SEO services in Prayagraj to boost your Google ranking,
                  increase traffic, attract more customers, and enhance your
                  online presence with simple, effective strategies.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link
                    href="/search-engine-optimization"
                    className="inline-block"
                  >
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Know More <MoveRight size={16} />
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
                  Website Development
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  We write smart and easy code that helps your business grow.
                  From websites to custom solutions, our work makes things
                  smooth, trusted, and result-driven.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/web-development" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Know More <MoveRight size={16} />
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
                  Services providing Social Media Marketing in prayagraj helps
                  to augment the online presence of businesses, provide
                  engagement to audiences for a better flow, and drive traffic
                  with efficiency.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/social-media-marketing" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Know More <MoveRight size={16} />
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
                  Paid Marketing & Lead Generation
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Our data-driven ad tactics and lead systems that convert well
                  will help your organization flourish. Use campaigns that are
                  meant to grow your business faster to turn clicks into
                  consumers.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/paid-marketing" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Know More <MoveRight size={16} />
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
                  Digital Marketing
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Experience the future of technology with our revolutionary
                  quantum computing solution.Experience the future of technology
                  with our revolutionary quantum computing solution.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/digital-marketing" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Know More <MoveRight size={16} />
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
                  Business Consultancy Services
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Business consultancy offers expert advice to improve
                  operations, boost efficiency, solve problems, and drive
                  growth.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <Link href="/business-consultancy" className="inline-block">
                    <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition hover:text-[#0B60B0]/80">
                      Know More <MoveRight size={16} />
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
