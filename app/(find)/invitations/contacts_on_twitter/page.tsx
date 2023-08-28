import { Main } from "@/components/ui/content";
import Link from "next/link";

export default function ContactsOnTwitter() {
  return (
    <Main>
      <Main.H1>Hmm... we can&apos;t find your email contacts</Main.H1>
      {/* <Main.H1>Hmm... you don&apos;t have any email contacts</Main.H1> */}
      <Main.P className="mt-[10px] text-[13.4px] text-meta">
        No big deal, you can still search for people later.
      </Main.P>
      <div className="py-[15px] text-center">
        <Link
          href="/home"
          className="border border-gray-border bg-gray p-[5px_15px] text-black hover:bg-gray-hover hover:no-underline"
        >
          done!
        </Link>
      </div>
    </Main>
  );
}
