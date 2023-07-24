import { Page } from "@/components/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
};

interface SectionLayoutProps {
  children: React.ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return <Page>{children}</Page>;
}
