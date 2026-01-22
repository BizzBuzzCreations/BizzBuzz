"use client";
import { Handshake, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Snowfall from "react-snowfall";

export default function ServicesHero({ heading, description, img }) {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(86, 167, 229, 1) 0%, rgba(4, 99, 219, 1) 70%)",
      }}
      className="px-5 pt-30 text-white text-center flex flex-col justify-center items-center h-[100vh]"
    >
      {(new Date().getMonth() === 11 || new Date().getMonth() === 0) && (
        <div className="absolute inset-0 z-0">
          <Snowfall color="white" />
        </div>
      )}

      <h1 className="md:text-5xl text-3xl mb-6">{heading}</h1>
      <p className="max-w-3xl mx-auto mb-8">{description}</p>
      <Link href="/contact">
        <button className="animated-button mx-auto mb-10">
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
      </Link>
      <div class="lg:w-lg relative animate-slide-left delay-200">
        <div class="absolute -inset-4 bg-berry-green/20 rounded-3xl -z-10"></div>
        <div class="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <Image
            src={img}
            alt="about-hero-img"
            width={400}
            height={400}
            class="w-full h-auto object-cover"
          />
        </div>

        {/* <!-- Floating Berry Elements --> */}
        <div class="absolute -top-6 -left-6 bg-white p-3 rounded-xl shadow-lg w-36 animate-float delay-300">
          <div class="w-10 h-10 rounded-full bg-black/50 text-berry-red flex items-center justify-center mb-2">
            <Rocket />
          </div>
          <h4 class="font-bold text-gray-800 text-sm">2× Speed</h4>
          <p class="text-xs text-gray-600">Faster Results</p>
        </div>

        <div class="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg w-36 animate-float delay-400">
          <div class="w-10 h-10 rounded-full bg-black/50 text-berry-green flex items-center justify-center mb-2">
            <Handshake />
          </div>
          <h4 class="font-bold text-gray-800 text-sm">24/7 Support</h4>
          <p class="text-xs text-gray-600">Always Available</p>
        </div>
      </div>
    </div>
  );
}
