import { UpdateForm } from "@/components/forms/update-form";
import { CheckList } from "@/components/profile/check-list";
import { Following } from "@/components/profile/following";
import { MastHead } from "@/components/profile/mast-head";
import { Menu } from "@/components/profile/menu";
import { RecentUpdate } from "@/components/profile/recent-update";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { auth } from "@/lib/auth";

export default async function Home() {
  const { user } = await auth();

  return (
    <Content>
      <Main className="px-[20px] py-[8px]">
        <UpdateForm>
          <RecentUpdate />
        </UpdateForm>
        <CheckList />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          {/* TODO: disable bold */}
          <MastHead username={user.username} size="small" light />
          <div className="h-[10px]"></div>
          <Stats username={user.username} />
        </Sidebar.Section>
        <Menu type="home" selected="Home" />
        <Sidebar.Section bordered>
          <Following username={user.username} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
