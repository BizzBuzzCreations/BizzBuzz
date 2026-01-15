import React from "react";

export default function HomeHero() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
      }}
      className=" h-[90vh] mb-10"
    >
      <div className="pt-30 p-10 h-full flex items-center justify-center">
        <div className="z-10 text-center text-white">
          <h1 className="md:text-3xl xl:text-4xl text-xl font-bold mb-4">
            We are the Innovative Digital Marketing agency in India
          </h1>
          <svg className="animated-text" viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              BizzBuzz Creations
            </text>
          </svg>
          <p className="max-w-3xl mb-10 mx-auto">
            At BizzBuzz Creations, we help you attract customers, generate
            leads, and grow revenue with Google Ads, Meta Ads, SEO, Web Design,
            and Content Marketing — all tailored to your business goals.
          </p>
          <button className="animated-button mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Start Now</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
