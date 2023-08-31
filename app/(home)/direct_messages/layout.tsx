import { MessageForm } from "@/components/forms/message-form";
import { DeviceUpdates } from "@/components/home/device-updates";
import { Menu } from "@/components/home/menu";
import { Following } from "@/components/profile/following";
import { MastHead } from "@/components/profile/mast-head";
import { Stats } from "@/components/profile/stats";
import { Content, Main, Sidebar } from "@/components/ui/content";
import { getReceipents } from "@/lib/actions/home/get-post-delete-message";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";

interface DirectMessagesLayoutProps {
  children: React.ReactNode;
}

export default async function DirectMessagesLayout({
  children,
}: DirectMessagesLayoutProps) {
  const device = await getDeviceUpdates();
  const receipents = await getReceipents();

  return (
    <Content>
      <Main className="px-[20px] pb-[12px] pt-[8px]">
        <MessageForm receipents={receipents} />
        {children}
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <MastHead size="small" light />
          <div className="h-[10px]"></div>
          <Stats />
        </Sidebar.Section>
        <Menu type="home" selected="Direct Messages" />
        <Sidebar.Section bordered>
          <Following showAdd={true} />
        </Sidebar.Section>
        <Sidebar.Section bordered>
          <DeviceUpdates device={device} />
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
