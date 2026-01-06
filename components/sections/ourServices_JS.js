"use client";

import { useEffect } from "react";

export default function ourServices_JS() {
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
      const glow = card.querySelector(".glow");

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = -((y - centerY) / centerY);

        card.style.transform = `perspective(1000px) rotateY(${
          percentX * 15
        }deg) rotateX(${percentY * 15}deg)`;
        glow.style.opacity = "1";
        glow.style.backgroundImage = `
                radial-gradient(
                    circle at 
                    ${x}px ${y}px, 
                    #ffffff44,
                    #0000000f
                )
            `;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(1000px) rotateY(0deg) rotateX(0deg)";
        glow.style.opacity = "0";
      });
    });
  }, []);

  return null;
}
