"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getRecentUpdate = cache(async () => {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  const update = await db.query.updates.findFirst({
    columns: {
      id: true,
      text: true,
      createdAt: true,
    },
    where: (updates, { eq }) => eq(updates.authorId, Number(session.user.id)),
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
