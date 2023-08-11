import { signupSchema } from "@/lib/validation";
import { z } from "zod";

export type PageSizeType = "large" | "default" | "small";

export type LinkType = {
  text: string;
  href: string;
};

export type VCardType = {
  name: string;
  screen: string;
  src: string;
};

export type UsernameAvailableResponseType = {
  message: string | null;
  success: boolean;
};

export type SignupBodyType = z.infer<typeof signupSchema>;
