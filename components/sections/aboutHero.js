import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AboutHero() {
  return (
    <div
      className="min-h-[90vh] md:pt-50 pt-30 lg:text-left text-center text-white gap-10 flex 2xl:px-15 px-5 lg:flex-row flex-col justify-center items-center bg-gray-100 pb-30 mb-10"
      style={{
        background: "radial-gradient(circle at top, #1c1c1c, #000000)",
      }}
    >
      <div>
        <h1 className="md:text-3xl xl:text-4xl text-xl font-bold mb-4">
          Digital Marketing Agency in India — Bizzbuzz Creations
        </h1>
        <h2 className="md:text-3xl xl:text-2xl text-xl font-bold mb-4">
          Turning Bold Ideas Into Digital Success Stories
        </h2>
        <p className="max-w-xl mb-10">
          We don't just run campaigns — we build brands that people remember, trust, and search for. From strategy to execution, 
          Bizzbuzz Creations helps Indian businesses grow online with data-driven digital marketing solutions designed for real results in 2026 and beyond.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>90+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>50+ Happy Clients Across India</span>
          </div>
        </div>
        <br></br>
        <Link href="/contact" className="inline-block">
          <button className="animated-button mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Free Audit</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </Link>
      </div>
      <Image
        src="/teamPic.webp"
        alt="about-hero-img"
        width={500}
        height={500}
      />
    </div>
  );
}
