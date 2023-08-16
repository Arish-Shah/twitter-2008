import { Page } from "@/components/page";
import { getTheme } from "@/lib/actions/profile/get-theme";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Twitter / Home",
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  const theme = await getTheme(session.user.username);

  return <Page theme={theme}>{children}</Page>;
}
