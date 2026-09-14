"use server";
import connectDB from "@/db/connect";
import MediaAsset from "@/models/mediaAsset";
import cloudinary from "@/lib/cloudinary";
import { getSession } from "@/actions/authActions";

async function requireSession() {
  const session = await getSession();
  if (!session) {
    return { success: false, message: "Unauthorized." };
  }
  return null;
}

// Shared media pool for the dashboard's Website Content / Industries /
// Services / Sub-Services sections — files uploaded here aren't tied to
// any single page or field, unlike the per-field "Upload Image" buttons.
// Newest first so a fresh upload is immediately visible at the top
// instead of the admin having to scroll to confirm it landed.
export async function getMediaLibrary() {
  const unauthorized = await requireSession();
  if (unauthorized) return [];

  try {
    await connectDB();
    const assets = await MediaAsset.find({}).sort({ createdAt: -1 }).lean();
    return assets.map((a) => ({
      id: String(a._id),
      url: a.url,
      publicId: a.publicId,
      resourceType: a.resourceType,
      createdAt: a.createdAt,
    }));
  } catch (error) {
    console.error("Get media library failed:", error);
    return [];
  }
}

export async function uploadMediaLibraryAsset(formData) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    const file = formData.get("file");
    if (!file) return { success: false, message: "No file provided." };

    const isVideo = file.type?.startsWith("video/");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "bizzbuzz-media-library",
      resource_type: isVideo ? "video" : "image",
      timeout: 120000,
    });

    const session = await getSession();

    await connectDB();
    const doc = await MediaAsset.create({
      url: result.secure_url,
      publicId: result.public_id,
      resourceType: isVideo ? "video" : "image",
      uploadedBy: session?.username || session?.name || "",
    });

    return {
      success: true,
      asset: {
        id: String(doc._id),
        url: doc.url,
        publicId: doc.publicId,
        resourceType: doc.resourceType,
        createdAt: doc.createdAt,
      },
    };
  } catch (error) {
    console.error("Media library upload failed:", error);
    return { success: false, message: "Upload failed. The file may be too large." };
  }
}

// Removes both the DB record and the underlying Cloudinary file — best
// effort on the Cloudinary side (a failed remote delete still removes it
// from the library list rather than leaving the admin stuck).
export async function deleteMediaLibraryAsset(id) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    await connectDB();
    const doc = await MediaAsset.findById(id);
    if (!doc) return { success: false, message: "Not found." };

    try {
      await cloudinary.uploader.destroy(doc.publicId, {
        resource_type: doc.resourceType,
      });
    } catch (cloudErr) {
      console.error("Cloudinary delete failed:", cloudErr);
    }

    await MediaAsset.deleteOne({ _id: id });
    return { success: true };
  } catch (error) {
    console.error("Delete media asset failed:", error);
    return { success: false, message: "Failed to delete." };
  }
}
