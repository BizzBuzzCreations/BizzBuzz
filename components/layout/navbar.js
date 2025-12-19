"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    // { name: "", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/Services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="nav sm:max-w-full max-w-[300] w-[90%] max-h-[90px] top-10 left-1/2 -translate-x-1/2 fixed rounded-full z-50">
      <div className="relative max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-black">
          <Image
            src="/BBC Dark Logo.png"
            className="md:w-full w-[90px]"
            width={100}
            height={90}
          />
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
              open ? "rotate-45 translate-y-[9px]" : ""
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
        <nav className="absolute md:hidden bg-gray-400 shadow-md border-t animate-slideDown rounded-3xl w-[90%] left-[50%] -translate-x-1/2">
          <ul className="flex flex-col space-y-4 p-5 font-medium text-black">
            {navLinks.map((link) => (
              <Link
                key={link.name}
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
