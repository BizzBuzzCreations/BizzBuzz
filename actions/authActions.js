"use server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import connectDB from "@/db/connect";
import User from "@/models/user";
import { signSession, verifySession, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth";

export async function login(username, password) {
  await connectDB();
  try {
    if (!username || !password) {
      return { success: false, message: "Username and password are required." };
    }

    const user = await User.findOne({ username: username.trim() });
    if (!user) {
      return { success: false, message: "Invalid username or password." };
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return { success: false, message: "Invalid username or password." };
    }

    const token = signSession({
      userId: user._id.toString(),
      username: user.username,
      role: user.role,
      name: user.name,
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    });

    return { success: true, role: user.role };
  } catch (error) {
    console.error("Login failed:", error);
    return { success: false, message: "Login failed." };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  return { success: true };
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return verifySession(token);
}
