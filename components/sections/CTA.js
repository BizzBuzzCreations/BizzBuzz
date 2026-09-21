"use client";
import { sendMail } from "@/actions/serverActions";
import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
import RichText from "@/components/ui/richText";

// `white` — used only on individual blog post pages
// (app/(main)/blog/[slug]/page.js): the section around the card stays white,
// but the CTA card itself is black (same card as every other page).
export default function CTA({ content, white = false } = {}) {
  const heading = content?.ctaHeading || "Get Free Consultancy Now!";
  const paragraph =
    content?.ctaParagraph ||
    "Ready to grow your business with trusted digital marketing services in UP? Contact Bizz Buzz Creations today and let’s build your success story together.";

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await sendMail({
      name: "not given",
      email: formData?.email,
      subject: "Request for consultancy",
      text: "Want to start a project",
      contact: null,
    });

    if (response?.success) {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <div className={`${white ? "bg-white" : "bg-black"} px-5 py-10 scroll-mt-34`} id="CTA">
        <div
          className={`rounded-3xl border-2 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container border-[#0B60B0] ${
            white ? "shadow-lg shadow-black/20" : "shadow-lg shadow-black"
          }`}
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        >
          <div className="py-8 md:py-10 px-6 md:px-10 z-10 text-white">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">
              {heading}
            </h2>
            <RichText as="p" text={paragraph} className="max-w-3xl" />
            <form action={handleSubmit}>
              {/* Full width on mobile instead of a fixed 250px box (the
                  label was also text-black on this section's black
                  background — invisible — fixed to text-white). */}
              <div className="max-w-full sm:max-w-[300px] relative">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2 text-white"
                >
                  Email Address
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 text-black border border-gray-300 rounded-full focus:outline-none focus:border-black text-lg"
                  placeholder="your@email.com"
                  required
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="group absolute top-10 right-2 flex items-center justify-center cursor-pointer"
                >
                  <span
                    className="bg-black p-3 rounded-full text-white
                     transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-black/50"
                  >
                    <SendHorizontal className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Divider between the CTA and whatever comes next (the footer, on
          every page that ends with this CTA) so the two don't just blend
          into one section. */}
      <div className={`w-full ${white ? "bg-white" : "bg-black"} pt-8 md:pt-10`}>
        <div className={`w-full border-t ${white ? "border-black/10" : "border-white"}`} />
      </div>
    </>
  );
}
