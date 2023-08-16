import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { updates } from "./update";

export const applications = pgTable("applications", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull().unique(),
  url: text("url"),
});

export const applicationRelations = relations(applications, ({ many }) => ({
  updates: many(updates),
}));
