import { Page } from "@/components/page";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <Page>{children}</Page>;
}
