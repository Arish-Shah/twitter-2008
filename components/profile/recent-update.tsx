import { getRecentUpdate } from "@/lib/actions/home/get-recent-update";
import { formatUpdateCreatedAt } from "@/lib/utils";
import Link from "next/link";

export async function RecentUpdate() {
  const update = await getRecentUpdate();
  if (!update) return null;

  const createdAt = formatUpdateCreatedAt(update.createdAt);

  return (
    <div className="mt-[3px] text-subtext">
      <strong>Lastest:</strong> <span>{update.text}</span>{" "}
      <Link
        href={`/${update.author.username}/status/${update.id}`}
        className="font-georgia italic text-meta"
      >
        {createdAt}
      </Link>
    </div>
  );
}
