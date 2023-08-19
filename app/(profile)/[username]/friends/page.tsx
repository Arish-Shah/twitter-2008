import { Info } from "@/components/profile/info";
import { Menu } from "@/components/profile/menu";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";

interface FriendsProps {
  params: { username: string };
  searchParams: { page?: string };
}

export default async function Friends({
  params: { username },
  searchParams,
}: FriendsProps) {
  const currentPage = Number(searchParams.page || 1);

  return (
    <Content>
      <Main className="!p-[18px_20px_12px_20px]">
        <Main.H1>Friends</Main.H1>
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <Info username={username} />
          <Stats username={username} />
        </Sidebar.Section>
        <Menu type={{ username }} />
      </Sidebar>
    </Content>
  );
}
