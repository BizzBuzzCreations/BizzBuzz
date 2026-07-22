import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import PaidMarketingFAQ from "@/components/sections/paidMarketingFAQ";

export const metadata = {
  title:
    "Paid Marketing Services | Google & Meta Ads Agency – BizzBuzz Creations",
  description:
    "Boost sales with ROI-driven paid marketing services. BizzBuzz Creations offers Google Ads, Meta Ads & performance marketing for high-quality leads and conversions.",
    alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing",
  },
};

export default function SearchEngineOptimization() {
  return (
    <>
      <ServicesHero
        heading="Turn Every Rupee You Spend On Ads Into A Paying Customer"
        description="Stop paying for clicks that go nowhere. BizzBuzz Creations, Prayagraj's paid marketing agency, turns your ad budget into real leads, real calls, and real sales."
        img="/ads.webp"
      />

      <div className="flex lg:flex-row flex-col px-5 gap-5 lg:gap-20 justify-center items-center mb-10 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={250}
            height={500}
            src="/meta ads.webp"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Paid Marketing Services In India, Built For How India Buys
          </h2>
          <p>
            BizzBuzz Creations is a full-service <b>digital advertising agency</b> offering <b>paid marketing services for small business</b> owners, 
            growing startups, and established brands right across India. Whether you're a clinic in Lucknow, a D2C brand in Mumbai, or a B2B company in Bangalore, 
            our team runs your <b>online advertising services</b> with one goal in mind: turning your ad spend into measurable business growth.
          </p>
          <p>
            We work as a <b>paid ads agency near me</b> for clients in every major city and state, managing everything from strategy to execution, 
            so you can focus on running your business while we focus on filling your pipeline.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="container max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Core Paid Marketing Services
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <ServiceCard
            heading="Google & Search Ads Management"
            description="Get found the moment someone is ready to buy. Our digital ads management services cover search, display, and shopping campaigns built around real buyer intent, so your business shows up when it matters most, not just when budgets allow."
            imageUrl="/target-arrow-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Meta & Social Ads Management"
            description="From Facebook to Instagram, our paid media services are designed to stop the scroll and start conversations. We craft ad creatives and targeting strategies that turn casual scrollers into genuine leads for your brand."
            imageUrl="/chat-round-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Performance Marketing & ROI Campaigns"
            description="As a dedicated performance marketing agency, every campaign we run is tracked against one metric that matters: return on investment. No vanity numbers, no fluff, just campaigns built to hit your revenue targets."
            imageUrl="/graph-up-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Lead Generation Campaigns"
            description="Our lead generation marketing services are engineered to fill your calendar, not just your inbox. We combine smart targeting, landing pages, and offers that convert visitors into genuine, sales-ready leads."
            imageUrl="/users-svgrepo-com.svg"
          />
          <ServiceCard
            heading="E-commerce & Retargeting Ads"
            description="Running an online store? Our team specializes in performance marketing agencies for e-commerce needs, from product ads to retargeting shoppers who almost bought, helping you recover lost sales and boost repeat purchases."
            imageUrl="/cart-large-minimalistic-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Local & City-Based Ad Campaigns"
            description="Need customers walking through your door? As a trusted paid marketing agency in Allahabad, we run hyper-local campaigns that put your business in front of nearby customers actively searching for what you offer, whether they're searching by the city's old name or its new one."
            imageUrl="/map-point-wave-svgrepo-com.svg"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center px-5 items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose BizzBuzz Creations As Your Paid Marketing Partner
          </h2>
          <p>
            Anyone can run an ad. Not everyone can run one that pays for itself. Born and based in Prayagraj, 
            BizzBuzz Creations was built for businesses who are done experimenting and ready to invest in results. As an established <b>online marketing services</b> provider, 
            we don't believe in one-size-fits-all packages; every campaign is built around your industry, your customers, and your goals.
          </p>
          <p>
            We're transparent with numbers, honest about what's working (and what isn't), and obsessed with getting you a better cost per lead every month.
            Think of us less like a vendor and more like a <b>hired paid marketing expert</b> team sitting inside your business, pushing for growth every single day. From strategy to daily optimisation,
            we handle it all so you can watch your leads and your revenue grow.
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
              <span className="text">Start Now</span>
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
            width={350}
            height={500}
            src="/social phone.webp"
            alt="image"
          />
        </div>
      </div>

      <PaidMarketingFAQ />

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
