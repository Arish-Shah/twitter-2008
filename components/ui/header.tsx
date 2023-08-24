import { auth } from "@/lib/auth";
import type { LinkType, PageSizeType } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { SignoutForm } from "../forms/logout-form";
import { Switch } from "./switch";

const links: LinkType[] = [
  { label: "Home", href: "/home" },
  { label: "Profile", href: "/" },
  { label: "Find People", href: "/invitations" },
  { label: "Settings", href: "/account/settings" },
  { label: "Help", href: "/help" },
];

interface HeaderProps {
  size?: PageSizeType;
}

export async function Header({ size }: HeaderProps) {
  const large = size === "large";

  const session = await auth();
  if (session?.user) {
    links[1].href = `/${session.user.username}`;
  }

  const items = session?.user ? (
    <Fragment>
      {links.map((link, i) => (
        <li key={i} className="m-[5px] inline">
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
      <li className="m-[5px] inline">
        <SignoutForm />
      </li>
    </Fragment>
  ) : (
    <li className="inline">
      <Link href="/login">Login</Link> /{" "}
      <Link href="/signup">Join Twitter!</Link>
    </li>
  );

  return (
    <header className={clsx("mb-[10px] flex")}>
      <Link
        href={session?.user ? "/home" : "/"}
        title="Twitter: home"
        className="mr-auto"
      >
        <Image
          src={`/images/logos/twitter${large ? "" : "_logo_s"}.png`}
          alt="Twitter.com"
          height={large ? 49 : 41}
          width={large ? 210 : 175}
          quality={100}
          draggable={false}
          priority={true}
        />
      </Link>
      <Switch condition={!large}>
        <nav
          className={clsx(
            "absolute right-0 top-[25px] rounded bg-white p-[6px_10px] leading-[1.5]",
            { "right-[143px]": size === "small" }
          )}
        >
          <ul>{items}</ul>
        </nav>
      </Switch>
    </header>
  );
}
