import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          About BizzBuzz Creations
        </h1>
        <p className="max-w-xl mb-10">
          BizzBuzz Creations is a results-driven digital marketing agency in
          Prayagraj helping businesses grow their online presence, generate
          quality leads, and build long-term brand value. We combine data-backed
          strategies, creative execution, and the latest Google-approved
          practices to deliver measurable growth for startups, local businesses,
          and established brands.
        </p>
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
