import mongoose from "mongoose";

// One 301 redirect managed from the dashboard (per page, or all of them
// in Sitemap & Robots). Paths are site-relative ("/old-page"); `to` may
// also be a full external URL. Disabled redirects stay in the list but
// are ignored by proxy.js.
const redirectSchema = new mongoose.Schema(
  {
    from: { type: String, required: true, unique: true, index: true },
    to: { type: String, required: true },
    enabled: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.models.Redirect ||
  mongoose.model("Redirect", redirectSchema);
