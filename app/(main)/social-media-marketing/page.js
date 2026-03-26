import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Social Media Marketing in Prayagraj",
  description:
    "Social media marketing in Prayagraj to boost your brand, engage customers, and grow online. Let’s take your social media to the next level!",
    alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing",
  },
};

export default function SocialMediaMarketing() {
  return (
    <>
      <ServicesHero
        heading="Social Media Marketing (SMM) Services in Prayagraj"
        description="Services providing Social Media Marketing in prayagraj helps to augment the online presence of businesses, provide engagement to audiences for a better flow, and drive traffic with efficiency."
        img="/socialmedia 02.jpg"
      />

      <div className="flex lg:flex-row flex-col px-5 lg:gap-20 justify-center items-center mb-10 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/smm1 (1).webp"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Best Social Media Marketing Services in Prayagraj
          </h2>
          <p>
            Searching for the best social media marketing services in Prayagraj?
            You’re at the right place. At Bizz Buzz Creations, we provide
            complete SMM solutions under one roof to boost your brand.
          </p>
          <p>
            Prayagraj is a growing hub of colleges, startups, businesses, malls,
            and restaurants. In such competition, social media is not
            optional—it’s essential. Our expert SMM strategies help you increase
            brand awareness, get more followers, engage with customers, and
            generate sales.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading="Social Media Strategy"
            description="Custom plans for Facebook, Instagram, LinkedIn, and more."
            imageUrl="/trend-up-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Content Creation"
            description="Eye-catching posts, reels, videos, and graphics that engage."
            imageUrl="/image-1-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Community Management"
            description="Handling comments, messages, and building brand trust."
            imageUrl="/users-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Paid Advertising"
            description="Targeted ads to boost leads and sales."
            imageUrl="/target-arrow-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Analytics & Reporting"
            description="Tracking growth, engagement, and ROI."
            imageUrl="/linechart-1-svgrepo-com.svg"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col px-5 lg:gap-20 justify-center items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-3">
            Why Social Media Marketing is Important?
          </h2>
          <p className="mb-5">
            Social media marketing in up is where your customers spend most of
            their time. Without it, your business misses out on massive
            opportunities. With the right strategy, social media marketing helps
            you:
          </p>
          <ul className="list-disc ml-5 mt-3 space-y-2">
            <li>Build strong brand awareness and reach the right audience.</li>
            <li>Engage directly with customers and grow relationships.</li>
            <li>Drive traffic, leads, and real conversions.</li>
            <li>Stay ahead of competitors with creative campaigns.</li>
          </ul>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/smm2 (1).webp"
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
