import { DeviceUpdates } from "@/components/home/device-updates";
import { Feed } from "@/components/home/feed";
import { Menu } from "@/components/home/menu";
import { Following } from "@/components/profile/following";
import { MastHead } from "@/components/profile/mast-head";
import { Pagination } from "@/components/profile/pagination";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getFavorites } from "@/lib/actions/home/get-favorites";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
};

interface FavoritesProps {
  searchParams: { page?: string };
}

export default async function Favorites({ searchParams }: FavoritesProps) {
  const page = Number(searchParams.page || 1);
  const favorites = await getFavorites(undefined, page);
  const device = await getDeviceUpdates();

  return (
    <Content>
      <Main className="px-[20px] py-[8px]">
        <Main.H2>Your Favorites</Main.H2>
        <Main.P>
          Star your favorite Twitter updates and they&apos;ll be saved for you
          here!
        </Main.P>
        <Feed updates={favorites.updates} />
        <Pagination page={page} hasMore={favorites.hasMore} type="prevNext" />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <MastHead size="small" light />
          <div className="h-[10px]"></div>
          <Stats />
        </Sidebar.Section>
        <Menu type="home" selected="Favorites" />
        <Sidebar.Section bordered>
          <Following showAdd={true} />
        </Sidebar.Section>
        <Sidebar.Section bordered>
          <DeviceUpdates device={device} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
