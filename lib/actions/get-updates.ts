"use server";

import type { PaginationType } from "@/types";
import { type SQL } from "drizzle-orm";
import { cache } from "react";
import { db } from "../db";

export const getUpdates = cache(
  async (
    userId: number,
    { page, limit }: PaginationType,
    where?: SQL<unknown>
  ) => {
    const data = await db.query.updates.findMany({
      where,
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
        favorited: update.favoritedBy.length === 1,
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
  }
);
