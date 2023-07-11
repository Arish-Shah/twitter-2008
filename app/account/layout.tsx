import { Container } from "@/components/layout/content";

interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return <Container>{children}</Container>;
}
