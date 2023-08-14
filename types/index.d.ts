import {
  completeSchema,
  loginSchema,
  resendPasswordSchema,
  signupSchema,
} from "@/lib/validations/auth";
import { z } from "zod";

export type PageSizeType = "large" | "default" | "small";

export type LinkType = {
  label: string;
  href: string;
};

export type VCardType = {
  name: string;
  username: string;
  src: string;
};

export type CaptchaType = {
  src: string;
  answers: string[];
};

export type SignupDataType = z.infer<typeof signupSchema>;
export type LoginDataType = z.infer<typeof loginSchema>;
export type CompleteDataType = z.infer<typeof completeSchema>;
export type ResendPasswordDataType = z.infer<typeof resendPasswordSchema>;

export type CredentialsDataType =
  | ({ kind: "signup" } & SignupDataType)
  | ({ kind: "login" } & LoginDataType);
