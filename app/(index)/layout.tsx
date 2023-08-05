import { IndexLoginForm } from "@/components/forms/index-login-form";
import { Page } from "@/components/page";
import { RecentTweets } from "@/components/recent-tweets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter: What are you doing?",
};

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <Page size="LARGE">
      <div className="mb-[5px] flex p-[17px_20px]">
        {children}
        <IndexLoginForm />
      </div>
      <RecentTweets />
    </Page>
  );
}
