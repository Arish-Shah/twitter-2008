"use server";

import { cache } from "react";
import { db } from "../db";
import { notFound } from "next/navigation";

export const getUserId = cache(async (username: string) => {
  const data = await db.query.users.findFirst({
    columns: {
      id: true,
    },
    where: (users, { sql }) =>
      sql`lower(${users.username}) = ${username.toLowerCase()}`,
  });

  if (!data) return notFound();

  return data.id;
});
