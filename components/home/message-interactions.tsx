"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { useMessageFormStore } from "@/hooks/use-message-form-store";
import { deleteMessage } from "@/lib/actions/home/get-post-delete-message";
import { getErrorMessage } from "@/lib/utils";
import clsx from "clsx";
import { OutboxIcon } from "../icons/outbox";
import { TrashIcon } from "../icons/trash";

interface MessageInteractionsProps {
  id: number;
  username: string;
  className?: string;
}

export function MessageInteractions({
  id,
  username,
  className,
}: MessageInteractionsProps) {
  const setTo = useMessageFormStore((state) => state.setTo);
  const [isPending, startTransition] = useLoadingTransition();
  const flash = useFlash();

  const handleDelete = async (id: number) => {
    try {
      const confirmDelete = confirm("Sure you want to delete this message?");
      if (confirmDelete) await deleteMessage(id);
    } catch (error) {
      flash(getErrorMessage(error));
    }
  };

  return (
    <div
      className={clsx("mx-auto my-[3px] flex flex-col items-center", className)}
    >
      <button
        title={`reply to ${username}`}
        className={clsx("opacity-0 group-hover:opacity-100")}
        onClick={() => {
          setTo(username);
        }}
        disabled={isPending}
      >
        <OutboxIcon />
      </button>
      <button
        title="delete this message"
        className={clsx("mt-[6px] opacity-0 group-hover:opacity-100")}
        disabled={isPending}
        onClick={() => {
          startTransition(() => handleDelete(id));
        }}
      >
        <TrashIcon />
      </button>
    </div>
  );
}
