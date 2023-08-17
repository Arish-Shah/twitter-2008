"use client";

import { useFlashStore } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { deleteUpdate } from "@/lib/actions/profile/delete-update";
import { postFavorite } from "@/lib/actions/profile/post-favorite";
import { getErrorMessage } from "@/lib/utils";
import type { ProfileUpdateType } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { ReplyIcon } from "./icons/reply";
import { StarIcon } from "./icons/star";
import { TrashIcon } from "./icons/trash";

interface InteractionsProps extends React.HTMLAttributes<HTMLDivElement> {
  update: ProfileUpdateType;
  username: string;
  visible?: boolean;
}

export function Interactions({
  update,
  username,
  visible = false,
  className,
}: InteractionsProps) {
  const flash = useFlashStore((state) => state.setMessage);
  const [isPending, startTransition] = useLoadingTransition();
  const [favorited, setFavorited] = useState(update.favorited);

  const handleFavorite = async () => {
    try {
      await postFavorite(update.id);
      setFavorited((favorited) => !favorited);
    } catch (error) {
      flash(getErrorMessage(error));
    }
  };

  const handleDelete = async () => {
    try {
      const confirmDelete = confirm(
        "Sure you want to delete this update? There is NO undo!"
      );
      confirmDelete && (await deleteUpdate(update.id));
    } catch (error) {
      flash(getErrorMessage(error));
    }
  };

  return (
    <div
      className={clsx("mx-auto my-[3px] flex flex-col items-center", className)}
    >
      <button
        title="favorite this update"
        className={clsx({
          "opacity-0 group-hover:opacity-100": !visible,
          "opacity-100": favorited,
        })}
        onClick={() => startTransition(() => handleFavorite())}
      >
        <StarIcon favorited={favorited} />
      </button>
      {username === update.username ? (
        <button
          title="delete this update"
          className={clsx("mt-[6px]", {
            "opacity-0 group-hover:opacity-100": !visible,
          })}
          onClick={() => {
            startTransition(() => handleDelete());
          }}
        >
          <TrashIcon />
        </button>
      ) : (
        <Link
          title={`reply to ${update.username}`}
          className={clsx("mt-[6px]", {
            "opacity-0 group-hover:opacity-100": !visible,
          })}
          href="/home"
        >
          <ReplyIcon />
        </Link>
      )}
    </div>
  );
}
