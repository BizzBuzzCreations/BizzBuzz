import ContactSection from "@/components/sections/contactSection";
import GlobeTrust from "@/components/sections/globeTrust";
import MarketingCTA from "@/components/sections/marketingCTA";
import JoinTeamCTA from "@/components/sections/joinTeamCTA";
import ContactFAQ from "@/components/sections/contactFAQ";
import WavyDivider from "@/components/ui/wavy-divider";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import React from "react";

export const metadata = {
  title: "Contact BizzBuzz Creations | Free SEO & Marketing Consultation",
  description:
    "Need more leads & sales? Contact our experts today for SEO, social media & website services in Prayagraj. Free consultation available.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/contact",
  },
};

const OFFICES = [
  {
    region: "UK",
    address: "3 Thornham St, London SE10 9SA",
    phone: "07862 608652",
    phoneHref: "tel:+447862608652",
    gmbLink: "https://share.google/cP8yFJlgCLeuvJyOg",
  },
  {
    region: "India",
    address:
      "43/33, Tej Bahdur Sapru Rd, Agnipath Colony, Civil Lines, Prayagraj, Uttar Pradesh 211001",
    phone: "081155 85285",
    phoneHref: "tel:+918115585285",
    gmbLink: "https://share.google/lHeZ7H7Bif7VtjUCW",
  },
];

export default function Contact() {
  return (
    <>
      <ContactSection />

      {/* Wavy divider — ContactSection and GlobeTrust are both black, so
          without this the two sections just blend into one another. */}
      <div className="bg-black pt-3 pb-2 md:pt-4 md:pb-3">
        <WavyDivider />
      </div>

      <GlobeTrust />

      <MarketingCTA />

      {/* FAQs — sits between the marketing-services CTA and Join Our Team,
          5 questions specific to reaching out/working with us.
          overflow-hidden keeps ContactFAQ's own bottom margin contained
          inside this box instead of collapsing through it and exposing a
          gap before JoinTeamCTA. */}
      <div className="bg-black pt-16 overflow-hidden">
        <ContactFAQ />
      </div>

      <JoinTeamCTA />

      {/* Office locations — one structured card per region, instead of a
          single flat row of mixed contact details. Dark glass-card
          treatment, matching the office cards already used in the
          footer. */}
      <section className="relative overflow-hidden px-4 md:px-12 lg:px-24 py-20 bg-black">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] text-center mb-3">
            Where We Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Our Offices
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {OFFICES.map((office) => (
              <div
                key={office.region}
                className="group bg-white/[0.04] rounded-2xl border border-white/15 p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <h3 className="text-lg font-bold text-white mb-6 transition-colors duration-300 group-hover:text-[#40A2D8]">
                  BizzBuzz Creations <span className="text-white/30 font-medium">|</span> {office.region}
                </h3>

                <div className="flex items-start gap-3 mb-5">
                  <div className="bg-[#0B60B0] p-2.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-1">
                      Address
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <div className="bg-[#0B60B0] p-2.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-1">
                      Phone
                    </h4>
                    <a
                      href={office.phoneHref}
                      className="text-sm text-white/70 hover:text-[#40A2D8] transition"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={office.gmbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white text-sm font-semibold rounded-full px-5 py-2.5 w-fit transition-all duration-300 hover:border-[#40A2D8] hover:bg-[#0B60B0] hover:shadow-md hover:shadow-[#0B60B0]/30"
                >
                  View on Google Maps
                  <ExternalLink size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Straight divider — Our Offices and the footer are both black, so
          without a visible line they just blend into one section. Full
          width, edge to edge. */}
      <div className="bg-black border-t border-white" />
    </>
  );
}

<div></div>;
