import { Carousel } from "@/components/intro/carousel";
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
      <div className="flex p-[17px_20px]">
        {children}
        <form className="w-[179px]">form</form>
      </div>
    </Container>
  );
}
