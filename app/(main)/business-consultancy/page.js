import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import BusinessConsultancyFAQ from "@/components/sections/businessConsultancyFAQ";

export const metadata = {
  title:
    "Business Consulting Services in India | Strategy & Growth | Bizzbuzz Creations",
  description:
    "Expert business consulting services for startups & companies in India. Get strategy, growth, and operations support in Prayagraj & across India.",
    alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy",
  },
};

export default function BusinessConsultancy() {
  return (
    <>
      <ServicesHero
        heading="Turn Your Business Potential Into Real Profit Growth"
        description="Most businesses don’t fail  they get stuck. We identify what’s holding you back and build actionable strategies that drive real results, not just reports."
        img="/businesscons.webp"
      />

      <div className="flex lg:flex-row flex-col px-5 gap-10 lg:gap-20 justify-center items-center mb-20 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/bc-img.png"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Business Consulting Services Across India
          </h2>
          <p>
            BizzBuzz Creations is a full-service business consulting firm offering business consulting services to founders, 
            small business owners, and growing companies right across India.
          </p>
          <p>
            Whether you're scaling a manufacturing unit in Ahmedabad, launching a D2C brand in Delhi, or fixing operations for a family business in Chennai, 
            our team steps in as your management consultant, bringing structure, strategy, and clarity to every decision. 
            And being based out of Prayagraj means we also understand what it takes to build and grow a business right here in the heart of India not just in the metros.
          </p>
        </div>
      </div>


      <div className="container max-w-6xl mx-auto mb-20 px-5">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Core Business Consulting Services
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <ServiceCard
            heading="Business Strategy Consulting"
            description="Every strong business runs on a clear plan, not guesswork. As a dedicated strategy consulting partner, we help you define your goals, map your market, and build a roadmap that turns big ambitions into practical, executable steps."
            imageUrl="/target-arrow-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Startup & New Business Consulting"
            description="Starting up is exciting and overwhelming. Our startup consulting services guide first-time founders through everything from business models to go-to-market strategy, giving you the confidence of a business consulting for startups partner who's done it before."
            imageUrl="/doc.svg"
          />
          <ServiceCard
            heading="Business Growth & Scaling Consulting"
            description="Ready to grow but not sure how to scale without breaking what's working? Our business growth consulting service builds systems, processes, and strategies designed to help you expand sustainably, not just quickly."
            imageUrl="/graph-up-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Operations & Process Consulting"
            description="Inefficiency quietly eats into profit every single day. Through focused operations consulting services, we identify the bottlenecks in your day-to-day running and streamline them so your business runs smoother with less firefighting."
            imageUrl="/setting-2-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Business Development & Marketing Consulting"
            description="Growth isn't just about strategy on paper, it's about winning customers too. Our combined business development consulting and marketing consulting services help you build the pipeline and the brand visibility your business needs to grow."
            imageUrl="/connect-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Local & City-Based Business Advisory"
            description="Looking for guidance that understands your local market? As a trusted business consultant in Prayagraj and Allahabad, we offer hands-on advisory for businesses that want a consultant who genuinely understands the local landscape."
            imageUrl="/map-point-wave-svgrepo-com.svg"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col px-5 gap-10 lg:gap-20 justify-center items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl md:text-left">
          <h2 className="text-3xl font-bold mb-5">
            Why Choose BizzBuzz Creations As Your Business Consulting Partner
          </h2>
          <p>
            Anyone can hand you a strategy deck. Not everyone will sit with
            you and make sure it actually works. Born and based in Prayagraj,
            BizzBuzz Creations was built to be the kind of{" "}
            <b>management consulting services</b> partner that stays involved
            long after the first meeting. As an established{" "}
            <b>corporate consulting services</b> provider, we don&apos;t
            believe in generic playbooks — every recommendation is built
            around your industry, your team, and your real numbers. 
            </p>
            <p>
            We're direct about what&apos;s working, honest about what isn&apos;t,
            and focused on outcomes you can actually measure. Think of us less
            like outside consultants and more like a{" "}
            <b>hire business consultant</b> team that&apos;s genuinely
            invested in your growth. From the first audit to the final
            execution, we stay by your side so your business doesn&apos;t
            just plan for growth — it delivers it.
          </p>
          <Link href="/contact" className="inline-block mt-6">
            <button
              className="animated-button animated-button-lg mx-auto"
              style={{ backgroundColor: "#000000" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Start Today</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/smm-img.png"
            alt="image"
          />
        </div>
      </div>

      <BusinessConsultancyFAQ />

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
