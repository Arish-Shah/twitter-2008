import { Container } from "@/components/layout/content";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return <Container>{children}</Container>;
}
