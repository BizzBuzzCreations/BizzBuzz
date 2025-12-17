import React from "react";
import Image from "next/image";

export default function WhyMakesUs() {
  return (
    <div className="container px-10 flex flex-wrap justify-center gap-20 items-center mx-auto mb-20">
      <Image
        src="/why-choose-image.png"
        alt="banner"
        width={400}
        height={400}
      />
      <div>
        <h2 className="text-4xl font-bold mb-10 max-w-2xl">
          Why Brands Choose BizzBuzz Creations
        </h2>
        <div className="flex flex-wrap justify-content items-center max-w-2xl gap-3">
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg">
            <h5 className="font-bold mb-2">97% Client Retention</h5>
            <p className="text-sm">
              a regularly updated website or part of a website featuring posts,
              usually in reverse chronological order, sharing
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg">
            <h5 className="font-bold mb-2">97% Client Retention</h5>
            <p className="text-sm">
              a regularly updated website or part of a website featuring posts,
              usually in reverse chronological order, sharing
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg">
            <h5 className="font-bold mb-2">97% Client Retention</h5>
            <p className="text-sm">
              a regularly updated website or part of a website featuring posts,
              usually in reverse chronological order, sharing
            </p>
          </div>
          <div className="max-w-xs bg-gray-200 p-5 rounded-lg">
            <h5 className="font-bold mb-2">97% Client Retention</h5>
            <p className="text-sm">
              a regularly updated website or part of a website featuring posts,
              usually in reverse chronological order, sharing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
