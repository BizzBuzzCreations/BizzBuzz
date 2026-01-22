import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import OurServices from "@/components/sections/ourServices";

export default function digitalMarketing() {
  return (
    <>
      <ServicesHero
        heading="Digital Marketing Services in Pryagraj"
        description="We create the marketing agency in prayagraj that truly speaks to
            people and delivers results that matter. Our focus is simple—clear
            communication, trust, and growth for your business."
        img="/digitalmarketing.webp"
      />

      <div className="flex flex-wrap px-5 gap-5 lg:gap-20 justify-center items-center mb-10 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/digital.webp"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose BBC for Best Digital Marketing Services in Prayagraj
          </h2>
          <p>
            Choose Bizz Buzz Creations because we are not just the best digital
            marketing agency in Prayagraj, but a trusted partner for businesses
            worldwide. By working with international clients, we bring advanced
            strategies and proven techniques to help your business grow faster.
            Our focus is simple—transparency, trust, and results that matter.
          </p>
        </div>
      </div>

      <OurServices />

      <div className="flex flex-wrap lg:gap-20 justify-center items-center mb-5 md:mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3">How We Work</h2>
          <p>
            We begin by understanding your goals by carefully listening to your
            needs and business vision. In step one, we plan the strategy by
            creating a custom digital roadmap for growth. In step two, we
            execute with precision through creative campaigns, SEO, branding,
            and web development. Finally, in step three, we measure and improve
            performance with regular reports and transparent results.
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

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
