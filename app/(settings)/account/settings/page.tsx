import { SettingsForm } from "@/components/forms/settings-form";
import { Tabs } from "@/components/home/tabs";
import { MastHead } from "@/components/profile/mast-head";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / Settings",
};

export default async function Settings() {
  const session = await auth();

  return (
    <Content>
      <Main className="!p-[12px]">
        <MastHead username={session.user.username} size="small" />
        <Tabs type="settings" selected="Account" />
        <SettingsForm />
        <div className="h-[10px]"></div>
        <Link href="/account/delete" prefetch={false}>
          Delete my account
        </Link>
      </Main>
      <Sidebar>
        <Sidebar.Section className="pr-[16px]">
          <Sidebar.H1Underline>Account</Sidebar.H1Underline>
          <Sidebar.P className="mt-[5px]">
            From here you can change your basic account info, fill in your
            profile data, and set whether you want to be private or public.
          </Sidebar.P>
          <Sidebar.H1 className="mb-[10px] mt-[15px]">Tips</Sidebar.H1>
          <Sidebar.UnorderedList className="!p-0">
            <Sidebar.UnorderedListItem>
              Filling in you profile information will help people find you on
              Twitter. For example, you&apos;ll be more likely to turn up in a
              Twitter search if you&apos;ve added your location or your real
              name.
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              Change your Twitter user name anytime without affecting your
              existing updates, @replies, direct messages, or other data. After
              changing it, make sure to let your followers know so you&apos;ll
              continue receiving all of your messages with your new user name.
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              Protect your profile to keep your Twitter updates private. Approve
              who can follow you and keep your updates out of search results.
            </Sidebar.UnorderedListItem>
          </Sidebar.UnorderedList>
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
