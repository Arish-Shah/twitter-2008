import { auth } from "@/lib/auth";
import { LinkType } from "@/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / ?",
};

const links: LinkType[] = [
  { label: "Home", href: "/" },
  { label: "Help", href: "/help" },
  { label: "Contact Support", href: "/help/contact" },
];

export default async function NotFound() {
  const session = await auth();

  if (session?.user) links[0].href = "/home";

  return (
    <center className="mt-[53px]">
      <Link href="/">
        <Image
          src="/images/logos/twitter_logo_s.png"
          alt="Twitter.com"
          height={41}
          width={175}
          quality={100}
          draggable={false}
        />
      </Link>
      <Image
        src="/images/arrows/arr2.gif"
        alt="Arrow"
        height={11}
        width={21}
        quality={100}
        className="mt-[21px]"
        draggable={false}
      />
      <div className="inline-block w-[40%] rounded bg-white p-[20px_10px_54px_10px] leading-[1.2]">
        <h3 className="text-[17.5px]">That page doesn&apos;t exist!</h3>
        <Image
          src="/images/ui/not_found.gif"
          alt="Arrow"
          height={173}
          width={250}
          quality={100}
          className="mt-[21px]"
          draggable={false}
        />
        <ul className="mx-auto mt-[75px] flex max-w-[186px] justify-between">
          {links.map((link, i) => (
            <li key={i} className="inline">
              <Link href={link.href} className="underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </center>
  );
}
