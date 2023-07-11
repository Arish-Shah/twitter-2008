import { LoginForm } from "@/components/form/login-form";
import { Section, SideBar, Wrapper } from "@/components/layout/content";
import { H2, P } from "@/components/layout/typography";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter",
};

export default function Login() {
  return (
    <div className="flex">
      <Wrapper>
        <H2>Sign in to Twitter</H2>
        <P>
          If you&apos;ve been using Twitter from your phone,{" "}
          <Link href="/account/complete">click here</Link> and we&apos;ll get
          you signed up on the web.
        </P>
        <LoginForm />
        <div className="h-[10px]"></div>
      </Wrapper>
      <SideBar>
        <Section>
          <div className="m-[10px_0_5px_0]">
            <h1 className="text-[1.1em] font-bold p-[0_0_2px]">
              Create Your Account
            </h1>
          </div>
          <div className="text-center mt-[11px]">
            <Link
              href="/signup"
              className="text-white bg-tw-join-button font-bold p-[0.3em_2.5em] text-[11pt] border border-black hover:bg-tw-join-button-hover hover:no-underline"
            >
              Join!
            </Link>
            <p className="mt-[1.25em] text-[0.9em]">
              Already using Twitter <br />
              from your phone? <Link href="/account/complete">Click here</Link>.
            </p>
          </div>
        </Section>
      </SideBar>
    </div>
  );
}
