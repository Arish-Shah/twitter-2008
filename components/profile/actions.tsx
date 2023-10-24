import { getReceipents } from "@/lib/actions/home/get-post-delete-message";
import Link from "next/link";
import { Fragment } from "react";
import { Sidebar } from "../ui/content";
import { Switch } from "../ui/switch";

interface ActionsProps {
  username: string;
}

export async function Actions({ username }: ActionsProps) {
  const receipents = await getReceipents();

  return (
    <Fragment>
      <div className="text-[13.2px] font-bold">Actions</div>
      <Sidebar.P className="!mt-[11px]">
        <Switch condition={receipents.includes(username)}>
          <div className="text-[12px]">
            <Link href={`/direct_messages/create/${username}`}>message</Link>{" "}
            {username}
          </div>
        </Switch>
        <div className="text-[12px]">
          <Link href="/block" className="text-subtext" prefetch={false}>
            block
          </Link>{" "}
          {username}
        </div>
      </Sidebar.P>
    </Fragment>
  );
}
