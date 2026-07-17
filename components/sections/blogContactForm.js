"use client";
import { sendMail } from "@/actions/serverActions";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";

export default function BlogContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const response = await sendMail({
      name: formData?.name,
      email: formData?.email,
      subject: "New Enquiry from Blog",
      text: formData?.message,
      contact: "",
    });
    setSubmitting(false);

    if (response?.success) {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-bold text-black mb-1">Have Questions?</h3>
      <p className="text-sm text-gray-500 mb-5">
        Tell us a little about your project and we&apos;ll get back to you.
      </p>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="blog-contact-name"
            className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5"
          >
            Name
          </label>
          <input
            onChange={handleChange}
            value={formData.name}
            name="name"
            type="text"
            id="blog-contact-name"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="blog-contact-email"
            className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="email"
            id="blog-contact-email"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="blog-contact-message"
            className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5"
          >
            Message
          </label>
          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            id="blog-contact-message"
            rows="4"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black"
            placeholder="Briefly tell us what you need..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg px-4 py-3 bg-black text-white text-sm font-semibold cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95 disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
