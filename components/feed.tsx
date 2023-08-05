import { formatDateTime, formatText } from "@/lib/utils";
import type { FavouritedTweet, User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { TweetInteractions } from "./interactions";

interface FeedItemProps {
  user?: User;
  tweet: FavouritedTweet;
}

interface FeedProps {
  user?: User;
  tweets: FavouritedTweet[];
}

function FeedItem({ user, tweet }: FeedItemProps) {
  const text = formatText(tweet.text);
  const time = formatDateTime(tweet.createdAt);

  return (
    <div className="group flex h-[70.84px] items-center border-b border-dashed border-x-timeline-border pl-[5px] hover:bg-x-timeline-hover">
      <div className="w-[60px]">
        <Link href={`/${tweet.author.screen}`}>
          <Image
            src={tweet.author.img}
            alt={tweet.author.screen}
            height={48}
            width={48}
            quality={100}
          />
        </Link>
      </div>
      <div className="flex-1 text-[14.4px] leading-[1.1]">
        <Link href={`/${tweet.author.screen}`} className="font-bold">
          {tweet.author.screen}
        </Link>{" "}
        <span>{text}</span>
        <span className="ml-[5px] font-georgia text-[11.5px] italic text-x-meta">
          <Link
            href={`/${tweet.author.screen}/status/${tweet.id}`}
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
      <div className="w-[60px] pl-[30px]">{user && <TweetInteractions />}</div>
    </div>
  );
}

export function Feed({ user, tweets }: FeedProps) {
  return (
    <div className="mt-[10px] border-t border-dashed border-x-timeline-border">
      {tweets.map((tweet) => (
        <FeedItem key={tweet.id} tweet={tweet} user={user} />
      ))}
    </div>
  );
}
