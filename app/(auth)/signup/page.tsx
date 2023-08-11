import { Main, Sidebar } from "@/components/content";
import { SignupForm } from "@/components/forms/signup-form";
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Twitter / Create an Account",
};

export default function Signup() {
  return (
    <Fragment>
      <Main>
        <Main.H2>Create a Free Twitter Account</Main.H2>
        <SignupForm />
        <div className="h-[20px]"></div>
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <Sidebar.H1 className="!m-0 text-[14.04px]">
            Already a member? Please <Link href="/login">Sign In!</Link>
          </Sidebar.H1>
          <Sidebar.P className="!mt-0 text-[12px]">
            Already use Twitter on your phone?{" "}
            <Link href="/account/complete">Head over here</Link> and we&rsquo;ll
            get you signed up on the web.
          </Sidebar.P>
        </Sidebar.Section>
      </Sidebar>
    </Fragment>
  );
}
