import { PasswordForm } from "@/components/forms/password-form";
import { MastHead } from "@/components/profile/mast-head";
import { Tabs } from "@/components/profile/tabs";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Password",
};

export default async function Password() {
  const session = await auth();

  return (
    <Content>
      <Main className="!p-[12px]">
        <MastHead username={session.user.username} size="small" />
        <Tabs selected="Password" />
        <PasswordForm />
      </Main>
      <Sidebar>
        <Sidebar.Section className="pr-[18px]">
          <Sidebar.H1Underline>Password</Sidebar.H1Underline>
          <Sidebar.P className="mt-[5px]">
            Be tricky! Your password should be at least 6 characters and not
            dictionary word or common name. Change your password on occassion.
          </Sidebar.P>
          <Sidebar.P className="mt-[20px]">
            <strong>Note:</strong> If you have trusted a third-party Twitter
            service or software with your password and you change it here,
            you&apos;ll need to re-authenticate to make that software work.
            <br />
            (Never enter your password in a third-party service or software that
            looks suspicious)
          </Sidebar.P>
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
