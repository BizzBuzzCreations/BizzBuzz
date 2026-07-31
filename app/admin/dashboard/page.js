import Dashboard from "@/components/sections/dashboard";
import { getSession } from "@/actions/authActions";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await getSession();

  if (!session) {
    redirect("/admin/login");
  }

  return <Dashboard role={session.role} name={session.name} />;
}
