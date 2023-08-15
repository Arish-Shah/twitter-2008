"use server";

import { db } from "../db";

export async function getRecentUpdates(limit: number) {
  const updates = await db.query.updates.findMany({
    limit,
    columns: {
      text: true,
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
            },
          },
        },
      },
    },
    orderBy: (updates, { desc }) => [desc(updates.createdAt)],
  });

  return updates.map((update) => ({
    text: update.text,
    username: update.author.username,
    name: update.author.profile.name,
  }));
}
