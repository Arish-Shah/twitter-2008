"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
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

export function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`mx-auto mt-[15px] p-[5px_0px] text-center bg-white rounded-[5px]`}
    >
      <ul>
        <li className="inline m-[0px_5.65px]">© 2008 Twitter</li>
        {links.map((link, i) => (
          <li className="inline m-[0px_5.65px]" key={i}>
            {pathname != link.href ? (
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
