import { DesignForm } from "@/components/forms/design-form";
import { Tabs } from "@/components/home/tabs";
import { Info } from "@/components/profile/info";
import { MastHead } from "@/components/profile/mast-head";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getLoggedInUsername } from "@/lib/actions/get-loggedin-username";
import { getTheme } from "@/lib/actions/profile/get-theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Design",
};

export default async function ProfileSettings() {
  const theme = await getTheme();
  const username = await getLoggedInUsername();

  return (
    <Content>
      <Main className="!p-[12px]">
        <MastHead size="small" />
        <div className="mt-[20px] px-[10px]">
          <Tabs type="settings" selected="Design" />
        </div>
        <DesignForm currentTheme={theme} />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <Info username={username!} />
          <Stats />
        </Sidebar.Section>
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
