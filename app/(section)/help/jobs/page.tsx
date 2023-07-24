import { TwoColumn } from "@/components/two-column";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Working at Twitter",
};

export default function Jobs() {
  return (
    <TwoColumn>
      <TwoColumn.Main>
        <TwoColumn.Main.H1>
          Nice to meet you; won&apos;t you join us?
        </TwoColumn.Main.H1>
        <TwoColumn.Main.P>
          Twitter is on to something big and we need your help—join our
          small-but-growing team!
        </TwoColumn.Main.P>
        <div className="mb-[16px] flex">
          <Image
            src="/images/jobs/jobs_bird.jpg"
            alt="Jobs"
            width={517}
            height={193}
            quality={100}
          />
          <div className="ml-[9px] w-full border border-tw-badgebox-border bg-tw-badgebox p-[5px]">
            <TwoColumn.Main.H2 className="mt-0 text-[14.4px]">
              Current positions:
            </TwoColumn.Main.H2>
            <ul className="text-[9.6px]">
              <li className="leading-[16px]">
                <Link href="#opsend">Operations Engineer</Link>
              </li>
              <li className="leading-[16px]">
                <Link href="#syseng">Systems Engineer</Link>
              </li>
              <li className="leading-[16px]">
                <Link href="#fe">Front End Engineer</Link>
              </li>
            </ul>
          </div>
        </div>
        <TwoColumn.Main.H2 className="mb-0">
          Why work at Twitter?
        </TwoColumn.Main.H2>
        <TwoColumn.Main.P className="mt-0">
          We have our own cozy little building right in South Park—a tiny little
          green space in San Francisco&apos;s SOMA neighborhood. On sunny days,
          the park is full of folks from nearby startups lying on the grass,
          eating burritos, and maybe enjoying a nice soy latte—iced!
          There&apos;s also a playground in the park.
        </TwoColumn.Main.P>
        <TwoColumn.Main.H2 className="mb-0 mt-[10px]">
          Competitive salary, full benefits
        </TwoColumn.Main.H2>
        <TwoColumn.Main.P className="mt-0">
          Although Twitter is a small startup with less than 20 employees, we
          offer competitive salaries and full benefits. We even have an HR
          department (her name is Krissy), if you have questions about your
          401k, flex spending, health, dental, vacation, stock options and all
          that stuff. We put a water filter on the faucet and the kitchen is
          kept well stocked with a variety of snacks from a nearby Whole Foods.
          Also, everyone gets a free iPhone.
        </TwoColumn.Main.P>
        <TwoColumn.Main.H2 className="mb-0 mt-[10px]">
          Work with interesting people!
        </TwoColumn.Main.H2>
        <TwoColumn.Main.P className="mt-0">
          You&apos;ll be joining a unique group of people who prior to joining
          Twitter spent time creating and building other popular products and
          services from companies such as Google, Blogger, Xanga, Odeo, CNET,
          Danger, UserScripts.org, Samsung, Sony Ericsson, Vodafone and lots
          more—if you&apos;re curious about any of these projects, or have your
          own to share, please come and visit us.
        </TwoColumn.Main.P>
        <TwoColumn.Main.H1 className="mb-0 mt-[20px]">
          Our current positions
        </TwoColumn.Main.H1>
        <TwoColumn.Main.P className="mt-0">
          If you see a position that you&apos;re interested in, send an email
          telling us about yourself and your relevant experience to{" "}
          <Link href="mailto:jobs@twitter.com">jobs@twitter.com</Link>. Unless
          otherwise stated, all jobs are located in San Francisco, California.
        </TwoColumn.Main.P>
        <div id="opseng"></div>
        <TwoColumn.Main.H2 className="mb-0 mt-[10px]">
          Operations Engineer
        </TwoColumn.Main.H2>
        <TwoColumn.Main.P className="mt-0">
          Twitter is seeking a seasoned Operations Engineer to join our
          Operations team. The position is full-time and is based in San
          Francisco and will report to the VP of Engineering and Operations.
        </TwoColumn.Main.P>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">
          Key areas of responsibility
        </TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>
            - Continually improve the performance and scalability of the service
          </li>
          <li>- Configure servers and network</li>
          <li>- Monitor service stability and performance</li>
          <li>
            - Troubleshoot issues with hardware, software, applications and
            network
          </li>
          <li>
            - Prioritize tasks and work independently yet interact with product
            and engineering teams
          </li>
          <li>- Solve problems quickly and automate processes</li>
          <li>
            - Document current and future configuration processes and policies
          </li>
          <li>- Participate in 24x7 on-call support</li>
        </ul>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">
          Qualifications
        </TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>- B.S. in Computer Science or equivalent experience</li>
          <li>- 4+ years of experience with Linux</li>
          <li>
            - Demonstrable knowledge of TCP/IP, security, HTTP, SQL databases,
            and memcache
          </li>
          <li>- Demonstrable scripting and programming skills</li>
          <li>- Excellent verbal and written communication skills</li>
        </ul>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">Bonus</TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>- Experience with Ruby on Rails stack performance tuning</li>
          <li>- Experience with JVM-based application stacks</li>
          <li>- Experience with various flavors of message queues</li>
          <li>- Active user of Twitter</li>
        </ul>
        <div id="syseng"></div>
        <TwoColumn.Main.H2 className="mb-0 mt-[10px]">
          Systems Engineer
        </TwoColumn.Main.H2>
        <TwoColumn.Main.P className="mt-0">
          Twitter is looking for a new member of our technical staff to focus on
          systems development. You should have a passion for shipping elegant,
          responsive infrastructure code that will be used by millions of
          people.
        </TwoColumn.Main.P>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">
          Key areas of responsibility
        </TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>- Pro-actively look for ways to make Twitter better</li>
          <li>- Design and implement core, backend software components</li>
          <li>- Code using primarily Java, Ruby, C/C++ and Scala</li>
          <li>- Interface with product and front-end teams</li>
          <li>- Conduct design and code reviews</li>
          <li>
            - Analyze and improve efficiency, scalability, and stability of
            various system resources
          </li>
          <li>- Rapidly fix bugs and solve problems</li>
        </ul>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">
          Qualifications
        </TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>- M.S. Computer Science or related field preferred</li>
          <li>
            - Extensive experience building large-scale server applications
          </li>
          <li>
            - Expert knowledge developing and debugging in Java and C/C++ on
            Unix
          </li>
          <li>- Knowledge of python and ruby</li>
          <li>
            - Experience with distributed systems, operating system internals,
            filesystems, compilers, threading models, and server architectures
          </li>
          <li>- Disciplined approach to testing and quality assurance</li>
          <li>- Great written communication and documentation abilities</li>
        </ul>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">Bonus</TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>- Experience with functional programming languages</li>
          <li>- Experience with various database technologies</li>
          <li>- Demonstrable knowledge of advanced mathematics</li>
          <li>- Active user of Twitter</li>
          <li>- Active Twitter API developer</li>
        </ul>
        <div id="fe"></div>
        <TwoColumn.Main.H2 className="mb-0 mt-[10px]">
          Front End Engineer
        </TwoColumn.Main.H2>
        <TwoColumn.Main.P className="mt-0">
          Twitter is looking for a new member of our technical staff to focus on
          front-end development. You should have a passion for shipping elegant,
          responsive web interfaces that will be used by millions of people.
        </TwoColumn.Main.P>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">
          Key areas of responsibility
        </TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>- Write front-end code in Ruby, HTML/CSS, and Javascript</li>
          <li>
            - Implement new features and optimize existing ones from
            controller-level to UI
          </li>
          <li>
            - Work closely with, and incorporate feedback from, product
            management, interaction designers, and back-end engineers
          </li>
          <li>- Rapidly fix bugs and solve problems</li>
          <li>- Pro-actively look for ways to make Twitter better</li>
        </ul>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">
          Qualifications
        </TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>
            - Demonstrable experience building world-class, consumer web
            application interfaces
          </li>
          <li>- Expert Javascript/HTML/CSS/Ajax coding skills</li>
          <li>- Excellent programming skills in Ruby, Java, Python, or PHP</li>
          <li>- Disciplined approach to testing and quality assurance</li>
          <li>
            - Strong command of web standards, CSS-based design, cross-browser
            compatibility
          </li>
          <li>
            - Good understanding of web technologies (HTTP, Apache) and
            familiarity with Unix/Linux
          </li>
          <li>- Knowledgeable foundation in interaction design principles</li>
          <li>- Great written communication and documentation abilities</li>
        </ul>
        <TwoColumn.Main.H4 className="mb-0 mt-[10px]">Bonus</TwoColumn.Main.H4>
        <ul className="ml-[0.6px] leading-[16px]">
          <li>- Experience with Ruby on Rails</li>
          <li>- Mobile web design experience</li>
          <li>- Visual-design skills</li>
          <li>- CS education</li>
          <li>- Active user of Twitter</li>
        </ul>
        <div className="h-[10px]"></div>
      </TwoColumn.Main>
    </TwoColumn>
  );
}
