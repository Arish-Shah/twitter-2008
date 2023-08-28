import { Tabs } from "@/components/home/tabs";
import { Main } from "@/components/ui/content";
import { auth } from "@/lib/auth";
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
  const { user } = await auth();
  const page = Number(searchParams.page || 1);

  return (
    <div className="mt-[20px]">
      <Tabs type="direct_messages" selected="Sent" />
      <Main.H2>Direct Messages You&apos;ve Sent</Main.H2>
    </div>
  );
}
