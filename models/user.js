import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    name: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", userSchema);
