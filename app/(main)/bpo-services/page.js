import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import BPOServicesFAQ from "@/components/sections/bpoServicesFAQ";
import {
  Target,
  Bot,
  PhoneCall,
  Workflow,
  FileText,
  UserCheck,
  Clock,
} from "lucide-react";

  export const metadata = {
    title: "BPO Outsource Service Provider in UAE",
    description:
      "We handle the complex processes so you can focus on what matters most—your success. With our support, growth becomes easier, smoother, and stress-free.",
      alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services",
  },
  };

export default function BPO() {
  return (
    <>
      <ServicesHero
        heading="Outsourcing That Feels Like Your Own Team, Just Not On Your Payroll."
        description="Bizzbuzz Creations runs call center outsourcing, AI-powered support, and back-office operations from Prayagraj for businesses across India-no jargon, no black-box vendor, just a team that delivers"
        img="/bpo.jpg"
      />

      <div className="flex lg:flex-row flex-col px-5 lg:gap-20 justify-center items-center mb-10 mt-10">
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
            More Than Outsourcing A Team That Thinks Like You Do
          </h2>
          <p>
            Outsourcing often feels like handing your business to a stranger. You lose visibility into what's said to customers, 
            how data is handled, and whether anyone actually cares about the outcome the way you do. Bizzbuzz Creations was built in Prayagraj to fix exactly that gap. 
            We started as a small BPO services provider with one rule: every account should run like an extension of the client's own team, 
            not a distant vendor relationship.
          </p>
          <p>
            Today, we work with startups taking their first step into outsourcing services, small businesses in Allahabad needing reliable support, 
            and growing companies across India that need a full-scale BPO company for inbound and outbound calling, data entry, and 24/7 customer support outsourcing. 
            Whatever the size of your business, the approach stays the same:  we learn your process first, then build a team around it, 
            instead of forcing your business into a generic template.

          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Handle</h2>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading="AI-Powered BPO & Call Center Solutions"
            description="We layer AI call center solutions on top of real agents' smart call routing, live transcription, and chatbot customer support services that pick up repetitive questions instantly. Your team only steps in for calls that truly need a human touch, so nothing slips through and nothing feels robotic."
            icon={Bot}
          />
          <ServiceCard
            heading="Inbound & Outbound Call Center Services"
            description="From answering customer queries to running outbound sales and collection calls, our inbound call center services and outbound call center services are staffed by agents trained on your scripts, tone, and product, not a generic script read out from a random floor."
            icon={PhoneCall}
          />
          <ServiceCard
            heading="Business Process Automation Services"
            description="Manual, repetitive processes are where most companies quietly lose hours every week. Our business process automation services map your workflow first, then automate the boring middle, freeing your in-house team to focus on decisions, not data-copying."
            icon={Workflow}
          />
          <ServiceCard
            heading="Data Entry & Back Office Outsourcing"
            description="Invoices, records, CRM updates, reconciliations — our data entry outsourcing and back office outsourcing desks work with the same accuracy checks a large enterprise would demand, at a cost a small business can actually plan around, including finance and accounting outsourcing support."
            icon={FileText}
          />
          <ServiceCard
            heading="Virtual Assistant & Startup Outsourcing"
            description="Not every business needs a 50-seat floor. Our virtual assistant services and startup outsourcing services let founders and small teams hand off scheduling, support and admin work through flexible remote team outsourcing, scaling up only when the workload genuinely demands it."
            icon={UserCheck}
          />
          <ServiceCard
            heading="24/7 & E-commerce Customer Support"
            description="Online stores and growing brands can't afford support that sleeps. Our 24/7 support outsourcing services and e-commerce customer support outsourcing cover order queries, returns, and chat support round the clock, with chatbot support services handling the late-night rush."
            icon={Clock}
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col px-5 gap-10 lg:gap-20 justify-center items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose Bizzbuzz Creations
          </h2>
          <p className="mb-5">
            Most BPO companies sell you seats and shifts. We sell you outcomes and stay accountable for them. 
            Every account starts with a real process audit, not a sales pitch, so the team we build solves your actual problem.
          </p>
          <p>
            You get weekly reporting, call recordings on request, and a direct point of contact — never a support ticket lost in a queue. 
            We scale with your business, not ahead of it, and use AI only where it genuinely helps, while trained agents handle everything that needs real judgment. 
            Your data stays protected under strict, compliant practices, always.
          </p>
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

      <BPOServicesFAQ />

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}
