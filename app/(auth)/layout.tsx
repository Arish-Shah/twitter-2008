import { Page } from "@/components/ui/page";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await auth();
  if (session?.user) return redirect("/home");

  return <Page>{children}</Page>;
}
