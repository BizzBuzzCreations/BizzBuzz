import connectDB from "@/db/connect";
import Submission from "@/models/submissions";
import { getSession } from "@/actions/authActions";

// Dashboard-only download of a contact-form attachment (same access rule
// as viewing submissions: any logged-in user).
export async function GET(_req, { params }) {
  const session = await getSession();
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { id } = await params;
  await connectDB();
  const sub = await Submission.findById(id).select("+attachment.data").lean();
  const file = sub?.attachment;
  if (!file?.data) return new Response("Not found", { status: 404 });

  const filename = encodeURIComponent(file.name || "attachment");
  return new Response(Buffer.from(file.data.buffer ?? file.data), {
    headers: {
      "Content-Type": file.contentType || "application/octet-stream",
      "Content-Disposition": `attachment; filename*=UTF-8''${filename}`,
      "Cache-Control": "private, no-store",
    },
  });
}
