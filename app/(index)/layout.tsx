import { IndexLoginForm } from "@/components/index-login-form";
import { Page } from "@/components/page";
import { RecentTweets } from "@/components/recent-tweets";

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <Page isIndex={true}>
      <div className="mb-[5px] flex p-[17px_20px]">
        {children}
        <IndexLoginForm />
      </div>
      <RecentTweets />
    </Page>
  );
}
