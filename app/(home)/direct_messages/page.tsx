import { Tabs } from "@/components/home/tabs";
import { Main } from "@/components/ui/content";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Direct Messages",
};

interface DirectMessagesProps {
  searchParams: { page?: string };
}

export default async function DirectMessages({
  searchParams,
}: DirectMessagesProps) {
  const { user } = await auth();
  const page = Number(searchParams.page || 1);

  return (
    <div className="mt-[20px]">
      <Tabs type="direct_messages" selected="Inbox" />
      <Main.H2>Direct Messages Sent Only To You</Main.H2>
    </div>
  );
}
