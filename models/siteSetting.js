import mongoose from "mongoose";

// Site-wide settings that aren't tied to a page — currently the
// editable robots.txt ("robots") and XML sitemap ("sitemap"). `value`
// shape is defined by actions/seoActions.js.
const siteSettingSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, index: true },
    value: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

export default mongoose.models.SiteSetting ||
  mongoose.model("SiteSetting", siteSettingSchema);
