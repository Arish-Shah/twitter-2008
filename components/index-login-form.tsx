import Link from "next/link";
import { WatchButton } from "./ui/button";

export function IndexLoginForm() {
  return (
    <div className="ml-[23px] w-full">
      <WatchButton />
      <form className="my-[15px] px-[3px]">
        <h3 className="text-[14.4px] font-bold">Please sign in</h3>
        <div className="m-[5px_0]">
          <label htmlFor="usernameOrEmail">user name or email address:</label>
          <input
            type="text"
            className="w-full border border-tw-input-border p-[2px] text-[13.2px] text-black"
            autoFocus
          />
        </div>
        <div className="m-[5px_0]">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            className="w-full border border-tw-input-border p-[2px] text-[13.2px] text-black"
          />
        </div>
        <div className="m-[10px_0] flex">
          <div className="mt-[5px] flex-1">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="ml-[3px] text-[10.2px]">
              Remember me
            </label>
          </div>
          <input
            type="submit"
            value="Sign In »"
            className="cursor-pointer border border-tw-button-border bg-tw-button p-[2px_8px] hover:bg-tw-button-hover"
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
        <div className="mt-[10px] border border-tw-complete-border bg-tw-complete p-[4px_25px] text-center text-[0.85em] leading-[1.2]">
          Already using Twitter from your phone?{" "}
          <Link href="/account/complete">Click here</Link>.
        </div>
      </form>
    </div>
  );
}
