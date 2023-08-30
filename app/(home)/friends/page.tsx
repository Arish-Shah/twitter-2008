import { Main } from "@/components/ui/content";
import { getProfile } from "@/lib/actions/profile/get-update-profile";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();

  return {
    title: `Twitter / People ${profile.username} follows`,
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
