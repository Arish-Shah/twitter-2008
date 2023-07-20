import { Page } from "@/components/page";

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return <Page isIndex={true}>{children}</Page>;
}
