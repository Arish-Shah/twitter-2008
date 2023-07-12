import { SideBar, Wrapper } from "@/components/layout/content";
import type { Metadata } from "next";

interface ProfileProps {
  params: { screen: string };
}

export async function generateMetadata({
  params,
}: ProfileProps): Promise<Metadata> {
  return {
    title: `Twitter / ${params.screen}`,
  };
}

export default function Profile({}) {
  return (
    <div className="flex">
      <Wrapper>aight</Wrapper>
      <SideBar>bet</SideBar>
    </div>
  );
}
