import Image from "next/image";
import PageHero from "@/components/sections/pageHero";
import CaseStudies from "@/components/sections/caseStudies";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Client Portfolio | BizzBuzz Creations",
  description:
    "Real brands BizzBuzz Creations has partnered with — digital marketing, SEO, and web development work across finance, media, retail, and more.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/portfolio",
  },
};

// Same client roster used across the site (logo strips, case-study
// carousel) — the full set, with a short, honest description for each.
// Taglines are intentionally generic where a specific result hasn't been
// documented yet, same approach as the case-studies carousel.
const CLIENTS = [
  {
    name: "Avondale Finance",
    logo: "/avondale-1.png",
    desc: "Digital marketing partnership focused on stronger lead generation and online visibility.",
  },
  {
    name: "Bailiff Solution",
    logo: "/circle-logo-bailliff.png",
    desc: "Digital marketing support for a UK-based enforcement and debt recovery service, with clear, compliant messaging.",
  },
  {
    name: "Fibernet",
    logo: "/fibernet.png",
    desc: "A modern web presence built to handle a growing volume of customer inquiries.",
  },
  {
    name: "Meshvi",
    logo: "/meshvinmedia-1.png",
    desc: "Social media and content strategy for a growing media and marketing brand.",
  },
  {
    name: "MDF",
    logo: "/mmdf.png",
    desc: "SEO and lead generation support for a debt-relief service, connecting more people with clear information.",
  },
  {
    name: "UK Claims",
    logo: "/ukclaims.png",
    desc: "Website and digital marketing support for a UK claims management service.",
  },
  {
    name: "William",
    logo: "/WILLIAM.png",
    desc: "Ongoing SEO and social media management to strengthen organic reach.",
  },
  {
    name: "Red Eagle",
    logo: "/RED EAGLE1.png",
    desc: "Brand visibility and social media management for a growing local business.",
  },
  {
    name: "Parivartan",
    logo: "/PARIVARTAN1.png",
    desc: "Digital marketing support to expand outreach and visibility.",
  },
  {
    name: "Neeel Kanth",
    logo: "/NEEEL KANTH.png",
    desc: "Digital marketing and online presence built to reach more travelers.",
  },
  {
    name: "La Pristine",
    logo: "/LA PRISTINE1.png",
    desc: "Website design and digital marketing to elevate the brand online.",
  },
  {
    name: "Grand WeddinZ",
    logo: "/GRAND WEDDINZ1.png",
    desc: "Brand identity and social media strategy built for a growing events business.",
  },
  {
    name: "Transcendes",
    logo: "/transcendes.png",
    desc: "Brand and social media presence built for a home décor, handicrafts, and gifts business.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Client Portfolio"
        subtitle="90+ projects, 50+ clients across India and the UK — here's a look at some of the brands we've partnered with."
      />

      <CaseStudies />

      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-14">
            Brands We&rsquo;ve Worked With
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B60B0]/40 hover:shadow-lg"
              >
                <div className="shrink-0 w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={40}
                    height={40}
                    className="object-contain w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {client.desc}
                  </p>
                </div>
              </div>
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
