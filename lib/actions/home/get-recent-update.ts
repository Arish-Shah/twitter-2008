"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { cache } from "react";

export const getRecentUpdate = cache(async () => {
  const {
    user: { id },
  } = await auth();
  const userId = Number(id);

  const update = await db.query.updates.findFirst({
    columns: {
      id: true,
      text: true,
      createdAt: true,
    },
    where: (updates, { eq }) => eq(updates.authorId, userId),
    with: {
      author: {
        columns: {
          username: true,
        },
      },
    },
    orderBy: (updates, { desc }) => [desc(updates.createdAt)],
  });

  return update;
});
