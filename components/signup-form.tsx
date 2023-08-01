"use client";

import Link from "next/link";
import { ReCaptcha } from "./re-captcha";
import { Form } from "./ui/form";

export function SignupForm() {
  return (
    <Form>
      <Form.Row>
        <Form.Label htmlFor="username">Username:</Form.Label>
        <Form.Input type="text" id="username" autoFocus>
          <Form.SubText>
            Your URL: http://twitter.com/
            <span className="font-bold text-tw-green">USERNAME</span> Username
            can only contain letters, numbers and &apos;_&apos;
          </Form.SubText>
        </Form.Input>
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="password">Password:</Form.Label>
        <Form.Input type="password" id="password">
          <Form.SubText>6 characters or more (be tricky!)</Form.SubText>
        </Form.Input>
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="email">Email Address:</Form.Label>
        <Form.Input type="email" id="email">
          <Form.SubText>In case you forget something</Form.SubText>
        </Form.Input>
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="humanness">Humanness:</Form.Label>
        <Form.InputGroup>
          <ReCaptcha />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <input type="checkbox" id="sendEmailNewsletter" />
          <label htmlFor="sendEmailNewsletter" className="ml-[3px]">
            I want the inside scoop—please send me email updates!
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Form.SubText>
            By clicking on &apos;I accept&apos; below, you confirm that you are
            over 13 years of age and accept the{" "}
            <Link href="/tos">Terms of Service</Link>.
          </Form.SubText>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Form.Submit value="I accept. Create my account." />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
