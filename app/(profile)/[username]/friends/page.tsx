import { Content, Main } from "@/components/ui/content";

interface FriendsProps {
  params: { username: string };
  searchParams: { page?: string };
}

export default async function Friends({
  params: { username },
  searchParams,
}: FriendsProps) {
  const page = Number(searchParams.page || 1);

  return (
    <Content>
      <Main className="!p-[18px_20px_12px_20px]">
        <Main.H1>Friends</Main.H1>
      </Main>
    </Content>
  );
}
