import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA-2";
import FAQ from "@/components/sections/FAQ";
import HomeAbout from "@/components/sections/homeAbout";
import HomeHero from "@/components/sections/homeHero";
import ClientLogo from "@/components/sections/clientLogo";
import OurServices from "@/components/sections/ourServices";
import Reviews from "@/components/sections/reviews";
import WhatMAkesUs from "@/components/sections/whatMakesUs";
import RecentWork from "@/components/sections/recentWork";
import WhyMakesUs from "@/components/sections/whyMakesUs";

export default function Home() {
  return (
    <>
      {/* Home Hero Section */}
      <HomeHero />

      {/* About section */}
      <HomeAbout />

      {/* Our Services */}
      <OurServices />

      {/* CTA-2 Section */}
      <CTA2 />

      {/* What Makes Us Different section */}
      <WhatMAkesUs />

      {/* Why choose us */}
      <WhyMakesUs />

      {/* Why Choose Us Section */}
      <RecentWork />

      {/* our client carousel */}
      <ClientLogo />

      {/* Reviews section */}
      <Reviews />

      {/* Growth counter  */}
      <Counter />

      {/* FAQ section */}
      <FAQ />

      {/* CTA section */}
      <CTA />
    </>
  );
}
