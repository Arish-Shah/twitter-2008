import { Main } from "@/components/ui/content";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const { user } = await auth();

  return {
    title: `Twitter / People ${user.username} follows`,
  };
}

// TODO
export default async function Friends() {
  return (
    <Main>
      <Main.H2>
        You follow 1 person. <Link href="/invitations">Invite more!</Link>
      </Main.H2>
    </Main>
  );
}
