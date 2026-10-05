"use server";
import connectDB from "@/db/connect";
import PageContent from "@/models/pageContent";
import Redirect from "@/models/redirect";
import SiteSetting from "@/models/siteSetting";
import { getSession } from "@/actions/authActions";
import { getPageMeta } from "@/lib/pageContentRegistry";
import { PAGE_PATHS } from "@/lib/pagePaths";
import { isTrue, publicPathFor } from "@/lib/seo";
import { validateRedirect } from "@/lib/seoValidate";
import { defaultRobotsText } from "@/lib/robotsBuilder";
import { buildSitemapEntries, entriesToXml } from "@/lib/sitemapBuilder";
import { revalidatePath } from "next/cache";

async function requireSession() {
  const session = await getSession();
  return session ? null : { success: false, message: "Unauthorized." };
}

// robots.txt and the sitemap decide what Google can see at all, so only
// admins may change them (page-level SEO stays open to every dashboard
// user, same as the rest of the page content).
async function requireAdmin() {
  const session = await getSession();
  if (!session) return { success: false, message: "Unauthorized." };
  if (session.role !== "admin") {
    return { success: false, message: "Only admins can change this." };
  }
  return null;
}

const plain = (doc) => ({
  id: String(doc._id),
  from: doc.from,
  to: doc.to,
  enabled: !!doc.enabled,
});

// ---- Redirect Manager -----------------------------------------------------

export async function getRedirects() {
  const denied = await requireSession();
  if (denied) return denied;
  try {
    await connectDB();
    const docs = await Redirect.find().sort({ createdAt: -1 }).lean();
    return { success: true, data: docs.map(plain) };
  } catch (error) {
    console.error("Get redirects failed:", error);
    return { success: false, message: "Failed to load redirects." };
  }
}

// Create (no id) or edit (id) one 301 redirect.
export async function saveRedirect({ id, from, to, enabled }) {
  const denied = await requireSession();
  if (denied) return denied;
  try {
    await connectDB();
    const checked = await validateRedirect({ from, to }, id || null);
    if (checked.error) return { success: false, message: checked.error };
    const payload = {
      from: checked.from,
      to: checked.to,
      enabled: enabled !== false,
    };
    const doc = id
      ? await Redirect.findByIdAndUpdate(id, payload, { new: true })
      : await Redirect.create(payload);
    if (!doc) return { success: false, message: "Redirect not found." };
    return { success: true, data: plain(doc) };
  } catch (error) {
    console.error("Save redirect failed:", error);
    return { success: false, message: "Failed to save the redirect." };
  }
}

export async function setRedirectEnabled(id, enabled) {
  const denied = await requireSession();
  if (denied) return denied;
  try {
    await connectDB();
    const doc = await Redirect.findByIdAndUpdate(
      id,
      { enabled: !!enabled },
      { new: true },
    );
    if (!doc) return { success: false, message: "Redirect not found." };
    return { success: true, data: plain(doc) };
  } catch (error) {
    console.error("Toggle redirect failed:", error);
    return { success: false, message: "Failed to update the redirect." };
  }
}

export async function deleteRedirect(id) {
  const denied = await requireSession();
  if (denied) return denied;
  try {
    await connectDB();
    await Redirect.findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    console.error("Delete redirect failed:", error);
    return { success: false, message: "Failed to delete the redirect." };
  }
}

// ---- robots.txt -----------------------------------------------------------

export async function getRobotsSettings() {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    await connectDB();
    const setting = await SiteSetting.findOne({ key: "robots" }).lean();
    const defaultText = defaultRobotsText();
    const mode = setting?.value?.mode === "custom" ? "custom" : "auto";
    return {
      success: true,
      mode,
      defaultText,
      text: mode === "custom" ? setting.value.text : defaultText,
    };
  } catch (error) {
    console.error("Get robots failed:", error);
    return { success: false, message: "Failed to load robots.txt." };
  }
}

// mode "auto" goes back to the built-in default; "custom" serves `text`.
export async function saveRobotsSettings({ mode, text }) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    if (mode !== "auto" && mode !== "custom") {
      return { success: false, message: "Invalid mode." };
    }
    const body = String(text ?? "");
    if (mode === "custom") {
      if (!body.trim()) {
        return { success: false, message: "robots.txt can't be empty." };
      }
      if (body.length > 100_000) {
        return { success: false, message: "robots.txt is too large." };
      }
    }
    await connectDB();
    await SiteSetting.findOneAndUpdate(
      { key: "robots" },
      { $set: { value: { mode, text: mode === "custom" ? body : "" } } },
      { upsert: true },
    );
    return { success: true };
  } catch (error) {
    console.error("Save robots failed:", error);
    return { success: false, message: "Failed to save robots.txt." };
  }
}

// ---- XML sitemap ----------------------------------------------------------

export async function getSitemapSettings() {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    await connectDB();
    const setting = await SiteSetting.findOne({ key: "sitemap" }).lean();
    const generatedXml = entriesToXml(await buildSitemapEntries());
    const mode = setting?.value?.mode === "custom" ? "custom" : "auto";
    return {
      success: true,
      mode,
      generatedXml,
      xml: mode === "custom" ? setting.value.xml : generatedXml,
    };
  } catch (error) {
    console.error("Get sitemap failed:", error);
    return { success: false, message: "Failed to load the sitemap." };
  }
}

export async function saveSitemapSettings({ mode, xml }) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    if (mode !== "auto" && mode !== "custom") {
      return { success: false, message: "Invalid mode." };
    }
    const body = String(xml ?? "").trim();
    if (mode === "custom") {
      if (!body.includes("<urlset") || !body.includes("</urlset>")) {
        return {
          success: false,
          message: "Sitemap XML must contain a <urlset> ... </urlset> block.",
        };
      }
      if (body.length > 5_000_000) {
        return { success: false, message: "Sitemap is too large." };
      }
    }
    await connectDB();
    await SiteSetting.findOneAndUpdate(
      { key: "sitemap" },
      { $set: { value: { mode, xml: mode === "custom" ? body : "" } } },
      { upsert: true },
    );
    return { success: true };
  } catch (error) {
    console.error("Save sitemap failed:", error);
    return { success: false, message: "Failed to save the sitemap." };
  }
}

// One row per dashboard-editable page, with its current sitemap/index
// status — drives the include/exclude table in Sitemap & Robots.
export async function getSitemapPages() {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    await connectDB();
    const docs = await PageContent.find()
      .select("pageKey fields.sitemapInclude fields.robotsIndex fields.seoSlug")
      .lean();
    const byKey = Object.fromEntries(docs.map((d) => [d.pageKey, d.fields || {}]));
    const rows = Object.keys(PAGE_PATHS).map((pageKey) => {
      const f = byKey[pageKey] || {};
      return {
        pageKey,
        label: getPageMeta(pageKey)?.label || pageKey,
        path: publicPathFor(pageKey, f.seoSlug) || PAGE_PATHS[pageKey],
        include: isTrue(f.sitemapInclude, true),
        noindex: f.robotsIndex === "noindex",
      };
    });
    return { success: true, data: rows };
  } catch (error) {
    console.error("Get sitemap pages failed:", error);
    return { success: false, message: "Failed to load pages." };
  }
}

export async function setSitemapInclude(pageKey, include) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    if (!PAGE_PATHS[pageKey]) {
      return { success: false, message: "Unknown page." };
    }
    await connectDB();
    await PageContent.findOneAndUpdate(
      { pageKey },
      { $set: { "fields.sitemapInclude": !!include } },
      { upsert: true },
    );
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    console.error("Set sitemap include failed:", error);
    return { success: false, message: "Failed to update the page." };
  }
}
