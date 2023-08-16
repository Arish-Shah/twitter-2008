"use server";

import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getMastHead = cache(async (username: string) => {
  const data = await db.query.users.findFirst({
    columns: {},
    where: (users, { sql }) =>
      sql`lower(${users.username}) = ${username.toLowerCase()}`,
    with: {
      profile: {
        columns: {
          picture: true,
        },
      },
    },
  });
  if (!data) return notFound();

  return {
    username,
    picture: data?.profile.picture,
  };
});
