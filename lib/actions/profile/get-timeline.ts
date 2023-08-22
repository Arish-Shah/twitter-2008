"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getTimeline = cache(
  async (username: string, page = 1, limit = 20) => {
    const session = await auth();

    const userId = Number(session?.user.id) || 0;

    const user = await db.query.users.findFirst({
      where: (users, { sql }) =>
        sql`lower(${users.username}) = ${username.toLowerCase()}`,
      columns: {
        id: true,
      },
    });
    if (!user) return notFound();

    const data = await db.query.updates.findMany({
      where: (updates, { eq }) => eq(updates.authorId, user.id),
      limit: limit + 1,
      offset: limit * (page - 1),
      columns: {
        id: true,
        text: true,
        createdAt: true,
      },
      with: {
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

    const updates = data.map((update) => {
      const parent = update.parent
        ? {
            id: update.parent.id,
            username: update.parent.author.username,
          }
        : null;
      return {
        id: update.id,
        username,
        text: update.text,
        application: update.application,
        parent,
        favorited: update.favoritedBy.length !== 0,
        createdAt: update.createdAt,
      };
    });

    return {
      userId: user.id,
      updates: updates.slice(0, limit),
      hasMore: updates.length > limit,
    };
  }
);
