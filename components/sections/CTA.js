"use client";
import { sendMail } from "@/actions/serverActions";
import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";

export default function CTA() {
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
      <div className="bg-black px-5 py-10 scroll-mt-34" id="CTA">
        <div
          className="rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        >
          <div className="py-8 md:py-10 px-10 z-10 text-white">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">
              Get Free Consultancy Now!
            </h2>
            <p className="max-w-3xl">
              Ready to grow your business with trusted digital marketing services
              in UP? Contact Bizz Buzz Creations today and let’s build your
              success story together.
            </p>
            <form action={handleSubmit}>
              <div className="max-w-[250px] md:max-w-[300px] relative">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-black mb-2"
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

      {/* Full-width white divider between the CTA and whatever comes next
          (the footer, on every page that ends with this CTA) so the two
          don't just blend into one section. */}
      <div className="w-full bg-black pt-8 md:pt-10">
        <div className="w-full border-t border-white" />
      </div>
    </>
  );
}
