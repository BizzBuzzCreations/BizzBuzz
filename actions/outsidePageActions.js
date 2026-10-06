"use server";
import connectDB from "@/db/connect";
import OutsidePage from "@/models/outsidePage";
import PageContent from "@/models/pageContent";
import { getSession } from "@/actions/authActions";
import { revalidatePath } from "next/cache";
import { OUTSIDE_PAGE_PREFIX, isValidSlug } from "@/lib/seo";

// Slugs that can't be used: "uk" would collide with the built-in UK page's
// key, and the UK page itself already owns its own URL.
const RESERVED_SLUGS = ["uk", "digital-marketing-services-in-uk"];

async function requireSession() {
  const session = await getSession();
  if (!session) return { success: false, message: "Unauthorized." };
  return null;
}

const toPlain = (doc) => ({
  slug: doc.slug,
  pageKey: doc.pageKey,
  label: doc.label,
  path: `/en-uk/${doc.slug}`,
});

// Public-safe read used by the dashboard dropdown and the page route.
export async function listOutsidePages() {
  try {
    await connectDB();
    const docs = await OutsidePage.find({}).sort({ createdAt: 1 }).lean();
    return docs.map(toPlain);
  } catch (error) {
    console.error("List outside pages failed:", error);
    return [];
  }
}

export async function getOutsidePageBySlug(slug) {
  try {
    await connectDB();
    const doc = await OutsidePage.findOne({ slug }).lean();
    return doc ? toPlain(doc) : null;
  } catch (error) {
    console.error("Get outside page failed:", error);
    return null;
  }
}

export async function createOutsidePage({ label, slug }) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  const name = String(label ?? "").trim().slice(0, 100);
  const cleanSlug = String(slug ?? "").trim().toLowerCase();
  if (!name) return { success: false, message: "Give the page a name." };
  if (!cleanSlug || cleanSlug.length > 80 || !isValidSlug(cleanSlug)) {
    return {
      success: false,
      message:
        "URL slug can only use lowercase letters, numbers and single hyphens (e.g. digital-marketing-services-in-canada).",
    };
  }
  if (RESERVED_SLUGS.includes(cleanSlug)) {
    return { success: false, message: `"${cleanSlug}" is already used — pick another slug.` };
  }

  try {
    await connectDB();
    const pageKey = `${OUTSIDE_PAGE_PREFIX}${cleanSlug}`;
    const exists = await OutsidePage.findOne({ $or: [{ slug: cleanSlug }, { pageKey }] }).lean();
    if (exists) {
      return { success: false, message: `/en-uk/${cleanSlug} already exists.` };
    }
    const doc = await OutsidePage.create({ slug: cleanSlug, pageKey, label: name });
    revalidatePath("/", "layout");
    return { success: true, page: toPlain(doc) };
  } catch (error) {
    console.error("Create outside page failed:", error);
    return { success: false, message: "Failed to create the page." };
  }
}

// Removes a dashboard-created page and its saved content. The built-in UK
// page can't be deleted (it isn't in this collection).
export async function deleteOutsidePage(pageKey) {
  const unauthorized = await requireSession();
  if (unauthorized) return unauthorized;

  try {
    await connectDB();
    const doc = await OutsidePage.findOneAndDelete({ pageKey });
    if (!doc) return { success: false, message: "Page not found." };
    await PageContent.deleteOne({ pageKey });
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    console.error("Delete outside page failed:", error);
    return { success: false, message: "Failed to delete the page." };
  }
}
