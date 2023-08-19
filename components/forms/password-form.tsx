"use client";

import Link from "next/link";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

interface PasswordFormProps {}

export function PasswordForm({}: PasswordFormProps) {
  return (
    <Form className="pl-[10px]">
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="current_password">Current Password:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input id="current_password" type="password" />
          <Form.Subtext className="block">
            <Link href="/account/resend_password">Forgot your password?</Link>
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="new_password">New Password:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input id="new_password" type="password" />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="verify_password">Verify New Password:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input id="verify_password" type="password" />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Change" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
