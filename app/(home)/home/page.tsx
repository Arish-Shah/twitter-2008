import { UpdateForm } from "@/components/forms/update-form";
import { RecentUpdate } from "@/components/profile/recent-update";
import { Content, Main, Sidebar } from "@/components/ui/content";

export default async function Home() {
  return (
    <Content>
      <Main className="px-[20px] py-[8px]">
        <UpdateForm>
          <RecentUpdate />
        </UpdateForm>
      </Main>
      <Sidebar>bet</Sidebar>
    </Content>
  );
}
