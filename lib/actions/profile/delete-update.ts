"use server";

import { updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { cache } from "react";

export const deleteUpdate = cache(async (updateId: number) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  const userId = Number(session.user.id);

  const update = await db
    .select({ userId: updates.authorId })
    .from(updates)
    .where(eq(updates.id, updateId));
  if (update.length === 0) throw new Error("Unable to delete update.");

  if (update[0].userId !== userId)
    throw new Error("You are not authorized to delete update.");

  await db.delete(updates).where(eq(updates.id, updateId));
});
