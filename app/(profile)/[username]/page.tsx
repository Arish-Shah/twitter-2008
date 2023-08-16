import { Content, Main, Sidebar } from "@/components/content";
import { MastHead } from "@/components/mast-head";
import { Pagination } from "@/components/pagination";
import { Timeline } from "@/components/timeline";
import { getTimeline } from "@/lib/actions/profile/get-timeline";

interface ProfileProps {
  params: { username: string };
  searchParams: { page?: string };
}

export default async function Profile({
  params: { username },
  searchParams,
}: ProfileProps) {
  const currentPage = Number(searchParams.page || 1);
  const timeline = await getTimeline(username, currentPage);

  return (
    <Content>
      <Main className="px-[20px] pb-[12px] pt-[18px]">
        <MastHead username={username} />
        <Timeline updates={timeline.updates} />
        <Pagination
          userId={timeline.userId}
          currentPage={currentPage}
          hasMore={timeline.hasMore}
          type="newOld"
        />
      </Main>
      <Sidebar>sidebar</Sidebar>
    </Content>
  );
}
