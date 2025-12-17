"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/Services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="nav w-[90%] top-10 left-1/2 -translate-x-1/2 fixed rounded-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-black">
          <Image src="/BBC Dark Logo.png" width={130} height={100} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-black hover:text-grey transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-[5px]"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[3px] w-6 bg-gray-800 rounded transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 bg-gray-800 rounded transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 bg-gray-800 rounded transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white shadow-md border-t animate-slideDown">
          <ul className="flex flex-col space-y-4 p-5 font-medium text-black">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-grey transition"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
