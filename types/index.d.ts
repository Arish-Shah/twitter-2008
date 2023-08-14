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
  screen: string;
  src: string;
};

export type CaptchaType = {
  src: string;
  answers: string[];
};

export type SignupData = z.infer<typeof signupSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type CompleteData = z.infer<typeof completeSchema>;
export type ResendPasswordData = z.infer<typeof resendPasswordSchema>;
