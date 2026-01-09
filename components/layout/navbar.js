"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState(false);

  return (
    <header className="nav sm:max-w-full max-w-[300] w-[90%] max-h-[90px] top-10 left-1/2 -translate-x-1/2 fixed rounded-full z-50">
      <div className="relative max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-black">
          <Image
            src="/BBC Dark Logo.png"
            alt="logo"
            className="md:w-full w-[90px]"
            width={100}
            height={90}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/about" className="text-black hover:text-grey transition">
            About
          </Link>
          <div className="group relative">
            <div className="text-black flex justify-center items-center cursor-pointer hover:text-grey transition">
              Services{" "}
              <ChevronDown
                size={20}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
            {/*Service Dropdown menu  */}
            <div
              id="dropdown"
              className="z-10 absolute right-0 top-7 hidden group-hover:block bg-gray-800 border border border-black rounded-base shadow-lg w-65 "
            >
              <ul
                className="p-2 text-sm text-white font-medium"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/web-development"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-400 hover:text-black rounded"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search-engine-optimization"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-400 hover:text-black rounded"
                  >
                    Search Engine Optimization (SEO)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bpo-services"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-400 hover:text-black rounded"
                  >
                    BPO Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-consultancy"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-400 hover:text-black rounded"
                  >
                    Buisiness Consultancy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social-media-marketing"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-400 hover:text-black rounded"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-services"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-400 hover:text-black rounded"
                  >
                    AI Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/digital-marketing"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-400 hover:text-black rounded"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="https://bizzbuzzcreations.com/blog/"
            className="text-black hover:text-grey transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-grey transition"
          >
            Contact
          </Link>
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
            <Link
              onClick={() => setOpen(false)}
              href="/about"
              className="hover:text-grey transition"
            >
              About
            </Link>
            <div className="">
              <div
                onClick={() => setOpenService(!openService)}
                className="text-black flex items-center cursor-pointer focus:text-grey transition"
              >
                Services{" "}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openService ? "rotate-180" : ""
                  }`}
                />
              </div>
              {/*Service Dropdown menu  */}
              <div
                id="dropdown"
                className={`z-10 absolute left-4 top-22  ${
                  openService ? "block" : "hidden"
                } bg-gray-800 border border border-black rounded-base shadow-lg w-65 `}
              >
                <ul
                  className="p-2 text-sm text-white font-medium"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href="/web-development"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-400 focus:text-black rounded"
                      onClick={() => {
                        setOpen(!open);
                        setOpenService(!openService);
                      }}
                    >
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/search-engine-optimization"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-400 focus:text-black rounded"
                      onClick={() => {
                        setOpen(!open);
                        setOpenService(!openService);
                      }}
                    >
                      Search Engine Optimization (SEO)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bpo-services"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-400 focus:text-black rounded"
                      onClick={() => {
                        setOpen(!open);
                        setOpenService(!openService);
                      }}
                    >
                      BPO Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/business-consultancy"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-400 focus:text-black rounded"
                      onClick={() => {
                        setOpen(!open);
                        setOpenService(!openService);
                      }}
                    >
                      Buisiness Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/social-media-marketing"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-400 focus:text-black rounded"
                      onClick={() => {
                        setOpen(!open);
                        setOpenService(!openService);
                      }}
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ai-services"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-400 focus:text-black rounded"
                      onClick={() => {
                        setOpen(!open);
                        setOpenService(!openService);
                      }}
                    >
                      AI Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/digital-marketing"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-400 focus:text-black rounded"
                      onClick={() => {
                        setOpen(!open);
                        setOpenService(!openService);
                      }}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              onClick={() => setOpen(false)}
              href="/blog"
              className="hover:text-grey transition"
            >
              Blog
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="hover:text-grey transition"
            >
              Contact
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
