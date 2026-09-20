"use client";
import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <FloatingWhatsApp
      phoneNumber="918115585285"
      accountName="BizzBuzz Creations"
      avatar="/Circle Logo.png"
      statusMessage="Typically replies within 1 hour"
      chatMessage="Hi 👋 How can we help you?"
      allowEsc
      darkMode
    />
  );
}
