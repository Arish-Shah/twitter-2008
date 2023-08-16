import { pgEnum } from "drizzle-orm/pg-core";

export const languageEnum = pgEnum("language", ["en"]);

export const replyEnum = pgEnum("reply", ["all", "following", "none"]);

export const deviceUpdateEnum = pgEnum("device_update", [
  "on",
  "off",
  "direct_messages",
]);

export const roleEnum = pgEnum("role", ["user", "admin"]);
