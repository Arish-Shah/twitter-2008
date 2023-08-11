import { Main } from "@/components/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / Contact us!",
};

const links = [
  { item: "Customer support:", text: "Help", href: "/help" },
  {
    item: "Partnership inquires:",
    text: "partner at twitter dot com",
    href: "mailto:partner@twitter.com",
  },
  { item: "also, see our", text: "press page", href: "/help/press" },
];

export default function Contact() {
  return (
    <Main>
      <Main.H2>Contact us!</Main.H2>
      <Main.H3>Email</Main.H3>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            {link.item} <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <Main.H3>Physical</Main.H3>
      <Main.P>
        Twitter, Inc.
        <br />
        539 Bryant St.
        <br />
        Suite 402
        <br />
        San Francisco, CA 94107
      </Main.P>
      <div className="h-[376px]"></div>
    </Main>
  );
}
