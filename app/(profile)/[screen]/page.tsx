import { Page } from "@/components/page";
import { Pagination } from "@/components/pagination";
import { ProfileFollowing } from "@/components/profile-following";
import { ProfileHead } from "@/components/profile-head";
import { ProfileIntro } from "@/components/profile-intro";
import { ProfileTabMenu } from "@/components/profile-tab-menu";
import { Timeline } from "@/components/timeline";
import { TwoColumn } from "@/components/two-column";
import { bioPic, info, tweets } from "@/lib/data";
import type { Metadata } from "next";

interface ProfileProps {
  params: { screen: string };
}

export async function generateMetadata({
  params,
}: ProfileProps): Promise<Metadata> {
  return {
    title: `Twitter / ${params.screen}`,
  };
}

export default function Profile({ params: { screen } }: ProfileProps) {
  return (
    <Page join={screen}>
      <TwoColumn>
        <TwoColumn.Main className="px-[20px] pb-[12px] pt-[18px]">
          <ProfileHead
            screen={screen}
            img="/images/profile/default_profile_bigger.png"
          />
          <Timeline tweets={tweets} screen={screen} />
          <Pagination current={2} hasNext={true} screen={screen} />
        </TwoColumn.Main>
        <TwoColumn.Sidebar>
          <TwoColumn.Sidebar.Section>
            <ProfileIntro screen={screen} info={info} />
          </TwoColumn.Sidebar.Section>
          <ProfileTabMenu screen={screen} selected="updates" />
          <TwoColumn.Sidebar.Section className="border-t border-x-sidebar-border">
            <ProfileFollowing screen={screen} users={Array(36).fill(bioPic)} />
          </TwoColumn.Sidebar.Section>
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Page>
  );
}
