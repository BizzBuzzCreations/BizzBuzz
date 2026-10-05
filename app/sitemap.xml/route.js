import connectDB from "@/db/connect";
import SiteSetting from "@/models/siteSetting";
import { buildSitemapEntries, entriesToXml } from "@/lib/sitemapBuilder";

// Auto-generated from the site's pages (honouring each page's
// include/exclude + noindex choice), unless the dashboard's Sitemap &
// Robots tab has switched it to a hand-written "custom" XML.
export const dynamic = "force-dynamic";

export async function GET() {
  let xml;
  try {
    await connectDB();
    const setting = await SiteSetting.findOne({ key: "sitemap" }).lean();
    if (setting?.value?.mode === "custom" && setting.value.xml?.trim()) {
      xml = setting.value.xml;
    }
  } catch (error) {
    console.error("sitemap setting read failed:", error);
  }
  if (!xml) xml = entriesToXml(await buildSitemapEntries());
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
