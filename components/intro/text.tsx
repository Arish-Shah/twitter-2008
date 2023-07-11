import Link from "next/link";

export const What = (
  <>
    <p className="text-[1.5em] p-[0_4px] text-black m-[15px_0] leading-[1.3]">
      Twitter is a service for friends, family, and co—workers to communicate
      and stay connected through the exchange of quick, frequent answers to one
      simple question: <b>What are you doing?</b>
    </p>
    <p className="text-[1.2em] leading-[1.3] text-black m-[0_0_1em] text-center mt-[26px]">
      <Link
        href="/signup"
        className="w-[9.5em] text-[1.5em] p-[5.5px_18px] bg-tw-button-green border border-black text-white hover:no-underline"
      >
        Get Started—Join!
      </Link>
    </p>
  </>
);

export const Why = <h1>ok</h1>;

export const How = <h1>okay</h1>;
