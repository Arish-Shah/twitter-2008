import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { deviceUpdateEnum } from "./enum";
import { users } from "./user";

export const deviceUpdates = pgTable("device_updates", {
  id: serial("id").primaryKey().notNull(),
  phone: integer("phone"),
  type: deviceUpdateEnum("type").default("on").notNull(),
  custom: boolean("custom").default(true).notNull(),
  from: integer("from").default(20).notNull(),
  to: integer("to").default(4).notNull(),
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
