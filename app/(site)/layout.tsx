import { Container } from "@/components/layout/content";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return <Container>{children}</Container>;
}
