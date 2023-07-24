import { Page } from "@/components/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <Page>{children}</Page>;
}
