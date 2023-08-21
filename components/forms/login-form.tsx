"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { loginSchema } from "@/lib/validations/auth";
import type { LoginDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

export function LoginForm() {
  const router = useRouter();
  const flash = useFlash();
  const [, startTransition] = useLoadingTransition();
  const { handleSubmit, register } = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
  });

  const login = async (data: LoginDataType) => {
    const response = await signIn("credentials", {
      redirect: false,
      kind: "login",
      ...data,
    });

    if (response?.error)
      return flash("Wrong Username/Email and password combination.");
    router.push("/home");
  };

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        startTransition(() => login(data));
      })}
    >
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="usernameOrEmail">Username</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input
            type="text"
            id="usernameOrEmail"
            {...register("usernameOrEmail")}
            autoFocus
          />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="password">Password</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input type="password" id="password" {...register("password")} />
          <Form.Subtext>
            <Link href="/account/resend_password">Forgot?</Link>
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <input type="checkbox" id="rememberMe" {...register("remember")} />
          <label htmlFor="remember" className="ml-[3px]">
            Remember me
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Sign In" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
