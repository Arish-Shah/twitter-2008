"use client";

import { InputFormGroup, LabelFormGroup } from "./elements/form-group";
import { Input, Submit } from "./elements/inputs";
import { Label, Subtext } from "./elements/labels";
import { Captcha } from "./elements/captcha";
import Link from "next/link";

export function SignupForm() {
  return (
    <form className="table pt-[5px]">
      <div className="table-row">
        <Label htmlFor="userScreenName">Username:</Label>
        <Input type="text" id="userScreenName">
          <Subtext>
            Your URL: http://twitter.com/
            <span className="text-green-700 font-bold">USERNAME</span>
            <br />
            Username can only contain letters, numbers and &apos;_&apos;
          </Subtext>
        </Input>
      </div>
      <div className="table-row">
        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password">
          <Subtext>6 characters or more (be tricky!)</Subtext>
        </Input>
      </div>
      <div className="table-row">
        <Label htmlFor="email">Email Address:</Label>
        <Input type="email" id="email">
          <Subtext>In case you forget something</Subtext>
        </Input>
      </div>
      <div className="table-row">
        <LabelFormGroup>Humanness:</LabelFormGroup>
        <InputFormGroup className="align-top">
          <Captcha />
        </InputFormGroup>
      </div>
      <div className="table-row">
        <LabelFormGroup />
        <InputFormGroup>
          <input type="checkbox" id="newsletter" />
          <label htmlFor="newsletter">
            {" "}
            I want the inside scoop—please send me email updates!
          </label>
        </InputFormGroup>
      </div>
      <div className="table-row">
        <LabelFormGroup />
        <InputFormGroup>
          <Subtext>
            By clicking on &apos;I accept&apos; below, you confirm that you are
            over 13 years of age and accept the{" "}
            <Link href="/tos">Terms of Service</Link>.
          </Subtext>
        </InputFormGroup>
      </div>
      <div className="table-row">
        <LabelFormGroup />
        <InputFormGroup>
          <Submit value="I accept. Create my account" />
        </InputFormGroup>
      </div>
      <div className="h-[20px]"></div>
    </form>
  );
}
