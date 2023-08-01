import { Page } from "@/components/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
};

interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return <Page>{children}</Page>;
}
