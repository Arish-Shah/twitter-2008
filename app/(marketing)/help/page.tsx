import { Content, Main, Sidebar } from "@/components/content";
import { HelpForm } from "@/components/forms/help-form";
import Link from "next/link";

export default function Help() {
  return (
    <Content>
      <Main className="pb-[15px]">
        <Main.H2>Twitter, help!</Main.H2>
        <Main.P>
          Found something we&apos;ve overlooked?{" "}
          <Link href="https://help.twitter.com" target="_blank">
            You may find an answer in our knowledge base
          </Link>
          . If not, use the form below and we&apos;ll get back to you shortly.
        </Main.P>
        <HelpForm />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <Sidebar.H1>Twitter from your phone!</Sidebar.H1>
          <Sidebar.P className="!mt-0 text-[12px]">
            Twitter is great on the go. Update your followers by sending your
            updates to one of the following numbers:
          </Sidebar.P>
          <Sidebar.UnorderedList>
            <Sidebar.UnorderedListItem>
              <strong>40404</strong> US
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem>
              <strong>21212</strong> Canada
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem>
              <strong>+44 7624801423</strong> Global!
            </Sidebar.UnorderedListItem>
          </Sidebar.UnorderedList>
          <Sidebar.P className="!mt-0 text-[12px]">
            What else can you do from your phone? Check out this lingo:
          </Sidebar.P>
          <Sidebar.UnorderedList>
            <Sidebar.UnorderedListItem>
              <strong>off</strong> turns phone updates off
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem>
              <strong>on</strong> turns phone updates back on
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem>
              <strong>follow jack</strong> follow jack&apos;s updates on your
              phone
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem>
              <strong>off jack</strong> turn jack&apos;s updates off
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem>
              <strong>get jack</strong> get jack&apos;s last update
            </Sidebar.UnorderedListItem>
            <Sidebar.UnorderedListItem>
              <strong>nudge jack</strong> encourage jack to update
            </Sidebar.UnorderedListItem>
          </Sidebar.UnorderedList>
        </Sidebar.Section>
      </Sidebar>
    </Content>
  );
}
