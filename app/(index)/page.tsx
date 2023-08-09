import { getRecentUpdates } from "@/utils/get-recent-updates";

export default async function IndexPage() {
  const updates = await getRecentUpdates();

  return <code>{JSON.stringify(updates, null, 2)}</code>;
}
