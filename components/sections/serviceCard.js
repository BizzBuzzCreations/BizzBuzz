import React from "react";

export default function ServiceCard({
  heading,
  description,
  imageUrl,
  icon: Icon,
  points,
  footer,
}) {
  return (
    <div
      className="relative p-3  w-md shadow-lg md:w-lg bg-white rounded-3xl flex overflow-hidden items-center min-w-[300px] cursor-pointer group"
      style={{
        backgroundSize: "600px",
        backgroundImage: `url(/blue-bg.webp)`,
      }}
    >
      {Icon ? (
        <Icon
          className="z-50 h-5 w-5 absolute top-3 right-3 text-white/70 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
        />
      ) : (
        <img
          className="z-50 h-5 w-5 absolute top-3 right-3 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
          height="20"
          width="20"
          src={imageUrl}
          alt="service-img"
        />
      )}
      <div className="absolute inset-0 ring-1 ring-white/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden"></div>
      <div className="relative z-10 flex items-center space-x-4">
        {Icon ? (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95">
            <Icon className="h-8 w-8 text-white" />
          </div>
        ) : (
          <img
            className="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95"
            height="64"
            width="64"
            src={imageUrl}
            alt="service-img"
          />
        )}
        <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
          <div
            className="relative text-md font-semibold text-gray-100 cursor-pointer 
                                        after:transition-[width] after:ease-in-out after:duration-700 
                                        after:absolute after:bg-gradient-to-r after:from-gray-100/30
                                        after:via-gray-100/10 after:to-transparent after:origin-left 
                                        after:h-[2px] after:w-0 group-hover:after:w-full 
                                        after:bottom-0 after:left-0"
          >
            {heading}
          </div>
          <p className="text-xs text-gray-50/70 text-balance">{description}</p>
          {points && points.length > 0 && (
            <>
              <p className="text-xs font-bold text-gray-50 mt-2">
                What we do:
              </p>
              <ul className="text-xs text-gray-50/70 list-disc pl-4 mt-1 space-y-0.5">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          )}
          {footer && (
            <p className="text-xs text-gray-50/70 text-balance mt-2">
              {footer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
