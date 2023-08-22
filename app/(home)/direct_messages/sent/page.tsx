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

  return <Main.H2>Direct Messages</Main.H2>;
}
