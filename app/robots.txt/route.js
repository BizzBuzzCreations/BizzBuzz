import connectDB from "@/db/connect";
import SiteSetting from "@/models/siteSetting";
import { defaultRobotsText } from "@/lib/robotsBuilder";

// Always read fresh: the dashboard's Sitemap & Robots tab can replace
// this file's contents at any time ("custom" mode); otherwise the
// default rules (same as the old app/robots.js) are served.
export const dynamic = "force-dynamic";

export async function GET() {
  let text = defaultRobotsText();
  try {
    await connectDB();
    const setting = await SiteSetting.findOne({ key: "robots" }).lean();
    if (setting?.value?.mode === "custom" && setting.value.text?.trim()) {
      text = setting.value.text;
    }
  } catch (error) {
    console.error("robots.txt read failed:", error);
  }
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
