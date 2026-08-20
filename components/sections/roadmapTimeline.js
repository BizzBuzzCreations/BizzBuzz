"use client";
import { useEffect, useRef, useState } from "react";

export default function RoadmapTimeline({ steps, dark = false }) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [paths, setPaths] = useState([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const rects = cardRefs.current.map((el) => el && el.getBoundingClientRect());

      const newPaths = [];
      for (let i = 0; i < rects.length - 1; i++) {
        const a = rects[i];
        const b = rects[i + 1];
        if (!a || !b) continue;

        const startX = a.left + a.width / 2 - containerRect.left;
        const startY = a.bottom - containerRect.top;
        const endX = b.left + b.width / 2 - containerRect.left;
        const endY = b.top - containerRect.top;
        const midY = (startY + endY) / 2;

        newPaths.push(
          `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`
        );
      }

      setPaths(newPaths);
      setSize({ width: containerRect.width, height: containerRect.height });
    }

    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [steps]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto">
      <svg
        className="absolute inset-0 pointer-events-none"
        width={size.width}
        height={size.height}
      >
        <style>{`
          @keyframes roadmapFlow {
            to { stroke-dashoffset: -24; }
          }
          .roadmap-flow-path {
            animation: roadmapFlow 3s linear infinite;
          }
        `}</style>
        {paths.map((d, i) => (
          <path
            key={i}
            className="roadmap-flow-path"
            d={d}
            fill="none"
            stroke={dark ? "#40A2D8" : "#000000"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="2 10"
          />
        ))}
      </svg>

      <div className="relative space-y-16">
        {steps.map((step, i) => {
          const isLeft = i % 2 === 1;
          const badge = (
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-bold text-lg ${
                dark
                  ? "border-[#40A2D8] bg-black text-[#40A2D8]"
                  : "border-blue-600 bg-white text-blue-600"
              }`}
            >
              {step.number}
            </div>
          );
          const card = (
            <div
              ref={(el) => (cardRefs.current[i] = el)}
              className={`w-full max-w-md rounded-xl shadow-md p-5 transition-all duration-300 hover:-translate-y-1 ${
                dark
                  ? "border border-white/10 bg-white/5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
                  : "border border-black bg-white hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100"
              }`}
            >
              <h4 className={`font-bold text-lg mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
                Step {step.number}: {step.title}
              </h4>
              <p className={`leading-relaxed ${dark ? "text-white/60" : "text-gray-600"}`}>{step.desc}</p>
            </div>
          );
          return (
            <div
              key={step.number}
              className={`flex items-center gap-4 ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {!isLeft && badge}
              {card}
              {isLeft && badge}
            </div>
          );
        })}
      </div>
    </div>
  );
}
