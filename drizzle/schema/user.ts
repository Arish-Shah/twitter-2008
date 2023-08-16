import { relations } from "drizzle-orm";
import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { blocks } from "./block";
import { deviceUpdates } from "./device-update";
import { roleEnum } from "./enum";
import { favorites } from "./favorite";
import { follows } from "./follow";
import { messages } from "./message";
import { notices } from "./notice";
import { profiles } from "./profile";
import { updates } from "./update";

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  username: varchar("username", { length: 15 }).notNull().unique(),
  email: varchar("email", { length: 30 }).notNull().unique(),
  password: text("password").notNull(),
  role: roleEnum("role").default("user"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const userRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  updates: many(updates),
  sentMessages: many(messages, { relationName: "message_from" }),
  receivedMessages: many(messages, { relationName: "message_to" }),
  following: many(follows, { relationName: "follower" }),
  followedBy: many(follows, { relationName: "following" }),
  favorites: many(favorites),
  blocking: many(blocks, { relationName: "blocker" }),
  blockedBy: many(blocks, { relationName: "blocking" }),
  notice: one(notices, {
    fields: [users.id],
    references: [notices.userId],
  }),
  deviceUpdate: one(deviceUpdates, {
    fields: [users.id],
    references: [deviceUpdates.userId],
  }),
}));
