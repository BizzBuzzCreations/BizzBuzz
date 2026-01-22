import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";

export default function WebDevelopment() {
  return (
    <>
      <ServicesHero
        heading="Website Development Services in Prayagraj"
        description="We write smart and easy code that helps your business grow. From
        websites to custom solutions, our work makes things smooth, trusted, and
        result-driven."
        img="/web-dev.webp"
      />

      <div className="flex flex-wrap lg:gap-20 justify-center items-center mb-10 px-5">
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
            At Bizz Buzz Creations, we build websites that speak for your brand.
            Our focus is simple—designs that inspire, performance that delivers,
            and results that matter. But what makes us truly different is the
            bond we create with our clients. For us, it’s not just about
            building a website—it’s about building trust, long-term growth, and
            strong relationships that last beyond the project. That’s why
            businesses trust us as their go-to choice for website services in
            prayagraj.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading="Website Development"
            description="Made as per your needs, our solutions offer flexible options that scale with your business. Each build is optimized for SEO and speed, easy to manage without technical hassle, and fully mobile responsive for a seamless experience across all devices."
            imageUrl="/wordpress.png"
          />
          <ServiceCard
            heading="E-Commerce Website"
            description="MOur platform offers a safe payment system with an easy checkout process, simple product management, and a customer-friendly design. Built to grow with your business, it scales smoothly as your needs expand."
            imageUrl="/online-shop.png"
          />
          <ServiceCard
            heading="UI & UX Design"
            description="Our designs feature a clean and modern look with an easy-to-use interface and smooth navigation flow. Every element is crafted with a strong focus on user experience, creating designs that engage customers and keep them connected."
            imageUrl="/web-design.svg"
          />
        </div>
      </div>

      <div className="flex flex-wrap lg:gap-20 justify-center items-center mb-5 md:mb-20 px-5 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Why BBC is Trusted for Website Development Services in Prayagraj
          </h2>
          <p>
            Why Clients trust us because we have top developers with 3+ years of
            experience, supported by a skilled IT team that simplifies work and
            delivers seamless, client-friendly solutions.
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

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
