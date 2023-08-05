"use client";

import Link from "next/link";
import type { FormEventHandler } from "react";
import { notify } from "../notification";
import { Form } from "../ui/form";

export function LoginForm() {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    notify("Wrong Username/Email and password combination.");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Label htmlFor="usernameOrEmail">Username</Form.Label>
        <Form.Input type="text" id="usernameOrEmail" autoFocus />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Input type="password" id="password">
          <Form.SubText>
            <Link href="/account/resend_password">Forgot?</Link>
          </Form.SubText>
        </Form.Input>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="ml-[3px]">
            Remember me
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Form.Submit value="Sign In" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
