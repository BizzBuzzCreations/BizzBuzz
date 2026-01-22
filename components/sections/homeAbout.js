import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <div className="px-10 py-10 flex flex-wrap justify-center gap-10 items-center mx-auto mb-20">
      <div className="md:text-start text-center">
        <p>About Us</p>
        <h2 className="md:text-4xl text-3xl font-bold mb-4">
          We Are BizzBuzz Creations
        </h2>
        <p className="max-w-lg mb-6">
          BizzBuzz Creations is a full-service digital marketing agency
          dedicated to helping businesses thrive in the online world. Our team
          of experts specializes in creating customized strategies that drive
          results and deliver measurable ROI.
        </p>
        <Link href="/about" className="inline-block">
          <button className="relative cursor-pointer inline-flex cursor-pointe r items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className=" relative text-black px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent hover:dark:text-white leading-5">
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
