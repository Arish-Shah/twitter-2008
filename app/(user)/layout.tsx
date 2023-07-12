import { Container } from "@/components/layout/content";

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return <Container>{children}</Container>;
}
