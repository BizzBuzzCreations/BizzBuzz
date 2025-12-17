import React from "react";
import Image from "next/image";

export default function clientLogo() {
  return (
    <>
      <div
        className="py-10 pb-10 mb-10  bg-gray-200"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>
          <div className="flex flex-wrap gap-10 ">
            <Image
              src="/parivartanlogo.png"
              width={150}
              height={150}
              alt="avondale"
            />
            <Image
              src="/avondale.png"
              width={150}
              height={150}
              alt="avondale"
            />
            <Image
              src="/circle-logo-bailliff.png"
              width={150}
              height={150}
              alt="circle-logo-bailliff"
            />
            <Image
              src="/fibernet.png"
              width={150}
              height={150}
              alt="fibernet"
            />
            <Image
              src="/meshvinmedia-1.png"
              width={150}
              height={150}
              alt="meshvinmedia-1"
            />
            <Image src="/mmdf.png" width={150} height={150} alt="mmdf" />
            <Image
              src="/Neal_Infratech_3D_Logo.png"
              width={150}
              height={150}
              alt="Neal_Infratech_3D_Logo"
            />
            <Image
              src="/ukclaims.png"
              width={150}
              height={150}
              alt="ukclaims"
            />
          </div>
        </div>
      </div>
    </>
  );
}
<div className="min-h-screen w-full bg-white relative">
  {/* Noise Texture (Darker Dots) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage:
        "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your Content/Components */}
</div>;
