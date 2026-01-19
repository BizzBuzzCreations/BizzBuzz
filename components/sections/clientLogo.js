import React from "react";
import Image from "next/image";

export default function ClientLogo() {
  return (
    <>
      <div
        className="relative flex justify-around gap-5 overflow-hidden shrink-0"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        <div className="max-w-full mx-auto mt-10">
          <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>
          <div className="animate-scrollReverse py-20 flex flex-nowrap w-max min-w-full overflow-hidden relative gap-10 justify-around shrink-0">
            <Image
              src="/parivartanLogo.png"
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
            <Image
              src="/ukclaims.png"
              width={150}
              height={150}
              alt="ukclaims"
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
