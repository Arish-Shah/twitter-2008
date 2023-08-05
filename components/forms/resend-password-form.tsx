"use client";

import { Form } from "../ui/form";

export function ResendPasswordForm() {
  return (
    <Form>
      <Form.Row>
        <Form.Label htmlFor="phone">Email:</Form.Label>
        <Form.Input type="email" id="email" autoFocus />
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Form.Submit value="Reset my password" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
