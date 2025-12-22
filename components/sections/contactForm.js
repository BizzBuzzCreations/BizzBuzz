"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h3 class="text-2xl font-semibold text-black mb-8">Send us a message</h3>
      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-lg font-medium text-black mb-2">
              Full Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              id="name"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-lg font-medium text-black mb-2"
            >
              Email Address
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              id="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            for="subject"
            class="block text-lg font-medium text-black mb-2"
          >
            Subject
          </label>
          <input
            onChange={handleChange}
            name="subject"
            type="text"
            id="subject"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
            placeholder="What is this regarding?"
          />
        </div>

        <div>
          <label
            for="message"
            class="block text-lg font-medium text-black mb-2"
          >
            Message
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            rows="5"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full rounded-lg px-8 py-4 bg-black text-white text-lg font-medium cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95 hover:bg-black/95 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
