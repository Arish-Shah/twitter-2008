import Link from "next/link";
import { TwoColumn } from "./two-column";

interface ActionsProps {
  screen: string;
}

export function Actions({ screen }: ActionsProps) {
  return (
    <div className="mb-[13px]">
      <TwoColumn.Sidebar.H1 className="text-x-sidebar-tab">
        Actions
      </TwoColumn.Sidebar.H1>
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
    </div>
  );
}
