"use server";

import { follows, updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { and, eq, ilike, inArray, type SQL } from "drizzle-orm";
import { cache } from "react";
import { getUpdates } from "../get-updates";
import { getNotices } from "../settings/get-update-notices";

export const getReplies = cache(async (page = 1, limit = 20) => {
  const { user } = await auth();
  const userId = Number(user.id);

  const notices = await getNotices();
  let where: SQL<unknown> | undefined;

  switch (notices.replies) {
    case "all":
      where = ilike(updates.text, `@${user.username}%`);
      break;
    case "none":
      where = and(
        eq(updates.authorId, userId),
        ilike(updates.text, `@${user.username}%`)
      );
      break;
    case "following":
      const following = await db
        .select({ id: follows.followingId })
        .from(follows)
        .where(eq(follows.followerId, userId));

      const followingIds = following.map((user) => user.id);
      followingIds.push(userId);
      where = and(
        inArray(updates.authorId, followingIds),
        ilike(updates.text, `@${user.username}%`)
      );
      break;
  }

  return getUpdates(userId, { page, limit }, where);
});
