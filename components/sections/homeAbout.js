import React from "react";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden min-h-[460px] sm:min-h-[500px] md:min-h-[560px] flex items-center">
      {/* Background photo — fades from solid white behind the text (left)
          into the photo itself (right), same idea as the reference. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/building.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,96,176,0.1) 1px, transparent 1px), linear-gradient(90deg, #ffffff 0%, #ffffff 42%, rgba(255,255,255,0.82) 58%, rgba(255,255,255,0.25) 82%, rgba(255,255,255,0) 100%)",
          backgroundSize: "22px 22px, 100% 100%",
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-xl md:text-start text-center mx-auto md:mx-0">
          <p className="text-gray-900">About Us</p>
          <h2 className="md:text-4xl text-3xl font-bold mb-4">
            We Are BizzBuzz Creations
          </h2>
          <p className="max-w-lg mb-6 text-gray-900">
            We're not just another agency running the same playbook for every client. <b>BizzBuzz Creations</b> is built on the idea that real growth comes from understanding a business first and marketing it second. That's why local businesses trust us as one of the <b>best digital marketing companies</b> in Prayagraj  and why brands from Allahabad to Lucknow to Delhi rely on us as they expand their digital footprint across India.
            Our team blends SEO expertise, AI-assisted campaign optimization, paid advertising know-how, and sharp creative work to deliver digital marketing solutions that actually move the needle  more visibility, more leads, and more revenue, no matter which city or state your customers are searching from.
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
      </div>
    </section>
  );
}
