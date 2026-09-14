import mongoose from "mongoose";

// One document per file uploaded into the dashboard's shared Media
// Library (Website Content / Industries / Services / Sub-Services) —
// separate from PageContent, since a library asset isn't tied to any
// single page or field. `url`/`publicId` point at the same Cloudinary
// account already used for page-content and blog uploads.
const mediaAssetSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    resourceType: { type: String, enum: ["image", "video"], default: "image" },
    uploadedBy: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.models.MediaAsset ||
  mongoose.model("MediaAsset", mediaAssetSchema);
