import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ProfileJoinButton } from "../ui/button";

interface JoinBannerProps {
  username: string;
}

export function JoinBanner({ username }: JoinBannerProps) {
  return (
    <Fragment>
      <Image
        src="/images/profile/profile_bird.png"
        alt="Profile_bird"
        className="aspect-square"
        height={48}
        width={48}
        quality={100}
        draggable={false}
        priority={true}
      />
      <div className="mb-[10px] mt-[-7.5px] flex w-[763px] border border-join-banner-border bg-join-banner p-[15px_10px_20px_10px]">
        <div className="w-[480px]">
          <h1 className="text-[25.2px]">
            Hey there! <span className="font-bold">{username}</span> is using
            Twitter.
          </h1>
          <h3 className="text-[15.6px]">
            Twitter is a free service that lets you keep in touch with people
            through the exchange of quick, frequent answers to one simple
            question: What are you doing?{" "}
            <span className="font-bold">Join today</span> to start receiving{" "}
            <span className="font-bold">{username}&apos;s</span> updates.
          </h3>
        </div>
        <div className="ml-[50px] mt-[17px]">
          <ProfileJoinButton />
          <div className="mt-[15.5px] text-center text-[10.5px] leading-[12px]">
            Already using Twitter
            <br />
            from your phone? <Link href="/account/complete">Click here</Link>.
          </div>
        </div>
      </div>
    </Fragment>
  );
}
