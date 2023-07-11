import { SignupForm } from "@/components/form/signup-form";
import { Section, SideBar, Wrapper } from "@/components/layout/content";
import { H2, H3, P } from "@/components/layout/typography";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / Create an Account",
};

export default function Signup() {
  return (
    <div className="flex">
      <Wrapper>
        <H2>Create a Free Twitter Account</H2>
        <SignupForm />
      </Wrapper>
      <SideBar>
        <Section>
          <H3 className="my-0">
            Already a member? Please <Link href="/login">Sign In!</Link>
          </H3>
          <P className="mt-0">
            Already use Twitter on your phone?{" "}
            <Link href="/account/complete">Head over here</Link> and we&apos;ll
            get you signed up on the web.
          </P>
        </Section>
      </SideBar>
    </div>
  );
}
