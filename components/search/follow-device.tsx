"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import {
  postFollow,
  postUnfollow,
  updateDeviceUpdates,
} from "@/lib/actions/profile/get-post-follow";
import { getDeviceUpdates } from "@/lib/actions/settings/get-post-delete-device";
import { followDeviceUpdatesSchema } from "@/lib/validations/device";
import type { FollowDeviceUpdatesDataType, SearchResultsType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Submit } from "../ui/input";
import { Switch } from "../ui/switch";

interface FollowDeviceProps {
  showFollow: boolean;
  result: SearchResultsType[number];
  deviceUpdates: Awaited<ReturnType<typeof getDeviceUpdates>>;
}

export function FollowDevice({
  result,
  showFollow,
  deviceUpdates,
}: FollowDeviceProps) {
  const [isPending, startTransition] = useLoadingTransition();
  const { register, handleSubmit } = useForm<FollowDeviceUpdatesDataType>({
    resolver: zodResolver(followDeviceUpdatesSchema),
    defaultValues: {
      deviceUpdates: result.following?.deviceUpdates ? "on" : "off",
    },
  });

  const follow = async (username: string) => {
    await postFollow(username);
  };

  const unfollow = async (username: string) => {
    await postUnfollow(username);
  };

  const deviceUpdate = async (
    username: string,
    data: FollowDeviceUpdatesDataType
  ) => {
    await updateDeviceUpdates(username, data);
  };

  return (
    <div className="min-w-[240px]">
      <Switch condition={showFollow}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {result.following && deviceUpdates && (
              <form
                onChange={() => {
                  handleSubmit((data) => {
                    startTransition(() => deviceUpdate(result.username, data));
                  })();
                }}
              >
                <span className="mr-[10px] font-bold">Device updates</span>
                <label htmlFor="type-on">
                  <input
                    type="radio"
                    id="type-on"
                    value="on"
                    {...register("deviceUpdates")}
                  />
                  <span className="ml-[2px]">on</span>
                </label>
                <label htmlFor="type-off" className="ml-[8px]">
                  <input
                    type="radio"
                    id="type-off"
                    value="off"
                    {...register("deviceUpdates")}
                  />
                  <span className="ml-[2px]">off</span>
                </label>{" "}
              </form>
            )}
          </div>
          <Submit
            type="button"
            value={result.following ? "Remove" : "Follow"}
            onClick={() => {
              const followUnfollow = result.following ? unfollow : follow;
              startTransition(() => followUnfollow(result.username));
            }}
          />
        </div>
      </Switch>
    </div>
  );
}
