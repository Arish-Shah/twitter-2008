"use server";

import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getRSS = cache(async (userId: string, limit = 20) => {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, Number(userId)),
    columns: {
      username: true,
    },
    with: {
      profile: {
        columns: {
          name: true,
        },
      },
    },
  });
  if (!user) return notFound();

  const updates = await db.query.updates.findMany({
    where: (updates, { eq }) => eq(updates.authorId, Number(userId)),
    limit,
    columns: {
      id: true,
      text: true,
      createdAt: true,
    },
    orderBy: (updates, { desc }) => [desc(updates.createdAt)],
  });

  return {
    username: user.username,
    name: user.profile.name,
    updates,
  };
});
