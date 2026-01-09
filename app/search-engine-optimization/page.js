import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";

export default function SearchEngineOptimization() {
  return (
    <>
      <ServicesHero
        heading="Search Engine Optimization (SEO) Services in Prayagraj"
        description="Top SEO services in Prayagraj to boost your Google ranking, increase traffic, attract more customers, and enhance your online presence with simple, effective strategies."
      />

      <div className="flex flex-wrap px-5 gap-5 lg:gap-20 justify-center items-center mb-10 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/BizzBuzz-Creations-5.png"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Best Local SEO services in prayagraj
          </h2>
          <p>
            Searching for the best SEO services in Prayagraj? You’re at the
            right place. At Bizz Buzz Creations, you’ll find complete SEO
            solutions under one roof to boost your business.
          </p>
          <p>
            Prayagraj is home to top schools, colleges, shopping malls,
            hospitals, restaurants, and corporate offices. With growing
            competition, SEO in Prayagraj is now a must for every business. Our
            proven strategies help you increase visibility, get more leads, and
            multiply your sales.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading="On Page SEO"
            description="Optimizing every page of your website to rank higher and attract the right audience."
            imageUrl="/wordpress.png"
          />
          <ServiceCard
            heading="Off Page SEO"
            description="Building authority with quality backlinks, social media presence, and brand mentions."
            imageUrl="/online-shop.png"
          />
          <ServiceCard
            heading="Technical SEO"
            description="Improving site speed, mobile-friendliness, and crawlability for better search engine rankings."
            imageUrl="/web-design.svg"
          />
          <ServiceCard
            heading="Content & Link Building"
            description="High-quality content marketing and authority link strategies"
            imageUrl="/web-design.svg"
          />
          <ServiceCard
            heading="Ecommerce SEO & Audits"
            description="Special SEO for online stores and complete site health checks."
            imageUrl="/web-design.svg"
          />
          <ServiceCard
            heading="Local SEO & Penalty Checks"
            description="Target nearby customers and recover from Google penalties."
            imageUrl="/web-design.svg"
          />
        </div>
      </div>

      <div className="flex flex-wrap lg:gap-20 justify-center px-5 items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3">Why SEO is Important?</h2>
          <p>
            In today’s digital world, SEO is not a luxury, it’s a necessity. A
            website without SEO is invisible. With the right strategy, you can
            boost visibility, attract quality traffic that converts, build trust
            in your industry, and gain powerful insights. Simply put—invest in
            SEO, secure your business future.
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/CLI-Caller-Line-Identification.webp"
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
