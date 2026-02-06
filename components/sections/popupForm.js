"use client";

import { useEffect, useRef, useState } from "react";
import { X, Phone, MessageCircle } from "lucide-react";
import { sendMail } from "@/actions/serverActions";
import { toast, Bounce } from "react-toastify";
import { usePathname } from "next/navigation";

export default function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const [wobble, setWobble] = useState(false);
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
  });

  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      setTimeout(() => setOpen(true), 12000);
    } else {
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (!wobble || !ref.current) return;

    const el = ref.current;
    el.classList.remove("wobble");
    void el.offsetWidth;
    el.classList.add("wobble");

    const timer = setTimeout(() => {
      el.classList.remove("wobble");
      setWobble(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [wobble]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await sendMail({
      name: form.name,
      email: form.email,
      subject: "Request for consultancy",
      text: "Want to start a project",
      contact: form.contact,
    });

    if (response?.success) {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
    }
  };

  return (
    <div
      onClick={() => setWobble(true)}
      className={`fixed inset-0 z-50 flex justify-center items-center 
  transition-all duration-500 ease-out
  ${
    open
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-4 pointer-events-none"
  }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Popup Box */}
      <div
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative z-10 w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="relative bg-black py-4 text-center">
          <h2 className="text-white text-lg font-semibold">
            Book Your Consultation Now
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer absolute right-5 top-4 text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-1">BizzBuzz Creations</h3>
            <p className="text-sm text-gray-600 mb-6">
              Innovate and Integrate Everyday
            </p>

            <h4 className="font-semibold mb-2">Why Choose Us</h4>

            <div className="bg-[#eef8fc] rounded-lg p-4 grid grid-cols-3 gap-4 text-sm font-semi-bold mb-6">
              <div>
                <p className="text-xl font-bold">500+</p>
                <p>Projects Delivered</p>
              </div>
              <div>
                <p className="text-xl font-bold">30000+</p>
                <p>Leads Generated</p>
              </div>
              <div>
                <p className="text-xl font-bold">4.9</p>
                <p>Google Rating</p>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-gray-700 font-bold">
              <li>✔ 500+ Projects Delivered</li>
              <li>✔ 30,000+ Leads Generated</li>
              <li>✔ 4.9 Google Ratings</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="md:border-l md:border-dashed md:pl-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3 text-sm"
                required
              />

              <input
                name="contact"
                type="tel"
                placeholder="Enter 10 Digit Mobile Number"
                value={form.contact}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3 text-sm"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-3 text-sm"
                required
              />

              <button
                type="submit"
                className="cursor-pointer w-full bg-black text-white py-3 rounded-md font-medium"
              >
                Book Appointment
              </button>
            </form>

            <div className="flex gap-4 mt-6">
              <a href="tel:+918115585285">
                <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 border border-black py-3 px-10 rounded-md text-sm hover:bg-black hover:text-white transition">
                  <Phone size={16} />
                  Call now
                </button>
              </a>
              <a
                href="https://wa.me/+918115585285"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 border border-green-500 text-green-500 py-3 px-10 rounded-md text-sm hover:bg-green-500 hover:text-white transition">
                  <MessageCircle size={16} />
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
