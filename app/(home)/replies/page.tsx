import { Menu } from "@/components/home/menu";
import { MastHead } from "@/components/profile/mast-head";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { auth } from "@/lib/auth";

// TODO
export default async function Replies() {
  const { user } = await auth();

  return (
    <Content>
      <Main className="px-[20px] py-[8px]">
        <Main.H1>Replies</Main.H1>
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <MastHead username={user.username} size="small" light />
          <div className="h-[10px]"></div>
          <Stats username={user.username} />
        </Sidebar.Section>
        <Menu type="home" selected="@Replies" />
      </Sidebar>
    </Content>
  );
}
