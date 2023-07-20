import { Page } from "@/components/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter: What are you doing?",
};

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return <Page large>{children}</Page>;
}
