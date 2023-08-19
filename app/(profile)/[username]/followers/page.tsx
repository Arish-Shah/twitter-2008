import { Menu } from "@/components/home/menu";
import { Info } from "@/components/profile/info";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";

interface FollowersProps {
  params: { username: string };
  searchParams: { page?: string };
}

export default async function Followers({
  params: { username },
  searchParams,
}: FollowersProps) {
  const currentPage = Number(searchParams.page || 1);

  return (
    <Content>
      <Main className="!p-[18px_20px_12px_20px]">
        <Main.H1>Followers</Main.H1>
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
