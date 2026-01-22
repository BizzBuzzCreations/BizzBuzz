import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";

export default function SocialMediaMarketing() {
  return (
    <>
      <ServicesHero
        heading="One-Stop AI Solution for Your Business"
        description="AI is not the future—it’s happening now. Our solutions simplify complex workflows, optimize performance, and fuel business growth."
        img="/aiservice.webp"
      />

      <div className="flex flex-wrap gap-10 lg:gap-20 justify-center items-center mb-20 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/hero (1).webp"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3">The BizzBee AI Advantage</h2>
          <p>
            The BizzBee AI advantage lies in why top brands trust us to
            transform their business—through AI-powered innovation, seamless
            system integration, data-driven insights, scalable growth solutions,
            a reputation trusted by businesses, and continuous support at every
            stage.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-sm group overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end"
                  src="/Dev (1).webp"
                  alt="Home in Countryside"
                />
              </div>

              <div className="p-6 pb-4 group-hover:bg-black duration-[0.3s]">
                <h4 className="mt-1 font-bold text-xl leading-tight truncate group-hover:text-white duration-[0.3s]">
                  AI-Driven Website Development
                </h4>
                <p className="Card-info text-gray-500 mt-2 group-hover:text-white">
                  Builds intelligent, and personalized websites that adapt to
                  user behavior for a browsing experience.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-sm group overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end"
                  src="/SEO.webp"
                  alt="Home in Countryside"
                />
              </div>

              <div className="p-6 pb-4 group-hover:bg-black duration-[0.3s]">
                <h4 className="mt-1 font-bold text-xl leading-tight truncate group-hover:text-white duration-[0.3s]">
                  AI-Driven BPO Chatbots
                </h4>
                <p className="Card-info text-gray-500 mt-2 group-hover:text-white">
                  Automates customer interactions with smart AI chatbots,
                  improving efficiency and client satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-sm group overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end"
                  src="/BPO.webp"
                  alt="Home in Countryside"
                />
              </div>

              <div className="p-6 pb-4 group-hover:bg-black duration-[0.3s]">
                <h4 className="mt-1 font-bold text-xl leading-tight truncate group-hover:text-white duration-[0.3s]">
                  AI-Driven Digital Marketing
                </h4>
                <p className="Card-info text-gray-500 mt-2 group-hover:text-white">
                  Optimizes campaigns and predicts trends using AI insights to
                  maximize engagement and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap px-5 gap-10 lg:gap-20 justify-center items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-5">
            Let BizzBee AI Build Your Dream Website Effortlessly
          </h2>
          <p className="mb-5">
            Building a website used to be complex and time-consuming, but with
            BizzBee AI, it’s effortless. Just share your business details or
            ideas, and I’ll create your website — no coding, no stress.
          </p>
          <p>
            From design to layout and content, BizzBee AI handles it all, so you
            can focus on growing your business.
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/ai-img.webp"
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
