import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./user";

export const messages = pgTable("messages", {
  id: serial("id").primaryKey().notNull(),
  text: varchar("text", { length: 140 }).notNull(),
  fromId: integer("from_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  toId: integer("to_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  toDeleted: boolean("to_deleted").default(false).notNull(),
  fromDeleted: boolean("from_deleted").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const messageRelations = relations(messages, ({ one }) => ({
  from: one(users, {
    fields: [messages.fromId],
    references: [users.id],
    relationName: "message_from",
  }),
  to: one(users, {
    fields: [messages.toId],
    references: [users.id],
    relationName: "message_to",
  }),
}));
