import { follows, updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq, inArray } from "drizzle-orm";
import { cache } from "react";

export const getFeed = cache(async (page = 1, limit = 20) => {
  const {
    user: { id },
  } = await auth();
  const userId = Number(id);

  const following = await db
    .select({ id: follows.followingId })
    .from(follows)
    .where(eq(follows.followerId, userId));

  const followingIds = following.map((user) => user.id);
  followingIds.push(userId);

  const data = await db.query.updates.findMany({
    where: inArray(updates.authorId, followingIds),
    limit: limit + 1,
    offset: limit * (page - 1),
    columns: {
      id: true,
      text: true,
      createdAt: true,
    },
    with: {
      author: {
        columns: {
          username: true,
        },
        with: {
          profile: {
            columns: {
              name: true,
              picture: true,
            },
          },
        },
      },
      favoritedBy: {
        where: (favorites, { eq }) => eq(favorites.userId, userId),
      },
      application: {
        columns: {
          id: false,
        },
      },
      parent: {
        columns: {
          id: true,
        },
        with: {
          author: {
            columns: {
              username: true,
            },
          },
        },
      },
    },
    orderBy: (updates, { desc }) => [desc(updates.createdAt)],
  });

  const mappedUpdates = data.map((update) => {
    const parent = update.parent
      ? {
          id: update.parent.id,
          username: update.parent.author.username,
        }
      : null;

    return {
      id: update.id,
      text: update.text,
      username: update.author.username,
      favorited: update.favoritedBy.length !== 0,
      createdAt: update.createdAt,
      application: update.application,
      author: {
        name: update.author.profile.name,
        picture: update.author.profile.picture,
      },
      parent,
    };
  });

  return {
    updates: mappedUpdates.slice(0, limit),
    hasMore: mappedUpdates.length > limit,
  };
});
