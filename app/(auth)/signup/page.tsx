import { SideBar, Wrapper } from "@/components/layout/content";
import { H2 } from "@/components/layout/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Create an Account",
};

export default function Signup() {
  return (
    <div className="flex">
      <Wrapper>
        <H2>Create a Free Twitter Account</H2>
      </Wrapper>
      <SideBar>sidebar</SideBar>
    </div>
  );
}
