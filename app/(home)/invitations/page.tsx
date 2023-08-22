import { Tabs } from "@/components/home/tabs";
import { Main } from "@/components/ui/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Find People You Know on Twitter",
};

export default function Invitations() {
  return (
    <Main>
      <div className="flex justify-between">
        <Main.H1>Are your friends on Twitter?</Main.H1>
        <div>wew</div>
      </div>
      <Tabs type="invitations" selected="Invite from other networks" />
    </Main>
  );
}
