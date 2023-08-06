import { Page } from "@/components/page";
import { theme2, user } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Home",
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Page user={user} theme={theme2}>
      {children}
    </Page>
  );
}
