import React from "react";

export const metadata = {
  title: "Privacy Policy of Bizzbuzz Creations",
  description: "About our policies || Bizzbuzz Creations",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/privacy-policy",
  },
};

export default function page() {
  return (
    <div className="container mx-auto px-20 py-40">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: 10 Feb 2026</p>

        <p className="mb-6">
          At <span className="font-semibold">BizzBuzz Creations</span>, we
          respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Name, email address, phone number</li>
          <li>Business or company details</li>
          <li>Information you submit through contact or inquiry forms</li>
          <li>
            Technical data such as IP address, browser type, and pages visited
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Respond to inquiries and provide services</li>
          <li>Improve our website and user experience</li>
          <li>Send updates, offers, or service-related communications</li>
          <li>Maintain security and prevent fraud</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. Sharing of Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal information. We may share data
          with trusted service providers who help us operate our website and
          business, under strict confidentiality.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Cookies & Tracking Technologies
        </h2>
        <p className="mb-4">
          Our website may use cookies to improve functionality and analyze
          traffic. You can control cookie settings through your browser.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the Internet is
          100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Access, update, or delete your personal data</li>
          <li>Withdraw consent for communications</li>
          <li>Request information about how your data is used</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          7. Third-Party Links
        </h2>
        <p className="mb-4">
          Our website may contain links to external sites. We are not
          responsible for the privacy practices of those websites.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          8. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with a revised date.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
        <p className="mb-1">
          If you have any questions about this Privacy Policy, contact us:
        </p>
        <p className="text-sm text-gray-700">
          📧 Email:{" "}
          <span className="font-medium">info@bizzbuzzcreations.com</span>
          <br />
          📞 Phone: <span className="font-medium">+91 8115585285</span>
        </p>
      </div>
    </div>
  );
}
