import { Feed } from "@/components/home/feed";
import { Menu } from "@/components/home/menu";
import { Following } from "@/components/profile/following";
import { Info } from "@/components/profile/info";
import { Pagination } from "@/components/profile/pagination";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getFavorites } from "@/lib/actions/home/get-favorites";
import { getInfo } from "@/lib/actions/profile/get-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
};

interface FavoritesProps {
  params: { username: string };
  searchParams: { page?: string };
}

export default async function Favorites({
  params: { username },
  searchParams,
}: FavoritesProps) {
  const page = Number(searchParams.page || 1);
  const favorites = await getFavorites(username, page);
  const info = await getInfo(username);

  return (
    <Content>
      <Main className="p-[5px_10px_15px]">
        <Main.H2>{info.name}&apos;s Favorites</Main.H2>
        <Feed updates={favorites.updates} />
        <Pagination page={page} hasMore={favorites.hasMore} type="prevNext" />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <Info username={username} />
          <Stats username={username} />
        </Sidebar.Section>
        <Menu type="profile" selected="Favorites" username={username} />
        <Sidebar.Section bordered>
          <Following username={username} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
