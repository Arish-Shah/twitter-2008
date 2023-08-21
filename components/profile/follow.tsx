"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Alert } from "../ui/alert";
import { Main } from "../ui/content";
import { Submit } from "../ui/input";

interface FollowProps {
  username: string;
}

export function Follow({ username }: FollowProps) {
  return (
    <Fragment>
      <button className="mt-[5px] w-[74px] border border-black bg-subtext py-[4px] text-[14.4px] font-bold text-white">
        Follow
      </button>
      <Alert.Warning className="mt-[5px]">
        <Main.H3 className="inline-block">You follow {username}</Main.H3>
        <Submit
          type="button"
          value="Remove"
          className="ml-[5px] p-[4px_12px] text-[10.8px]"
        />
        <small className="block">
          {username}&apos;s updates appear in your{" "}
          <Link href="/home">timeline</Link>.
        </small>
        <Main.H3 className="mt-[10px]">Device Updates</Main.H3>
        <div></div>
      </Alert.Warning>
      <Alert.Warning className="mt-[10px] font-bold">
        You are now following {username}
      </Alert.Warning>
    </Fragment>
  );
}
