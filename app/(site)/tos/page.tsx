import { Section, SideBar, Wrapper } from "@/components/layout/content";
import { H2, H3, P } from "@/components/layout/typography";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter Terms of Service",
};

export default function TOS() {
  return (
    <div className="flex">
      <Wrapper>
        <H2>Terms of Service</H2>
        <P>
          By using the Twitter.com web site, a service of Twitter, Inc., you are
          agreeing to be bound by the following terms and conditions
          (&quot;Terms of Use&quot;).
        </P>
        <H3>Basic Terms</H3>
        <ol className="pl-[30px] list-decimal">
          <li>You must be 13 years or older to use this site.</li>
          <li>
            You are responsible for any activity that occurs under your screen
            name.
          </li>
          <li>You are responsible for keeping your password secure.</li>
          <li>
            You must not abuse, harass, threaten, impersonate or intimidate
            other Twitter users.
          </li>
          <li>
            You may not use the Twitter.com service for any illegal or
            unauthorized purpose. International users agree to comply with all
            local laws regarding online conduct and acceptable content.
          </li>
          <li>
            You are solely responsible for your conduct and any data, text,
            information, screen names, graphics, photos, profiles, audio and
            video clips, links (&quot;Content&quot;) that you submit, post, and
            display on the Twitter.com service.
          </li>
          <li>
            You must not modify, adapt or hack Twitter.com or modify another
            website so as to falsely imply that it is associated with
            Twitter.com .
          </li>
          <li>
            You must not create or submit unwanted email to any Twitter members
            (&quot;Spam&quot;).
          </li>
          <li>
            You must not transmit any worms or viruses or any code of a
            destructive nature.
          </li>
          <li>
            You must not, in the use of Twitter, violate any laws in your
            jurisdiction (including but not limited to copyright laws).
          </li>
        </ol>
        <p>
          Violation of any of these agreements will result in the termination of
          your Twitter.com account. While Twitter.com prohibits such conduct and
          content on its site, you understand and agree that Twitter cannot be
          responsible for the Content posted on its web site and you nonetheless
          may be exposed to such materials and that you use the Twitter.com
          service at your own risk.
        </p>
        <H3>General Conditions</H3>
        <ol className="pl-[30px] list-decimal">
          <li>
            We reserve the right to modify or terminate the Twitter.com service
            for any reason, without notice at any time.
          </li>
          <li>
            We reserve the right to alter these Terms of Use at any time. If the
            alterations constitute a material change to the Terms of Use, we
            will notify you via internet mail according to the preference
            expressed on your account. What constitutes a &quot;material
            change&quot; will be determined at our sole discretion, in good
            faith and using common sense and reasonable judgement.
          </li>
          <li>
            We reserve the right to refuse service to anyone for any reason at
            any time.
          </li>
          <li>
            We may, but have no obligation to, remove Content and accounts
            containing Content that we determine in our sole discretion are
            unlawful, offensive, threatening, libelous, defamatory, obscene or
            otherwise objectionable or violates any party&apos;s intellectual
            property or these Terms of Use.
          </li>
          <li>
            The Twitter service makes it possible to post images and text hosted
            on Twitter to outside websites. This use is accepted (and even
            encouraged!). However, pages on other websites which display data
            hosted on Twitter.com must provide a link back to Twitter.
          </li>
          <li>
            We reserve the right to reclaim usernames on behalf of businesses or
            individuals that hold legal claim or trademark on those usernames.
          </li>
        </ol>
        <H3>Copyright (What&apos;s Yours is Yours)</H3>
        <ol className="pl-[30px] list-decimal">
          <li>
            We claim no intellectual property rights over the material you
            provide to the Twitter service. Your profile and materials uploaded
            remain yours. You can remove your profile at any time by deleting
            your account. This will also remove any text and images you have
            stored in the system.
          </li>
          <li>
            We encourage users to contribute their creations to the public
            domain or consider progressive licensing terms.
          </li>
          <li>
            Twitter undertakes to obey all relevant copyright laws. We will
            review all claims of copyright infringement received and remove
            content deemed to have been posted or distributed in violation of
            any such laws. To make a claim, please provide us with the
            following:
            <ol className="pl-[30px] list-decimal">
              <li>
                A physical or electronic signature of the copyright owner or the
                person authorized to act on its behalf;
              </li>
              <li>
                A description of the copyrighted work claimed to have been
                infringed;
              </li>
              <li>
                A description of the infringing material and information
                reasonably sufficient to permit Twitter to locate the material;
              </li>
              <li>
                Your contact information, including your address, telephone
                number, and email;
              </li>
              <li>
                A statement by you that you have a good faith belief that use of
                the material in the manner complained of is not authorized by
                the copyright owner, its agent, or the law; and
              </li>
              <li>
                A statement that the information in the notification is
                accurate, and, under the pains and penalties of perjury, that
                you are authorized to act on behalf of the copyright owner.
              </li>
            </ol>
          </li>
        </ol>
        <P>
          Claims can be sent to{" "}
          <Link href="mailto:copyright@twitter.com">copyright@twitter.com</Link>{" "}
          or Twitter Inc., 164 South Park Street, San Francisco CA 94107.
          Contact the agent designated to receive and act on copyright
          violations under the Digital Millennium Copyright Act (DMCA).
        </P>
        <em>
          (These terms of service were inspired, with permission, by Flickr.)
        </em>
        <div className="h-[15px]"></div>
      </Wrapper>
      <SideBar>
        <Section>
          <div className="m-[10px_0_5px_0]">
            <h1 className="font-bold text-[1.1em] p-[0_0_2px]">
              Opting-in to SMS Updates
            </h1>
          </div>
          <ol className="pl-[30px] list-decimal">
            <li>Sign up on the Web at www.twitter.com</li>
            <li>
              Text &quot;follow username&quot; to with your mobile (where
              &quot;username&quot; is a registered Twitter username).
            </li>
            <li>
              Accept an invitation from a registered Twitter user via SMS or
              email
            </li>
          </ol>
          <div className="m-[10px_0_5px_0]">
            <h1 className="font-bold text-[1.1em] p-[0_0_2px]">
              Opting-out of SMS Updates
            </h1>
          </div>
          <ol className="pl-[30px] list-decimal">
            <li>
              To delete your account text &quot;delete me&quot; or &quot;stop
              all&quot; to
            </li>
            <li>
              Disable all mobile updates by texting any of the following words
              to : &quot;off, end, stop, quit, cancel, unsubscribe&quot;
            </li>
            <li>
              All mobile updates my also be disabled from the web at Twitter.com
            </li>
            <li>
              Disable mobile updates from a specific registered Twitter user or
              users by texting &quot;leave username&quot; to (where
              &quot;username&quot; is a registered Twitter username).
            </li>
          </ol>
        </Section>
      </SideBar>
    </div>
  );
}
