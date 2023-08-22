import { getRecentUpdate } from "@/lib/actions/home/get-recent-update";
import { formatUpdateCreatedAt } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

export async function RecentUpdate() {
  const update = await getRecentUpdate();

  return (
    <div className="mt-[3px] text-subtext">
      <strong>Lastest:</strong>{" "}
      {update && (
        <Fragment>
          <span className="break-all">{update.text}</span>{" "}
          <Link
            href={`/${update.author.username}/status/${update.id}`}
            className="font-georgia italic text-meta hover:no-underline"
          >
            {formatUpdateCreatedAt(update.createdAt)}
          </Link>
        </Fragment>
      )}
    </div>
  );
}
