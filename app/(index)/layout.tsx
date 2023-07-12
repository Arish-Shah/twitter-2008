import { IndexForm } from "@/components/form/index-form";
import { Recent } from "@/components/intro/recent";
import { Container } from "@/components/layout/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter: What are you doing?",
};

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <Container large>
      <div className="flex p-[17px_20px] mb-[5px]">
        {children}
        <IndexForm />
      </div>
      <Recent />
    </Container>
  );
}
