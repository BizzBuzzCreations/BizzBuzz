import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";

export default function SearchEngineOptimization() {
  return (
    <>
      <ServicesHero
        heading="Paid Promotion Services in Prayagraj"
        description="Top paid promotion services in Prayagraj to boost brand visibility, drive targeted traffic, generate quality leads, and increase sales through result-driven advertising strategies."
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
            Best Paid Promotion services in prayagraj
          </h2>
          <p>
            Searching for the best Paid Promotion services in Prayagraj? You’re at the
            right place. At Bizz Buzz Creations, you’ll find complete Paid Promotion
            solutions under one roof to boost your business.
          </p>
          <p>
            In today’s competitive digital landscape, paid promotions are essential for achieving faster visibility and measurable business growth. 
            We offer professional paid promotion services in Prayagraj, helping businesses reach their target audience, generate qualified leads, and maximize return on investment.
            Our strategies are data-driven, transparent, and tailored to meet the unique goals of each client.
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
                        src="/google ad.webp"
                        alt="Home in Countryside"
                      />
                    </div>
      
                    <div className="p-6 pb-4 group-hover:bg-black duration-[0.3s]">
                      <h4 className="mt-1 font-bold text-xl leading-tight truncate group-hover:text-white duration-[0.3s]">
                        Google Ads (Search, Display & YouTube Ads)
                      </h4>
                      <p className="Card-info text-gray-500 mt-2 group-hover:text-white">
                        Google Ads place your business at the top of search results to reach high-intent customers instantly. 
                        Through search, and YouTube ads, they boost visibility, and engagement
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
                        src="/social media.webp"
                        alt="Home in Countryside"
                      />
                    </div>
      
                    <div className="p-6 pb-4 group-hover:bg-black duration-[0.3s]">
                      <h4 className="mt-1 font-bold text-xl leading-tight truncate group-hover:text-white duration-[0.3s]">
                        Social Media Advertising
                      </h4>
                      <p className="Card-info text-gray-500 mt-2 group-hover:text-white">
                        Social media advertising helps businesses reach the right audience, boost brand awareness, drive traffic, 
                        and generate leads through targeted and engaging ad campaigns.
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
                        src="/lead generation.webp"
                        alt="Home in Countryside"
                      />
                    </div>
      
                    <div className="p-6 pb-4 group-hover:bg-black duration-[0.3s]">
                      <h4 className="mt-1 font-bold text-xl leading-tight truncate group-hover:text-white duration-[0.3s]">
                        Lead Generation Campaigns
                      </h4>
                      <p className="Card-info text-gray-500 mt-2 group-hover:text-white">
                        Lead generation campaigns attract and convert potential customers into high-quality, 
                        and sales-ready leads through targeted audience, ads and optimized landing pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
      </div>

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center px-5 items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">Why Paid Promotion is Important?</h2>
          <p>
            Paid promotion helps businesses achieve faster, measurable growth by delivering instant visibility to the right audience. 
            It allows precise targeting based on location, interests, and user behavior, ensuring efficient use of marketing budgets. 
            With real-time performance tracking and flexible scaling, paid promotions improve reach, engagement, and return on investment while strengthening brand awareness, 
            credibility, and long-term growth.
          </p>
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

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
