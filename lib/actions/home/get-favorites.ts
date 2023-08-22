import { updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { inArray } from "drizzle-orm";
import { cache } from "react";
import { getUpdates } from "../get-updates";
import { getUserId } from "../get-user-id";

export const getFavorites = cache(
  async (username: string, page = 1, limit = 20) => {
    const userId = await getUserId(username);
    const session = await auth();

    const loggedInUserId = Number(session?.user.id) || 0;

    const favoriteUpdates = await db.query.favorites.findMany({
      columns: { updateId: true },
      limit: limit + 1,
      offset: limit * (page - 1),
      where: (favorites, { eq }) => eq(favorites.userId, userId),
      orderBy: (favorites, { desc }) => [desc(favorites.createdAt)],
    });
    const favoriteIds = favoriteUpdates.map((update) => update.updateId);

    if (favoriteIds.length > 0) {
      const feed = await getUpdates(
        loggedInUserId,
        { page: 1, limit },
        inArray(updates.id, favoriteIds)
      );

      return {
        updates: feed.updates,
        hasMore: favoriteIds.length > limit,
      };
    }

    return {
      updates: [],
      hasMore: false,
    };
  }
);
