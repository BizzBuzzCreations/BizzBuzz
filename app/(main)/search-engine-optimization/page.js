"use client";

import ServicesHero from "@/components/sections/servicesHero";
import React, { useState } from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";

const faqs = [
  {
    question: "How to rank my business on Google Maps?",
    answer:
      "Make your Google My Business optimized, get some customers' reviews, include keywords, and make sure that all your company details are uniform.",
  },
  {
    question: "Can SEO help me earn money from my website?",
    answer:
      "SEO helps attract potential customers who are already looking for your products or services, making them your clients without investing any money.",
  },
  {
    question: "Do you have any AI involved in SEO?",
    answer:
      "Sure, we can use AI for our research and analysis. However, only a human SEO expert creates and analyzes the strategy.",
  },
  {
    question: "SEO or PPC — which one is better?",
    answer:
      "SEO allows us to gain free traffic in the long term, and PPC provides immediate results.",
  },
  {
    question: "What does your SEO service offer?",
    answer:
      "We provide keyword research, fixing of any issues, creation of new content, link building, local SEO, and monthly reports for your website.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container max-w-4xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base font-semibold text-gray-800 pr-4">
                  {index + 1}. {faq.question}
                </span>
                <span
                  className="text-2xl font-light text-gray-500 flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SearchEngineOptimization() {
  return (
    <>
      <ServicesHero
        heading="Top Search Engine Optimization (SEO) Services in Prayagraj"
        description="Top SEO services in Prayagraj to boost your Google ranking, increase traffic, attract more customers, and enhance your online presence with simple, effective strategies."
        img="/seO2.jpg"
      />

      <div className="flex lg:flex-row flex-col px-5 gap-5 lg:gap-20 justify-center items-center mb-10 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/BizzBuzz-Creations-5.png"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left"> 
          <h2 className="text-3xl font-bold mb-3">
            Best SEO services in prayagraj
          </h2>
          <p>
            At BizzBuzz Creations, we take an approach to long-term growth so that your business ranks high in Google, drives high traffic, and generates high-quality leads.
            We offer result-driven and AI-powered SEO services. Whether you are a local service provider, retail & e-commerce store, healthcare & education, real estate & PropTech, finance & banking, or manufacturing & sales.
            Our top-rated SEO experts help your business to grow faster all across India.
          </p>
          <p>
            Our vision is to innovate and integrate every day; this is the vision we follow for your business, which makes your business a global store.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">OUR CORE SEO SERVICES FOR YOUR BUSINESS</h2>
        <h5 className="text-3xl mb-10 text-center">Building your business into a lead and revenue machine in 2026 with</h5>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading="On Page SEO"
            description="Your business does not need just traffic but quality traffic. We help you in making your business website appear on the first page of Google and giving a better experience to the user so that it gets a high conversion rate. We do affordable SEO so that users get a zero-click visibility experience from your website, which increases the value of the business."
            imageUrl="/doc.svg"
          />
          <ServiceCard
            heading="Off Page SEO"
            description="Every business is built on trust, and every year the Google algorithm gives more value to trust and experience. A business's reputation increases when we create links of your business on trusted sites. We provide you with a professional off-page SEO audit service that pushes your website on Google and the proper use of LSI keywords with high-quality content."
            imageUrl="/link-round-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Technical SEO"
            description="Just ranking your business on Google is not enough but also across AI-driven platforms. Our strategy involves keyword research that prioritizes user intent involving AI visibility and geo-targeting to maximize your reach. As the best SEO, and GEO services, which help rank in AI search results, effective strategy for long-term growth."
            imageUrl="/setting-2-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Content & Link Building"
            description="As experts in AI-friendly content optimization, our aim is to get your business website presence on Google and other search engines. It is our responsibility to fix and improve weak content so your website performs better and increases sales. We focus on conversion tracking and the best search engine optimization service to scale your business revenue."
            imageUrl="/connect-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Local SEO & Penalty Checks"
            description="Being the best SEO service provider in India, our focus is to capture the local market first because the conversion of local searches is higher, and along with that, the trust of new customers is built in Google Business Profile. We focus on hyper-local targeting. Now the time has come to dominate the local market with BizzBuzz Creations, an expert local SEO service."
            imageUrl="/map-point-wave-svgrepo-com.svg"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center px-5 items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">WHY CHOOSE BIZZBUZZ CREATIONS?</h2>
          <p>
            <b>YOU NEED BEST SEARCH ENGINE OPTIMIZATION (SEO) SERVICES IN 2026</b>
            <br></br>
            <br></br>
            At BIZZBUZZ Creations, we follow a semantic SEO strategy for your business.
            In 2026, in this era of AI, SEO services now not only provide you keywords but also provide you digital authority so that Google feels that you are genuine and not an artificial intelligence bot. Whether you are a small business or a large business, OUR SEO strategy increases your website traffic organically and online visibility, builds your brand authority, generates high-intent leads, and helps you rank fast in Google. SEO helps your business not just survive in the AI era but dominate it.
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

      {/* Accordion FAQ Section */}
      <FAQSection />

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}