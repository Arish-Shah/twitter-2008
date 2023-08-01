import { LoginForm } from "@/components/login-form";
import { TwoColumn } from "@/components/two-column";
import { JoinButton } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <TwoColumn>
      <TwoColumn.Main>
        <TwoColumn.Main.H2>Sign in to Twitter</TwoColumn.Main.H2>
        <TwoColumn.Main.P>
          If you&apos;ve been using Twitter from your phone,{" "}
          <Link href="/account/complete">click here</Link> and we&apos;ll get
          you signed up on the web.
        </TwoColumn.Main.P>
        <LoginForm />
        <div className="h-[20px]"></div>
      </TwoColumn.Main>
      <TwoColumn.Sidebar>
        <TwoColumn.Sidebar.Section>
          <TwoColumn.Sidebar.H1 className="mb-[10px]">
            Create Your Account
          </TwoColumn.Sidebar.H1>
          <TwoColumn.Center>
            <JoinButton />
            <TwoColumn.Sidebar.P>
              Already using Twitter
              <br />
              from your phone? <Link href="/account/complete">Click here</Link>.
            </TwoColumn.Sidebar.P>
          </TwoColumn.Center>
        </TwoColumn.Sidebar.Section>
      </TwoColumn.Sidebar>
    </TwoColumn>
  );
}
