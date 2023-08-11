import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { updates } from "./update";
import { users } from "./user";

export const favorites = pgTable(
  "favorites",
  {
    updateId: integer("update_id")
      .references(() => updates.id, { onDelete: "cascade" })
      .notNull(),
    userId: integer("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => ({
    pk: primaryKey(t.updateId, t.userId),
  })
);

export const favoriteRelations = relations(favorites, ({ many, one }) => ({
  update: one(updates, {
    fields: [favorites.updateId],
    references: [updates.id],
  }),
  user: one(users, {
    fields: [favorites.userId],
    references: [users.id],
  }),
}));
