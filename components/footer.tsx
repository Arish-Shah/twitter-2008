"use client";

import type { LinkType } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: LinkType[] = [
  { text: "About Us", href: "/help/aboutus" },
  { text: "Contact", href: "/help/contact" },
  { text: "Blog", href: "" },
  { text: "Status", href: "" },
  { text: "Downloads", href: "/downloads" },
  { text: "API", href: "" },
  { text: "Search", href: "" },
  { text: "Help", href: "/help" },
  { text: "Jobs", href: "/help/jobs" },
  { text: "TOS", href: "/tos" },
  { text: "Privacy", href: "/help/privacy" },
];

interface FooterProps {
  connected?: boolean;
}

export function Footer({ connected }: FooterProps) {
  const pathname = usePathname();

  return (
    <footer
      className={clsx("rounded bg-white p-[5px_0] text-center", {
        "mt-[15px]": !connected,
      })}
    >
      <ul>
        <li className="m-[0_5.65px] inline">&copy; 2008 Twitter</li>
        {links.map((link, i) => (
          <li key={i} className="m-[0_5.65px] inline">
            {link.href !== pathname ? (
              <Link href={link.href}>{link.text}</Link>
            ) : (
              link.text
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
}
