import { Page } from "@/components/page";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return <Page>{children}</Page>;
}
