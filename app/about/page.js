import AboutHero from "@/components/sections/aboutHero";
import ClientLogo from "@/components/sections/clientLogo";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA-2";
import Reviews from "@/components/sections/reviews";
import React from "react";
import Image from "next/image";
import {
  Target,
  Rocket,
  Search,
  Goal,
  TrendingUp,
  ChartNoAxesCombined,
  Heart,
  Building,
  GraduationCap,
  Hospital,
  MapPin,
  Handshake,
} from "lucide-react";
import OurServices from "@/components/sections/ourServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function About() {
  return (
    <>
      <AboutHero />

      {/* Who we are */}
      <div className="">
        <h2 className="text-3xl font-bold mb-10 text-center">Who We Are</h2>
        <div className="mx-auto 2xl:px-15 px-5 flex flex-wrap justify-center items-center gap-15 mb-20">
          <Image
            className="rounded-lg shadow-lg shadow-gray-400"
            src="/team.webp"
            alt="team"
            width={500}
            height={500}
          />
          <div>
            <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4">
              A place where innovation meets excellence! For almost a year,
              we’ve been helping businesses with a full range of services
              designed to drive success. With a team of skilled experts, we
              create solutions that set new standards and encourage steady
              growth.
            </p>
            <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4">
              At Bizz Buzz Creation, we know how quickly things change in
              business—and we’re built to keep up. From helping startups get
              noticed online to supporting established brands with fresh ideas,
              we’ve got you covered. If you’re looking for digital marketing
              services in Prayagraj, we’re right here to help you grow.
            </p>
            <p className="text-lg leading-relaxed text-center max-w-xl mx-auto">
              We’ve spent the past year helping businesses grow with sharp
              strategies and real results. Wondering if your marketing is doing
              its job? Check out our take: 10 Ways to Tell if Your Marketing is
              Working.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="mx-auto 2xl:px-15 px-5 flex flex-wrap justify-center items-start gap-15 mb-25">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Mission and Vision
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="bg-gray-200 flex flex-col items-center p-5 rounded-xl max-w-lg shadow-lg shadow-gray-400 border border-gray-300">
              <Target size={40} className="mb-2" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4">
                To empower businesses with transparent, performance-focused
                digital marketing strategies that deliver sustainable growth,
                not just temporary visibility.
              </p>
            </div>
            <div className="bg-gray-200 flex flex-col items-center p-5 rounded-xl max-w-lg shadow-lg shadow-gray-400 border border-gray-300">
              <Rocket size={40} className="mb-2" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4">
                To become a trusted digital marketing agency in Prayagraj and
                across India, known for results, integrity, and long-term client
                success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes BizzBuzz Creations Different */}
      <div className="mx-auto 2xl:px-15 px-5 gap-15 mb-25">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            What Makes BizzBuzz Creations Different
          </h2>
          <div className="">
            <ul className="list-disc list-inside max-w-5xl mx-auto text-lg leading-relaxed p-10 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
              <li className="mb-4">
                <strong>Deep Local Market Expertise:</strong> We don’t believe
                in a one-size-fits-all approach. Every business is unique, and
                so are our strategies.
              </li>
              <li className="mb-4">
                <strong>Future-Ready, Google-Friendly SEO:</strong>
                Google-friendly, future-ready SEO strategies.
              </li>
              <li className="mb-4">
                <strong>Data-Driven Strategy & Insights:</strong>
                Data-driven decisions backed by analytics and performance
                tracking.
              </li>
              <li className="mb-4">
                <strong>Transparent Communication & Reporting:</strong>
                Clear communication and transparent reporting.
              </li>
              <li className="mb-4">
                <strong>Fully Customized SEO Solutions:</strong>
                Customized strategies—not one-size-fits-all packages.
              </li>
              <li className="mb-4">
                <strong>ROI-Focused Growth Support:</strong>
                Dedicated support focused on ROI and conversions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <OurServices />

      {/* Our Proven Work Process */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-5 text-center">
          Our Proven Work Process
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-6">
          We follow a clear, result-oriented process to ensure consistent
          growth:
        </p>
        <div className="container mx-auto px-10 flex flex-wrap justify-center items-center gap-10">
          <div className="relative bg-gray-200 p-5 rounded-lg max-w-sm shadow-lg shadow-gray-400 border border-gray-300">
            <Search size={30} className="mb-2 " />
            <h3 className="text-2xl font-semibold mb-2">
              Business & Competitor Analysis
            </h3>
            <p className="text-lg leading-relaxed max-w-xl mx-auto mb-4">
              Understanding your market and competition.
            </p>
            <div className="absolute right-3 -top-3 px-4 py-2 bg-black rounded-full">
              <span className="text-xl text-white">
                <strong>1</strong>
              </span>
            </div>
          </div>
          <div className="relative bg-gray-200 p-5 rounded-lg max-w-sm shadow-lg shadow-gray-400 border border-gray-300">
            <Goal size={30} className="mb-2 " />
            <h3 className="text-2xl font-semibold mb-2">Strategy & Planning</h3>
            <p className="text-lg leading-relaxed max-w-xl mx-auto mb-4">
              Creating a customized digital roadmap aligned with your business
              goals.
            </p>
            <div className="absolute right-3 -top-3 px-4 py-2 bg-black rounded-full">
              <span className="text-xl text-white">
                <strong>2</strong>
              </span>
            </div>
          </div>
          <div className="relative bg-gray-200 p-5 rounded-lg max-w-sm shadow-lg shadow-gray-400 border border-gray-300">
            <TrendingUp size={30} className="mb-2 " />
            <h3 className="text-2xl font-semibold mb-2">
              Execution & Optimization
            </h3>
            <p className="text-lg leading-relaxed max-w-xl mx-auto mb-4">
              Implementing SEO, paid ads, and content strategies with continuous
              optimization.
            </p>
            <div className="absolute right-3 -top-3 px-4 py-2 bg-black rounded-full">
              <span className="text-xl text-white">
                <strong>3</strong>
              </span>
            </div>
          </div>
          <div className="relative bg-gray-200 p-5 rounded-lg max-w-sm shadow-lg shadow-gray-400 border border-gray-300">
            <ChartNoAxesCombined size={30} className="mb-2 " />
            <h3 className="text-2xl font-semibold mb-2">
              Tracking, Scaling & Growth
            </h3>
            <p className="text-lg leading-relaxed max-w-xl mx-auto mb-4">
              Tracking performance and scaling what works with real data.
            </p>
            <div className="absolute right-3 -top-3 px-4 py-2 bg-black rounded-full">
              <span className="text-xl text-white">
                <strong>4</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* industries we serve */}
      <div className="container mb-20 bg-[#c2dae0] py-20 pt-10 max-w-6xl mx-auto px-10 rounded-2xl border border-[#A1C5CC] shadow-lg shadow-gray-400">
        <h2 className="text-3xl font-bold mb-15 text-center">
          Industries We Serve
        </h2>
        <div className="mx-auto max-w-5xl px-10 flex flex-wrap justify-center items-center gap-15">
          <div className="flex flex-col justify-center items-center gap-2 w-[250px]">
            <Heart size={40} />
            <p>Wedding & Event Businesses</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[250px]">
            <Building size={40} />
            <p>Real Estate & Construction</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[250px]">
            <GraduationCap size={40} />
            <p>Education & Coaching Institutes</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[250px]">
            <Hospital size={40} />
            <p>Healthcare & Wellness</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[250px]">
            <MapPin size={40} />
            <p>Local Service Providers</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[250px]">
            <Handshake size={40} />
            <p>Startups, SMEs & Personal Brands</p>
          </div>
        </div>
      </div>

      <CTA2 />
      <WhyChooseUs />
      <ClientLogo />
      <Reviews />
      <Counter />
      <CTA />
    </>
  );
}
