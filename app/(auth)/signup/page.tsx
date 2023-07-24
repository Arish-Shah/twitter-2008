import { TwoColumn } from "@/components/two-column";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Create an Account",
};

export default function Signup() {
  return (
    <TwoColumn>
      <TwoColumn.Main>
        <TwoColumn.Main.H2>Create a Free Twitter Account</TwoColumn.Main.H2>
      </TwoColumn.Main>
      <TwoColumn.Sidebar>
        <TwoColumn.Sidebar.Section>already a member?</TwoColumn.Sidebar.Section>
      </TwoColumn.Sidebar>
    </TwoColumn>
  );
}
