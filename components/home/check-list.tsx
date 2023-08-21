import { getCheckList } from "@/lib/actions/profile/get-check-list";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Main } from "../ui/content";

export async function CheckList() {
  const checkList = await getCheckList();

  if (checkList.every((item) => item)) return null;

  return (
    <div className="mt-[20px] flex items-start px-[20px] pb-[30px]">
      <Image
        src="/images/ui/girl.gif"
        alt="Checklist"
        height={40}
        width={18}
        draggable={false}
        priority={true}
      />
      <div className="pl-[20px]">
        <Main.H1 className="my-0 text-[24px] font-bold">
          What to do now:
        </Main.H1>
        <Main.OrderedList className="text-[14.4px]">
          <li className={clsx({ "line-through": checkList[0] })}>
            Tell us what <strong>you&apos;re</strong> doing in the box above
          </li>
          <li className={clsx({ "line-through": checkList[1] })}>
            <Link href="/invitations">Find some friends</Link> and follow what{" "}
            <strong>they&apos;re</strong> doing
          </li>
          <li className={clsx({ "line-through": checkList[2] })}>
            <Link href="/devices">Turn on your mobile phone</Link> to update
            your friends on the go
          </li>
        </Main.OrderedList>
      </div>
    </div>
  );
}
