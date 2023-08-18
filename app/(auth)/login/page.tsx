import { LoginForm } from "@/components/forms/login-form";
import { JoinButton } from "@/components/ui/button";
import { Content, Main, Sidebar } from "@/components/ui/content";
import Link from "next/link";

export default async function Login() {
  return (
    <Content>
      <Main>
        <Main.H2>Sign in to Twitter</Main.H2>
        <Main.P>
          If you&rsquo;ve been using Twitter from your phone,{" "}
          <Link href="/account/complete">click here</Link> and we&rsquo;ll get
          you signed up on the web.
        </Main.P>
        <LoginForm />
        <div className="h-[20px]"></div>
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <Sidebar.H1 className="mb-[10px]">Create Your Account</Sidebar.H1>
          <div className="text-center">
            <JoinButton />
            <Sidebar.P className="text-[10.8px]">
              Already using Twitter
              <br />
              from your phone? <Link href="/account/complete">Click here</Link>.
            </Sidebar.P>
          </div>
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
