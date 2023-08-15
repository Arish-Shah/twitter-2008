import { Content, Main, Sidebar } from "@/components/content";
import { UpdateForm } from "@/components/forms/update-form";

export default async function Home() {
  return (
    <Content>
      <Main className="px-[20px] py-[8px]">
        <UpdateForm>latest tweet here</UpdateForm>
      </Main>
      <Sidebar>bet</Sidebar>
    </Content>
  );
}
