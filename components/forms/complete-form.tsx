"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { completeSchema } from "@/lib/validations/auth";
import type { CompleteDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";
import { Switch } from "../ui/switch";

export function CompleteForm() {
  const [, startTransition] = useLoadingTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteDataType>({
    resolver: zodResolver(completeSchema),
  });

  const complete = async (data: CompleteDataType) => {
    // TODO
  };

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        startTransition(() => complete(data));
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
            <Switch condition={!!errors.phone}>
              <Form.Error>{errors.phone!.message}</Form.Error>
            </Switch>
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
