import { Content, Main } from "@/components/ui/content";

interface FollowersProps {
  params: { username: string };
  searchParams: { page?: string };
}

export default async function Followers({
  params: { username },
  searchParams,
}: FollowersProps) {
  const page = Number(searchParams.page || 1);

  return (
    <Content>
      <Main className="!p-[18px_20px_12px_20px]">
        <Main.H1>Followers</Main.H1>
      </Main>
    </Content>
  );
}
