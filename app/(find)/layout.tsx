import { Page } from "@/components/ui/page";
import { getTheme } from "@/lib/actions/profile/get-theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Find People You Know on Twitter",
};

interface FindLayoutProps {
  children: React.ReactNode;
}

export default async function FindLayout({ children }: FindLayoutProps) {
  const theme = await getTheme();

  return <Page theme={theme}>{children}</Page>;
}
