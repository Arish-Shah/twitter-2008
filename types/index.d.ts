import { themes } from "@/drizzle/schema";
import {
  completeSchema,
  loginSchema,
  resendPasswordSchema,
  signupSchema,
} from "@/lib/validations/auth";
import {
  deviceSetupSchema,
  deviceUpdateSleepSchema,
  deviceUpdateTypeSchema,
  followDeviceUpdatesSchema,
} from "@/lib/validations/device";
import {
  inviteEmailSchema,
  inviteSchema,
  searchSchema,
} from "@/lib/validations/invite";
import { messageSchema } from "@/lib/validations/message";
import { noticeSchema } from "@/lib/validations/notice";
import { updateSchema } from "@/lib/validations/update";
import { InferModel } from "drizzle-orm";
import { z } from "zod";

export type PageSizeType = "large" | "default" | "small";

export type LinkType = {
  label: string;
  href: string;
  disablePrefetch?: boolean;
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

export type PaginationType = {
  page: number;
  limit: number;
};

export type SignupDataType = z.infer<typeof signupSchema>;
export type LoginDataType = z.infer<typeof loginSchema>;
export type CompleteDataType = z.infer<typeof completeSchema>;
export type ResendPasswordDataType = z.infer<typeof resendPasswordSchema>;
export type UpdateDataType = z.infer<typeof updateSchema>;
export type DeviceSetupDataType = z.infer<typeof deviceSetupSchema>;
export type DeviceUpdateTypeDataType = z.infer<typeof deviceUpdateTypeSchema>;
export type DeviceUpdateSleepDataType = z.infer<typeof deviceUpdateSleepSchema>;
export type NoticeDataType = z.infer<typeof noticeSchema>;
export type FollowDeviceUpdatesDataType = z.infer<
  typeof followDeviceUpdatesSchema
>;
export type InviteDataType = z.infer<typeof inviteSchema>;
export type InviteEmailDataType = z.infer<typeof inviteEmailSchema>;
export type SearchDataType = z.infer<typeof searchSchema>;
export type MessageDataType = z.infer<typeof messageSchema>;

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
