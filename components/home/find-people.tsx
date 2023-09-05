"use client";

import { useNewAccountStore } from "@/hooks/use-new-account-store";
import clsx from "clsx";
import { useState } from "react";
import { InviteEmailForm } from "../forms/invite-email-form";
import { InviteForm } from "../forms/invite-form";
import { SearchForm } from "../forms/search-form";
import { Alert } from "../ui/alert";
import { Main } from "../ui/content";
import { Switch } from "../ui/switch";

const links = [
  "Invite from other networks",
  "Invite by email",
  "Search",
] as const;

interface FindPeopleProps {
  email: string;
}

export function FindPeople({ email }: FindPeopleProps) {
  const newAccount = useNewAccountStore((state) => state.newAccount);
  const [selected, setSelected] = useState(0);

  return (
    <div className="px-[10px] pb-[10px]">
      <Switch condition={!newAccount}>
        <ul className="mb-[10px] mt-[20px] flex">
          <li className="flex-1 border-b border-b-gray-border"></li>
          {links.map((link, i) => (
            <li
              key={i}
              className={clsx("ml-[-1px] border border-gray-border", {
                "border-b-white": selected === i,
              })}
            >
              <div
                className={clsx(
                  "cursor-pointer p-[2px_12px] text-text hover:no-underline",
                  {
                    "bg-gray hover:bg-gray-hover": selected !== i,
                    "bg-white": selected === i,
                  }
                )}
                onClick={() => setSelected(i)}
              >
                {link}
              </div>
            </li>
          ))}
          <li className="flex-1 border-b border-b-gray-border"></li>
        </ul>
      </Switch>
      <Main.P className="text-[13.4px] text-meta">
        <Switch condition={selected === 0}>
          We can check if anyone in your email contacts already has a Twitter
          account.
        </Switch>
        <Switch condition={selected === 1}>
          You can invite folks by sending them an email.
        </Switch>
        <Switch condition={selected === 2}>Search by Name or Location</Switch>
      </Main.P>
      <Alert.Default className="mx-auto my-[15px] w-[590px] !p-[15px]">
        <Switch condition={selected === 0}>
          <InviteForm email={email} />
        </Switch>
        <Switch condition={selected === 1}>
          <InviteEmailForm formFor="invite" autoFocus />
        </Switch>
        <Switch condition={selected === 2}>
          <SearchForm size="large" autoFocus />
        </Switch>
      </Alert.Default>
    </div>
  );
}
