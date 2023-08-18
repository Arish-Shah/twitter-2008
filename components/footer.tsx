"use client";

import type { LinkType } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: LinkType[] = [
  { label: "About Us", href: "/help/aboutus" },
  { label: "Contact", href: "/help/contact" },
  { label: "Blog", href: "https://blog.twitter.com", disablePrefetch: true },
  {
    label: "Status",
    href: "http://status.twitter.com/",
    disablePrefetch: true,
  },
  { label: "Downloads", href: "/downloads" },
  { label: "API", href: "http://apiwiki.twitter.com/", disablePrefetch: true },
  {
    label: "Search",
    href: "https://search.twitter.com/",
    disablePrefetch: true,
  },
  { label: "Help", href: "/help" },
  { label: "Jobs", href: "/help/jobs" },
  { label: "TOS", href: "/tos" },
  { label: "Privacy", href: "/help/privacy" },
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
              <Link href={link.href} prefetch={!link.disablePrefetch}>
                {link.label}
              </Link>
            ) : (
              link.label
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
}
