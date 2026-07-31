import { NextResponse } from "next/server";
import { publishDueScheduledPosts } from "@/actions/blogActions";

// Point a free external cron service (e.g. cron-job.org) at this URL every
// 5-15 minutes, with ?secret=<CRON_SECRET>, so scheduled posts go live at
// the exact time picked in the dashboard — no VPS/server cron required.
export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const result = await publishDueScheduledPosts();
  return NextResponse.json(result);
}
