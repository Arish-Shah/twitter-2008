import { TwoColumn } from "@/components/two-column";
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
      </TwoColumn.Main>
      <TwoColumn.Sidebar>bet</TwoColumn.Sidebar>
    </TwoColumn>
  );
}
