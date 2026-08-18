import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/pageHero";
import CTA from "@/components/sections/CTA";
import { INDUSTRIES } from "@/lib/industriesData";

export const metadata = {
  title: "Industries We Serve | BizzBuzz Creations",
  description:
    "Digital marketing, BPO, and web development for 20+ industries — healthcare, e-commerce, real estate, finance, and more.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries",
  },
};

export default function IndustriesIndexPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Solving Real Challenges Across Every Major Industry"
        subtitle="Every sector searches, buys, and converts differently. Pick your industry below to see how we approach it."
      />

      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B60B0]/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#eaf4fb] text-[#0B60B0] transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 group-hover:text-[#0B60B0] transition-colors"
                  />
                </div>
                <h2 className="font-bold text-gray-900 mb-2">{industry.label}</h2>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {industry.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="bg-white pb-20">
        <CTA />
      </div>
    </>
  );
}
