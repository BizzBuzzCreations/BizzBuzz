"use client";

import { useState } from "react";
import { sendMail } from "@/actions/serverActions";
import { toast, Bounce } from "react-toastify";
import { Eye, Users, FileText, Paperclip } from "lucide-react";
import Particles from "@/components/ui/Particles";

const STEPS = [
  {
    icon: Eye,
    title: "Tell Us Your Vision",
    description:
      "Fill out the form with your project details. Everything you share stays confidential.",
  },
  {
    icon: Users,
    title: "Get a Free Consultation",
    description:
      "Our team reaches out to walk through your requirements, goals, and budget.",
  },
  {
    icon: FileText,
    title: "Receive a Clear Proposal",
    description:
      "We send back a straightforward plan — scope, timeline, and transparent pricing.",
  },
];

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

const inputClasses =
  "w-full border border-gray-300 focus:border-[#0B60B0] rounded-lg outline-none px-4 py-2.5 text-sm transition";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    contact: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFile = (e) => {
    setFileName(e.target.files?.[0]?.name || "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // File uploads aren't wired to a storage/email attachment yet — we note
    // the filename in the message body so the team knows to ask the client
    // to re-send it, rather than silently dropping it.
    const text = fileName
      ? `${form.message}\n\nAttached file mentioned: ${fileName} (ask client to re-send by email — attachments aren't automated yet).`
      : form.message;

    const response = await sendMail({
      name: form.name,
      email: form.email,
      subject: form.subject,
      text,
      contact: form.contact,
    });

    setSubmitting(false);

    if (response?.success) {
      toast.success(response.message, toastOptions);
      setForm({ name: "", email: "", subject: "", contact: "", message: "" });
      setFileName("");
    } else {
      toast.error(response?.message || "Something went wrong.", toastOptions);
    }
  };

  return (
    <section className="relative overflow-hidden px-4 md:px-12 lg:px-24 py-20 bg-black">
      {/* Animated backdrop — sits behind the whole card, not inside it.
          Bigger than the card itself so it's visible around its edges
          (in the section's own padding), while the card sits fully
          opaque on top (z-10) — no motion shows through the form. */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-10 left-[10%] w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, #40A2D8, transparent 70%)",
            animation: "blob-float-a 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-10 right-[10%] w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, #0B60B0, transparent 70%)",
            animation: "blob-float-b 16s ease-in-out infinite",
          }}
        />
        {/* moveParticlesOnHover intentionally left off: this whole layer
            is pointer-events-none (so it never blocks clicks anywhere in
            the section), which also means it can't receive the mousemove
            events that prop depends on. */}
        <Particles
          particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
          particleCount={220}
          particleSpread={14}
          speed={0.08}
          particleBaseSize={110}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-2 border border-gray-200">
        {/* Left: dark info panel — fully opaque, sits on top of the
            animated backdrop rather than showing it through. */}
        <div className="relative bg-black text-white p-8 sm:p-10 lg:p-12 overflow-hidden">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 15% 15%, rgba(11,96,176,0.55), transparent 55%), radial-gradient(circle at 85% 75%, rgba(64,162,216,0.4), transparent 55%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              We&rsquo;re Your One-Stop Digital Growth Partner
            </h2>
            <p className="text-white/70 mb-10 max-w-md">
              From strategy to execution and ongoing support, we handle it
              all — so you don&rsquo;t have to juggle multiple vendors.
              Here&rsquo;s how we get started.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {STEPS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon size={18} className="text-[#40A2D8] mb-3" />
                  <h3 className="font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form — fully opaque now that the animation lives behind
            the card instead of inside it. */}
        <div className="relative bg-white p-8 lg:p-10">
          <h3 className="font-semibold text-lg text-black mb-6">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1.5"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClasses}
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1.5"
                htmlFor="contact"
              >
                Contact Number
              </label>
              <input
                id="contact"
                name="contact"
                type="tel"
                inputMode="numeric"
                value={form.contact}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your contact number"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1.5"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <div>
              <label
                htmlFor="file"
                className="flex items-center justify-between border-b border-gray-300 py-2 text-sm text-gray-500 cursor-pointer"
              >
                <span className="truncate">
                  {fileName || "Attach PDF/Doc File (optional)"}
                </span>
                <Paperclip size={16} className="shrink-0" />
              </label>
              <input
                id="file"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                className="hidden"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-black hover:bg-black/85 disabled:opacity-60 text-white text-sm font-semibold py-3.5 rounded-lg transition cursor-pointer"
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
