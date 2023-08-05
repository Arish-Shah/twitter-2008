import { SignupForm } from "@/components/forms/signup-form";
import { TwoColumn } from "@/components/two-column";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / Create an Account",
};

export default function Signup() {
  return (
    <TwoColumn>
      <TwoColumn.Main>
        <TwoColumn.Main.H2>Create a Free Twitter Account</TwoColumn.Main.H2>
        <SignupForm />
        <div className="h-[20px]"></div>
      </TwoColumn.Main>
      <TwoColumn.Sidebar>
        <TwoColumn.Sidebar.Section>
          <TwoColumn.Sidebar.H1 className="m-[0px] text-[14.04px]">
            Already a member? Please <Link href="/login">Sign In!</Link>
          </TwoColumn.Sidebar.H1>
          <TwoColumn.Sidebar.P className="mt-[0px] text-[12px]">
            Already use Twitter on your phone?{" "}
            <Link href="/account/complete">Head over here</Link> and we&rsquo;ll
            get you signed up on the web.
          </TwoColumn.Sidebar.P>
        </TwoColumn.Sidebar.Section>
      </TwoColumn.Sidebar>
    </TwoColumn>
  );
}
