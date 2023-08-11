import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";

export const blocks = pgTable(
  "blocks",
  {
    blockerId: integer("blocker_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    blockingId: integer("blocking_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => ({
    pk: primaryKey(t.blockerId, t.blockingId),
  })
);

export const blockRelations = relations(blocks, ({ one }) => ({
  blocker: one(users, {
    fields: [blocks.blockerId],
    references: [users.id],
    relationName: "blocker",
  }),
  blocking: one(users, {
    fields: [blocks.blockingId],
    references: [users.id],
    relationName: "blocking",
  }),
}));
