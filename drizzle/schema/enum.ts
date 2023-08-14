import { pgEnum } from "drizzle-orm/pg-core";

export const languageEnum = pgEnum("language", ["en"]);

export const replyEnum = pgEnum("reply", ["all", "following", "none"]);

export const deviceUpdateEnum = pgEnum("device_update", [
  "on",
  "off",
  "direct_messages",
]);

export const checkListEnum = pgEnum("check_list", [
  "0",
  "1",
  "2",
  "3",
  "1_2",
  "2_3",
  "1_3",
  "1_2_3",
]);

export const roleEnum = pgEnum("role", ["user", "admin"]);
