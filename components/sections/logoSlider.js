"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const items = [
  { img: "/avondale-1.png", text: "Avondale Finance" },
  { img: "/circle-logo-bailliff.png", text: "Bailiff Solution" },
  { img: "/fibernet.png", text: "Fibernet" },
  { img: "/meshvinmedia-1.png", text: "Meshvi" },
  { img: "/mmdf.png", text: "MDF" },
  { img: "/ukclaims.png", text: "UK Claims" },
  { img: "/WILLIAM.png", text: "William" },
  { img: "/RED EAGLE1.png", text: "RED EAGLE" },
  { img: "/PARIVARTAN1.png", text: "Parivartan" },
  { img: "/NEEEL KANTH.png", text: "Neeel Kanth" },
  { img: "/LA PRISTINE1.png", text: "La Pristine" },
  { img: "/GRAND WEDDINZ1.png", text: "Grand WeddinZ" },
  { img: "/transcendes.png", text: "Transcendes" },
];

const LogoSlider = () => {
  return (
    <div className="bg-gray-100 py-10 pb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-2xl text-center mx-auto mb-10">
        Our Clients
      </h2>
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          arrows: false,
          pagination: false,
          gap: "1rem",
          drag: "free",
          focus: "center",
          pauseOnHover: true,
          pauseOnFocus: false,
          autoWidth: false,

          autoScroll: {
            speed: 1.2, // scroll speed (lower = slower)
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
          },

          breakpoints: {
            1580: { perPage: 6 },
            1280: { perPage: 5 },
            1024: { perPage: 4 },
            768: { perPage: 3 },
            480: { perPage: 2 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {items.map((items, index) => (
          <SplideSlide key={index}>
            <Image src={items.img} alt={items.text} width={150} height={150} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default LogoSlider;
