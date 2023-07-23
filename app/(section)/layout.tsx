import { Page } from "@/components/page";

interface SectionLayoutProps {
  children: React.ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return <Page>{children}</Page>;
}
