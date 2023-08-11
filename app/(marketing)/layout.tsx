import { Page } from "@/components/page";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <Page>{children}</Page>;
}
