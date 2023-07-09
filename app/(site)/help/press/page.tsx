import { SideBar, Wrapper } from "@/components/layout/content";
import { H2, H3, P } from "@/components/layout/typography";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter",
};

export default function Press() {
  return (
    <div className="flex">
      <Wrapper>
        <H2>About Twitter!</H2>
        <P>
          <small>
            High resolution logos:{" "}
            <Link href="/images/twitter_logo.png">PNG</Link> |{" "}
            <Link href="/images/twitter_logo.psd">Photoshop</Link> |{" "}
            <Link href="/images/twitter_logo.ai">Illustrator</Link>
          </small>
        </P>
        <H3>Where did the idea for Twitter come from?</H3>
        <P>
          Jack Dorsey had grown interested in the simple idea of being able to
          know what his friends were doing. Specifically, Jack wondered if there
          might be an opportunity to build something compelling around this
          simple status concept. When he brought the idea up to his colleagues,
          it was decided that a prototype should be built.
        </P>
        <P>
          Twitter was funded initially by Obvious, a creative environment in San
          Francisco, CA. The first prototype was built in two weeks in March
          2006 and launched publicly in August of 2006. The service grew popular
          very quickly and it soon made sense for Twitter to move outside of
          Obvious. In May 2007, Twitter Incorporated was founded.
        </P>
        <H3>Why do so many people seem to like Twitter?</H3>
        <P>
          Simplicity has played an important role in Twitter&apos;s success.
          People are eager to connect with other people and Twitter makes that
          simple. Twitter asks one question, &quot;What are you doing?&quot;
          Answers must be under 140 characters in length and can be sent via
          mobile texting, instant message, or the web
        </P>
        <P>
          Twitter&apos;s core technology is a device agnostic message routing
          system with rudimentary social networking features. By accepting
          messages from sms, web, mobile web, instant message, or from third
          party API projects, Twitter makes it easy for folks to stay connected.
        </P>
        <H3>Isn&apos;t Twitter just too much information?</H3>
        <P>
          No, in fact, Twitter solves information overload by changing
          expectations traditionally associated with online communication. At
          Twitter, we ask one question, &quot;What are you doing?&quot; The
          answers to this question are for the most part rhetorical. In other
          words, users do not expect a response when they send a message to
          Twitter. On the receiving end, Twitter is ambient--updates from your
          friends and relatives float to your phone, IM, or web site and you are
          only expected to pay as much or as little attention to them as you see
          fit.
        </P>
        <P>
          The result of using Twitter to stay connected with friends, relatives,
          and coworkers is that you have a sense of what folks are up to but you
          are not expected to respond to any updates unless you want to. This
          means you can step in and out of the flow of information as it suits
          you and it never queues up with increasing demand of your attention.
          Additionally, users are very much in control of whose updates they
          receive, when they receive them, and on what device. For example, we
          provide settings for scheduling Twitter to automatically turn off at
          dinnertime and users can switch off Twitter updates at any point.
        </P>
        <P>
          Simply put, Twitter is what you make of it--receive a lot of
          information about your friends, or just a tiny bit. It&apos;s up to
          them.
        </P>
        <H3>How is Twitter built?</H3>
        <P>
          Our engineering team works with a web application framework called
          Ruby on Rails. We all work on macintosh computers except for testing
          purposes. Our web site and user interface were designed using
          Omnigraffle and Photoshop.
        </P>
        <P>
          We built Twitter using Ruby on Rails because it allows us to work
          quickly and easily--our team likes to deploy features and changes
          multiple times per day. Rails provides skeleton code frameworks so we
          don&apos;t have to re-invent the wheel every time we want to add
          something simple like a sign in form or a picture upload feature.
        </P>
        <H3>How do you make money from Twitter?</H3>
        <P>
          Twitter has many appealing opportunities for generating revenue but we
          are holding off on implementation for now because we don&apos;t want
          to distract ourselves from the more important work at hand which is to
          create a compelling service and great user experience for millions of
          people around the world. While our business model is in a research
          phase, we spend more money than we make.
        </P>
        <H3>What&apos;s next for Twitter?</H3>
        <P>
          We continue to follow user behavior and pay close attention to feature
          requests. We launched our mobile site, m.twitter.com after getting
          lots of requests for this feature. However, we are also very much
          guided by our philosophy of keeping things simple and intuitive so we
          like to restrain ourselves with regard to features. That being said,
          people seem to be calling for more interesting ways to share feedback
          with one another and organize themselves and their updates into
          groups--we&apos;re paying attention to these requests.
        </P>
        <P>
          We plan to build Twitter, Inc into a successful, revenue-generating
          company that attracts world-class talent with an inspiring culture and
          attitude towards doing business.
        </P>
        <div className="h-[10px]"></div>
      </Wrapper>
      <SideBar>
        Media inquires:{" "}
        <Link href="mailto:pr@twitter.com">pr at twitter dot com</Link>
      </SideBar>
    </div>
  );
}
