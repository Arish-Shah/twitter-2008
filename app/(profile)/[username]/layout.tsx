import { Page } from "@/components/ui/page";
import { getTheme } from "@/lib/actions/profile/get-theme";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";

interface ProfileLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

export async function generateMetadata({
  params: { username },
}: ProfileLayoutProps): Promise<Metadata> {
  return {
    title: `Twitter / ${username}`,
  };
}

export default async function ProfileLayout({
  params: { username },
  children,
}: ProfileLayoutProps) {
  const session = await auth();
  const join = !session?.user ? username : undefined;

  const theme = await getTheme(username);
  return (
    <Page theme={theme} join={join}>
      {children}
    </Page>
  );
}
