import { UpdateForm } from "@/components/forms/update-form";
import { CheckList } from "@/components/home/check-list";
import { Feed } from "@/components/home/feed";
import { Menu } from "@/components/home/menu";
import { Following } from "@/components/profile/following";
import { MastHead } from "@/components/profile/mast-head";
import { Pagination } from "@/components/profile/pagination";
import { RecentUpdate } from "@/components/profile/recent-update";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getFeed } from "@/lib/actions/home/get-feed";
import { auth } from "@/lib/auth";

interface HomeProps {
  searchParams: { page?: string };
}

export default async function Home({ searchParams }: HomeProps) {
  const {
    user: { id, username },
  } = await auth();
  const currentPage = Number(searchParams.page || 1);
  const feed = await getFeed(currentPage);

  return (
    <Content>
      <Main className="px-[20px] pb-[12px] pt-[8px]">
        <UpdateForm>
          <RecentUpdate />
        </UpdateForm>
        <Feed updates={feed.updates} />
        {currentPage === 1 && <CheckList />}
        <Pagination
          currentPage={currentPage}
          hasMore={feed.hasMore}
          type="newOld"
          userId={id}
        />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <MastHead username={username} size="small" light />
          <div className="h-[10px]"></div>
          <Stats username={username} />
        </Sidebar.Section>
        <Menu type="home" selected="Home" />
        <Sidebar.Section bordered>
          <Following username={username} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
