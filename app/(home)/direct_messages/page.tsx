import { MessageList } from "@/components/home/message-list";
import { Tabs } from "@/components/home/tabs";
import { Pagination } from "@/components/profile/pagination";
import { Main } from "@/components/ui/content";
import { getDirectMessages } from "@/lib/actions/home/get-post-delete-message";
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
  const page = Number(searchParams.page || 1);
  const inbox = await getDirectMessages(page);

  return (
    <div className="mt-[20px]">
      <Tabs type="direct_messages" selected="Inbox" />
      <Main.H2 className="my-[10px]">Direct Messages Sent Only To You</Main.H2>
      <MessageList messages={inbox.messages} />
      <Pagination type="newOld" hasMore={inbox.hasMore} page={page} />
    </div>
  );
}
