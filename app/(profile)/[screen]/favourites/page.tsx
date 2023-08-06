import { Feed } from "@/components/feed";
import { FollowingSmall } from "@/components/following-small";
import { Page } from "@/components/page";
import { Pagination } from "@/components/pagination";
import { ProfileTabMenu } from "@/components/tab-menu";
import { TwoColumn } from "@/components/two-column";
import { UserInfo } from "@/components/user-info";
import { UserStats } from "@/components/user-stats";
import { bioPic, count, feed, info, user } from "@/lib/data";

interface FavouritesProps {
  params: { screen: string };
}

export default function Favourites({ params: { screen } }: FavouritesProps) {
  return (
    <Page user={user}>
      <TwoColumn>
        <TwoColumn.Main className="pb-[12px]">
          <TwoColumn.Main.H2>Bruce Wayne&rsquo;s Favorites</TwoColumn.Main.H2>
          <Feed tweets={feed} user={user} />
          <Pagination
            current={2}
            hasNext={true}
            screen={screen}
            type="PREV_NEXT"
          />
        </TwoColumn.Main>
        <TwoColumn.Sidebar>
          <TwoColumn.Sidebar.Section>
            <UserInfo screen={screen} info={info} />
            <UserStats screen={screen} count={count} />
          </TwoColumn.Sidebar.Section>
          <ProfileTabMenu screen={screen} selected="FAVORITES" />
          <TwoColumn.Sidebar.Section bordered={true}>
            <FollowingSmall screen={screen} users={Array(36).fill(bioPic)} />
          </TwoColumn.Sidebar.Section>
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Page>
  );
}
