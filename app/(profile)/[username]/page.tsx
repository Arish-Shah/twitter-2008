import { Menu } from "@/components/home/menu";
import { Follow } from "@/components/profile/follow";
import { Following } from "@/components/profile/following";
import { Info } from "@/components/profile/info";
import { MastHead } from "@/components/profile/mast-head";
import { Pagination } from "@/components/profile/pagination";
import { Stats } from "@/components/profile/stats";
import { Timeline } from "@/components/profile/timeline";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getFollow } from "@/lib/actions/profile/get-post-follow";
import { getTimeline } from "@/lib/actions/profile/get-timeline";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import { auth } from "@/lib/auth";

interface ProfileProps {
  params: { username: string };
  searchParams: { page?: string };
}

export default async function Profile({
  params: { username },
  searchParams,
}: ProfileProps) {
  const session = await auth();

  const page = Number(searchParams.page || 1);
  const timeline = await getTimeline(username, page);
  const followData = await getFollow(username);
  const deviceUpdatesData = await getDeviceUpdates();

  return (
    <Content>
      <Main className="!p-[18px_20px_12px_20px]">
        <MastHead username={username} />
        {session?.user && session?.user.username !== username && (
          <Follow
            username={username}
            followData={followData}
            deviceUpdatesData={deviceUpdatesData}
          />
        )}
        <Timeline updates={timeline.updates} page={page} />
        <Pagination
          userId={timeline.userId}
          page={page}
          hasMore={timeline.hasMore}
          type="newOld"
        />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <Info username={username} />
          <Stats username={username} />
        </Sidebar.Section>
        <Menu type={{ username }} selected="Updates" />
        <Sidebar.Section bordered>
          <Following username={username} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
