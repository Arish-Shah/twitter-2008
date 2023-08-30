"use server";

import { users } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq, sql, type SQL } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";

export const getProfile = cache(async (username?: string) => {
  let where: SQL<unknown>;

  if (username) {
    where = sql`lower(${users.username}) = ${username.toLowerCase()}`;
  } else {
    const session = await auth();
    if (!session?.user) return redirect("/login");
    where = eq(users.id, Number(session.user.id));
  }

  const data = await db.query.users.findFirst({
    columns: {
      username: true,
      email: true,
    },
    where,
    with: {
      profile: {
        columns: {
          name: true,
          web: true,
          bio: true,
          location: true,
          protected: true,
          picture: true,
          pictureChanged: true,
          userId: true,
        },
      },
    },
  });
  if (!data) return notFound();

  return {
    username: data.username,
    email: data.email,
    ...data.profile,
  };
});
