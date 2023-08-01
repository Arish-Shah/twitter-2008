import Image from "next/image";
import Link from "next/link";

export function JoinButton() {
  return (
    <Link
      href="/signup"
      className="border border-black bg-tw-joinbutton p-[4.5px_36.5px] text-[14.5px] font-bold text-white hover:bg-tw-joinbutton-hover hover:no-underline"
    >
      Join!
    </Link>
  );
}

export function SignupButton() {
  return (
    <Link
      href="/signup"
      className="w-[114px] border border-black bg-tw-signupbutton p-[6px_18px] text-[21.5px] text-white hover:no-underline"
    >
      Get Started—Join!
    </Link>
  );
}

export function WatchButton() {
  return (
    <Link
      href="/"
      className="block w-full border border-black bg-tw-watchbutton p-[2px_0] text-center align-middle text-[11pt] font-bold text-white hover:no-underline"
    >
      <Image
        src="/images/arrows/arrow_on_red.gif"
        height={13}
        width={17}
        quality={100}
        alt="Arrow_on_red"
        className="mt-[-3px] inline pr-[5px]"
      />{" "}
      Watch a video!
    </Link>
  );
}
