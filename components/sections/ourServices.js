import React from "react";
import Link from "next/link";
import Particles from "@/components/ui/Particles";
import RichText from "@/components/ui/richText";
import { resolveIcon } from "@/lib/iconOptions";
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

export default function OurServices({ content }) {
  const heading =
    content?.servicesHeading || "Digital Marketing & Business Solutions";
  const subtext =
    content?.servicesSubtext ||
    "We don't believe in one-size-fits-all marketing. Our customized digital strategies help businesses attract qualified customers, increase conversions, and grow sustainably.";

  // Icon + href stay fixed (structural); only the copy comes from the
  // saved override, matched by position to the real service list.
  // `icon` / `buttonLink` are only editable on the Outside Location page
  // (its registry adds those two fields); everywhere else they're never
  // saved, so the built-in icon and link always win.
  const displayServices = services.map((service, i) => {
    const override = content?.serviceCards?.[i];
    if (!override) return service;
    const { icon, buttonLink, ...text } = override;
    return {
      ...service,
      ...text,
      icon: resolveIcon(icon, service.icon),
      href: buttonLink || service.href,
    };
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(64, 162, 216, 0.08) 0, rgba(64, 162, 216, 0.08) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(64, 162, 216, 0.08) 0, rgba(64, 162, 216, 0.08) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
        className="relative py-20 overflow-hidden"
        id="services"
      >
        {/* Same animated particle backdrop used on the contact page */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <Particles
            particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
            particleCount={200}
            particleSpread={14}
            speed={0.08}
            particleBaseSize={110}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Top + bottom fades — the diamond pattern and particles used to
            stop at a hard edge against the plain-black sections above and
            below; fading them out to solid black lets this section blend
            into its neighbours instead of reading as a separate block. */}
        <div
          className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="relative z-10 md:text-4xl text-3xl font-bold mb-10 text-center text-white">
          {heading}
        </h2>
        <RichText
          as="p"
          text={subtext}
          className="relative z-10 text-lg text-white text-center mb-20 max-w-2xl mx-auto px-4"
        />

        <div className="relative z-10 flex flex-wrap sm:p-0 p-2 max-w-6xl mx-auto gap-10 items-center justify-center">
          {displayServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.heading}
                className="group relative max-w-lg overflow-hidden rounded-2xl border border-white/10 hover:border-[#0B60B0] bg-white/5 hover:bg-[#0B60B0] p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B60B0]/30 hover:scale-105 cursor-pointer"
              >
                {/* Content */}
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-4xl text-[#40A2D8] p-4 transition-all duration-500 group-hover:bg-white/15 group-hover:text-white rounded-full">
                    <Icon size={28} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-white">
                      {service.heading}
                    </h3>
                    <p className="mt-1 text-sm text-white transition-colors duration-300 group-hover:text-white/85">
                      <b>{service.subheading}</b>
                      <br />
                      {service.description}
                    </p>
                    {/* Button */}
                    <div className="mt-6">
                      <Link href={service.href} className="inline-block">
                        <button className="rounded-lg py-2 flex gap-2 items-center text-sm font-medium text-[#40A2D8] transition group-hover:text-white">
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
