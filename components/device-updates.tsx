import Link from "next/link";
import { TwoColumn } from "./two-column";

interface DeviceUpdatesProps {
  setup?: boolean;
}

export function DeviceUpdates({ setup }: DeviceUpdatesProps) {
  return (
    <div className="pb-[10px]">
      <TwoColumn.Sidebar.H1>Device Updates</TwoColumn.Sidebar.H1>
      <TwoColumn.Sidebar.P className="!mt-[0px]">
        {setup ? (
          <Link href={""}>Set up SMS updates</Link>
        ) : (
          <form>
            <label htmlFor="">
              <input type="radio" />
              <span className="ml-[2px]">phone</span>
            </label>
            <label htmlFor="" className="ml-[8px]">
              <input type="radio" />
              <span className="ml-[2px]">off</span>
            </label>
          </form>
        )}
      </TwoColumn.Sidebar.P>
    </div>
  );
}
