import { getUpdate } from "@/lib/actions/update/get-update";
import { formatUpdateCreatedAt, formatUpdateText } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface StatusProps {
  params: { username: string; id: string };
}

export default async function Status({
  params: { id, username },
}: StatusProps) {
  const update = await getUpdate(id);
  if (update.author.username !== username)
    redirect(`/${update.author.username}/status/${id}`);

  const text = formatUpdateText(update.text);
  const createdAt = formatUpdateCreatedAt(update.createdAt);

  return (
    <div className="p-[20px]">
      <div className="flex">
        <div className="w-[550px] font-georgia text-[25.2px] font-normal leading-[1.1]">
          {text}
        </div>
        <div className="mt-[20px]"></div>
      </div>
      <div className="m-[13px_0_0_3px] mt-[10px] font-georgia text-[15.6px] italic leading-[1] text-meta">
        {createdAt} from{" "}
        {update.application.url ? (
          <Link href={update.application.url} className="text-meta">
            {update.application.name}
          </Link>
        ) : (
          update.application.name
        )}{" "}
        {update.parent && (
          <Link
            href={`/${update.parent.username}/status/${update.parent.id}`}
            className="text-meta group-hover:text-links"
          >
            in reply to {update.parent.username}
          </Link>
        )}
      </div>
      <div className="mt-[15px] flex h-[89px] items-start border-t border-t-gray pt-[15px] leading-[1]">
        <Link href={`/${update.author.username}`} className="mr-[20px]">
          <Image
            src={update.author.picture}
            alt={`${update.author.username}_bigger`}
            height={48}
            width={48}
            quality={100}
          />
        </Link>
        <div>
          <Link href={`/${update.author.username}`} className="text-[27.6px]">
            <span>{update.author.username}</span>
          </Link>
          <span className="mt-[3px] block text-[14.4px]">
            {update.author.name}
          </span>
        </div>
      </div>
    </div>
  );
}
