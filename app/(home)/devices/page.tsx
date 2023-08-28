import { DevicesForm } from "@/components/forms/devices-form";
import { Tabs } from "@/components/home/tabs";
import { MastHead } from "@/components/profile/mast-head";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter / Devices",
};

export default async function ProfileSettings() {
  const { user } = await auth();
  const device = await getDeviceUpdates();

  return (
    <Content>
      <Main className="!p-[12px]">
        <MastHead username={user.username} size="small" />
        <div className="mt-[20px] px-[10px]">
          <Tabs type="settings" selected="Devices" />
        </div>
        <DevicesForm device={device} />
      </Main>
      <Sidebar>
        <Sidebar.Section className="pr-[16px]">
          <Sidebar.P className="!mt-[10px]">
            <strong>Twitter with SMS</strong>
          </Sidebar.P>
          <Sidebar.P>
            Sending tweets while you&apos;re away from your computer makes
            things much more interesting.
          </Sidebar.P>
          <Sidebar.P>
            It&apos;s all done through text messages (aka &quot;SMS&quot;),
            which you probably use all the time anyway, so there&apos;s not much
            to learn.
          </Sidebar.P>
          <Sidebar.P>
            Twitter doesn&apos;t change anything for this, but standard text
            messages rates or bundles may apply from your carrier.
          </Sidebar.P>
          <Sidebar.P>
            If you use your mobile in the United States, the United Kingdom,
            Canada or New Zealand you can also receive tweets via SMS. You can
            text &quot;OFF&quot; to stop receiving and &quot;ON&quot; to start
            again.
          </Sidebar.P>
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
