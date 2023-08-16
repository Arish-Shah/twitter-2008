import { formatUpdateCreatedAt, formatUpdateText } from "@/lib/utils";
import type { ProfileUpdateType } from "@/types";
import clsx from "clsx";
import Link from "next/link";

interface TimelineItemProps {
  update: ProfileUpdateType;
  highlight: boolean;
}

interface TimelineProps {
  updates: ProfileUpdateType[];
}

function TimelineItem({ highlight, update }: TimelineItemProps) {
  const text = formatUpdateText(update.text);
  const createdAt = formatUpdateCreatedAt(update.createdAt);

  return (
    <div
      className={clsx(
        "group flex items-center border-b border-dashed border-timeline-border leading-[15px]",
        {
          "p-[8px_3px] hover:bg-timeline-hover": !highlight,
          "p-[12px_0]": highlight,
        }
      )}
    >
      <div className="w-[485px]">
        <span
          className={clsx({
            "text-[14.4px]": !highlight,
            "mb-[10px] block text-[25.25px] leading-[1]": highlight,
          })}
        >
          {text}
        </span>
        <span
          className={clsx("font-georgia text-[11.5px] italic text-meta", {
            block: highlight,
            "ml-[8px]": !highlight,
          })}
        >
          <Link
            href={`/${update.username}/status/${update.id}`}
            className="text-meta group-hover:text-links"
            title={update.createdAt.toISOString()}
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
    </div>
  );
}

function TimelineHighlight({}: TimelineItemProps) {}

export function Timeline({ updates }: TimelineProps) {
  return (
    <div className="mt-[17.5px]">
      {updates.map((update, i) => (
        <TimelineItem key={update.id} update={update} highlight={i === 0} />
      ))}
    </div>
  );
}
