"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { loginSchema } from "@/lib/validations/auth";
import { LoginDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input, Submit } from "../ui/input";

export function IndexLoginForm() {
  const flash = useFlash();
  const router = useRouter();
  const [, startTransition] = useLoadingTransition();
  const { register, handleSubmit } = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
  });

  const login = async (data: LoginDataType) => {
    const response = await signIn("credentials", {
      redirect: false,
      kind: "login",
      ...data,
    });

    if (response?.error) {
      router.push("/login");
      return flash("Wrong Username/Email and password combination.");
    }
    router.push("/home");
  };

  return (
    <form
      className="my-[15px] px-[3px]"
      onSubmit={handleSubmit((data) => {
        startTransition(() => login(data));
      })}
    >
      <h3 className="text-[14.4px] font-bold">Please sign in</h3>
      <div className="my-[5px]">
        <label htmlFor="usernameOrEmail">user name or email address:</label>
        <Input
          type="text"
          id="usernameOrEmail"
          className="w-full"
          {...register("usernameOrEmail")}
          autoFocus
        />
      </div>
      <div className="my-[5px]">
        <label htmlFor="password">password</label>
        <Input
          type="password"
          id="password"
          className="w-full"
          {...register("password")}
        />
      </div>
      <div className="m-[10px_0] flex">
        <div className="mt-[5px] flex-1">
          <input type="checkbox" id="remember" {...register("remember")} />
          <label htmlFor="remember" className="ml-[3px] text-[10.2px]">
            Remember me
          </label>
        </div>
        <Submit value="Sign In »" />
      </div>
      <div className="text-[10.2px]">
        Forgot password?{" "}
        <Link href="/account/resend_password" className="text-black underline">
          Click here
        </Link>
        .
      </div>
      <div className="mt-[10px] border border-alert-success-border bg-alert-success p-[4px_25px] text-center text-[0.85em] leading-[1.2]">
        Already using Twitter from your phone?{" "}
        <Link href="/account/complete">Click here</Link>.
      </div>
    </form>
  );
}
