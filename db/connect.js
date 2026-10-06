import mongoose from "mongoose";
import dns from "node:dns/promises";
const connectDB = async () => {
  // Already connected — reuse it instead of re-running the
  // handshake on every request, which was adding to server response time.
  if (mongoose.connection.readyState === 1) return;
  try {
    // For only development use
    if (process.env.NODE_ENV === "development") {
      dns.setServers(["1.1.1.1", "8.8.8.8"]); // Cloudflare + Google
      dns.setDefaultResultOrder("ipv4first");
    }
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    // During `next build` prerendering, throw instead of killing the
    // process so callers (which catch) fall back to defaults and ISR
    // refreshes the page once the DB is reachable.
    if (process.env.NEXT_PHASE === "phase-production-build") throw error;
    process.exit(1);
  }
};
 
export default connectDB;