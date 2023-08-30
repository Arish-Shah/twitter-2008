import { Page } from "@/components/ui/page";
import { getTheme } from "@/lib/actions/profile/get-theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Home",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default async function SettingsLayout({
  children,
}: SettingsLayoutProps) {
  const theme = await getTheme();

  return <Page theme={theme}>{children}</Page>;
}
