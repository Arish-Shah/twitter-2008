import { relations } from "drizzle-orm";
import {
  AnyPgColumn,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { favorites } from "./favorite";
import { users } from "./user";

export const updates = pgTable("updates", {
  id: serial("id").primaryKey().notNull(),
  text: varchar("text", { length: 140 }).notNull(),
  authorId: integer("author_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  parentId: integer("parent_id").references((): AnyPgColumn => updates.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const updateRelations = relations(updates, ({ one, many }) => ({
  author: one(users, {
    fields: [updates.authorId],
    references: [users.id],
  }),
  replies: many(updates),
  parent: one(updates, {
    fields: [updates.parentId],
    references: [updates.id],
  }),
  favoritedBy: many(favorites),
}));
