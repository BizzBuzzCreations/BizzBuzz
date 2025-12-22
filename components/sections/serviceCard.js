import React from "react";

export default function ServiceCard({ heading, description, imageUrl }) {
  return (
    <div
      class="relative p-3 max-w-lg shadow-lg md:min-w-md bg-white rounded-3xl flex overflow-hidden items-center min-w-[300px] cursor-pointer group"
      style={{
        backgroundSize: "600px",
        backgroundImage: `url(/black-bg.jpg)`,
      }}
    >
      <img
        class="z-50 h-5 w-5 absolute top-3 right-3 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
        height="20"
        width="20"
        src={imageUrl}
      />
      <div class="absolute inset-0 ring-1 ring-white/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden"></div>
      <div class="relative z-10 flex items-center space-x-4">
        <img
          class="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95"
          height="64"
          width="64"
          src={imageUrl}
        />
        <div class="flex flex-col transition duration-300 group-hover:-translate-x-2">
          <div
            class="relative text-md font-semibold text-gray-100 cursor-pointer 
                                        after:transition-[width] after:ease-in-out after:duration-700 
                                        after:absolute after:bg-gradient-to-r after:from-gray-100/30
                                        after:via-gray-100/10 after:to-transparent after:origin-left 
                                        after:h-[2px] after:w-0 group-hover:after:w-full 
                                        after:bottom-0 after:left-0"
          >
            {heading}
          </div>
          <p class="text-xs text-gray-50/70 text-balance">{description}</p>
        </div>
      </div>
    </div>
  );
}
