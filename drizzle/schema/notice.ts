import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { replyEnum } from "./enum";
import { users } from "./user";

export const notices = pgTable("notices", {
  id: serial("id").primaryKey().notNull(),
  nudge: boolean("nudge").default(false).notNull(),
  replies: replyEnum("replies").default("following").notNull(),
  newFollower: boolean("new_follower").default(true).notNull(),
  directText: boolean("direct_text").default(true).notNull(),
  newsletter: boolean("newsletter").default(false).notNull(),
  userId: integer("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
