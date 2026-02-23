"use client";
import React, { useEffect, useState } from "react";
import { getLatestBlogs } from "@/actions/serverActions";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";

export default function AllBLogs() {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [posts, setPosts] = useState(0);
  const [loading, setLoading] = useState(false);

  const getBlogs = async (pages, cate, posts) => {
    if (loading) return;

    setLoading(true);
    const res = await getLatestBlogs(pages, cate, posts);
    if (res?.success) {
      setBlogs(res?.data);
      setTotalPages(res?.totalPages);
    }
    setLoading(false);
  };

  useEffect(() => {
    const savedPage = Cookies.get("blogPage");
    const savedPosts = Cookies.get("blogPosts");
    const savedShowAll = Cookies.get("blogShowAll");

    if (savedPage) setCurrPage(Number(savedPage));
    if (savedPosts) setPosts(Number(savedPosts));
    if (savedShowAll) setShowAll(savedShowAll === "true");
  }, []);

  useEffect(() => {
    if (posts === 0) return;
    window.scrollTo({
      top: document.documentElement.scrollHeight * 0.2,
      behavior: "smooth",
    });

    getBlogs(currPage, "all", posts);
    Cookies.set("blogPage", currPage, { expires: 1 / 24 });
    Cookies.set("blogPosts", posts, { expires: 1 / 24 });
    Cookies.set("blogShowAll", showAll, { expires: 1 / 24 });
  }, [showAll, currPage, posts]);

  function truncateHTML(html, limit = 120) {
    const text = new DOMParser().parseFromString(html, "text/html")
      .documentElement.textContent;

    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }

  return (
    <>
      {loading ? (
        // <!-- Grid Skeleton -->
        <div className=" sm:px-12 md:px-16 px-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10 lg:py-20 sm:py-16 lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
          <div className="bg-white rounded-xl p-4 shadow-lg space-y-3">
            <div className="w-full h-48 rounded animate-shimmer"></div>
            <div className="h-4 w-3/4 animate-shimmer rounded"></div>
            <div className="h-3 w-1/2 animate-shimmer rounded"></div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg space-y-3">
            <div className="w-full h-48 rounded animate-shimmer"></div>
            <div className="h-4 w-3/4 animate-shimmer rounded"></div>
            <div className="h-3 w-1/2 animate-shimmer rounded"></div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg space-y-3">
            <div className="w-full h-48 rounded animate-shimmer"></div>
            <div className="h-4 w-3/4 animate-shimmer rounded"></div>
            <div className="h-3 w-1/2 animate-shimmer rounded"></div>
          </div>
        </div>
      ) : (
        <div className="px-8 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 ">
          <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {blogs.length > 0 &&
              blogs.map((e, index) => (
                <div className="relative" key={index}>
                  <Link
                    href={`/blog/${e?.slug}`}
                    className="block overflow-hidden group rounded-xl shadow-lg shadow-gray-300"
                  >
                    <img
                      src={`${e?.yoast_head_json?.og_image[0]?.url}`}
                      className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                      alt="Adventure"
                    />
                  </Link>
                  <div className="relative mt-5">
                    <p className="uppercase font-semibold text-xs mb-2.5 text-[#56a7e5]">
                      {new Date(e?.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      &nbsp;&nbsp; by {e?.yoast_head_json?.author}
                    </p>
                    <Link
                      href={`/blog/${e?.slug}`}
                      className="block mb-3 hover:underline"
                    >
                      <h2
                        className="text-xl lg:text-2xl leading-tight font-semibold leading-5 text-black  transition-colors duration-200 hover:text-[#56a7e5] "
                        dangerouslySetInnerHTML={{
                          __html: e?.title?.rendered,
                        }}
                      />
                    </Link>
                    <p className="text-gray-700">
                      {truncateHTML(e?.excerpt?.rendered, 150)}
                    </p>

                    <Link
                      href={`/blog/${e?.slug}`}
                      className="font-medium underline text-[#56a7e5]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-full text-center">
            {!showAll && (
              <button
                onClick={() => {
                  setPosts(9);
                  setShowAll(true);
                }}
                className="relative mb-5 cursor-pointer border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
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
                  className={`${currPage === 1 ? "opacity-50 cursor-not-allowed " : "hover:text-white hover:bg-black hover:border-black"} p-1 cursor-pointer rounded border text-black bg-white `}
                >
                  <ArrowLeft />
                </button>
                <p className="text-gray-500">
                  Page {currPage} of {totalPages}
                </p>
                <button
                  disabled={currPage === totalPages || loading}
                  onClick={() => {
                    if (loading) return;
                    setPosts(9);
                    setCurrPage((prev) => prev + 1);
                  }}
                  className={`${currPage === totalPages ? "opacity-50 cursor-not-allowed " : "hover:text-white hover:bg-black hover:border-black"} p-1 cursor-pointer rounded border text-black bg-white `}
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
