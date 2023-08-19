import { MastHead } from "@/components/profile/mast-head";
import { Menu } from "@/components/profile/menu";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { auth } from "@/lib/auth";

// TODO
export default async function Favorites() {
  const { user } = await auth();

  return (
    <Content>
      <Main className="px-[20px] py-[8px]">
        <Main.H1>Favorites</Main.H1>
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <MastHead username={user.username} size="small" light />
          <div className="h-[10px]"></div>
          <Stats username={user.username} />
        </Sidebar.Section>
        <Menu type="home" selected="Favorites" />
      </Sidebar>
    </Content>
  );
}
