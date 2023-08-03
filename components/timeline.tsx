import type { TimelineTweet } from "@/types";
import Link from "next/link";

interface TimelineItemProps {
  screen: string;
  tweet: TimelineTweet;
}

interface TimelineProps {
  screen: string;
  tweets: TimelineTweet[];
}

function TimelineItem({ screen, tweet }: TimelineItemProps) {
  return (
    <div className="group flex border-b border-dashed border-x-timeline-border p-[8px_3px] leading-[15px] hover:bg-x-timeline-hover">
      <div className="w-[485px]">
        <span className="text-[14.4px]">{tweet.text}</span>
        <span className="ml-[8px] font-georgia text-[11.5px] italic text-x-meta">
          <Link
            href={`/${screen}/status/${tweet.id}`}
            className="text-x-meta group-hover:text-x-links"
          >
            7:08 PM Nov 9th
          </Link>
          <span> from web </span>
          {tweet.parent && (
            <Link
              href={`/${tweet.parent.screen}/status/${tweet.parent.id}`}
              className="text-x-meta group-hover:text-x-links"
            >
              in reply to {tweet.parent.screen}
            </Link>
          )}
        </span>
      </div>
      <div className="mx-auto">..</div>
    </div>
  );
}

function TimelineMain({ tweet, screen }: TimelineItemProps) {
  return (
    <div className="group flex border-b border-dashed border-x-timeline-border p-[12px_0_15.5px_0] leading-[20px]">
      <div className="w-[485px]">
        <span className="text-[25.48px]">{tweet.text}</span>
        <span className="m-[3px_0_0_3px] block font-georgia text-[11.52px] italic text-x-meta">
          <Link
            href={`/${screen}/status/${tweet.id}`}
            className="text-x-meta group-hover:text-x-links"
          >
            about 19 hours ago
          </Link>
          <span> from web </span>
          {tweet.parent && (
            <Link
              href={`/${tweet.parent.screen}/status/${tweet.parent.id}`}
              className="text-x-meta group-hover:text-x-links"
            >
              in reply to {tweet.parent.screen}
            </Link>
          )}
        </span>
      </div>
      <div className="mx-auto">..</div>
    </div>
  );
}

export function Timeline({ screen, tweets }: TimelineProps) {
  return (
    <div className="mt-[17.5px]">
      <TimelineMain screen={screen} tweet={tweets[0]} />
      {tweets.slice(1).map((tweet) => (
        <TimelineItem screen={screen} tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
}
