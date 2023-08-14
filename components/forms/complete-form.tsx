"use client";

import { completeSchema } from "@/lib/validations/auth";
import type { CompleteDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

export function CompleteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteDataType>({
    resolver: zodResolver(completeSchema),
  });

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="phone">Phone number:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            type="text"
            id="phone"
            hasError={!!errors.phone}
            autoFocus
            {...register("phone")}
          />
          <Form.Subtext>
            {errors.phone && <Form.Error>{errors.phone.message}</Form.Error>}
          </Form.Subtext>
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
