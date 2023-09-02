import { getLoggedInUsername } from "@/lib/actions/get-loggedin-username";
import { getFeed } from "@/lib/actions/home/get-feed";
import {
  formatUpdateCreatedAt,
  formatUpdateCreatedAtTitle,
  formatUpdateText,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Interactions } from "../interactions";
import { Switch } from "../ui/switch";

type FeedType = Awaited<ReturnType<typeof getFeed>>["updates"];

interface FeedProps {
  updates: FeedType;
}

interface FeedItemProps {
  username?: string;
  update: FeedType[number];
}

function FeedItem({ update, username }: FeedItemProps) {
  const text = formatUpdateText(update.text);
  const createdAt = formatUpdateCreatedAt(update.createdAt);
  const title = formatUpdateCreatedAtTitle(update.createdAt);

  return (
    <div className="group flex items-center border-b border-dashed border-timeline-border p-[10px] px-[5px] hover:bg-timeline-hover">
      <div className="w-[55px]">
        <Link
          href={`/${update.username}`}
          className="block h-[48px] overflow-hidden"
        >
          <Image
            src={update.author.picture}
            alt={`${update.username}'s picture`}
            className="h-auto"
            height={48}
            width={48}
            quality={100}
            draggable={false}
            priority={true}
          />
        </Link>
      </div>
      <div className="w-[430px] flex-1 text-[14.4px] leading-[1.1]">
        <Link
          href={`/${update.username}`}
          className="font-bold"
          title={update.author.name || update.username}
        >
          {update.username}
        </Link>{" "}
        <span className="break-words">{text}</span>
        <span className="ml-[5px] font-georgia text-[11.5px] italic text-meta">
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
          <Switch condition={!!update.parent}>
            <Link
              href={`/${update.parent?.username}/status/${update.parent?.id}`}
              className="text-meta group-hover:text-links"
            >
              in reply to {update.parent?.username}
            </Link>
          </Switch>
        </span>
      </div>
      <Interactions update={update} username={username} />
    </div>
  );
}

export async function Feed({ updates }: FeedProps) {
  const username = await getLoggedInUsername();

  return (
    <div className="mt-[10px] border-t border-dashed border-timeline-border">
      {updates.map((update) => (
        <FeedItem key={update.id} update={update} username={username} />
      ))}
    </div>
  );
}
