import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { profiles } from "./profile";

export const themes = pgTable("themes", {
  id: serial("id").primaryKey().notNull(),
  text: varchar("text", { length: 7 }).default("#333333").notNull(),
  background: varchar("background", { length: 7 }).default("#9ae4e8").notNull(),
  links: varchar("links", { length: 7 }).default("#0084b4").notNull(),
  sidebar: varchar("sidebar", { length: 7 }).default("#ddffcc").notNull(),
  sidebarBorder: varchar("sidebar_border", { length: 7 })
    .default("#bddcad")
    .notNull(),
  backgroundImage: text("background_image")
    .default("/images/themes/theme1.gif")
    .notNull(),
  tile: boolean("tile").default(false).notNull(),
  profileId: integer("profile_id")
    .references(() => profiles.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
