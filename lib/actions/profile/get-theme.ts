"use server";

import { db } from "@/lib/db";
import type { ThemeType } from "@/types";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getTheme = cache(async (username: string): Promise<ThemeType> => {
  const data = await db.query.users.findFirst({
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
  if (!data) return notFound();
  return data.profile.theme;
});
