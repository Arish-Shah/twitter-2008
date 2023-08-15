"use server";

import { ThemeType } from "@/types";
import { cache } from "react";
import { db } from "../db";

export const getTheme = cache(async (username: string): Promise<ThemeType> => {
  const result = await db.query.users.findFirst({
    columns: {},
    where: (users, { eq }) => eq(users.username, username),
    with: {
      profile: {
        columns: {},
        with: {
          theme: {
            columns: {
              text: true,
              background: true,
              links: true,
              sidebar: true,
              sidebarBorder: true,
              backgroundImage: true,
              tile: true,
            },
          },
        },
      },
    },
  });
  if (!result) throw new Error("Theme not found");
  return result.profile.theme;
});
