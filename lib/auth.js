import jwt from "jsonwebtoken";

const SESSION_COOKIE = "bbc_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function signSession({ userId, username, role, name }) {
  return jwt.sign(
    { userId, username, role, name },
    process.env.JWT_SECRET,
    { expiresIn: SESSION_MAX_AGE },
  );
}

export function verifySession(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

export { SESSION_COOKIE, SESSION_MAX_AGE };
