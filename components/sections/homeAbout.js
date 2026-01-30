import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <div className="px-10 py-10 flex flex-col lg:flex-row  justify-center gap-10 items-center mx-auto">
      <div className="md:text-start text-center">
        <p className="text-gray-900">About Us</p>
        <h2 className="md:text-4xl text-3xl font-bold mb-4">
          We Are BizzBuzz Creations
        </h2>
        <p className="max-w-lg mb-6 text-gray-900">
          BizzBuzz Creations is a full-service digital marketing agency
          dedicated to helping businesses thrive in the online world. Our team
          of experts specializes in creating customized strategies that drive
          results and deliver measurable ROI.
        </p>
        <Link href="/about" className="inline-block">
          <button class="relative cursor-pointer border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg overflow-hidden group">
            <span class="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
            <span class="relative z-10 group-hover:text-white">Learn More</span>
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
