import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import { Target } from "lucide-react";

export default function BusinessConsultancy() {
  return (
    <>
      <ServicesHero
        heading="Business Consultancy Services in Prayagraj"
        description="Business consultancy provides expert advice to improve operations, increase efficiency, solve problems, and drive growth, helping businesses achieve strategic goals."
        img="/businesscons.webp"
      />

      <div className="flex flex-wrap px-5 gap-10 lg:gap-20 justify-center items-center mb-20 mt-10">
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
            Why Choose Bizz Buzz Creations for Business Consultancy?
          </h2>
          <p>
            Bizz Buzz Creations offers expert business consultancy with
            innovative solutions, streamlined processes, and tailored
            strategies. We focus on driving growth, enhancing efficiency, and
            overcoming challenges to ensure long-term business success.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-5 text-center">What We Offer</h2>
        <p className="max-w-4xl mx-auto text-center mb-10">
          Business consultancy identifies key challenges, provides expert
          solutions, optimizes processes, and drives strategic change, helping
          businesses overcome obstacles and grow.
        </p>
        <div className="flex flex-wrap max-w-5xl mx-auto border-b-2  pb-5 justify-between items-center mb-10 gap-10">
          <h4 className="text-xl font-bold mb-2">Innovation Boost</h4>
          <p className="max-w-lg">
            Introduces fresh ideas and creative solutions to help businesses
            stay competitive and adapt to industry trends.
          </p>
        </div>
        <div className="flex flex-wrap max-w-5xl mx-auto border-b-2  pb-5 justify-between items-center mb-10 gap-10">
          <h4 className="text-xl font-bold mb-2">Decision-Making</h4>
          <p className="max-w-lg">
            Offers an unbiased, outside perspective to make informed,
            data-driven decisions without internal biases.
          </p>
        </div>
        <div className="flex flex-wrap max-w-5xl mx-auto border-b-2  pb-5 justify-between items-center mb-10 gap-10">
          <h4 className="text-xl font-bold mb-2">Scalable Growth</h4>
          <p className="max-w-lg">
            Develops scalable strategies that support sustainable business
            growth while ensuring resources are used effectively.
          </p>
        </div>
        <div className="flex flex-wrap max-w-5xl mx-auto border-b-2  pb-5 justify-between items-center mb-10 gap-10">
          <h4 className="text-xl font-bold mb-2">Market Expansion</h4>
          <p className="max-w-lg">
            Provides insights into new markets, helping businesses expand their
            reach and enter new geographic or product sectors.
          </p>
        </div>
        <div className="flex flex-wrap max-w-5xl mx-auto border-b-2  pb-5 justify-between items-center mb-20 gap-10">
          <h4 className="text-xl font-bold mb-2">Leadership development</h4>
          <p className="max-w-lg">
            Helps enhance leadership skills, fostering better management
            practices and a strong company culture.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap px-5 gap-10 lg:gap-20 justify-center items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl md:text-left">
          <h2 className="text-3xl font-bold mb-5">
            What Makes Business Consultancy Essential?
          </h2>
          <div className="flex justify-center items-center mb-5">
            <Target size={70} className="text-blue-600 mr-4" />
            <div className="">
              <h4 className="text-xl font-bold mb-2">
                Expert Problem-Solving:
              </h4>
              <p>
                Provides specialized knowledge to address complex business
                challenges and find effective solutions.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Target size={70} className="text-blue-600 mr-4" />
            <div className="">
              <h4 className="text-xl font-bold mb-2">Improved Efficiency:</h4>
              <p>
                Streamlines processes and operations, leading to reduced costs
                and increased productivity.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Target size={70} className="text-blue-600 mr-4" />
            <div className="">
              <h4 className="text-xl font-bold mb-2">Strategic Growth:</h4>
              <p>
                Helps develop long-term strategies for expansion, innovation,
                and competitive advantage.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Target size={70} className="text-blue-600 mr-4" />
            <div className="">
              <h4 className="text-xl font-bold mb-2">Objective Perspective:</h4>
              <p>
                Offers an unbiased, external viewpoint to guide decision-making
                and ensure optimal business outcomes.
              </p>
            </div>
          </div>
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

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
