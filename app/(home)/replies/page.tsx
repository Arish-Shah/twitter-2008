import { UpdateForm } from "@/components/forms/update-form";
import { DeviceUpdates } from "@/components/home/device-updates";
import { Feed } from "@/components/home/feed";
import { Menu } from "@/components/home/menu";
import { Following } from "@/components/profile/following";
import { MastHead } from "@/components/profile/mast-head";
import { RecentUpdate } from "@/components/profile/recent-update";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getReplies } from "@/lib/actions/home/get-replies";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import { auth } from "@/lib/auth";

interface RepliesProps {
  searchParams: { page?: string };
}

export default async function Replies({ searchParams }: RepliesProps) {
  const { user } = await auth();

  const currentPage = Number(searchParams.page || 1);
  const replies = await getReplies(currentPage);
  const device = await getDeviceUpdates();

  return (
    <Content>
      <Main className="px-[20px] pb-[12px] pt-[8px]">
        <UpdateForm>
          <RecentUpdate />
        </UpdateForm>
        <Main.H3 className="mb-[-5px] mt-[25px]">
          Replies — Updates beginning with @{user.username}
        </Main.H3>
        <Feed updates={replies.updates} />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <MastHead username={user.username} size="small" light />
          <div className="h-[10px]"></div>
          <Stats username={user.username} />
        </Sidebar.Section>
        <Menu type="home" selected="@Replies" />
        <Sidebar.Section bordered>
          <Following username={user.username} />
        </Sidebar.Section>
        <Sidebar.Section bordered>
          <DeviceUpdates device={device} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
