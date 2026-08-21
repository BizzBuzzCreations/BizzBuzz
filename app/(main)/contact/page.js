import ContactSection from "@/components/sections/contactSection";
import GlobeTrust from "@/components/sections/globeTrust";
import MarketingCTA from "@/components/sections/marketingCTA";
import JoinTeamCTA from "@/components/sections/joinTeamCTA";
import ContactFAQ from "@/components/sections/contactFAQ";
import WavyDivider from "@/components/ui/wavy-divider";
import Particles from "@/components/ui/Particles";
import React from "react";

export const metadata = {
  title: "Contact BizzBuzz Creations | Free SEO & Marketing Consultation",
  description:
    "Need more leads & sales? Contact our experts today for SEO, social media & website services in Prayagraj. Free consultation available.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/contact",
  },
};

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
          gap before JoinTeamCTA. Same particle backdrop as the rest of
          the page, continuing the effect through this section too. */}
      <div className="relative bg-black pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <Particles
            particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
            particleCount={180}
            particleSpread={14}
            speed={0.08}
            particleBaseSize={110}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="relative z-10">
          <ContactFAQ />
        </div>
      </div>

      <JoinTeamCTA />
    </>
  );
}

<div></div>;
