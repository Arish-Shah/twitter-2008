import { Main } from "@/components/ui/content";
import type { Metadata } from "next";

interface UsersProps {
  searchParams: { q?: string };
}

export async function generateMetadata({
  searchParams,
}: UsersProps): Promise<Metadata> {
  return {
    title: `Twitter / ${searchParams.q} - Twitter Name Search`,
  };
}

// TODO:
export default function Users() {
  return (
    <Main>
      <Main.H2>retsul</Main.H2>
    </Main>
  );
}
