import { themes } from "@/drizzle/schema";
import { getTimeline } from "@/lib/actions/profile/get-timeline";
import {
  completeSchema,
  loginSchema,
  resendPasswordSchema,
  signupSchema,
} from "@/lib/validations/auth";
import { updateSchema } from "@/lib/validations/update";
import { InferModel } from "drizzle-orm";
import { z } from "zod";

export type PageSizeType = "large" | "default" | "small";

export type LinkType = {
  label: string;
  href: string;
};

export type VCardType = {
  name: string;
  username: string;
  picture: string;
};

export type CaptchaType = {
  src: string;
  answers: string[];
  index: number;
};

export type SignupDataType = z.infer<typeof signupSchema>;
export type LoginDataType = z.infer<typeof loginSchema>;
export type CompleteDataType = z.infer<typeof completeSchema>;
export type ResendPasswordDataType = z.infer<typeof resendPasswordSchema>;
export type UpdateDataType = z.infer<typeof updateSchema>;

export type CredentialsDataType =
  | ({ kind: "signup" } & SignupDataType)
  | ({ kind: "login" } & LoginDataType);

export type ThemeType = Pick<
  InferModel<typeof themes, "select">,
  | "background"
  | "backgroundImage"
  | "sidebar"
  | "sidebarBorder"
  | "tile"
  | "links"
  | "text"
>;

export type ProfileUpdateType = Awaited<
  ReturnType<typeof getTimeline>
>["updates"][number];
