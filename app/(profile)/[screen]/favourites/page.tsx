import { Feed } from "@/components/feed";
import { FollowingSmall } from "@/components/following-small";
import { Page } from "@/components/page";
import { Pagination } from "@/components/pagination";
import { TabMenu } from "@/components/tab-menu";
import { TwoColumn } from "@/components/two-column";
import { UserInfo } from "@/components/user-info";
import { bioPic, favourited, info } from "@/lib/data";

interface FavouritesProps {
  params: { screen: string };
}

export default function Favourites({ params: { screen } }: FavouritesProps) {
  return (
    <Page>
      <TwoColumn>
        <TwoColumn.Main className="pb-[12px]">
          <TwoColumn.Main.H2>Bruce Wayne&rsquo;s Favorites</TwoColumn.Main.H2>
          <Feed tweets={favourited} />
          <Pagination
            current={2}
            hasNext={true}
            screen={screen}
            type="prevNext"
          />
        </TwoColumn.Main>
        <TwoColumn.Sidebar>
          <TwoColumn.Sidebar.Section>
            <UserInfo screen={screen} info={info} />
          </TwoColumn.Sidebar.Section>
          <TabMenu screen={screen} selected="favorites" />
          <TwoColumn.Sidebar.Section className="border-t border-x-sidebar-border">
            <FollowingSmall screen={screen} users={Array(36).fill(bioPic)} />
          </TwoColumn.Sidebar.Section>
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Page>
  );
}
