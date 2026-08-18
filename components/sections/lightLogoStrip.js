"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Real BizzBuzz clients — same logos already used in the "Our Clients"
// slider and case-study carousel elsewhere on the site.
const CLIENTS = [
  { src: "/avondale-1.png", alt: "Avondale Finance" },
  { src: "/circle-logo-bailliff.png", alt: "Bailiff Solution" },
  { src: "/fibernet.png", alt: "Fibernet" },
  { src: "/meshvinmedia-1.png", alt: "Meshvi" },
  { src: "/mmdf.png", alt: "MDF" },
  { src: "/ukclaims.png", alt: "UK Claims" },
  { src: "/WILLIAM.png", alt: "William" },
  { src: "/RED EAGLE1.png", alt: "Red Eagle" },
  { src: "/PARIVARTAN1.png", alt: "Parivartan" },
  { src: "/NEEEL KANTH.png", alt: "Neeel Kanth" },
  { src: "/LA PRISTINE1.png", alt: "La Pristine" },
  { src: "/GRAND WEDDINZ1.png", alt: "Grand WeddinZ" },
  { src: "/transcendes.png", alt: "Transcendes" },
];

// Card + gap width, in px — plain numbers (not Tailwind classes) so the
// marquee math below can compute exact loop distances.
const ITEM_SIZE = 128;
const GAP = 28;
const SET_WIDTH = CLIENTS.length * (ITEM_SIZE + GAP);
const SPEED = 0.5; // px per frame

// Wrap `value` into the range (-width, 0] so the strip can scroll infinitely
// without ever visibly jumping.
function wrap(value, width) {
  let v = value % width;
  if (v > 0) v -= width;
  return v;
}

export default function LightLogoStrip() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });

  useEffect(() => {
    let raf;
    const tick = () => {
      if (!draggingRef.current && !hoveringRef.current) {
        offsetRef.current -= SPEED;
      }
      offsetRef.current = wrap(offsetRef.current, SET_WIDTH);
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    dragStartRef.current = { x: e.clientX, offset: offsetRef.current };
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    offsetRef.current = dragStartRef.current.offset + (e.clientX - dragStartRef.current.x);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  return (
    <section
      className="bg-gray-50 py-16 overflow-hidden"
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
        endDrag();
      }}
    >
      <p className="text-center text-xs sm:text-sm font-semibold tracking-widest text-gray-500 mb-10">
        TRUSTED BY BRANDS ACROSS INDUSTRIES
      </p>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          ref={trackRef}
          className="flex items-center"
          style={{ gap: `${GAP}px`, willChange: "transform" }}
        >
          {/* Repeated 3x so there's always a full extra set on either side
              of the visible window, regardless of drag distance or
              viewport width. */}
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
            <div
              key={`${client.alt}-${i}`}
              className="shrink-0 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-4"
              style={{ width: `${ITEM_SIZE}px`, height: `${ITEM_SIZE}px` }}
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={80}
                height={80}
                className="object-contain w-full h-full rounded-full"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
