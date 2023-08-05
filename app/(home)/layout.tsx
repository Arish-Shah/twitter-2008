import { Page } from "@/components/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <Page>{children}</Page>;
}
