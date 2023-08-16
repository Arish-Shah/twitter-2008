import { Content, Main, Sidebar } from "@/components/content";
import { MastHead } from "@/components/mast-head";
import { Timeline } from "@/components/timeline";
import { getTimeline } from "@/lib/actions/profile/get-timeline";

interface ProfileProps {
  params: { username: string };
}

export default async function Profile({ params: { username } }: ProfileProps) {
  const timeline = await getTimeline(username);

  return (
    <Content>
      <Main className="px-[20px] pb-[12pt] pt-[18px]">
        <MastHead username={username} />
        <Timeline updates={timeline.updates} />
      </Main>
      <Sidebar>sidebar</Sidebar>
    </Content>
  );
}
