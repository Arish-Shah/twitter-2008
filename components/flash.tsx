"use client";

import { useFlash } from "@/context/flash-context";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface FlashProps {}

export function Flash({}: FlashProps) {
  const { message } = useFlash();

  const currentRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (message && messageRef.current) messageRef.current.textContent = message;
  }, [message]);

  return (
    <div
      className={clsx("overflow-hidden transition-height duration-500", {
        "h-0": !message,
        "h-[105.52px]": message,
      })}
      ref={currentRef}
    >
      <h2 className="pl-[24px]">
        <Image src="/images/ui/girl.gif" alt="Girl" height={40} width={18} />
      </h2>
      <div className="mt-[6px] bg-arr2 bg-[25px_0] bg-no-repeat pt-[11px]"></div>
      <div className="mb-[4px]">
        <p
          className="rounded bg-white p-[7px] text-[25.44px] font-bold leading-[1.2]"
          ref={messageRef}
        ></p>
      </div>
    </div>
  );
}
