import { Page } from "@/components/page";
import type { Metadata } from "next";

interface ProfileLayoutProps {
  params: { screen: string };
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: ProfileLayoutProps): Promise<Metadata> {
  return {
    title: `Twitter / ${params.screen}`,
  };
}

export default function ProfileLayout({
  params,
  children,
}: ProfileLayoutProps) {
  return <Page join={params.screen}>{children}</Page>;
}
