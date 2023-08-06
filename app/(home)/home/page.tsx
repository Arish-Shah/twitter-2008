import { CheckList } from "@/components/check-list";
import { DeviceUpdates } from "@/components/device-updates";
import { Feed } from "@/components/feed";
import { FollowingSmall } from "@/components/following-small";
import { TweetForm } from "@/components/forms/tweet-form";
import { Pagination } from "@/components/pagination";
import { HomeTabMenu } from "@/components/tab-menu";
import { TwoColumn } from "@/components/two-column";
import { UserMastheadSmall } from "@/components/user-masthead";
import { UserStats } from "@/components/user-stats";
import { bioPic, count, feed, user } from "@/lib/data";

export default function Home() {
  return (
    <TwoColumn>
      <TwoColumn.Main className="px-[20px] pt-[8px]">
        <TweetForm recentTweet={feed[0]} />
        <Feed tweets={[]} user={user} />
        <CheckList />
        <Pagination
          current={1}
          hasNext={false}
          screen="default"
          type="NEW_OLD"
        />
      </TwoColumn.Main>
      <TwoColumn.Sidebar>
        <TwoColumn.Sidebar.Section>
          <UserMastheadSmall
            screen="default"
            img="/images/profile/default_profile_bigger.png"
          />
          <UserStats screen="default" count={count} />
        </TwoColumn.Sidebar.Section>
        <HomeTabMenu screen="default" selected="HOME" />
        <TwoColumn.Sidebar.Section bordered={true}>
          <FollowingSmall screen="default" users={Array(36).fill(bioPic)} />
        </TwoColumn.Sidebar.Section>
        <TwoColumn.Sidebar.Section bordered={true}>
          <DeviceUpdates setup={false} />
        </TwoColumn.Sidebar.Section>
      </TwoColumn.Sidebar>
    </TwoColumn>
  );
}
