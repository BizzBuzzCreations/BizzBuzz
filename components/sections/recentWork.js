"use client";

import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    category: "Website Development",
    image: "/website.jpg",
    alt: "website-development",
    title: "Website Development",
    description:
      "High-Converting Websites Fast, responsive, and mobile-first websites built with SEO-friendly architecture. We engineer clean digital spaces designed to turn casual visitors into paying customers.",
  },
  {
    category: "SEO",
    image: "/seoGraph.png",
    alt: "seo-graph",
    title: "SEO Result Graphs",
    description:
      "Sustainable Organic Growth Dominate search rankings and attract high-intent buyers. We optimize your online presence to increase organic Google traffic and secure consistent inbound leads.",
  },
  {
    category: "Social Media",
    image: "/socialmedia.jpg",
    alt: "social-media",
    title: "Social Media Creatives",
    description:
      "Maximized ROI, Zero Wasted Spend Turn your marketing budget into measurable revenue. We launch highly targeted, data-driven paid campaigns optimized to lower acquisition costs and scale sales.",
  },
  {
    category: "Paid Ads",
    image: "/leadGen.webp",
    alt: "lead-gen",
    title: "Lead Generation Ad Results",
    description:
      "Brands People Remember Go beyond daily posting. We create scroll-stopping short-form videos and engagement strategies that build customer trust and turn social followers into active buyers.",
  },
];

const categories = ["All", "Website Development", "SEO", "Social Media", "Paid Ads"];

export default function RecentWork() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      className="bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: 'url("/building.webp")',
      }}
    >
      <div className="mx-auto w-full backdrop-filter backdrop-blur-md py-6">
        <h2 className="md:text-4xl text-3xl font-bold text-center my-5 ">
         Real Results. Measurable Growth.
        </h2>
        <p className="md:text-xl text-center my-5 max-w-2xl mx-auto px-4">
          We focus on revenue over vanity metrics — data-driven strategies
          that drive leads, scale sales, and build a powerful brand presence.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-[#0B60B0] text-white border-[#0B60B0] shadow-md"
                  : "bg-white/70 text-gray-800 border-gray-300 hover:border-[#0B60B0] hover:text-[#0B60B0]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <br />
        <div
          id="services"
          className="bg-cover w-full flex justify-center items-center"
        >
          <div className="max-w-7xl mb-5">
            <div className="w-12/12 mx-auto rounded-2xl md:p-5">
              <div>
                <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-2 justify-center text-gray-800">
                  {visibleProjects.map((project) => (
                    <div
                      key={project.title}
                      className="flex flex-col md:w-1/2 xl:w-1/2 w-[300px] md:p-4 p-2"
                    >
                      <div className="group bg-white/40 shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl md:p-4 p-2 border border-gray-100">
                        <div className="flex-none lg:flex items-center">
                          <div className="h-full w-full lg:h-full lg:w-full lg:mb-0 mb-3 overflow-hidden rounded-2xl">
                            <Image
                              width={400}
                              height={400}
                              src={project.image}
                              alt={project.alt}
                              className="w-full object-cover lg:h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="flex-auto text-lg font-medium text-black">
                                {project.title}
                              </h3>
                            </div>
                            <span className="inline-block w-fit text-xs font-medium text-[#0B60B0] bg-[#0B60B0]/10 px-3 py-1 rounded-full mt-1">
                              {project.category}
                            </span>
                            <div className="flex py-4 text-sm text-black">
                              <div className="flex-1 inline-flex items-center ">
                                <p>{project.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
