import { FollowingSmall } from "@/components/following-small";
import { HomeTabMenu } from "@/components/tab-menu";
import { TwoColumn } from "@/components/two-column";
import { UserMastheadSmall } from "@/components/user-masthead";
import { UserStats } from "@/components/user-stats";
import { bioPic } from "@/lib/data";

export default function Home() {
  return (
    <TwoColumn>
      <TwoColumn.Main>aight</TwoColumn.Main>
      <TwoColumn.Sidebar>
        <TwoColumn.Sidebar.Section>
          <UserMastheadSmall
            screen="default"
            img="/images/profile/default_profile_bigger.png"
          />
          <UserStats
            screen="default"
            count={{
              followers: 0,
              following: 0,
              updates: 1,
            }}
          />
        </TwoColumn.Sidebar.Section>
        <HomeTabMenu screen="default" selected="HOME" />
        <TwoColumn.Sidebar.Section className="border-t border-x-sidebar-border">
          <FollowingSmall screen="default" users={Array(36).fill(bioPic)} />
        </TwoColumn.Sidebar.Section>
      </TwoColumn.Sidebar>
    </TwoColumn>
  );
}
