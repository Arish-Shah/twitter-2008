import { Pagination } from "@/components/pagination";
import { ProfileFollowing } from "@/components/profile-following";
import { ProfileHead } from "@/components/profile-head";
import { ProfileIntro } from "@/components/profile-intro";
import { ProfileTabMenu } from "@/components/profile-tab-menu";
import { Timeline } from "@/components/timeline";
import { TwoColumn } from "@/components/two-column";
import { info, tweets } from "@/lib/data";

interface ProfileProps {
  params: { screen: string };
}

export default function Profile({ params: { screen } }: ProfileProps) {
  return (
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
        <ProfileIntro screen={screen} info={info} />
        <ProfileTabMenu screen={screen} selected="updates" />
        <ProfileFollowing
          screen={screen}
          users={Array(36).fill({
            screen: "user",
            name: "User",
            url: "/images/profile/default_profile_mini.png",
          })}
        />
      </TwoColumn.Sidebar>
    </TwoColumn>
  );
}
