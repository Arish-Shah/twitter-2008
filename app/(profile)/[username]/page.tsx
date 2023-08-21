import { Menu } from "@/components/home/menu";
import { Follow } from "@/components/profile/follow";
import { Following } from "@/components/profile/following";
import { Info } from "@/components/profile/info";
import { MastHead } from "@/components/profile/mast-head";
import { Pagination } from "@/components/profile/pagination";
import { Stats } from "@/components/profile/stats";
import { Timeline } from "@/components/profile/timeline";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getTimeline } from "@/lib/actions/profile/get-timeline";
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

  const currentPage = Number(searchParams.page || 1);
  const timeline = await getTimeline(username, currentPage);

  return (
    <Content>
      <Main className="!p-[18px_20px_12px_20px]">
        <MastHead username={username} />
        {session?.user && session?.user.username !== username && (
          <Follow username={username} />
        )}
        <Timeline updates={timeline.updates} currentPage={currentPage} />
        <Pagination
          userId={timeline.userId}
          currentPage={currentPage}
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
