import { follows, updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq, inArray } from "drizzle-orm";
import { cache } from "react";
import { getUpdates } from "../get-updates";

export const getFeed = cache(async (page = 1, limit = 20) => {
  const { user } = await auth();
  const userId = Number(user.id);

  const following = await db
    .select({ id: follows.followingId })
    .from(follows)
    .where(eq(follows.followerId, userId));

  const followingIds = following.map((user) => user.id);
  followingIds.push(userId);

  const where = inArray(updates.authorId, followingIds);

  return getUpdates(userId, { page, limit }, where);
});
