"use client";
import React from "react";
import Snowfall from "react-snowfall";

export default function ServicesHero({ heading, description }) {
  return (
    <div className='px-5 text-white text-center flex flex-col justify-center items-center h-[80vh] bg-[url("/black-bg.jpg")] bg-cover bg-no-repeat'>
      <Snowfall color="white" />
      <h1 className="md:text-5xl text-3xl mb-6">{heading}</h1>
      <p className="max-w-3xl mx-auto mb-8">{description}</p>
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
  );
}
