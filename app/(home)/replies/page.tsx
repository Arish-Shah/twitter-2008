import { UpdateForm } from "@/components/forms/update-form";
import { DeviceUpdates } from "@/components/home/device-updates";
import { Feed } from "@/components/home/feed";
import { Menu } from "@/components/home/menu";
import { Following } from "@/components/profile/following";
import { MastHead } from "@/components/profile/mast-head";
import { Pagination } from "@/components/profile/pagination";
import { RecentUpdate } from "@/components/profile/recent-update";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getReplies } from "@/lib/actions/home/get-replies";
import { getProfile } from "@/lib/actions/profile/get-update-profile";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import type { Metadata } from "next";

interface RepliesProps {
  searchParams: { page?: string };
}

export const metadata: Metadata = {
  title: "Twitter / @Replies",
};

export default async function Replies({ searchParams }: RepliesProps) {
  const profile = await getProfile();

  const page = Number(searchParams.page || 1);
  const replies = await getReplies(page);
  const device = await getDeviceUpdates();

  return (
    <Content>
      <Main className="px-[20px] pb-[12px] pt-[8px]">
        <UpdateForm>
          <RecentUpdate />
        </UpdateForm>
        <Main.H3 className="mb-[-5px] mt-[25px]">
          Replies — Updates beginning with @{profile.username}
        </Main.H3>
        <Feed updates={replies.updates} />
        <Pagination
          page={page}
          hasMore={replies.hasMore}
          type="newOld"
          userId={profile.userId}
        />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <MastHead size="small" light />
          <div className="h-[10px]"></div>
          <Stats />
        </Sidebar.Section>
        <Menu type="home" selected="@Replies" />
        <Sidebar.Section bordered>
          <Following />
        </Sidebar.Section>
        <Sidebar.Section bordered>
          <DeviceUpdates device={device} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
