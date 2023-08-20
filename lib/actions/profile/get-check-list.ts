"use server";

import { deviceUpdates, updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { cache } from "react";

export const getCheckList = cache(async () => {
  const { user } = await auth();
  const userId = Number(user.id);

  const updateData = await db
    .select({})
    .from(updates)
    .where(eq(updates.authorId, userId))
    .limit(1);
  const friendsData = await db.query.follows.findFirst({
    columns: { createdAt: true },
    where: (follows, { eq }) => eq(follows.followerId, userId),
  });
  const deviceUpdateData = await db
    .select({})
    .from(deviceUpdates)
    .where(eq(deviceUpdates.userId, userId));

  return [updateData.length > 0, !!friendsData, deviceUpdateData.length > 0];
});
