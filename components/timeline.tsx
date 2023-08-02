import type { TimelineTweet } from "@/types";
import Link from "next/link";

interface TimelineProps {
  screen: string;
  tweets: TimelineTweet[];
}

export function Timeline({ screen, tweets }: TimelineProps) {
  return (
    <div className="mt-[17.5px]">
      <div className="group border-b border-dashed border-tw-timeline-border p-[12px_0_15.5px_0] leading-[21px]">
        <div className="w-[485px]">
          <span className="text-[25.5px]">{tweets[0].text}</span>
          <span className="m-[3px_0_0_3px] block font-meta text-[11.5px] italic text-tw-timeline-meta">
            <Link
              href={`/${screen}/status/${tweets[0].id}`}
              className="text-tw-timeline-meta group-hover:text-tw-links"
            >
              about 19 hours ago
            </Link>{" "}
            from web
          </span>
        </div>
      </div>
      {tweets.slice(1).map((tweet) => (
        <div
          key={tweet.id}
          className="group border-b border-dashed border-tw-timeline-border p-[8px_3px] hover:bg-tw-timeline-hover"
        >
          <div className="w-[485px] leading-[1.1]">
            <span className="text-[14.4px]">{tweet.text}</span>
            <span className="ml-[8px] font-meta text-[11.5px] italic leading-[1.3] text-tw-timeline-meta">
              <Link
                href={`/${screen}/status/${tweets[0].id}`}
                className="text-tw-timeline-meta group-hover:text-tw-links"
              >
                7:08 PM Nov 9th
              </Link>
              <span> from web </span>
              {tweet.parent && (
                <Link
                  href={`/${tweet.parent.screen}/status/${tweet.parent.id}`}
                  className="text-tw-timeline-meta group-hover:text-tw-links"
                >
                  in reply to {tweet.parent.screen}
                </Link>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}