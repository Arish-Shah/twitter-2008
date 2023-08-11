"use client";
import { useFlash } from "@/context/flash-context";
import { useLoader } from "@/context/loader-context";
import { postSignup } from "@/lib/post-signup";
import { validateSignupBody } from "@/lib/validation";
import Link from "next/link";
import { FormEventHandler } from "react";
import { ReCaptcha } from "../re-captcha";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";
import { UsernameField } from "../username-field";

export function SignupForm() {
  const { loader } = useLoader();
  const { flash } = useFlash();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    loader(true);
    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      email: e.currentTarget.email.value,
      humanness: e.currentTarget.humanness.checked,
      newsletter: e.currentTarget.newsletter.checked,
    };

    const message = validateSignupBody(body);
    if (message) {
      loader(false);
      return flash(message);
    }
    const response = await postSignup(body);
    console.log(response);
    loader(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="username">Username:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <UsernameField />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="password">Password:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            type="password"
            id="password"
            name="password"
            minLength={6}
            maxLength={30}
          />
          <Form.Subtext>6 characters or more (be tricky!)</Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="email">Email Address:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input type="email" id="email" name="email" maxLength={30} />
          <Form.Subtext>In case you forget something</Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="humanness">Humanness:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <ReCaptcha />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <input type="checkbox" id="sendEmailNewsletter" name="newsletter" />
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
