// One-time seed: creates the initial admin and writer accounts.
// Safe to re-run: existing usernames are updated in place, not duplicated.
// Run with: node scripts/seedUsers.mjs

import fs from "node:fs";
import dns from "node:dns/promises";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");

const envText = fs.readFileSync(new URL("../.env", import.meta.url), "utf8");
const MONGO_URI = envText.match(/^MONGO_URI=(.*)$/m)[1].trim();

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    name: { type: String, default: "" },
  },
  { timestamps: true },
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

const accounts = [
  { username: "BBC@blog", password: "BBC@blog1234", role: "admin", name: "Admin" },
  { username: "User@bbc", password: "User@bbc1234", role: "user", name: "Writer" },
];

async function main() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB.");

  for (const acc of accounts) {
    const passwordHash = await bcrypt.hash(acc.password, 10);
    await User.findOneAndUpdate(
      { username: acc.username },
      { username: acc.username, passwordHash, role: acc.role, name: acc.name },
      { upsert: true, new: true },
    );
    console.log(`Seeded: ${acc.username} (role: ${acc.role})`);
  }

  await mongoose.disconnect();
  console.log("Done.");
}

main().catch((err) => {
  console.error("SEED FAILED:", err);
  process.exit(1);
});
