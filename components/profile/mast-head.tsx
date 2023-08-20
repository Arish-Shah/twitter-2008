import { getMastHead } from "@/lib/actions/profile/get-mast-head";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface MastHeadProps {
  size?: "small";
  username: string;
  light?: boolean;
}

export async function MastHead({
  size,
  username,
  light = false,
}: MastHeadProps) {
  const data = await getMastHead(username);
  const small = size === "small";

  const dimension = small ? 32 : 74;

  return (
    <div className="flex items-center">
      <Link
        href={`${!small ? "/account/profile_images" : ""}/${data.username}`}
        prefetch={false}
      >
        <Image
          src={data.picture}
          alt={data.username}
          height={dimension}
          width={dimension}
          quality={100}
          className={clsx({ "border border-meta": !small })}
          draggable={false}
        />
      </Link>
      <h2
        className={clsx({
          "ml-[10px] mt-[-5px] text-[33.6px]": !small,
          "ml-[8px] text-[14.4px]": small,
          "text-[18px] font-bold": !light,
        })}
      >
        {data.username}
      </h2>
    </div>
  );
}
