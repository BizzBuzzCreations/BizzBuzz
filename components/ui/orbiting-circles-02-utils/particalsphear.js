"use client";

// A rotating "globe" made of glowing dots — sits at the center of the
// orbiting-rings visual (see ../orbiting-circles-02.js). Points are laid
// out with a Fibonacci-sphere distribution (evenly spread, no random
// clumping) so the globe reads as a clean, centered sphere rather than a
// lumpy blob, and projected each frame with a simple rotate + tilt.
import { useEffect, useRef } from "react";

const POINT_COUNT = 480;
const TILT = 0.4; // radians — how much the sphere leans back

function fibonacciSpherePoints(n) {
  const pts = [];
  const offset = 2 / n;
  const increment = Math.PI * (3 - Math.sqrt(5)); // golden angle
  for (let i = 0; i < n; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    pts.push({ x: Math.cos(phi) * r, y, z: Math.sin(phi) * r });
  }
  return pts;
}

export default function ParticleSphereAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");

    const points = fibonacciSpherePoints(POINT_COUNT);

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    resize();

    let angle = 0;
    let animationId;

    const draw = () => {
      angle += 0.003;

      if (width && height) {
        ctx.clearRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;
        const radius = (Math.min(width, height) / 2) * 0.94;

        const projected = points.map((p) => {
          // Rotate around the vertical (Y) axis...
          const x1 = p.x * Math.cos(angle) - p.z * Math.sin(angle);
          const z1 = p.x * Math.sin(angle) + p.z * Math.cos(angle);
          // ...then tilt around X so we view it from slightly above.
          const y2 = p.y * Math.cos(TILT) - z1 * Math.sin(TILT);
          const z2 = p.y * Math.sin(TILT) + z1 * Math.cos(TILT);
          return { x: x1, y: y2, z: z2 };
        });

        // Painter's algorithm — draw back-to-front so near points sit on
        // top of far ones, keeping the sphere reading as solid/round.
        projected.sort((a, b) => a.z - b.z);

        projected.forEach(({ x, y, z }) => {
          const depth = (z + 1) / 2; // 0 (far) .. 1 (near)
          const size = 0.9 + depth * 1.6;
          const alpha = 0.25 + depth * 0.6;

          ctx.beginPath();
          ctx.arc(cx + x * radius, cy + y * radius, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(64, 162, 216, ${alpha})`;
          ctx.fill();
        });
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
