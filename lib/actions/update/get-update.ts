import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getUpdate = cache(async (id: string) => {
  const update = await db.query.updates.findFirst({
    where: (updates, { eq }) => eq(updates.id, +id),
    columns: {
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
  });
  if (!update) return notFound();

  const parent = update.parent
    ? {
        id: update.parent.id,
        username: update.parent.author.username,
      }
    : null;

  return {
    ...update,
    author: {
      username: update.author.username,
      name: update.author.profile.name,
      picture: update.author.profile.picture,
    },
    parent,
  };
});

export const getUpdateMetadata = cache(async (id: string) => {
  const update = await db.query.updates.findFirst({
    where: (updates, { eq }) => eq(updates.id, +id),
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
  });
  if (!update) return notFound();

  return {
    text: update.text,
    username: update.author.username,
    name: update.author.profile.name,
  };
});
