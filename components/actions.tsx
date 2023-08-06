import Link from "next/link";
import { Fragment } from "react";
import { TwoColumn } from "./two-column";

interface ActionsProps {
  screen: string;
}

export function Actions({ screen }: ActionsProps) {
  return (
    <Fragment>
      <div className="text-[13.2px] font-bold">Actions</div>
      <TwoColumn.Sidebar.P className="!mt-[11px]">
        <div className="text-[12px]">
          <Link href="/">message</Link> {screen}
        </div>
        <div className="text-[12px]">
          <Link href="/">nudge</Link> {screen}
        </div>
        <div className="text-[12px]">
          <Link href="/" className="text-x-subtext">
            block
          </Link>{" "}
          {screen}
        </div>
      </TwoColumn.Sidebar.P>
    </Fragment>
  );
}
