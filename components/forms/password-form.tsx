"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { updatePassword } from "@/lib/actions/settings/update-password";
import { getErrorMessage } from "@/lib/utils";
import { updatePasswordSchema } from "@/lib/validations/settings";
import { UpdatePasswordDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

export function PasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdatePasswordDataType>({
    resolver: zodResolver(updatePasswordSchema),
  });
  const [isPending, startTransition] = useLoadingTransition();
  const flash = useFlash();

  const update = async (data: UpdatePasswordDataType) => {
    try {
      await updatePassword(data);
      flash("Thanks, your new password has been saved.");
    } catch (error) {
      flash(getErrorMessage(error));
    } finally {
      reset();
    }
  };

  return (
    <Form
      className="pl-[10px]"
      onSubmit={handleSubmit((data) => {
        startTransition(() => update(data));
      })}
    >
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="current_password">Current Password:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            id="current_password"
            type="password"
            hasError={!!errors.currentPassword}
            {...register("currentPassword")}
          />
          {errors.currentPassword && (
            <Form.Subtext className={clsx("!text-form-red")}>
              {errors.currentPassword.message}
            </Form.Subtext>
          )}
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
          <Input
            id="new_password"
            type="password"
            hasError={!!errors.newPassword}
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <Form.Subtext className={clsx("!text-form-red")}>
              {errors.newPassword.message}
            </Form.Subtext>
          )}
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="verify_password">Verify New Password:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            id="verify_password"
            type="password"
            hasError={!!errors.verifyPassword}
            {...register("verifyPassword")}
          />
          {errors.verifyPassword && (
            <Form.Subtext className={clsx("!text-form-red")}>
              {errors.verifyPassword.message}
            </Form.Subtext>
          )}
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Change" disabled={isPending} />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
