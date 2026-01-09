import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import { Target } from "lucide-react";

export default function BPO() {
  return (
    <>
      <ServicesHero
        heading="BPO (Business Process Outsourcing) Services in Prayagraj"
        description="Looking for the best BPO in Prayagraj? Get expert support, cost savings, and efficient business solutions from trusted local providers."
      />

      <div className="flex flex-wrap px-5 lg:gap-20 justify-center items-center mb-10 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/jjj-2.png"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Why you’ll love working with Bizz Buzz Creations: "What We Provide"
          </h2>
          <p>
            Our inbound services are designed to enhance customer experience and
            sales performance. We offer customer support, technical support,
            help desk services, appointment scheduling, virtual receptionist
            solutions, and inbound sales services to ensure seamless
            communication with your customers.
          </p>
          <p>
            Our outbound services support business growth with an international
            client base, on-time payouts, comprehensive training and resources,
            data dialer and VoIP solutions, full IT support, and CRM systems to
            track and monitor leads effectively.
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

      <div className="flex flex-wrap px-5 gap-10 lg:gap-20 justify-center items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose BBC for Business Processing Outsourcing (BPO)
          </h2>
          <p className="mb-5">
            Bizz Buzz Creations stands out for delivering top-quality BPO in
            Prayagraj with customized support that fits your business goals. Our
            team ensures smooth operations, cost savings, and dependable service
            every step of the way.
          </p>
          <div className="flex justify-center items-center mb-5">
            <Target size={70} className="text-blue-600 mr-4" />
            <div className="">
              <h4 className="text-xl font-bold mb-2">Customized Solutions:</h4>
              <p>
                We provision our BPO for your specific business needs so that it
                guarantees a seamless integration and utmost efficiency.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Target size={70} className="text-blue-600 mr-4" />
            <div className="">
              <h4 className="text-xl font-bold mb-2">
                Expert Team and Technology:
              </h4>
              <p>
                Utilizing its expertise and technology can improve processes
                while decreasing costs to maximize productivity.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/bpo-img.png"
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
