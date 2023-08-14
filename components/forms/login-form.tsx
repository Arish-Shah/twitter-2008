"use client";

import { useFlash } from "@/context/flash-context";
import { loginSchema } from "@/lib/validations/auth";
import { LoginDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input, Submit } from "../ui/input";

interface LoginFormProps {}

export function LoginForm({}: LoginFormProps) {
  const { flash } = useFlash();

  const { handleSubmit, register } = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        const response = await signIn("credentials", {
          redirect: false,
          kind: "login",
          ...data,
        });
        if (response?.error)
          return flash("Wrong Username/Email and password combination.", true);
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
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe" className="ml-[3px]">
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
