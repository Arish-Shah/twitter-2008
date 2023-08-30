import { getSentDirectMessages } from "@/lib/actions/home/get-post-delete-message";
import { getProfile } from "@/lib/actions/profile/get-update-profile";
import { formatUpdateCreatedAt, formatUpdateText } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MessageInteractions } from "./message-interactions";

type MessageType = Awaited<
  ReturnType<typeof getSentDirectMessages>
>["messages"];

interface MessageItemProps {
  message: MessageType[number];
}

interface MessageListProps {
  messages: MessageType;
}

async function MessageItem({ message }: MessageItemProps) {
  const profile = await getProfile();
  const text = formatUpdateText(message.text);
  const createdAt = formatUpdateCreatedAt(message.createdAt);
  // TODO: title for link hover
  const username =
    message.from.username !== profile.username
      ? message.from.username
      : message.to.username;

  return (
    <div className="group flex h-[70.84px] items-center border-b border-dashed border-timeline-border px-[5px] hover:bg-timeline-hover">
      <div className="w-[55px]">
        <Link href={`/${message.to.username}`}>
          <Image
            src={message.to.profile.picture}
            alt={`${message.to.username}`}
            height={48}
            width={48}
            quality={100}
            draggable={false}
            priority={true}
          />
        </Link>
      </div>
      <div className="w-[430px] flex-1 text-[14.4px] leading-[1.1]">
        <Link href={`/${username}`} className="font-bold" title={username}>
          {username}
        </Link>{" "}
        <span className="break-words">{text}</span>
        <span className="ml-[5px] font-georgia text-[11.5px] italic text-meta">
          {createdAt}
        </span>
      </div>
      <MessageInteractions id={message.id} username={username} />
    </div>
  );
}

export async function MessageList({ messages }: MessageListProps) {
  return (
    <div className="border-t border-dashed border-timeline-border">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}
