import Dashboard from "@/components/sections/dashboard";
import { notFound } from "next/navigation";

export default async function AdminDashboard({ searchParams }) {
  const { token } = await searchParams;

  if (!token || token !== process.env.ADMIN_PAGE_TOKEN) {
    notFound();
  }

  return <Dashboard />;
}
