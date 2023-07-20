import type { Link, User } from "@/types";
import Image from "next/image";
import NextLink from "next/link";

const links: Link[] = [
  { text: "Home", url: "/home" },
  { text: "Profile", url: "/" },
  { text: "Find People", url: "/invitations" },
  { text: "Settings", url: "/account/settings" },
  { text: "Help", url: "/help" },
  { text: "Sign out", url: "/signout" },
];

interface HeaderProps {
  user?: User;
  large?: boolean;
}

export function Header({ user, large }: HeaderProps) {
  let items = null;

  if (user) {
    links[1].url = "/" + user.handle;

    items = links.map((link, i) => (
      <li key={i} className="m-[5px] inline">
        <NextLink href={link.url}>{link.text}</NextLink>
      </li>
    ));
  } else {
    items = (
      <>
        <li className="inline">
          <NextLink href="/login">Login</NextLink> /{" "}
          <NextLink href="/signup">Join Twitter!</NextLink>
        </li>
      </>
    );
  }

  return (
    <nav>
      <NextLink href="/" className="text-tw-links">
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
        <div className="absolute right-0 top-[25px] rounded-[5px] bg-white p-[8px_10px]">
          <ul>{items}</ul>
        </div>
      )}
    </nav>
  );
}
