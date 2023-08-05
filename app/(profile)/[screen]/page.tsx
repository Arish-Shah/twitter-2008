import { Actions } from "@/components/actions";
import { FollowingSmall } from "@/components/following-small";
import { Page } from "@/components/page";
import { Pagination } from "@/components/pagination";
import { ProfileTabMenu } from "@/components/tab-menu";
import { Timeline } from "@/components/timeline";
import { TwoColumn } from "@/components/two-column";
import { UserInfo } from "@/components/user-info";
import { UserMasthead } from "@/components/user-masthead";
import { UserStats } from "@/components/user-stats";
import { bioPic, count, info, tweets, user } from "@/lib/data";
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
          <UserMasthead
            screen={screen}
            img="/images/profile/default_profile_bigger.png"
          />
          <Timeline tweets={tweets} screen={screen} user={user} />
          <Pagination
            current={2}
            hasNext={true}
            screen={screen}
            type="NEW_OLD"
          />
        </TwoColumn.Main>
        <TwoColumn.Sidebar>
          <TwoColumn.Sidebar.Section>
            <UserInfo screen={screen} info={info} />
            <UserStats screen={screen} count={count} />
          </TwoColumn.Sidebar.Section>
          <ProfileTabMenu screen={screen} selected="UPDATES" />
          <TwoColumn.Sidebar.Section className="border-t border-x-sidebar-border">
            <Actions screen={screen} />
            <FollowingSmall screen={screen} users={Array(36).fill(bioPic)} />
          </TwoColumn.Sidebar.Section>
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Page>
  );
}
