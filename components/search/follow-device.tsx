"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import {
  postFollow,
  postUnfollow,
} from "@/lib/actions/profile/get-post-follow";
import { SearchResultsType } from "@/types";
import clsx from "clsx";
import { Submit } from "../ui/input";
import { Switch } from "../ui/switch";

interface FollowDeviceProps {
  showFollow: boolean;
  result: SearchResultsType[number];
}

export function FollowDevice({ result, showFollow }: FollowDeviceProps) {
  const [isPending, startTransition] = useLoadingTransition();

  const follow = async (username: string) => {
    await postFollow(username);
  };

  const unfollow = async (username: string) => {
    await postUnfollow(username);
  };

  return (
    <div className="min-w-[250px] text-right">
      <Switch condition={showFollow}>
        <Submit
          type="button"
          value={result.following ? "Remove" : "Follow"}
          disabled={isPending}
          className={clsx({ "bg-white": result.following })}
          onClick={() => {
            const followUnfollow = result.following ? unfollow : follow;
            startTransition(() => followUnfollow(result.username));
          }}
        />
      </Switch>
    </div>
  );
}
