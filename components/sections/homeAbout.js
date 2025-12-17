import React from "react";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <div className="container px-10 flex flex-wrap justify-center gap-20 items-center mx-auto mb-20">
      <Image src="/banner.png" alt="banner" width={500} height={400} />
      <div>
        <p>About Us</p>
        <h2 className="text-4xl font-bold mb-4">We Are BizzBuzz Creations</h2>
        <p className="max-w-lg mb-6">
          BizzBuzz Creations is a full-service digital marketing agency
          dedicated to helping businesses thrive in the online world. Our team
          of experts specializes in creating customized strategies that drive
          results and deliver measurable ROI.
        </p>
        <button class="relative cursor-pointer inline-flex cursor-pointe r items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span class=" relative text-black px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent hover:dark:text-white leading-5">
            Learn More
          </span>
        </button>
      </div>
    </div>
  );
}
