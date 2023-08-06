import Image from "next/image";
import Link from "next/link";
import { TwoColumn } from "./two-column";

export function CheckList() {
  return (
    <div className="mt-[20px] flex items-start px-[20px] pb-[30px]">
      <Image
        src="/images/ui/girl.gif"
        alt="Checklist"
        height={40}
        width={18}
        draggable={false}
      />
      <div className="pl-[20px]">
        <TwoColumn.Main.H1 className="my-0 text-[24px] font-bold">
          What to do now:
        </TwoColumn.Main.H1>
        <TwoColumn.Main.OrderedList className="text-[14.4px]">
          <li>
            Tell us what <strong>you&apos;re</strong> doing in the box above
          </li>
          <li>
            <Link href="/">Find some friends</Link> and follow what{" "}
            <strong>they&apos;re</strong> doing
          </li>
          <li>
            <Link href="/">Turn on your mobile phone</Link> to update your
            friends on the go
          </li>
        </TwoColumn.Main.OrderedList>
      </div>
    </div>
  );
}
