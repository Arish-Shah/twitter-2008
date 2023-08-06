import type { LinkType, PageType, UserType } from "@/types";
import Image from "next/image";
import NextLink from "next/link";
import { Fragment } from "react";

const links: LinkType[] = [
  { text: "Home", url: "/home" },
  { text: "Profile", url: "/" },
  { text: "Find People", url: "/invitations" },
  { text: "Settings", url: "/account/settings" },
  { text: "Help", url: "/help" },
  { text: "Sign out", url: "/signout" },
];

interface HeaderProps {
  user?: UserType;
  join?: string;
  size?: PageType;
}

export function Header({ user, size }: HeaderProps) {
  const large = size === "LARGE";
  const small = size === "SMALL";

  let items = null;

  if (user) {
    links[1].url = "/" + user.screen;

    items = links.map((link, i) => (
      <li key={i} className="m-[5px] inline">
        <NextLink href={link.url}>{link.text}</NextLink>
      </li>
    ));
  } else {
    items = (
      <Fragment>
        <li className="inline">
          <NextLink href="/login">Login</NextLink> /{" "}
          <NextLink href="/signup">Join Twitter!</NextLink>
        </li>
      </Fragment>
    );
  }

  return (
    <nav className="mb-[8px] flex">
      <NextLink href="/" className="mr-auto">
        <Image
          src={`/images/logos/twitter${large ? "" : "_logo_s"}.png`}
          alt="Twitter.com"
          height={large ? 49 : 41}
          width={large ? 210 : 175}
          quality={100}
          draggable={false}
        />
      </NextLink>
      {!large && (
        <div
          className={`absolute right-0 top-[25px] rounded-[5px] bg-white p-[8px_10px] text-[12.6px] leading-[12px] ${
            small && "right-[143px]"
          }`}
        >
          <ul>{items}</ul>
        </div>
      )}
    </nav>
  );
}
