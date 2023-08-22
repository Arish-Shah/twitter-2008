import { Main } from "@/components/ui/content";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { user } = await auth();

  return {
    title: `Twitter / People who follow ${user.username}`,
  };
}

// TODO
export default async function Followers() {
  return (
    <Main>
      <Main.H2>You don&apos;t have any followers just yet.</Main.H2>
      <Main.P className="text-subtext">You probably will soon, though!</Main.P>
    </Main>
  );
}
