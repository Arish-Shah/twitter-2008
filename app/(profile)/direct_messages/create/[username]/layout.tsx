import { Page } from "@/components/ui/page";
import { getTheme } from "@/lib/actions/profile/get-theme";
import { auth } from "@/lib/auth";

interface CreateDirectMessagesLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

export default async function CreateDirectMessagesLayout({
  params: { username },
  children,
}: CreateDirectMessagesLayoutProps) {
  const session = await auth();
  const join = !session?.user ? username : undefined;

  const theme = await getTheme(username);
  return (
    <Page theme={theme} join={join}>
      {children}
    </Page>
  );
}
