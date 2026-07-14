import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <div className="px-10 py-10 flex flex-col lg:flex-row  justify-center gap-10 items-center mx-auto">
      <div className="md:text-start text-center">
        <p className="text-gray-900">About Us</p>
        <h2 className="md:text-4xl text-3xl font-bold mb-4">
          We Do Not Just Market Brands — We Build Businesses That Grow.

        </h2>
        <p className="max-w-lg mb-6 text-gray-900">
          At <b>BizzBuzz Creations</b>, we believe digital marketing should do more than increase website traffic—it should help your business grow sustainably.<br />
          As a leading <b>digital marketing company in Allahabad</b>, we combine creativity, technology, and data-driven decision-making to help businesses reach the right audience at the right time. 
          Instead of using one-size-fits-all marketing campaigns, we develop customized strategies based on your industry, competitors, customer behavior, and business objectives.
        </p>
        <Link
          href="/about"
          aria-label="Learn more about BizzBuzz Creations"
          className="inline-block"
        >
          <button className="relative cursor-pointer border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
            <span className="relative z-10 group-hover:text-white">
              Learn More
            </span>
          </button>
        </Link>
      </div>
      <Image
        src="/Industry Authority (1).png"
        alt="banner"
        width={500}
        height={500}
        className="xl:w-lg lg:w-md"
      />
    </div>
  );
}
