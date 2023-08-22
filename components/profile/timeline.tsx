import { getTimeline } from "@/lib/actions/profile/get-timeline";
import { auth } from "@/lib/auth";
import {
  formatUpdateCreatedAt,
  formatUpdateCreatedAtTitle,
  formatUpdateText,
} from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { Interactions } from "../interactions";

type TimelineType = Awaited<ReturnType<typeof getTimeline>>["updates"];

interface TimelineItemProps {
  update: TimelineType[number];
  highlight: boolean;
}

interface TimelineProps {
  updates: TimelineType;
  page: number;
}

async function TimelineItem({ highlight, update }: TimelineItemProps) {
  const session = await auth();

  const text = formatUpdateText(update.text);
  const createdAt = formatUpdateCreatedAt(update.createdAt);
  const title = formatUpdateCreatedAtTitle(update.createdAt);

  return (
    <div
      className={clsx(
        "group flex items-center border-b border-dashed border-timeline-border leading-[15px]",
        {
          "p-[8px_3px] hover:bg-timeline-hover": !highlight,
          "p-[8px_0_18px_0]": highlight,
        }
      )}
    >
      <div className="w-[485px]">
        <span
          className={clsx({
            "text-[14.4px]": !highlight,
            "mb-[10px] block text-[25.45px] leading-[1.05]": highlight,
          })}
        >
          {text}
        </span>
        <span
          className={clsx("font-georgia text-[11.5px] italic text-meta", {
            "ml-[3px] block": highlight,
            "ml-[6px]": !highlight,
          })}
        >
          <Link
            href={`/${update.username}/status/${update.id}`}
            className="text-meta group-hover:text-links"
            title={title}
          >
            {createdAt}
          </Link>
          <span>
            {" "}
            from{" "}
            {update.application.url ? (
              <Link
                href={update.application.url}
                className="text-meta group-hover:text-links"
              >
                {update.application.name}
              </Link>
            ) : (
              update.application.name
            )}{" "}
          </span>
          {update.parent && (
            <Link
              href={`/${update.parent.username}/status/${update.parent.id}`}
              className="text-meta group-hover:text-links"
            >
              in reply to {update.parent.username}
            </Link>
          )}
        </span>
      </div>
      {session?.user && (
        <Interactions username={session.user.username} update={update} />
      )}
    </div>
  );
}

export function Timeline({ updates, page }: TimelineProps) {
  return (
    <div className="mt-[17.5px]">
      {updates.map((update, i) => (
        <TimelineItem
          key={update.id}
          update={update}
          highlight={page === 1 && i === 0}
        />
      ))}
    </div>
  );
}
