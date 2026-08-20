"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const differentiators = [
  {
    title: "Data Over Guesswork",
    desc: `Every decision is backed by real performance data, not assumptions or industry "best guesses."`,
  },
  {
    title: "AI & Search-Ready Strategy",
    desc: "We optimize for how India searches today — voice assistants, AI tools, and answer engines, not just Google.",
  },
  {
    title: "Full-Funnel Marketing",
    desc: "From brand awareness to final conversion, we manage the entire customer journey under one roof.",
  },
  {
    title: "Custom Roadmaps, Not Templates",
    desc: "Every client gets a strategy built around their industry, competitors, and specific business goals.",
  },
  {
    title: "Radical Transparency",
    desc: "Live performance dashboards, not vague monthly summaries — you see exactly where your budget goes.",
  },
  {
    title: "Proven Delivery",
    desc: "90+ projects and 50+ clients trust us to turn strategy into measurable, repeatable growth.",
  },
];

const DifferentiatorsCarousel = () => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: "1.5rem",
        drag: "free",
        focus: "center",
        pauseOnHover: true,
        pauseOnFocus: false,
        autoWidth: false,

        autoScroll: {
          speed: 0.8,
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
        },

        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}
      extensions={{ AutoScroll }}
      className="max-w-6xl mx-auto"
    >
      {differentiators.map((item, index) => (
        <SplideSlide key={index} className="h-auto py-2">
          <div className="group h-full flex flex-col p-6 border border-white/10 rounded-xl bg-white/5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40">
            <h3 className="font-bold text-lg mb-2 text-white transition-colors duration-300 group-hover:text-[#40A2D8]">
              {item.title}
            </h3>
            <p className="leading-relaxed text-white/60">{item.desc}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default DifferentiatorsCarousel;
