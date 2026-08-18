import React from "react";
import Link from "next/link";
import {
  MoveRight,
  Rocket,
  ChartLine,
  Code,
  Video,
  Target,
  Headset,
  Bot,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Headset,
    heading: "BPO Service",
    subheading: "Reliable Support Teams Without the Overhead",
    description:
      "Skip the cost and hassle of hiring in-house. Our trained BPO teams handle customer support, back-office operations, and order processing around the clock, so you get dependable service without the overhead of building a full internal team.",
    href: "/bpo-services",
    buttonText: "Explore BPO Services",
  },
  {
    icon: Code,
    heading: "Website Design & Development",
    subheading: "Build a Website That Converts Visitors Into Customers",
    description:
      "A slow website kills conversions. We build fast, responsive, and clean websites—from local business pages to custom platforms—designed to deliver a smooth user experience that turns visitors into buyers.",
    href: "/web-development",
    buttonText: "Build Your Website",
  },
  {
    icon: ChartLine,
    heading: "Search Engine Optimization (SEO)",
    subheading: "Increase Your Google Rankings & Drive Organic Traffic",
    description:
      "Rank higher on Google and AI-driven search engines. We combine technical SEO, local relevance, and quality content to ensure your business in Allahabad, and across India gets found however customers search.",
    href: "/search-engine-optimization",
    buttonText: "Explore SEO Services",
  },
  {
    icon: Video,
    heading: "Social Media Marketing",
    subheading: "Build a Strong Brand That People Trust",
    description:
      "Stop the scroll and build a brand that sells. We create high-impact Instagram, Facebook, and YouTube Shorts campaigns, leveraging short-form video and social commerce to drive real customer engagement.",
    href: "/social-media-marketing",
    buttonText: "Grow Your Social Presence",
  },
  {
    icon: Target,
    heading: "Google Ads & Paid Marketing",
    subheading: "Reach Customers Ready to Buy",
    description:
      "Stop wasting ad spend. We launch targeted, AI-optimized campaigns with smart audience segmentation and high-converting landing pages designed to turn clicks into genuine, scalable leads.",
    href: "/paid-marketing",
    buttonText: "Start Google Ads",
  },
  {
    icon: Bot,
    heading: "AI Automation",
    subheading: "Automate the Busywork, Scale Without Hiring",
    description:
      "Free your team from repetitive tasks. We build AI chatbots, lead qualification flows, and workflow automations that respond to customers instantly and route the right leads to your team, 24/7.",
    href: "/ai-solutions",
    buttonText: "Automate With AI",
  },
  {
    icon: Workflow,
    heading: "Marketing Automation",
    subheading: "Nurture Leads Automatically, Convert While You Sleep",
    description:
      "Stop letting leads go cold. We set up automated email and follow-up sequences that nurture prospects, qualify interest, and guide them through the buyer's journey without manual chasing.",
    href: "/marketing-automation",
    buttonText: "Automate Your Marketing",
  },
  {
    icon: Rocket,
    heading: "Business Consulting",
    subheading: "Strategic Guidance for Sustainable Growth",
    description:
      "Streamline operations and plan for sustainable growth. We bridge the gap between business fundamentals and digital strategy, giving Prayagraj businesses and scaling Indian brands a clear roadmap to success.",
    href: "/business-consultancy",
    buttonText: "Speak With a Consultant",
  },
];

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
        id="services"
      >
        <h2 className="md:text-4xl text-3xl font-bold mb-10 text-center ">Our Digital Marketing Services</h2>
        <p className="text-lg text-gray-600 text-center mb-20 max-w-2xl mx-auto px-4">
          We don&apos;t believe in one-size-fits-all marketing. Our customized
          digital strategies help businesses attract qualified customers,
          increase conversions, and grow sustainably.
        </p>

        <div className="flex flex-wrap sm:p-0 p-2 max-w-6xl mx-auto gap-10 items-center justify-center">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.heading}
                className="group relative max-w-lg overflow-hidden rounded-2xl border border-gray-300 hover:border-[#0B60B0] bg-white hover:bg-[#0B60B0] p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                {/* Content */}
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-4xl text-[#0B60B0] p-4 transition-all duration-500 group-hover:bg-white/15 group-hover:text-white rounded-full">
                    <Icon size={28} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
                      {service.heading}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 transition-colors duration-300 group-hover:text-white/85">
                      <b>{service.subheading}</b>
                      <br />
                      {service.description}
                    </p>
                    {/* Button */}
                    <div className="mt-6">
                      <Link href={service.href} className="inline-block">
                        <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#0B60B0] transition group-hover:text-white">
                          {service.buttonText} <MoveRight size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
