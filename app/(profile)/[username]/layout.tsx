import { Page } from "@/components/page";
import { getTheme } from "@/lib/actions/get-theme";
import type { Metadata } from "next";

interface ProfileLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

export async function generateMetadata({
  params: { username },
}: ProfileLayoutProps): Promise<Metadata> {
  return {
    title: `Twitter / ${username}`,
  };
}

export default async function ProfileLayout({
  params: { username },
  children,
}: ProfileLayoutProps) {
  const theme = await getTheme(username);
  return <Page theme={theme}>{children}</Page>;
}
