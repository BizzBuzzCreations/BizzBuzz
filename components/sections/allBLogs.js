"use client";
import React, { useEffect, useState, useRef } from "react";
import { getBlogCategoriesMongo, getPublishedBlogsMongo } from "@/actions/blogActions";
import { getFeaturedImage } from "@/lib/getFeaturedImage";
import { ArrowLeft, ArrowRight, ImageOff } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";
import he from "he";

export default function AllBLogs() {
  const [blogs, setBlogs] = useState([]);
  // Both start "on" now — the All Blogs grid (with its category filter and
  // pagination) shows immediately below the latest-blogs section instead
  // of waiting behind a "View all blogs" click.
  const [showAll, setShowAll] = useState(true);
  const [totalPages, setTotalPages] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [posts, setPosts] = useState(9);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState({
    name: "All Categories",
    count: 0,
    id: "all",
  });
  const ref = useRef(null);

  const getBlogs = async (pages, cate, posts) => {
    if (loading) return;

    setLoading(true);
    const res = await getPublishedBlogsMongo(pages, cate, posts);
    if (res?.success) {
      setBlogs(res?.data);
      setTotalPages(res?.totalPages);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBlogCategoriesMongo().then((res) => {
      if (res?.success) {
        const total = res?.data.reduce((acc, cat) => acc + cat.count, 0);
        res?.data.unshift({
          name: "All Categories",
          count: total,
          id: "all",
        });
        setCategories(res?.data);
      }
    });
  }, []);

  useEffect(() => {
    const savedPage = Cookies.get("blogPage");
    const savedPosts = Cookies.get("blogPosts");
    const savedShowAll = Cookies.get("blogShowAll");
    const savedSelectedCat = Cookies.get("selectedCat");

    if (savedPage) setCurrPage(Number(savedPage));
    if (savedPosts) setPosts(Number(savedPosts));
    if (savedShowAll) setShowAll(savedShowAll === "true");
    if (savedSelectedCat) setSelected(JSON.parse(savedSelectedCat));
  }, []);

  useEffect(() => {
    if (posts === 0) return;
    window.scrollTo({
      top: document.documentElement.scrollHeight * 0.2,
      behavior: "smooth",
    });

    getBlogs(currPage, selected.id, posts);
    Cookies.set("blogPage", currPage, { expires: 1 / 24 });
    Cookies.set("blogPosts", posts, { expires: 1 / 24 });
    Cookies.set("blogShowAll", showAll, { expires: 1 / 24 });
    Cookies.set("selectedCat", JSON.stringify(selected), { expires: 1 / 24 });
  }, [showAll, currPage, posts, selected]);

  function truncateHTML(html, limit = 120) {
      if (!html) return "";
  
      const text = he.decode(html.replace(/<[^>]*>/g, "")); // remove HTML tags
  
      return text.length > limit ? text.slice(0, limit) + "..." : text;
    }

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (cat) => {
    setSelected(cat);
    setCurrPage(1);
    setOpen(false);
  };

  function decodeHTML(html) {
    // The category dropdown (and the HTML-entity-decoded names it shows)
    // now renders on the very first paint — including the server render —
    // since showAll defaults to true. `document` doesn't exist there.
    if (typeof document === "undefined") return html;
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <>
      <div className="lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-18 px-8 mx-auto">
        {showAll && (
          <h2 className="md:text-4xl text-3xl font-bold md:py-15 md:mb-0 mb-10 text-center text-white">
            All Blogs
          </h2>
        )}

        {showAll && (
          <div className="flex items-center gap-6 md:justify-end justify-center mb-10 flex-wrap">
            <div className="relative w-64" ref={ref}>
              {/* Trigger */}
              <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl shadow-sm hover:border-[#40A2D8]/50 transition-all duration-200"
              >
                <span className="text-sm font-semibold text-white">
                  {decodeHTML(selected.name)}
                </span>
                <svg
                  className={`w-4 h-4 text-white/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Menu */}
              <div
                className={`absolute z-50 mt-2 w-full bg-[#0a0a0a] border border-white/15 rounded-xl shadow-lg overflow-hidden transition-all duration-200 origin-top max-h-80 overflow-y-auto
        ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <ul className="py-1.5 px-1.5 space-y-0.5">
                  {categories.map((cat, i) => (
                    <li key={cat.name}>
                      <button
                        onClick={() => handleSelect(cat)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-150
                  ${
                    cat.name === selected.name
                      ? "bg-[#0B60B0] text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                      >
                        <span className="text-sm font-medium text-start">
                          {decodeHTML(cat.name)}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full
                  ${
                    cat.name === selected.name
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-white/50"
                  }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                      {i < categories.length - 1 && (
                        <div className="mx-2 border-b border-white/10" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-3 justify-end items-center">
              <button
                disabled={currPage === 1 || loading}
                onClick={() => {
                  if (loading) return;
                  setPosts(9);
                  setCurrPage((prev) => prev - 1);
                }}
                className={`${currPage === 1 ? "opacity-50 cursor-not-allowed " : "hover:text-white hover:bg-[#0B60B0] hover:border-[#0B60B0]"} p-1 cursor-pointer rounded border border-white/15 text-white bg-white/5 `}
              >
                <ArrowLeft />
              </button>
              <p className="text-white/50">
                Page {currPage} of {totalPages}
              </p>
              <button
                disabled={currPage == totalPages || loading}
                onClick={() => {
                  if (loading) return;
                  setPosts(9);
                  setCurrPage((prev) => prev + 1);
                }}
                className={`${currPage == totalPages ? "opacity-50 cursor-not-allowed " : "hover:text-white hover:bg-[#0B60B0] hover:border-[#0B60B0]"} p-1 cursor-pointer rounded border border-white/15 text-white bg-white/5 `}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
      {loading ? (
        // <!-- Grid Skeleton -->
        <div className=" sm:px-12 md:px-16 px-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10 lg:py-20 sm:py-16 lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-lg space-y-3">
            <div className="w-full h-48 rounded animate-shimmer"></div>
            <div className="h-4 w-3/4 animate-shimmer rounded"></div>
            <div className="h-3 w-1/2 animate-shimmer rounded"></div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-lg space-y-3">
            <div className="w-full h-48 rounded animate-shimmer"></div>
            <div className="h-4 w-3/4 animate-shimmer rounded"></div>
            <div className="h-3 w-1/2 animate-shimmer rounded"></div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-lg space-y-3">
            <div className="w-full h-48 rounded animate-shimmer"></div>
            <div className="h-4 w-3/4 animate-shimmer rounded"></div>
            <div className="h-3 w-1/2 animate-shimmer rounded"></div>
          </div>
        </div>
      ) : (
        <div className="px-8 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 ">
          <div
            className={`grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 ${showAll ? "mb-20" : ""}`}
          >
            {blogs.length > 0 &&
              blogs.map((e, index) => {
                const featuredImage = getFeaturedImage(e);
                return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8] hover:shadow-xl hover:shadow-black/40"
                >
                  <Link
                    href={`/blog/${e?.slug}`}
                    className="block overflow-hidden rounded-xl aspect-[1.91/1] bg-white/10"
                  >
                    {featuredImage ? (
                      <img
                        src={featuredImage}
                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        alt={e?.title}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white/5 text-white/30">
                        <ImageOff size={28} />
                        <span className="text-xs font-medium">
                          Image unavailable
                        </span>
                      </div>
                    )}
                  </Link>
                  <div className="relative mt-5">
                    <p className="uppercase font-semibold text-xs mb-2.5 text-white/50 transition-colors duration-300 group-hover:text-[#40A2D8]">
                      {new Date(e?.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      &nbsp;&nbsp; by {e?.author}
                    </p>
                    <Link
                      href={`/blog/${e?.slug}`}
                      className="block mb-3"
                    >
                      <h2 className="text-xl lg:text-2xl leading-tight font-semibold leading-5 text-white transition-colors duration-300 group-hover:text-[#40A2D8]">
                        {e?.title}
                      </h2>
                    </Link>
                    <p className="text-white/60 transition-colors duration-300 group-hover:text-[#40A2D8]">
                      {truncateHTML(e?.excerpt, 150)}
                    </p>

                    <Link
                      href={`/blog/${e?.slug}`}
                      className="font-medium underline text-white/70 transition-colors duration-300 group-hover:text-[#40A2D8]"
                      aria-label={`Read more about ${e?.title}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                );
              })}
          </div>
          <div className="w-full text-center">
            {!showAll && (
              <button
                onClick={() => {
                  setPosts(9);
                  setShowAll(true);
                }}
                className="relative mb-5 cursor-pointer border-2 border-white/30 text-white px-6 py-3 rounded-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#0B60B0] transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
                <span className="relative z-10 group-hover:text-white">
                  View all blogs
                </span>
              </button>
            )}
            {showAll && (
              <div className="flex items-center gap-3 justify-center items-center">
                <button
                  disabled={currPage === 1 || loading}
                  onClick={() => {
                    if (loading) return;
                    setPosts(9);
                    setCurrPage((prev) => prev - 1);
                  }}
                  className={`${currPage === 1 ? "opacity-50 cursor-not-allowed " : "hover:text-white hover:bg-[#0B60B0] hover:border-[#0B60B0]"} p-1 cursor-pointer rounded border border-white/15 text-white bg-white/5 `}
                >
                  <ArrowLeft />
                </button>
                <p className="text-white/50">
                  Page {currPage} of {totalPages}
                </p>
                <button
                  disabled={currPage == totalPages || loading}
                  onClick={() => {
                    if (loading) return;
                    setPosts(9);
                    setCurrPage((prev) => prev + 1);
                  }}
                  className={`${currPage == totalPages ? "opacity-50 cursor-not-allowed " : "hover:text-white hover:bg-[#0B60B0] hover:border-[#0B60B0]"} p-1 cursor-pointer rounded border border-white/15 text-white bg-white/5 `}
                >
                  <ArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
