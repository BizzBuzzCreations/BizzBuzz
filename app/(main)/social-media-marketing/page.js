import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import SocialMediaFAQ from "@/components/sections/socialMediaFAQ";

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
        heading="Your Social Media Marketing Partner - Growing Brands Across India"
        description="BizzBuzz Creations builds smart social media marketing strategies for brands across India, with the personal touch of a Prayagraj-based team that understands your business. Instagram, Facebook, and AI-powered marketing — all working together to bring you real growth."
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
            Social Media Marketing Agency in Prayagraj, Trusted Across India
          </h2>
          <p>
             BizzBuzz Creations is a social media marketing agency based in Prayagraj, proudly serving businesses across all of India. 
             We understand that every brand has a different story, audience, and goal, which is why we don't believe in one-size-fits-all packages. 
             Our team builds result-driven social media marketing strategies that combine creative content, targeted Facebook and Instagram ads, LinkedIn marketing for B2B growth, 
             and AI-powered tools to keep your brand ahead in 2026.
          </p>
          <p>
            Being rooted in Prayagraj gives us a strong understanding of local businesses and Indian audiences, while our approach is carefully built to help brands scale nationally, from small cities to major metros across the entire country. 
            </p>
            <br />
            <p>
            From social media management and reels marketing to Meta ads and lead generation, 
            BizzBuzz Creations offers complete social media marketing services under one roof, helping your brand grow steadily and consistently across India, one smart campaign at a time. 
            </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">OUR CORE SERVICE</h2>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading=" Social Media Management Services"
            description="We handle your daily posting, content calendar, and audience engagement so your brand stays active and consistent. Our social media management services keep your page professional, on-brand, and always ready to convert visitors into loyal followers."
            imageUrl="/trend-up-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Instagram Marketing Agency"
            description="From reels to story strategy, our Instagram marketing agency team builds real engagement, not just likes. We create scroll-stopping content and run targeted Instagram ads that turn your followers into genuine paying customers."
            imageUrl="/image-1-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Facebook & Meta Ads Agency"
            description="As a performance-focused Facebook and Meta ads agency, we run high-converting campaigns backed by data. Every rupee you spend is tracked and optimized to bring you real leads, not just clicks and impressions."
            imageUrl="/users-svgrepo-com.svg"
          />
          <ServiceCard
            heading="LinkedIn Marketing for B2B Growth"
            description="Our LinkedIn marketing strategy is built for B2B social media marketing and lead generation. We help you connect with decision-makers, build authority in your industry, and turn LinkedIn into a steady source of business leads."
            imageUrl="/target-arrow-svgrepo-com.svg"
          />
          <ServiceCard
            heading="AI Social Media Marketing"
            description="We use AI marketing tools and social media automation to plan smarter content, predict trends early, and post at the best time for engagement. This AI-powered approach means faster results and lower cost per lead for your brand."
            imageUrl="/linechart-1-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Reels & Short Video Marketing"
            description="Short-form video drives the most reach in 2026, and our reels marketing and video marketing agency team knows how to use it. We script, shoot, and edit scroll-stopping reels that boost visibility and bring your brand in front of new audiences daily."
            imageUrl="/trend-up-svgrepo-com.svg"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col px-5 lg:gap-20 justify-center items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose BizzBuzz Creations:
          </h2>
          <p className="mb-5">
            We combine creative content, sharp ad targeting, and AI-backed strategy to get you real results, not just vanity numbers. 
            Being based in Prayagraj means we understand Indian audiences closely, while our strategies are built to help brands grow nationally 
            too — from your city to the rest of India.
          </p>
          <p>
            Whether you're a local business in Prayagraj or a growing brand anywhere in India, BizzBuzz Creations shapes every campaign around your audience, 
            budget, and goals. No bloated packages, no copy-paste templates — just social media marketing that's built around what actually works for you.
          </p>
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

      <SocialMediaFAQ />

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
