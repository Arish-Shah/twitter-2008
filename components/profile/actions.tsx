import Link from "next/link";
import { Fragment } from "react";
import { Sidebar } from "../ui/content";

interface ActionsProps {
  screen: string;
}

// TODO: fix this
export function Actions({ screen }: ActionsProps) {
  return (
    <Fragment>
      <div className="text-[13.2px] font-bold">Actions</div>
      <Sidebar.P className="!mt-[11px]">
        <div className="text-[12px]">
          <Link href="/">message</Link> {screen}
        </div>
        <div className="text-[12px]">
          <Link href="/">nudge</Link> {screen}
        </div>
        <div className="text-[12px]">
          <Link href="/" className="text-subtext">
            block
          </Link>{" "}
          {screen}
        </div>
      </Sidebar.P>
    </Fragment>
  );
}
