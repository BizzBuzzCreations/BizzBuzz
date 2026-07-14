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
    question: "How much does it cost to build a website in 2026?",
    answer:
      "A static website costs Rs 15,000 for 5 pages, but if a website is created using coding, the price range varies.",
  },
  {
    question: "How does a website help grow my business?",
    answer:
      "A website builds trust, authority, and high-conversion traffic, generating leads for your business.",
  },
  {
    question: "Will my website work on all devices and browsers?",
    answer:
      "No, BizzBuzz creates device-compatible websites that are highly optimized and responsive.",
  },
  {
    question: "Will AI replace website developers?",
    answer:
      "No, AI cannot copy human strategies and ideas, and according to the Google 2026 update, website content must also be human-written.",
  },
  {
    question: "Can you integrate AI into my website?",
    answer:
      "Yes, AI can be integrated for chatbots, automation, personalization, and smarter user experience.",
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

export default function WebDevelopment() {
  return (
    <>
      <ServicesHero
        heading="Top Website Development Services in Prayagraj"
        description="We write smart and easy code that helps your business grow. From
        websites to custom solutions, our work makes things smooth, trusted, and
        result-driven."
        img="/web-dev.webp"
      />

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center items-center mb-10 px-5">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/Web-Development-Promotion-Instagram-Post-3.webp"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Why We Are the Best Website Development Services in Prayagraj
          </h2>
          <p>
            At BizzBuzz Creations, we provide scalable custom web development to elevate your brand presence. 
            Whether you are a retail & e-commerce store, local service provider, healthcare & education, real estate & PropTech, 
            finance & banking, or manufacturing & sales. Our top-rated web developers & professional web designers create high-performance 
            & AI-integrated web designs for all industries across India. Our vision is to innovate & integrate every day your brand growth with our best web development service in India.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading="Wordpress Development Services"
            description="As the best web development services in India. Our WordPress development experts turn your business into a global store. We provide high-performance websites, which helps to build a high Google ranking website and has strong technology for security purposes, as it provides AI-driven threat detection. We deliver an intelligent and user-retaining website. Modern WordPress integrates your global store with voice search or AI search engines."
            imageUrl="/wordpress.png"
          />
          <ServiceCard
            heading="Shopify Development Services"
            description="As a top e-commerce web development service in India. Our Shopify development experts turn your business into a global store. Shopify offers fast loading features along with excellent UI/UX design. It is ideal for brands that want to sell globally without managing multiple stores. Every customer wants the fastest one-click checkout. Its AI integration provides users with automated content and product details at scale."
            imageUrl="/online-shop.png"
          />
          <ServiceCard
            heading="PHP web Application Development Services"
            description="As a top PHP web application company in India. Our full-stack PHP developer turns your business website future-ready. Modernizing a legacy PHP application fills the gap three times faster than the old version, which helps in building a high Google ranking website that has more chances of high conversion. Security aspects are also very strong with modern PHP, which prevents it from getting hacked."
            imageUrl="/web-design.svg"
          />
          <ServiceCard
            heading="REACT.JS & NEXT.JS Development Services"
            description="As a custom React.js development agency and Next.js web development agency. Our web developers work to provide your website with high-performing architecture and AI-integrated frontends. Next.js supports server-side rendering, which increases your website's Google ranking faster, and conversion rates increase three times. It provides hundreds of features to your new business, which makes your business website future-ready."
            imageUrl="/web-design.svg"
          />
          <ServiceCard
            heading="Website Maintenance & Redesigning"
            description="As a web design company in Prayagraj. We provide affordable web design services for all small or big businesses in any part of India. If you need emergency website repair services or website redesign services, we are here for you. We redesign the best UI/UX for high conversions. Our professional developers provide Core Web Vitals maintenance, database optimization services, and 24/7 monitoring."
            imageUrl="/web-design.svg"
          />
        </div>            
      </div>

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center items-center mb-5 md:mb-20 px-5 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            WHY CHOOSE BIZZBUZZ CREATIONS?
          </h2>
          <p>
            YOU NEED THE BEST WEBSITE DEVELOPMENT SERVICES IN 2026
            At BIZZBUZZ Creations, we follow a result-driven strategy for your business.
            Our experts build a website for you that not only looks good but also sells. We help you to create an online presence for your business to reach globally, 
            which builds trust among users. At times, you might think that your social media reach might be limited, but a website built by BIZZBUZZ Creations provides 
            you 10 times higher conversion and higher traffic. You can even know the intent of customers from websites, and it provides a higher Google ranking by fixing core web vitals.
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/Web-Development-Promotion-Instagram-Post-4.webp"
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