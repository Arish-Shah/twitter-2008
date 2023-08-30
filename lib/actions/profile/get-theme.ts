"use server";

import { users } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import type { ThemeType } from "@/types";
import { eq, sql, type SQL } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";

export const getTheme = cache(async (username?: string): Promise<ThemeType> => {
  let where: SQL<unknown>;

  if (username) {
    where = sql`lower(${users.username}) = ${username.toLowerCase()}`;
  } else {
    const session = await auth();
    if (!session?.user) return redirect("/login");
    where = eq(users.id, Number(session.user.id));
  }

  const data = await db.query.users.findFirst({
    columns: {},
    where,
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
