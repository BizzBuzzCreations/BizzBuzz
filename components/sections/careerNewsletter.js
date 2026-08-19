"use client";

import { useState } from "react";
import { sendMail } from "@/actions/serverActions";
import { toast, Bounce } from "react-toastify";
import { Mail, Send } from "lucide-react";

// Real, functional submission (same sendMail server action the site's
// other CTA uses) — not a decorative form that goes nowhere. Notifies the
// team by email rather than pretending there's an automated mailing list.
export default function CareerNewsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const response = await sendMail({
      name: "not given",
      email,
      subject: "Notify me about new openings",
      text: "Please let me know when new positions open up at BizzBuzz Creations.",
      contact: null,
    });

    setSubmitting(false);

    const toastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    };

    if (response?.success) {
      toast.success(response.message, toastOptions);
      setEmail("");
    } else {
      toast.error(response?.message || "Something went wrong.", toastOptions);
    }
  };

  return (
    <section className="bg-[#0B60B0] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 text-white mb-4">
            <Mail size={22} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            No Openings That Fit Right Now?
          </h2>
          <p className="text-white/80 max-w-sm">
            Leave your email and we&rsquo;ll reach out the moment a role
            matching your interests opens up.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full sm:w-auto flex-col sm:flex-row gap-3 shrink-0"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="px-5 py-3.5 rounded-full text-sm text-black w-full sm:w-64 outline-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 disabled:opacity-60 text-[#0B60B0] text-sm font-semibold px-6 py-3.5 rounded-full transition"
          >
            {submitting ? "Sending…" : "Notify Me"}
            <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
