import { UpdateForm } from "@/components/forms/update-form";
import { CheckList } from "@/components/home/check-list";
import { DeviceUpdates } from "@/components/home/device-updates";
import { Feed } from "@/components/home/feed";
import { Menu } from "@/components/home/menu";
import { Following } from "@/components/profile/following";
import { MastHead } from "@/components/profile/mast-head";
import { Pagination } from "@/components/profile/pagination";
import { RecentUpdate } from "@/components/profile/recent-update";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { Switch } from "@/components/ui/switch";
import { getEveryone } from "@/lib/actions/home/get-everyone";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";

interface EveryoneProps {
  searchParams: { page?: string };
}

export const metadata: Metadata = {
  title: "Twitter / Everyone",
};

export default async function Everyone({ searchParams }: EveryoneProps) {
  const {
    user: { id, username },
  } = await auth();
  const page = Number(searchParams.page || 1);
  const everyone = await getEveryone(page);
  const device = await getDeviceUpdates();

  return (
    <Content>
      <Main className="px-[20px] pb-[12px] pt-[8px]">
        <UpdateForm>
          <RecentUpdate />
        </UpdateForm>
        <Feed updates={everyone.updates} />
        <Switch condition={page === 1}>
          <CheckList />
        </Switch>
        <Pagination page={page} hasMore={everyone.hasMore} type="newOld" />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <MastHead username={username} size="small" light />
          <div className="h-[10px]"></div>
          <Stats username={username} />
        </Sidebar.Section>
        <Menu type="home" selected="Everyone" />
        <Sidebar.Section bordered>
          <Following username={username} />
        </Sidebar.Section>
        <Sidebar.Section bordered>
          <DeviceUpdates device={device} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
