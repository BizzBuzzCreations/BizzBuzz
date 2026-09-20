"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/actions/authActions";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await login(username, password);

    setLoading(false);
    if (res?.success) {
      router.push("/admin/dashboard");
      router.refresh();
    } else {
      setError(res?.message || "Login failed.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
      >
        <div className="mb-6 flex justify-center">
          <img
            src="/BBC Dark Logo.png"
            alt="BizzBuzz Creations"
            className="h-12 object-contain"
          />
        </div>
        <h1 className="mb-6 text-center text-xl font-extrabold text-slate-900">
          Dashboard login
        </h1>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <input
            id="username"
            name="username"
            className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <input
            id="password"
            name="password"
            type="password"
            className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-[10px] bg-linear-to-br from-indigo-500 to-violet-500 px-[18px] py-2.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </div>
      </form>
    </div>
  );
}
