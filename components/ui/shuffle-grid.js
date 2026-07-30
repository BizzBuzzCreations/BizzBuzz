"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const renderSquares = (list) => {
  return list.map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-neutral-800"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

export const ShuffleGrid = ({ images, className }) => {
  const timeoutRef = useRef(null);
  // Render the untouched order on first paint so server and client markup match
  // exactly; the random shuffle only ever runs client-side, after hydration.
  const [squares, setSquares] = useState(() => renderSquares(images));

  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(renderSquares(shuffle([...images])));
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className={`grid grid-cols-3 grid-rows-3 gap-1 ${className || "h-[450px]"}`}>
      {squares.map((sq) => sq)}
    </div>
  );
};
