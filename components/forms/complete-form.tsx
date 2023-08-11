"use client";

import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

export function CompleteForm() {
  return (
    <Form>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="phone">Phone number:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input type="text" id="phone" name="phoen" autoFocus />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Continue" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
