import { PasswordForm } from "@/components/forms/password-form";
import { Tabs } from "@/components/home/tabs";
import { MastHead } from "@/components/profile/mast-head";
import { Content, Main, Sidebar } from "@/components/ui/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Password",
};

export default async function Password() {
  return (
    <Content>
      <Main className="!p-[12px]">
        <MastHead size="small" />
        <div className="mt-[20px] px-[10px]">
          <Tabs type="settings" selected="Password" />
        </div>
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
