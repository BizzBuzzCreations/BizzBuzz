"use client";

import { getAllComments, postComment } from "@/actions/serverActions";
import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";

function initials(name) {
  return name
    .trim()
    .split(" ")
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

function ChatIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-50"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diff = Math.floor((now - past) / 1000);

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return past.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function CommentSidebar({ slug }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    const fetchAllComments = async () => {
      const res = await getAllComments(slug);
      if (res?.success) setComments(res?.data);
    };
    fetchAllComments();
  }, []);

  const handlePost = async () => {
    if (!name.trim() || !text.trim()) {
      setError(true);
      return;
    }
    setError(false);

    const res = await postComment(name, text, slug);
    if (res?.success) {
      setComments((prev) => [res?.data, ...prev]);
      setName("");
      setText("");
      setPosted(true);
      setTimeout(() => setPosted(false), 2000);

      toast.success(res?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(res?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleCancel = async () => {
    setName("");
    setText("");
    setError(false);
  };

  return (
    <>
      <aside className="lg:w-80 max-w-3xl mx-auto flex flex-col bg-[#fff] border-l border-[#e4e4e0] font-sans overflow-hidden">
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#e4e4e0] bg-white">
          <div className="flex items-center gap-2">
            <ChatIcon />
            <span className="text-sm font-semibold text-gray-900">
              Comments
            </span>
            {/* Total count pill */}
            <span className="text-[11px] font-semibold text-gray-500 bg-[#f0f0ec] border border-[#e0e0dc] rounded-full px-2 py-px">
              {comments.length}
            </span>
          </div>
        </div>

        {/* ── Post form ── */}
        <div className="flex flex-col gap-2 px-4 py-3 border-b border-[#e4e4e0] bg-white">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] font-semibold shrink-0">
              {name ? name[0].toUpperCase() : "?"}
            </div>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError(false);
              }}
              className="flex-1 h-[30px] px-2.5 text-[13px] border border-[#e0e0dc] rounded-md text-gray-900 placeholder-gray-300 outline-none focus:border-gray-400 bg-white"
            />
          </div>
          <textarea
            placeholder="Add a comment…"
            value={text}
            rows={2}
            onChange={(e) => {
              setText(e.target.value);
              setError(false);
            }}
            className="w-full px-2.5 py-1.5 text-[13px] border border-[#e0e0dc] rounded-md text-gray-900 placeholder-gray-300 outline-none focus:border-gray-400 resize-none leading-relaxed bg-white"
          />
          <div className="flex items-center justify-end gap-2">
            {error && (
              <span className="flex-1 text-[11px] text-gray-600">
                Fill in both fields.
              </span>
            )}
            <button
              onClick={handleCancel}
              className="px-3 py-1 text-xs font-medium text-gray-500 border border-[#e0e0dc] rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handlePost}
              className={`px-3.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                posted
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              {posted ? "Posted ✓" : "Post"}
            </button>
          </div>
        </div>

        {comments.length <= 0 ? (
          <div className="flex flex-1 py-5 justify-center">
            <aside className="text-center text-gray-400">
              <p className="text-sm font-medium text-gray-500">
                No comments yet
              </p>
              <p className="text-xs mt-1 flex gap-2">
                <span> Be the first to start the conversation </span>
                <Rocket size={18} />
              </p>
            </aside>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2.5">
            {comments.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-[#e4e4e0] rounded-lg px-4 py-3"
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] font-semibold shrink-0">
                      {initials(c.name)}
                    </div>
                    <span className="text-[13px] font-semibold text-gray-900">
                      {c.name}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <p className="text-[13px] text-gray-600 leading-relaxed mb-2.5">
                  {c.message}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">
                    {timeAgo(c.createdAt)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </>
  );
}
