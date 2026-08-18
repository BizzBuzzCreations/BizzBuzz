import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/sections/pageHero";
import CTA from "@/components/sections/CTA";
import { INDUSTRIES, SERVICES, getIndustryBySlug } from "@/lib/industriesData";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.label} Digital Marketing | BizzBuzz Creations`,
    description: industry.description,
    alternates: {
      canonical: `https://bizzbuzzcreations.com/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const Icon = industry.icon;
  const recommendedServices = industry.services.map((key) => SERVICES[key]);

  return (
    <>
      <PageHero
        label="Industries"
        title={`Digital Marketing for the ${industry.label} Industry`}
        subtitle={industry.description}
      />

      {/* Challenges */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#eaf4fb] text-[#0B60B0] shrink-0">
              <Icon size={24} />
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-3">
            Challenges We Solve for {industry.label} Businesses
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-14">
            Every industry has its own obstacles between visibility and
            revenue — here's what we see most in {industry.label.toLowerCase()}.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {industry.challenges.map((challenge, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B60B0]/40 hover:shadow-lg hover:bg-white"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0B60B0] text-white text-sm font-bold mb-4">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended services */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-3">
            How We Help {industry.label} Brands Grow
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-14">
            The services we lean on most for {industry.label.toLowerCase()}{" "}
            clients — combined or standalone, depending on your goals.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {recommendedServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Link
                  key={service.key}
                  href={service.href}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B60B0]/40 hover:shadow-lg"
                >
                  <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#0B60B0] text-white transition-transform duration-300 group-hover:scale-110">
                    <ServiceIcon size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-gray-900">
                      {service.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 group-hover:text-[#0B60B0] transition-colors shrink-0"
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex items-center gap-3 justify-center text-sm text-gray-500">
            <CheckCircle2 size={16} className="text-[#0B60B0] shrink-0" />
            <span>
              Every engagement starts with a free consultation, so the mix
              of services is built around your actual goals — not a fixed
              package.
            </span>
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold text-black mb-6 text-center">
            Explore Other Industries
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {INDUSTRIES.filter((i) => i.slug !== industry.slug).map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="text-sm text-gray-600 hover:text-white hover:bg-[#0B60B0] border border-gray-200 hover:border-[#0B60B0] rounded-full px-4 py-2 transition-colors"
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white pb-20">
        <CTA />
      </div>
    </>
  );
}
