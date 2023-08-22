import { NoticesForm } from "@/components/forms/notices-form";
import { Tabs } from "@/components/home/tabs";
import { MastHead } from "@/components/profile/mast-head";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getNotices } from "@/lib/actions/settings/get-update-notices";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / Notices",
};

export default async function Notices() {
  const session = await auth();
  const notices = await getNotices();

  return (
    <Content>
      <Main className="!p-[12px]">
        <MastHead username={session.user.username} size="small" />
        <Tabs type="settings" selected="Notices" />
        <NoticesForm notices={notices} />
      </Main>
      <Sidebar>
        <Sidebar.Section className="pr-[18px]">
          <Sidebar.H1Underline>Notices</Sidebar.H1Underline>
          <Sidebar.P className="mt-[5px]">
            These settings control how much we bug you about various things.
          </Sidebar.P>
          <Sidebar.H1 className="mb-[10px] mt-[15px]">Tips</Sidebar.H1>
          <Sidebar.UnorderedList className="!p-0">
            <Sidebar.UnorderedListItem>
              Nudge only works if you have a registered device and it is on.
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              Be sure your email is correct in{" "}
              <Link href="/account/settings">account settings</Link> to receive
              emails.
            </Sidebar.UnorderedListItem>
          </Sidebar.UnorderedList>
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
