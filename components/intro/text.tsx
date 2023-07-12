import Link from "next/link";

export const What = (
  <>
    <p className="text-[1.5em] p-[0_4px] text-black m-[15px_0] leading-[1.3]">
      Twitter is a service for friends, family, and co–workers <br />
      to communicate and stay connected through the exchange of quick, frequent
      answers to one simple question: <b>What are you doing?</b>
    </p>
    <p className="text-[1.2em] leading-[1.3] m-[0_0_1em] text-center mt-[26px]">
      <Link
        href="/signup"
        className="w-[9.5em] text-[1.5em] p-[5.5px_18px] bg-tw-button-green border border-black text-white hover:no-underline"
      >
        Get Started—Join!
      </Link>
    </p>
  </>
);

export const Why = (
  <div className="text-black text-[1.2em] leading-[1.3]">
    <p className="m-[15px_0]">
      Why? Because even basic updates are meaningful to family members, friends,
      or colleagues—especially when they&apos;re timely.
    </p>
    <ul className="list-disc ml-[1.2em]">
      <li>
        <strong>Eating soup?</strong> Research shows that moms want to know.
      </li>
      <li>
        <strong>Running late to a meeting?</strong> Your co–workers might find
        that useful.
      </li>
      <li>
        <strong>Partying?</strong> Your friends may want to join you.
      </li>
    </ul>
  </div>
);

export const How = (
  <div className="text-black text-[1.2em] leading-[1.3] m-[15px_0]">
    <p>
      With Twitter, you can stay hyper–connected to your friends and always know
      what they&apos;re doing. Or, you can stop following them any time. You can
      even set quiet times on Twitter so you&apos;re not interrupted.
    </p>
    <p className="mt-[15px]">
      <strong>Twitter puts you in control</strong> and becomes a modern antidote
      to information overload.
    </p>
  </div>
);
