"use client";

import { useFlash } from "@/context/flash-context";
import { useLoader } from "@/context/loader-context";
import Link from "next/link";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

interface LoginFormProps {}

export function LoginForm({}: LoginFormProps) {
  const { notify } = useFlash();
  const { setLoading } = useLoader();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    notify("Wrong Username/Email and password combination.");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="usernameOrEmail">Username</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            autoFocus
          />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="password">Password</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input type="password" id="password" name="password" />
          <Form.Subtext>
            <Link href="/account/resend_password">Forgot?</Link>
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe" className="ml-[3px]">
            Remember me
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Sign In" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
