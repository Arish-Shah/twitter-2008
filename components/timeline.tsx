import { formatDateTime, formatText } from "@/lib/utils";
import type { TimelineTweetType, UserType } from "@/types";
import Link from "next/link";
import { TweetInteractions } from "./interactions";

interface TimelineItemProps {
  screen: string;
  tweet: TimelineTweetType;
  user?: UserType;
}

interface TimelineProps {
  screen: string;
  tweets: TimelineTweetType[];
  user?: UserType;
}

function TimelineMain({ tweet, screen, user }: TimelineItemProps) {
  const text = formatText(tweet.text);
  const time = formatDateTime(tweet.createdAt);

  return (
    <div className="group flex border-b border-dashed border-x-timeline-border p-[12px_0_15.5px_0] leading-[21px]">
      <div className="w-[485px]">
        <span className="text-[25.48px]">{text}</span>
        <span className="m-[3px_0_0_3px] block font-georgia text-[11.52px] italic text-x-meta">
          <Link
            href={`/${screen}/status/${tweet.id}`}
            className="text-x-meta group-hover:text-x-links"
            title={tweet.createdAt}
          >
            {time}
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
      <div className="m-auto">{user && <TweetInteractions liked={true} />}</div>
    </div>
  );
}

function TimelineItem({ screen, tweet, user }: TimelineItemProps) {
  const text = formatText(tweet.text);
  const time = formatDateTime(tweet.createdAt);

  return (
    <div className="group flex border-b border-dashed border-x-timeline-border p-[8px_3px] leading-[15px] hover:bg-x-timeline-hover">
      <div className="w-[485px]">
        <span className="text-[14.4px]">{text}</span>
        <span className="ml-[8px] font-georgia text-[11.5px] italic text-x-meta">
          <Link
            href={`/${screen}/status/${tweet.id}`}
            className="text-x-meta group-hover:text-x-links"
            title={tweet.createdAt}
          >
            {time}
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
      <div className="m-auto">{user && <TweetInteractions />}</div>
    </div>
  );
}

export function Timeline({ screen, tweets, user }: TimelineProps) {
  return (
    <div className="mt-[17.5px]">
      <TimelineMain screen={screen} tweet={tweets[0]} user={user} />
      {tweets.slice(1).map((tweet) => (
        <TimelineItem
          screen={screen}
          tweet={tweet}
          key={tweet.id}
          user={user}
        />
      ))}
    </div>
  );
}
