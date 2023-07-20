import type { Link } from "@/types";
import NextLink from "next/link";

const links: Link[] = [
  { text: "About Us", url: "/help/aboutus" },
  { text: "Contact", url: "/help/contact" },
  { text: "Blog", url: "" },
  { text: "Status", url: "" },
  { text: "Downloads", url: "/downloads" },
  { text: "API", url: "" },
  { text: "Search", url: "" },
  { text: "Help", url: "/help" },
  { text: "Jobs", url: "/help/jobs" },
  { text: "TOS", url: "/tos" },
  { text: "Privacy", url: "/help/privacy" },
];

interface FooterProps {
  connected?: boolean;
}

export function Footer({ connected }: FooterProps) {
  const margin = connected ? "" : "mt-[15px]";

  return (
    <footer
      className={`rounded-[5px] bg-white p-[5px_0] text-center ${margin}`}
    >
      <ul>
        <li className="m-[0_5.65px] inline">&copy; 2008 Twitter</li>
        {links.map((link, i) => (
          <li key={i} className="m-[0_5.65px] inline">
            <NextLink href={link.url}>{link.text}</NextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
