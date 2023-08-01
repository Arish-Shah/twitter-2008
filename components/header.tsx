import type { Link, User } from "@/types";
import Image from "next/image";
import NextLink from "next/link";
import { ProfileJoinButton } from "./ui/button";

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
  join?: string;
}

export function Header({ user, large, join }: HeaderProps) {
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
        <div className="absolute right-0 top-[25px] rounded-[5px] bg-white p-[8px_10px] leading-[1.2]">
          <ul>{items}</ul>
        </div>
      )}
      {join && (
        <>
          <div className="mt-[10px]">
            <Image
              src="/images/profile/profile_bird.png"
              alt="Profile_bird"
              className="aspect-square"
              height={48}
              width={48}
              quality={100}
            />
          </div>
          <div className="mb-[-6px] mt-[-7.5px] flex w-[755px] border border-tw-profile-banner-border bg-tw-profile-banner p-[15px_10px_20px_10px]">
            <div className="w-[480px]">
              <h1 className="text-[25.2px]">
                Hey there! <span className="font-bold">{join}</span> is using
                Twitter.
              </h1>
              <h3 className="text-[15.6px]">
                Twitter is a free service that lets you keep in touch with
                people through the exchange of quick, frequent answers to one
                simple question: What are you doing?{" "}
                <span className="font-bold">Join today</span> to start receiving{" "}
                <span className="font-bold">{join}&apos;s</span> updates.
              </h3>
            </div>
            <div className="ml-[50px] mt-[17px]">
              <ProfileJoinButton />
              <div className="mt-[15.5px] text-center text-[10.5px] leading-[12px]">
                Already using Twitter
                <br />
                from your phone?{" "}
                <NextLink href="/account/complete">Click here</NextLink>.
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
