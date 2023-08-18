import { getMastHead } from "@/lib/actions/profile/get-mast-head";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface MastHeadProps {
  size?: "small";
  username: string;
}

export async function MastHead({ size, username }: MastHeadProps) {
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
        />
      </Link>
      <h2
        className={clsx({
          "ml-[10px] mt-[-5px] text-[33.6px] font-bold": !small,
          "ml-[8px] text-[18px] font-bold": small,
        })}
      >
        {data.username}
      </h2>
    </div>
  );
}
