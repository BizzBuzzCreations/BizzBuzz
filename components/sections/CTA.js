import React from "react";

export default function CTA() {
  return (
    <div
      className="mx-10 rounded-3xl shadow-lg shadow-black max-w-6xl mx-auto"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
      }}
    >
      <div className="py-5 px-10 z-10 text-white mb-10">
        <h2 className="text-3xl font-bold mb-5">Get Free Consultancy Now!</h2>
        <p className="max-w-3xl mb-8">
          Ready to grow your business with trusted digital marketing services in
          UP? Contact Bizz Buzz Creations today and let’s build your success
          story together.
        </p>
        <button className="px-4 py-2 bg-transparent text-white font-bold border cursor-pointer rounded-full transform hover:scale-95 transition">
          Book a call
        </button>
      </div>
    </div>
  );
}
