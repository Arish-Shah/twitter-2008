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
import { themes } from ".";
import { checkListEnum, languageEnum } from "./enum";
import { users } from "./user";

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 20 }),
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
  checkList: checkListEnum("check_list").default("0").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const profileRelations = relations(profiles, ({ one }) => ({
  theme: one(themes, {
    fields: [profiles.id],
    references: [themes.profileId],
  }),
}));
