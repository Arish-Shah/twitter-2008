"use client";

import { useLoader } from "@/context/loader-context";
import clsx from "clsx";
import Image from "next/image";

export function Loader() {
  const { loading } = useLoader();

  return (
    <span
      className={clsx(
        "absolute right-0 top-[5px] border border-gray-border bg-white",
        {
          hidden: !loading,
        }
      )}
    >
      <Image
        src="/images/ui/loader.gif"
        alt="Loader"
        height={16}
        width={16}
        quality={100}
        draggable={false}
      />
    </span>
  );
}
