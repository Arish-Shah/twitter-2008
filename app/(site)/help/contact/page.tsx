import { Wrapper } from "@/components/layout/content";
import { H2, H3, P } from "@/components/layout/typography";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter: Contact us!",
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
    <Wrapper>
      <H2>Contact us!</H2>
      <H3>Email</H3>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            {link.item} <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <H3>Physical</H3>
      <P>
        Twitter, Inc.
        <br />
        539 Bryant St.
        <br />
        Suite 402
        <br />
        San Francisco, CA 94107
      </P>
    </Wrapper>
  );
}
