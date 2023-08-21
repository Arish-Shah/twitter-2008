"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Alert } from "../ui/alert";
import { Main } from "../ui/content";
import { Submit } from "../ui/input";
import { TickIcon } from "../icons/tick";
import { TriangleIcon } from "../icons/triangle";
import clsx from "clsx";
import { MinusIcon } from "../icons/minus";
import { ReturnTypeOrValue } from "drizzle-orm";
import {
  getFollow,
  postFollow,
  postUnfollow,
} from "@/lib/actions/profile/get-post-follow";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { useFlash } from "@/hooks/use-flash-store";

interface FollowProps {
  username: string;
  followData: Awaited<ReturnTypeOrValue<typeof getFollow>>;
  deviceUpdatesData: Awaited<ReturnTypeOrValue<typeof getDeviceUpdates>>;
}

export function Follow({
  username,
  followData,
  deviceUpdatesData,
}: FollowProps) {
  const [, startTransition] = useLoadingTransition();
  const [toggle, setToggle] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const flash = useFlash();

  const follow = async () => {
    await postFollow(username);
    setShowAlert(true);
  };

  const unfollow = async () => {
    await postUnfollow(username);
    flash(`You have unfollowed ${username}.`);
    setShowAlert(false);
    setToggle(false);
  };

  return (
    <Fragment>
      {followData ? (
        <div
          className="mt-[5px] flex cursor-default items-center border border-gray-border p-[5px_8px]"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          <TriangleIcon className={clsx({ "rotate-90": toggle })} />
          <TickIcon className="ml-[5px]" />
          <span className="ml-[2px] font-bold">Following</span>
          {followData.deviceUpdates ? (
            <TickIcon className="ml-[6px]" />
          ) : (
            <MinusIcon className="ml-[6px]" />
          )}
          <span className="ml-[2px]">
            Device updates {followData.deviceUpdates ? "ON" : "OFF"}
          </span>
        </div>
      ) : (
        <button
          className="mt-[5px] w-[74px] border border-black bg-subtext py-[5px] font-bold text-white"
          onClick={() => {
            startTransition(() => follow());
          }}
        >
          Follow
        </button>
      )}
      {followData && toggle && (
        <Alert.Warning className="my-[5px] p-[10px_10px]">
          <Main.H3 className="inline-block">You follow {username}</Main.H3>
          <Submit
            type="button"
            value="Remove"
            className="ml-[5px] p-[4px_12px] text-[10.8px]"
            onClick={() => {
              startTransition(() => unfollow());
            }}
          />
          <small className="block">
            {username}&apos;s updates appear in your{" "}
            <Link href="/home">timeline</Link>.
          </small>
          <Main.H3 className="mt-[10px]">Device Updates</Main.H3>
          <form onChange={() => {}}>
            <label htmlFor="type-on">
              <input type="radio" id="type-on" value="on" />
              <span className="ml-[2px]">on</span>
            </label>
            <label htmlFor="type-off" className="ml-[8px]">
              <input type="radio" id="type-off" value="off" />
              <span className="ml-[2px]">off</span>
            </label>{" "}
            <span className="ml-[10px]">
              You will receive {username}&apos;s updates via SMS.
            </span>
          </form>
        </Alert.Warning>
      )}
      {showAlert && (
        <Alert.Warning className="mt-[5px] font-bold">
          You are now following {username}
        </Alert.Warning>
      )}
    </Fragment>
  );
}
