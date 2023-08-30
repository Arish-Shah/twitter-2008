"use server";

import { follows, updates } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { and, eq, ilike, inArray, type SQL } from "drizzle-orm";
import { cache } from "react";
import { getUpdates } from "../get-updates";
import { getProfile } from "../profile/get-profile";
import { getNotices } from "../settings/get-update-notices";

export const getReplies = cache(async (page = 1, limit = 20) => {
  const profile = await getProfile();

  const notices = await getNotices();
  let where: SQL<unknown> | undefined;

  switch (notices.replies) {
    case "all":
      where = ilike(updates.text, `@${profile.username}%`);
      break;
    case "none":
      where = and(
        eq(updates.authorId, profile.userId),
        ilike(updates.text, `@${profile.username}%`)
      );
      break;
    case "following":
      const following = await db
        .select({ id: follows.followingId })
        .from(follows)
        .where(eq(follows.followerId, profile.userId));

      const followingIds = following.map((user) => user.id);
      followingIds.push(profile.userId);
      where = and(
        inArray(updates.authorId, followingIds),
        ilike(updates.text, `@${profile.username}%`)
      );
      break;
  }

  return getUpdates(profile.userId, { page, limit }, where);
});
