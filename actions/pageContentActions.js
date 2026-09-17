"use server";
import connectDB from "@/db/connect";
import PageContent from "@/models/pageContent";
import cloudinary from "@/lib/cloudinary";
import { getSession } from "@/actions/authActions";
import { getPageDefaults } from "@/lib/pageContentRegistry";
import { revalidatePath } from "next/cache";

async function requireSession() {
  const session = await getSession();
  if (!session) {
    return { success: false, message: "Unauthorized." };
  }
  return null;
}

// Public read — merges saved overrides on top of the real default copy,
// so a page that's never been edited renders exactly as it always has.
export async function getPageContent(pageKey) {
  const defaults = getPageDefaults(pageKey);
  try {
    await connectDB();
    const doc = await PageContent.findOne({ pageKey }).lean();
    return { ...defaults, ...(doc?.fields || {}) };
  } catch (error) {
    console.error("Get page content failed:", error);
    return defaults;
  }
}

// Admin/writer only — upserts the whole fields object for a page.
export async function savePageContent(pageKey, fields) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    await connectDB();
    await PageContent.findOneAndUpdate(
      { pageKey },
      { $set: { fields } },
      { upsert: true, new: true },
    );
    // Every page reading this content (via getPageContent above) is a
    // plain async Server Component with no dynamic API (cookies/headers)
    // in the call chain, so Next statically caches its rendered HTML —
    // without this, a saved edit updates the database but the live site
    // keeps serving the old cached page until the next full redeploy.
    // pageKey doesn't map cheaply to one exact URL (an industry/
    // sub-service pageKey needs parsing to derive its route), so
    // revalidate the whole site rather than trying to compute it.
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    console.error("Save page content failed:", error);
    return { success: false, message: "Failed to save changes." };
  }
}

// Same Cloudinary upload pattern already used for blog images — kept as
// its own action (separate folder) so content images don't mix with
// blog media in the media library.
export async function uploadContentImage(formData) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    const file = formData.get("file");
    if (!file) return { success: false, message: "No file provided." };

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "bizzbuzz-page-content",
    });

    return { success: true, url: result.secure_url };
  } catch (error) {
    console.error("Content image upload failed:", error);
    return { success: false, message: "Image upload failed." };
  }
}

// Same as above but for background/hero videos — resource_type: "video"
// and a large timeout since these files run several MB.
export async function uploadContentVideo(formData) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    const file = formData.get("file");
    if (!file) return { success: false, message: "No file provided." };

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: "bizzbuzz-page-content",
      resource_type: "video",
      timeout: 120000,
    });

    return { success: true, url: result.secure_url };
  } catch (error) {
    console.error("Content video upload failed:", error);
    return { success: false, message: "Video upload failed. The file may be too large." };
  }
}
