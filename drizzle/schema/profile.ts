import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { languageEnum } from "./enum";
import { themes } from "./theme";
import { users } from "./user";

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 20 }).default("").notNull(),
  web: text("web"),
  bio: varchar("bio", { length: 160 }),
  location: varchar("location", { length: 30 }),
  language: languageEnum("language").default("en").notNull(),
  protected: boolean("protected").default(false).notNull(),
  picture: text("picture")
    .default("/images/profile/default_profile.png")
    .notNull(),
  pictureChanged: boolean("picture_changed").default(false).notNull(),
  userId: integer("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const profileRelations = relations(profiles, ({ one }) => ({
  theme: one(themes, {
    fields: [profiles.id],
    references: [themes.profileId],
  }),
}));
