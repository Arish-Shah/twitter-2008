"use server";

import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getTimeline = cache(async (username: string, page: number = 1) => {
  const result = await db.query.users.findFirst({
    where: (users, { sql }) =>
      sql`lower(${users.username}) = ${username.toLowerCase()}`,
    offset: (page - 1) * 20,
    columns: {
      username: true,
    },
    with: {
      updates: {
        limit: 21,
        columns: {
          id: true,
          text: true,
          createdAt: true,
        },
        with: {
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
      },
    },
  });

  if (!result?.updates) return notFound();

  const mappedUpdates = result.updates.map((update) => {
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
      createdAt: update.createdAt,
    };
  });

  return {
    updates: mappedUpdates.slice(0, 20),
    hasMore: mappedUpdates.length === 21,
  };
});
