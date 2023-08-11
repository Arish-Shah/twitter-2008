"use client";

import Link from "next/link";
import { ReCaptcha } from "../re-captcha";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

interface SignupFormProps {}

export function SignupForm({}: SignupFormProps) {
  return (
    <Form>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="username">Username:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input type="text" id="username" name="username" autoFocus />
          <Form.Subtext>
            Your URL: http://twitter.com/
            <span className="font-bold text-green">USERNAME</span> Username can
            only contain letters, numbers and &apos;_&apos;
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="password">Password:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input type="password" id="password" name="password" />
          <Form.Subtext>6 characters or more (be tricky!)</Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="email">Email Address:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input type="email" id="email" name="email" />
          <Form.Subtext>In case you forget something</Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="recaptcha">Humanness:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <ReCaptcha />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <input type="checkbox" id="newsletter" name="newsletter" />
          <label htmlFor="sendEmailNewsletter" className="ml-[3px]">
            I want the inside scoop—please send me email updates!
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Form.Subtext>
            By clicking on &apos;I accept&apos; below, you confirm that you are
            over 13 years of age and accept the{" "}
            <Link href="/tos">Terms of Service</Link>.
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="I accept. Create my account." />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
