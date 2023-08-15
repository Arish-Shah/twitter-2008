import { Content, Main, Sidebar } from "@/components/content";

interface ProfileProps {
  params: { username: string };
}

export default async function Profile({ params: { username } }: ProfileProps) {
  return (
    <Content>
      <Main>main</Main>
      <Sidebar>sidebar</Sidebar>
    </Content>
  );
}
