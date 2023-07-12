import Image from "next/image";
import Link from "next/link";

export function IndexForm() {
  return (
    <div className="w-full ml-[23px]">
      <Link
        href="/"
        className="block w-full text-center bg-tw-button-red text-white font-bold text-[11pt] p-[2px_0] border border-black align-middle"
      >
        <Image
          src="/images/arrow_on_red.gif"
          height={13}
          width={17}
          quality={100}
          alt="Arrow_on_red"
          className="inline pr-[5px] mt-[-3px]"
        />{" "}
        Watch a video!
      </Link>
      <form className="m-[15px_0] p-[0_3px]">
        <h3 className="text-[1.2em] font-bold">Please sign in</h3>
        <div className="m-[5px_0]">
          <label htmlFor="usernameOrEmail">user name or email address:</label>
          <input
            type="text"
            className="w-full border border-tw-input-border p-[2px] text-[1.1em] text-black"
          />
        </div>
        <div className="m-[5px_0]">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            className="w-full border border-tw-input-border p-[2px] text-[1.1em] text-black"
          />
        </div>
        <div className="flex m-[10px_0]">
          <div className="flex-1 mt-[5px]">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="text-[10.2px] ml-[3px]">
              Remember me
            </label>
          </div>
          <input
            type="submit"
            value="Sign In »"
            className="p-[2px_8px] bg-tw-button border border-tw-button-border hover:bg-tw-button-hover cursor-pointer"
          />
        </div>
        <div className="text-[10.2px]">
          Forgot password?{" "}
          <Link
            href="/account/resend_password"
            className="text-black underline"
          >
            Click here
          </Link>
          .
        </div>
        <div className="mt-[10px] p-[4px_25px] text-[0.85em] leading-[1.2] bg-tw-success border border-tw-success-border text-center">
          Already using Twitter from your phone?{" "}
          <Link href="/account/complete">Click here</Link>.
        </div>
      </form>
    </div>
  );
}
