import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import DigitalMarketingFAQ from "@/components/sections/digitalMarketingFAQ";
import MarketingAutomationSystems from "@/components/sections/marketingAutomationSystems";

export const metadata = {
  title: "Marketing Automation Services in India | Bizzbuzz Creations",
  description:
    "Automate emails, CRM, and WhatsApp with marketing automation services. Get more leads and sales with smart workflows across India & Prayagraj.",
    alternates: {
    canonical: "https://bizzbuzzcreations.com/digital-marketing",
  },
};

export default function digitalMarketing() {
  return (
    <>
      <ServicesHero
        heading="Stop Chasing Leads Manually, Let Marketing Automation Do It While You Sleep"
        description="Bizzbuzz Creations builds marketing automation systems that run your email campaigns, nurture leads, update your CRM, and reply on WhatsApp automatically. 
        No more missed follow-ups, no more manual grunt work, just a marketing engine that works even when your team's logged off."
        img="/digitalmarketing.webp"
      />

      <div className="flex lg:flex-row flex-col px-5 gap-5 lg:gap-20 justify-center items-center mb-10 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/digital.webp"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            One Automation Partner, Every Channel Your Customers Actually Use
          </h2>
          <p>
            Most businesses don't lose customers because their product is wrong; they lose them because nobody followed up in time. 
            A lead fills a form and waits three days for a reply. A customer abandons a cart and never hears from you again. 
            That's the gap marketing automation is built to close. At <b>Bizzbuzz Creations</b>, we set up marketing automation tools that handle the follow-up, 
            the reminders, and the repetitive campaigns for you, so every lead gets a timely response.
          </p>
          <p>
            As a marketing automation agency, we don't just install software and walk away; we design the actual workflow, write the messaging,
            and connect it to your CRM so your sales team wakes up to warm leads, not cold silence. Whether you're a startup running your first automation for small business marketing, 
            or a growing brand that needs full-scale email marketing automation and WhatsApp marketing automation, we build the system around how your customers actually behave
          </p>
        </div>
      </div>

      <MarketingAutomationSystems />

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center items-center mb-5 md:mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">Why Choose Bizzbuzz Creations</h2>
          <h3><b>Automation That's Actually Set Up to Sell, Not Just Send</b></h3>
          <p>
            We don't sell you a tool subscription and walk away — we build the workflow, 
            write the messaging, and connect every piece to your CRM ourselves. 
            As your marketing automation agency, we treat email, WhatsApp, and lead nurturing as one connected system, 
            not separate campaigns running blind. Startups get plans that scale with real volume, 
            not enterprise pricing from day one. And every workflow is reviewed and improved monthly, 
            not left running on autopilot and forgotten.
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/Digital-Marketing.webp"
            alt="image"
          />
        </div>
      </div>

      <DigitalMarketingFAQ />

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
