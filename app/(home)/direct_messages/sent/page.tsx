import { MessageList } from "@/components/home/message-list";
import { Tabs } from "@/components/home/tabs";
import { Pagination } from "@/components/profile/pagination";
import { Main } from "@/components/ui/content";
import { getSentDirectMessages } from "@/lib/actions/home/get-post-delete-message";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Sent Direct Messages",
};

interface SentDirectMessagesProps {
  searchParams: { page?: string };
}

export default async function SentDirectMessages({
  searchParams,
}: SentDirectMessagesProps) {
  const page = Number(searchParams.page || 1);
  const sent = await getSentDirectMessages(page);

  return (
    <div className="mt-[20px]">
      <Tabs type="direct_messages" selected="Sent" />
      <Main.H2 className="my-[10px]">Direct Messages You&apos;ve Sent</Main.H2>
      <MessageList messages={sent.messages} />
      <Pagination type="newOld" hasMore={sent.hasMore} page={page} />
    </div>
  );
}
