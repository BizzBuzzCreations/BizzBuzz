import React from "react";
import Script from "next/script";

export default function Reviews() {
  const reviews = [
    {
      name: "raj",
      para: "This is the best digital marketing and website development agency in Prayagraj. They provided me with genuine leads and effective business strategies for my business growth. Unlike others, they delivered tangible results rather than just taking payments without any improvement.",
      img: "/banner.png",
    },
    {
      name: "raj",
      para: "This is the best digital marketing and website development agency in Prayagraj. They provided me with genuine leads and effective business strategies for my business growth. Unlike others, they delivered tangible results rather than just taking payments without any improvement.",
      img: "/banner.png",
    },
    {
      name: "raj",
      para: "This is the best digital marketing and website development agency in Prayagraj. They provided me with genuine leads and effective business strategies for my business growth. Unlike others, they delivered tangible results rather than just taking payments without any improvement.",
      img: "/banner.png",
    },
    {
      name: "raj",
      para: "This is the best digital marketing and website development agency in Prayagraj. They provided me with genuine leads and effective business strategies for my business growth. Unlike others, they delivered tangible results rather than just taking payments without any improvement.",
      img: "/banner.png",
    },
    {
      name: "raj",
      para: "This is the best digital marketing and website development agency in Prayagraj. They provided me with genuine leads and effective business strategies for my business growth. Unlike others, they delivered tangible results rather than just taking payments without any improvement.",
      img: "/banner.png",
    },
    {
      name: "raj",
      para: "This is the best digital marketing and website development agency in Prayagraj. They provided me with genuine leads and effective business strategies for my business growth. Unlike others, they delivered tangible results rather than just taking payments without any improvement.",
      img: "/banner.png",
    },
  ];
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-5">Customer Reviews</h2>
      <div class="max-w-6xl mx-auto relative" id="carousel-container">
        <div class="overflow-hidden py-4">
          <div
            id="track"
            class="flex transition-transform duration-500 ease-out"
          >
            {reviews.map((item, index) => (
              <div key={index} class="min-w-full md:min-w-[33.33%] p-4">
                <div class="group bg-white rounded-2xl shadow-lg p-8 text-center h-full border border-gray-100 cursor-pointer transition-all duration-300 hover:bg-black/95 hover:scale-105 hover:shadow-2xl">
                  <div class="bg-purple-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-2 transition-colors duration-300 group-hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex items-center mb-1 space-x-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-fg-yellow mb-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <h3 class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <p class="text-gray-500 group-hover:text-blue-100 transition-colors">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          id="prevBtn"
          class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white p-3 rounded-full shadow-lg text-blue-900 hover:bg-blue-50 focus:outline-none z-10 transition"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          id="nextBtn"
          class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white p-3 rounded-full shadow-lg text-blue-900 hover:bg-blue-50 focus:outline-none z-10 transition"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        <div class="flex justify-center mt-8 space-x-2" id="indicators"></div>
        <Script src="/js/card-carousel.js" strategy="afterInteractive" />
      </div>
    </div>
  );
}
