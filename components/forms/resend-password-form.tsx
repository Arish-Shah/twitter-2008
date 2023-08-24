"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { resendPasswordSchema } from "@/lib/validations/auth";
import type { ResendPasswordDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";
import { Switch } from "../ui/switch";

export function ResendPasswordForm() {
  const [, startTransition] = useLoadingTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResendPasswordDataType>({
    resolver: zodResolver(resendPasswordSchema),
  });

  const resendPassword = async (data: ResendPasswordDataType) => {
    // TODO
  };

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        startTransition(() => resendPassword(data));
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
            <Switch condition={!!errors.email}>
              <Form.Error>{errors.email!.message}</Form.Error>
            </Switch>
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
