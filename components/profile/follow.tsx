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
  updateDeviceUpdates,
} from "@/lib/actions/profile/get-post-follow";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { Switch } from "../ui/switch";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { followDeviceUpdatesSchema } from "@/lib/validations/device";
import { FollowDeviceUpdatesDataType } from "@/types";

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
  const [message, setMessage] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<FollowDeviceUpdatesDataType>({
    resolver: zodResolver(followDeviceUpdatesSchema),
    defaultValues: { deviceUpdates: followData?.deviceUpdates ? "on" : "off" },
  });

  const follow = async () => {
    await postFollow(username);
    setMessage(`You are now following ${username}.`);
  };

  const unfollow = async () => {
    await postUnfollow(username);
    setMessage(`You are no longer following ${username}.`);
    setToggle(false);
  };

  const deviceUpdate = async (data: FollowDeviceUpdatesDataType) => {
    await updateDeviceUpdates(username, data);
  };

  return (
    <Fragment>
      {followData ? (
        <button
          className="mt-[5px] flex cursor-default items-center border border-gray-border bg-gray p-[5px_20px_5px_3px]"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          <TriangleIcon className={clsx({ "rotate-90": toggle })} />
          <TickIcon className="ml-[5px]" />
          <span className="ml-[2px] font-bold">Following</span>
          {deviceUpdatesData && (
            <Fragment>
              {followData.deviceUpdates ? (
                <TickIcon className="ml-[6px]" />
              ) : (
                <MinusIcon className="ml-[6px]" />
              )}
              <span className="ml-[2px]">
                Device updates {followData.deviceUpdates ? "ON" : "OFF"}
              </span>
            </Fragment>
          )}
        </button>
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
        <Alert.Warning className="my-[5px] !p-[10px]">
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
          <form
            onChange={() => {
              handleSubmit((data) => {
                startTransition(() => deviceUpdate(data));
              })();
            }}
          >
            <label htmlFor="type-on">
              <input
                type="radio"
                id="type-on"
                value="on"
                disabled={!deviceUpdatesData}
                {...register("deviceUpdates")}
              />
              <span className="ml-[2px]">on</span>
            </label>
            <label htmlFor="type-off" className="ml-[8px]">
              <input
                type="radio"
                id="type-off"
                value="off"
                disabled={!deviceUpdatesData}
                {...register("deviceUpdates")}
              />
              <span className="ml-[2px]">off</span>
            </label>{" "}
            <span className="ml-[5px]">
              <Switch condition={!deviceUpdatesData}>
                Receive {username}&apos;s updates via SMS or IM (
                <Link href="/devices">activate</Link>).
              </Switch>
              <Switch
                condition={!!deviceUpdatesData && !followData.deviceUpdates}
              >
                You will not receive {username}&apos;s updates via SMS when on.
              </Switch>
              <Switch
                condition={!!deviceUpdatesData && followData.deviceUpdates}
              >
                You will receive {username}&apos;s updates via SMS when on.
              </Switch>
            </span>
          </form>
        </Alert.Warning>
      )}
      {message && (
        <Alert.Warning className="mt-[5px] font-bold">{message}</Alert.Warning>
      )}
    </Fragment>
  );
}
