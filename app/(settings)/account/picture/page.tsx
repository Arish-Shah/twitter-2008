import { PictureForm } from "@/components/forms/picture-form";
import { Tabs } from "@/components/home/tabs";
import { MastHead } from "@/components/profile/mast-head";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Picture",
};

export default async function Picture() {
  const session = await auth();

  return (
    <Content>
      <Main className="!p-[12px]">
        <MastHead username={session.user.username} size="small" />
        <div className="mt-[20px] px-[10px]">
          <Tabs type="settings" selected="Picture" />
        </div>
        <PictureForm />
      </Main>
      <Sidebar>
        <Sidebar.Section className="pr-[18px]">
          <Sidebar.H1Underline>Picture</Sidebar.H1Underline>
          <Sidebar.P className="mt-[5px]">
            Your Twitter profile pic helps instantly identify to those following
            you -- and tell those who aren&apos;t more about you.
          </Sidebar.P>
          <Sidebar.H1 className="mb-[10px] mt-[15px]">Tips</Sidebar.H1>
          <Sidebar.UnorderedList className="!p-0">
            <Sidebar.UnorderedListItem>
              A real picture of yourself is encouraged, it adds personableness
              to your tweets.
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              Because the images are usually seen in small version, a crop of
              your face works best.
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              People can see the full-sized version when they click on your
              picture from your profile page. So don&apos;t upload a tiny one --
              we&apos;ll create the thumbnail for you.
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              If you want to control exactly how it will be cropped, upload a
              square picture.
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              Nudity or obscene images are not allowed.
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem className="mt-[10px]">
              Be sure you have permission to use the photo you&apos;re using
              (And don&apos;t use a celebrity picture -- unless you&apos;re that
              celebrity, of course)
            </Sidebar.UnorderedListItem>
          </Sidebar.UnorderedList>
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
