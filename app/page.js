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
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      {/* Home Hero Section */}
      <HomeHero />

      {/* About section */}
      <HomeAbout />

      {/* Our Services */}
      <div className="bg-gray-50 py-10">
        <OurServices />
      </div>

      {/* CTA-2 Section */}
      <CTA2 />

      <div className="bg-gray-50 py-10">
        {/* What Makes Us Different section */}
        <WhatMAkesUs />

        {/* Why choose us */}
        <WhyChooseUs />
      </div>

      {/* Why Choose Us Section */}
      <RecentWork />

      {/* our client carousel */}
      {/* <ClientLogo /> */}

      <div className="py-10">
        {/* Reviews section */}
        <Reviews />
      </div>

      {/* Growth counter  */}
      <Counter />

      <div className="bg-gray-50 py-10">
        {/* FAQ section */}
        <FAQ />

        {/* CTA section */}
        <CTA />
      </div>
    </>
  );
}
