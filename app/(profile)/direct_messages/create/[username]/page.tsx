import { CreateMessageForm } from "@/components/forms/create-message-form";
import { Main } from "@/components/ui/content";
import { getLoggedInUsername } from "@/lib/actions/get-loggedin-username";
import { getProfile } from "@/lib/actions/profile/get-profile";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface CreateDirectMessagesProps {
  params: { username: string };
}

export async function generateMetadata({
  params: { username },
}: CreateDirectMessagesProps): Promise<Metadata> {
  const profile = await getProfile(username);
  const loggedInUsername = await getLoggedInUsername();

  if (loggedInUsername === profile.username) return notFound();

  return {
    title: `Twitter / Send ${profile.name} a Direct Message`,
  };
}

export default async function CreateDirectMessages({
  params: { username },
}: CreateDirectMessagesProps) {
  const profile = await getProfile(username);

  return (
    <Main className="!pb-[45px] !pt-[25px]">
      <div className="mx-auto w-[540px]">
        <CreateMessageForm name={profile.name} username={profile.username} />
      </div>
    </Main>
  );
}
