"use client";

import Link from "next/link";
import {
  Input,
  InputFormGroup,
  Label,
  LabelFormGroup,
  Submit,
} from "./elements";

export function LoginForm() {
  return (
    <form className="table pt-[5px]">
      <div className="table-row">
        <Label htmlFor="usernameOrEmail">Username</Label>
        <Input type="text" id="usernameOrEmail" />
      </div>
      <div className="table-row">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
        <Link href="/account/resend_password" className="ml-[2px] text-[.97em]">
          Forgot?
        </Link>
      </div>
      <div className="table-row">
        <LabelFormGroup />
        <InputFormGroup>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="ml-[3px]">
            Remember me
          </label>
        </InputFormGroup>
      </div>
      <div className="table-row">
        <LabelFormGroup />
        <InputFormGroup>
          <Submit value="Sign In" />
        </InputFormGroup>
      </div>
      <div className="h-[10px]"></div>
    </form>
  );
}
