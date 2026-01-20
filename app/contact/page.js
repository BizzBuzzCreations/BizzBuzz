import ContactForm from "@/components/sections/contactForm";
import React from "react";

export default function Contact() {
  return (
    <>
      <section
        className="py-40 px-4 md:px-12 lg:px-24"
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <p className="text-base font-medium text-gray-500 mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have questions or ready to start your project? We'd love to hear
              from you. Reach out and let's create something amazing together.
            </p>
          </div>

          <div className="bg-white p-12 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-8">
                  Get in touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-black p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-1">
                        Phone
                      </h4>
                      <p className="text-lg text-gray-600">+91 8115585285</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-1">
                        Email
                      </h4>
                      <p className="text-lg text-gray-600">
                        info@bizzbuzzcreations.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-1">
                        Office
                      </h4>
                      <p className="text-lg text-gray-600">
                        43/33, Tej Bahdur Sapru Rd, near Jain Electronics,
                        Agnipath Colony, Civil Lines <br />
                        Prayagraj, Uttar Pradesh- 211001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-1">
                        Business Hours
                      </h4>
                      <p className="text-lg text-gray-600">
                        Mon - Sat: 11:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google map section */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4133560569503!2d81.8366166!3d25.4578694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae97164b3aba009b%3A0xf70481f1eb47d479!2sBizz%20Buzz%20Creations%20%7C%20Digital%20Marketing%20Agency%20%7CSEO%20%26%20BPO%20Services%20In%20Prayagra!5e0!3m2!1sen!2sin!4v1767601020150!5m2!1sen!2sin%22"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
