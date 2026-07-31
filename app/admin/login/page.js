import { redirect } from "next/navigation";
import { getSession } from "@/actions/authActions";
import LoginForm from "@/components/sections/loginForm";

export default async function LoginPage() {
  const session = await getSession();
  if (session) {
    redirect("/admin/dashboard");
  }

  return <LoginForm />;
}
