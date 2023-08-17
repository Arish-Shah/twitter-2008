"use server";

import { favorites, updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { cache } from "react";

export const postFavorite = cache(async (updateId: number) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  const userId = Number(session.user.id);

  const update = await db
    .select({})
    .from(updates)
    .where(eq(updates.id, updateId));
  if (update.length === 0) throw new Error("Unable to favorite update.");

  const favorited = await db
    .select()
    .from(favorites)
    .where(and(eq(favorites.updateId, updateId), eq(favorites.userId, userId)));

  if (favorited.length === 0) {
    await db.insert(favorites).values({ userId, updateId });
  } else {
    await db
      .delete(favorites)
      .where(
        and(eq(favorites.updateId, updateId), eq(favorites.userId, userId))
      );
  }
});
