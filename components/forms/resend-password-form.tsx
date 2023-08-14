"use client";

import { resendPasswordSchema } from "@/lib/validations/auth";
import type { ResendPasswordDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

export function ResendPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResendPasswordDataType>({
    resolver: zodResolver(resendPasswordSchema),
  });

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="phone">Email:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            type="email"
            id="email"
            hasError={!!errors.email}
            autoFocus
            {...register("email")}
          />
          <Form.Subtext>
            {errors.email && <Form.Error>{errors.email.message}</Form.Error>}
          </Form.Subtext>
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
