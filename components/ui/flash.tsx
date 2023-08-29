"use client";

import { useFlashStore } from "@/hooks/use-flash-store";
import { PageSizeType } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface FlashProps {
  size: PageSizeType;
}

export function Flash({ size }: FlashProps) {
  const message = useFlashStore((state) => state.message);
  const setMessage = useFlashStore((state) => state.setMessage);
  const messageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (message && messageRef.current) {
      messageRef.current.textContent = message;

      setTimeout(() => {
        setMessage(null);
      }, 3200);
    }
  }, [message, setMessage]);

  return (
    <div
      className={clsx("overflow-hidden transition-height duration-500", {
        "h-0": !message,
        "h-[105.52px]": message,
        "w-[620px]": size === "small",
      })}
    >
      <h2 className="pl-[24px]">
        <Image
          src="/images/ui/girl.gif"
          alt="Girl"
          height={40}
          width={18}
          draggable={false}
          priority={true}
        />
      </h2>
      <div className="mt-[6px] bg-arr2 bg-[25px_0] bg-no-repeat pt-[11px]"></div>
      <div className="mb-[4px]">
        <div
          className="rounded bg-white p-[7px] text-[25.44px] font-bold leading-[1.2]"
          ref={messageRef}
        />
        p
      </div>
    </div>
  );
}
