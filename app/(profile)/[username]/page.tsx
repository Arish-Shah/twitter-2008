import { MastHead } from "@/components/profile/mast-head";
import { Pagination } from "@/components/profile/pagination";
import { Timeline } from "@/components/profile/timeline";
import { Content, Main, Sidebar } from "@/components/ui/content";
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
        <Timeline updates={timeline.updates} currentPage={currentPage} />
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
