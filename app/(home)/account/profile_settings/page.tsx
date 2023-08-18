import { MastHead } from "@/components/profile/mast-head";
import { Tabs } from "@/components/profile/tabs";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Design",
};

export default async function ProfileSettings() {
  const session = await auth();

  return (
    <Content>
      <Main className="!p-[12px]">
        <MastHead username={session.user.username} size="small" />
        <Tabs selected="Design" />
      </Main>
      <Sidebar>
        <Sidebar.Section className="pr-[16px]">
          Customize the way Twitter looks for you and how your profile looks to
          others. Start with a pre-designed theme -- and then, optionally,
          customize it with your own color scheme and background image.
          <Sidebar.H1 className="mb-[10px] mt-[15px]">Tips</Sidebar.H1>
          <Sidebar.UnorderedList className="!p-0">
            <Sidebar.UnorderedListItem>
              You can see what your changes look like instantly, but
              they&apos;re not saved until you click &quot;save changes.&quot;
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              If you want to start over, click &quot;cancel.&quot;
            </Sidebar.UnorderedListItem>
          </Sidebar.UnorderedList>
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
