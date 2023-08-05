"use client";

import { Form } from "../ui/form";

export function CompleteForm() {
  return (
    <Form>
      <Form.Row>
        <Form.Label htmlFor="phone">Phone number:</Form.Label>
        <Form.Input type="text" id="phone" autoFocus />
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Form.Submit value="Continue" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
