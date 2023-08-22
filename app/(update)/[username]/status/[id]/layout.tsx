import { Page } from "@/components/ui/page";
import { getTheme } from "@/lib/actions/profile/get-theme";
import { getUpdateMetadata } from "@/lib/actions/update/get-update";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

interface StatusLayoutProps {
  params: { id: string; username: string };
  children: React.ReactNode;
}

export async function generateMetadata({
  params: { id, username },
}: StatusLayoutProps): Promise<Metadata> {
  const data = await getUpdateMetadata(id);
  if (data.username !== username)
    return redirect(`/${data.username}/status/${id}`);

  return {
    title: `Twitter / ${data.name}: ${data.text}`,
  };
}

export default async function StatusLayout({
  params: { username, id },
  children,
}: StatusLayoutProps) {
  const theme = await getTheme(username);

  return (
    <Page size="small" theme={theme}>
      {children}
    </Page>
  );
}
