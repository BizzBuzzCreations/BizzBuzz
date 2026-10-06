"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Loaded lazily and only after the page is idle — the widget isn't needed
// for first paint, and keeping it out of the main bundle cuts JS parse time
// on mobile.
const FloatingWhatsApp = dynamic(
  () => import("react-floating-whatsapp").then((m) => m.FloatingWhatsApp),
  { ssr: false },
);

export default function Whatsapp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const show = () => setMounted(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(show, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(show, 2000);
    return () => window.clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <FloatingWhatsApp
      phoneNumber="918115585285"
      accountName="BizzBuzz Creations"
      avatar="/Circle Logo.webp"
      statusMessage="Typically replies within 1 hour"
      chatMessage="Hi 👋 How can we help you?"
      allowEsc
      darkMode
    />
  );
}
