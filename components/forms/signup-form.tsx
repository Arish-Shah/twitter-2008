"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { useNewAccountStore } from "@/hooks/use-new-account-store";
import { signupSchema } from "@/lib/validations/auth";
import type { CaptchaType, SignupDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Captcha } from "../captcha";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";
import { Switch } from "../ui/switch";
import { UsernameInput } from "../username-input";

interface SignupFormProps {
  captcha: CaptchaType;
}

export function SignupForm({ captcha }: SignupFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const setNewAccount = useNewAccountStore((state) => state.setNewAccount);
  const [, startTransition] = useLoadingTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignupDataType>({
    resolver: zodResolver(signupSchema),
  });

  const signup = async (data: SignupDataType) => {
    await signIn("credentials", { redirect: false, kind: "signup", ...data });
    setNewAccount(true);
    router.push("/invitations");
  };

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        setSubmitting(true);
        startTransition(() => signup(data));
      })}
    >
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="username">Username:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <UsernameInput
            id="username"
            hasError={!!errors.username}
            defaultMessage="Username can only contain letters, numbers and '_'"
            {...register("username")}
            autoFocus
          />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="password">Password:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            type="password"
            id="password"
            maxLength={30}
            hasError={!!errors.password}
            {...register("password")}
          />
          <Form.Subtext>
            <span>6 characters or more (be tricky!)</span>
            <Switch condition={!!errors.password}>
              <Form.Error>{errors.password?.message}</Form.Error>
            </Switch>
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="email">Email Address:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            type="email"
            id="email"
            maxLength={30}
            hasError={!!errors.email}
            {...register("email")}
          />
          <Form.Subtext>
            <span>In case you forget something</span>
            <Switch condition={!!errors.email}>
              <Form.Error>{errors.email?.message}</Form.Error>
            </Switch>
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="humanness">Humanness:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Captcha
            value={captcha}
            onChange={(value) => setValue("humanness", value)}
          />
          <Form.Subtext>
            <Switch condition={!!errors.humanness}>
              <span className="text-form-red">{errors.humanness?.message}</span>
            </Switch>
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <label htmlFor="newsletter" className="ml-[3px]">
            <input
              type="checkbox"
              id="newsletter"
              className="mr-[3px]"
              {...register("newsletter")}
            />
            I want the inside scoop—please send me email updates!
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Form.Subtext>
            By clicking on &apos;I accept&apos; below, you confirm that you are
            over 13 years of age and accept the{" "}
            <Link href="/tos">Terms of Service</Link>.
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="I accept. Create my account." disabled={submitting} />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
