import type { LinkType, PageSizeType } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const links: LinkType[] = [
  { label: "Home", href: "/home" },
  { label: "Profile", href: "/" },
  { label: "Find People", href: "/invitations" },
  { label: "Settings", href: "/account/settings" },
  { label: "Help", href: "/help" },
  { label: "Sign out", href: "/signout" },
];

interface HeaderProps {
  size?: PageSizeType;
  title?: string;
}

export function Header({ size, title = "Twitter" }: HeaderProps) {
  const large = size === "large";
  const small = size === "small";

  // TODO: check for user here
  const items = false ? (
    links.map((link, i) => (
      <li key={i} className="m-[5px] inline">
        <Link href={link.href}>{link.label}</Link>
      </li>
    ))
  ) : (
    <li className="inline">
      <Link href="/login">Login</Link> /{" "}
      <Link href="/signup">Join Twitter!</Link>
    </li>
  );

  return (
    <header className={clsx("mb-[10px] flex")}>
      <Link href="/" title={title} className="mr-auto">
        <Image
          src={`/images/logos/twitter${large ? "" : "_logo_s"}.png`}
          alt="Twitter.com"
          height={large ? 49 : 41}
          width={large ? 210 : 175}
          quality={100}
          draggable={false}
        />
      </Link>
      {!large && (
        <nav
          className={clsx(
            "absolute right-0 top-[25px] rounded bg-white p-[8px_10px] text-[12.6px] leading-[12px]",
            {
              "right-[143px]": small,
            }
          )}
        >
          <ul>{items}</ul>
        </nav>
      )}
    </header>
  );
}
