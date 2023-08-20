import { pgEnum } from "drizzle-orm/pg-core";

export const languageEnum = pgEnum("language", ["en"]);

export const replyEnumValues = ["all", "following", "none"] as const;
export const replyEnum = pgEnum("reply", replyEnumValues);

export const deviceUpdateTypeEnumValues = [
  "on",
  "off",
  "direct_messages",
] as const;
export const deviceUpdateTypeEnum = pgEnum(
  "device_update_type",
  deviceUpdateTypeEnumValues
);

export const roleEnum = pgEnum("role", ["user", "admin"]);
