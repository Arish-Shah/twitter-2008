import { getProfile } from "@/lib/actions/profile/get-profile";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface MastHeadProps {
  size?: "small";
  username?: string;
  light?: boolean;
}

export async function MastHead({
  size,
  username,
  light = false,
}: MastHeadProps) {
  const profile = await getProfile(username);
  const small = size === "small";

  const dimension = small ? 32 : 74;
  const heightClassName = small ? "h-[32px]" : "h-[74px]";

  return (
    <div className="flex items-center">
      <Link
        href={`${!small ? "/account/profile_images" : ""}/${profile.username}`}
        className={clsx("block overflow-hidden", heightClassName, {
          "border border-meta": !small,
        })}
      >
        <Image
          src={profile.picture}
          alt={`${profile.username}'s picture`}
          height={dimension}
          width={dimension}
          quality={100}
          className={clsx("h-auto")}
          draggable={false}
          priority={true}
        />
      </Link>
      <h2
        className={clsx({
          "ml-[10px] mt-[-5px] text-[33.6px]": !small,
          "ml-[8px] text-[14.4px]": small,
          "text-[18px] font-bold": !light,
        })}
      >
        {size === "small" && !light ? profile.name : profile.username}
      </h2>
    </div>
  );
}
