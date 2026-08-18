import mongoose from "mongoose";
import dns from "node:dns/promises";
const connectDB = async () => {
  try {
    // For only development use
    if (process.env.NODE_ENV === "development") {
      dns.setServers(["1.1.1.1", "8.8.8.8"]); // Cloudflare + Google
      dns.setDefaultResultOrder("ipv4first");
    }
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    // Don't kill the whole process (this crashes the entire dev/prod server,
    // not just the request that needed the DB). Let the caller's request
    // fail instead so the rest of the app keeps running.
    throw error;
  }
};
 
export default connectDB;