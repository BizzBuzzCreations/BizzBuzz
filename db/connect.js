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
    console.error(error.message);
    process.exit(1);
  }
};
 
export default connectDB;