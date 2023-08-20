import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { deviceUpdateTypeEnum } from "./enum";
import { users } from "./user";

export const deviceUpdates = pgTable("device_updates", {
  id: serial("id").primaryKey().notNull(),
  phone: text("phone").unique().notNull(),
  type: deviceUpdateTypeEnum("type").default("off").notNull(),
  sleep: boolean("sleep").default(true).notNull(),
  from: integer("from").default(0).notNull(),
  to: integer("to").default(0).notNull(),
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
