import { IndexLoginForm } from "@/components/forms/index-login-form";
import { News } from "@/components/news";
import { WatchButton } from "@/components/ui/button";
import { Page } from "@/components/ui/page";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Twitter: What are you doing?",
};

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default async function IndexLayout({ children }: IndexLayoutProps) {
  const session = await auth();
  if (session?.user) return redirect("/home");

  return (
    <Page size="large">
      <div className="mb-[5px] flex p-[17px_20px]">
        <div className="min-w-[510px]">{children}</div>
        <div className="ml-[23px] w-full">
          <WatchButton />
          <IndexLoginForm />
        </div>
      </div>
      <News />
    </Page>
  );
}
