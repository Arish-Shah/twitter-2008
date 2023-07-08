import { Container } from "@/components/layout/content";

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return <Container large>{children}</Container>;
}
