import { Container } from "@/components/layout/content";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <Container>{children}</Container>;
}
