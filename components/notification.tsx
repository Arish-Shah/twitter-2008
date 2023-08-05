"use client";

import Image from "next/image";

export function notify(message: string) {
  const element = document.getElementById("notification")!;
  const title = element.querySelector("h1")!;
  title.textContent = message;

  const noHeight = "h-0";
  const totalHeight = "h-[102px]";

  element.classList.toggle(noHeight);
  element.classList.toggle(totalHeight);

  setTimeout(() => {
    element.classList.toggle(noHeight);
    element.classList.toggle(totalHeight);
  }, 5000);
}

export function Notification() {
  return (
    <div
      id="notification"
      className="h-0 overflow-hidden transition-height duration-500"
    >
      <Image
        src="/images/ui/girl.gif"
        alt="notification"
        height={0}
        width={0}
        quality={100}
        className="mb-[5px] ml-[24px] h-auto w-auto"
      />
      <div className={`bg-x-arr2 bg-[25px_0] bg-no-repeat pt-[11px]`}>
        <div className="overflow-hidden rounded-[5px] bg-white p-[5px_10px]">
          <h1 className="text-[24px] font-bold"></h1>
        </div>
      </div>
    </div>
  );
}
