"use client";

import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

export function ResendPasswordForm() {
  return (
    <Form>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="phone">Email:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input type="email" id="email" name="email" autoFocus />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Reset my password" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
