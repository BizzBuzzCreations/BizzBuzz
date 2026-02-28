import React from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="mx-10 flex flex-wrap justify-center gap-10 items-center px-5 mx-auto mb-20">
      <Image
        src="/why-choose-image.png"
        alt="banner"
        width={400}
        height={400}
      />
      <div className="lg:text-left text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-2xl">
          Why Brands Choose BizzBuzz Creations
        </h2>
        <div className="flex flex-wrap justify-content items-center max-w-2xl gap-3">
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg mx-auto border border-gray-300 shadow-md shadow-gray-400">
            <h3 className="font-bold mb-2">All-in-One-Expertise</h3>
            <p className="text-sm">
              Leverage our all-in-one IT, digital marketing, and consulting
              services, strategically designed to fuel your business growth and
              success.
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg mx-auto border border-gray-300 shadow-md shadow-gray-400">
            <h3 className="font-bold mb-2">Tailored for You</h3>
            <p className="text-sm">
              We design customized strategies tailored to your specific business
              needs and objectives, ensuring optimal results and long-term
              success.
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg mx-auto border border-gray-300 shadow-md shadow-gray-400">
            <h3 className="font-bold mb-2">Proven Impact</h3>
            <p className="text-sm">
              Our proven track record deliver measurable results, enhancing
              visibility, driving traffic, and significantly increasing profits
              for business like yours.
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg mx-auto border border-gray-300 shadow-md shadow-gray-400">
            <h3 className="font-bold mb-2">Trusted Assistance</h3>
            <p className="text-sm">
              BizzBuzz Creations offers continuous support and optimization and
              keeping your digital footprint strong and impactful in the
              saturated market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
