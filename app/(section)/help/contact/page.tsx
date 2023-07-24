import { TwoColumn } from "@/components/two-column";
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
    <TwoColumn>
      <TwoColumn.Main>
        <TwoColumn.Main.H2>Contact us!</TwoColumn.Main.H2>
        <TwoColumn.Main.H3>Email</TwoColumn.Main.H3>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              {link.item} <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <TwoColumn.Main.H3>Physical</TwoColumn.Main.H3>
        <TwoColumn.Main.P>
          Twitter, Inc.
          <br />
          539 Bryant St.
          <br />
          Suite 402
          <br />
          San Francisco, CA 94107
        </TwoColumn.Main.P>
        <div className="h-[376px]"></div>
      </TwoColumn.Main>
    </TwoColumn>
  );
}
