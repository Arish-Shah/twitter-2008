import { Main } from "@/components/ui/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Find People You Know on Twitter",
};

export default function Invitations() {
  return (
    <Main>
      <Main.H1>Are your friends on Twitter?</Main.H1>
      <Main.P className="!mt-[10px] text-meta">
        We can check if anyone in your email contacts already has a Twitter
        account.
      </Main.P>
    </Main>
  );
}
