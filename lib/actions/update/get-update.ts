"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getUpdate = cache(async (updateId: string) => {
  const session = await auth();
  const userId = Number(session?.user.id) || 0;

  const update = await db.query.updates.findFirst({
    where: (updates, { eq }) => eq(updates.id, Number(updateId)),
    columns: {
      id: true,
      text: true,
      createdAt: true,
    },
    with: {
      favoritedBy: {
        where: (favorites, { eq }) => eq(favorites.userId, userId),
      },
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
    id: update.id,
    username: update.author.username,
    name: update.author.profile.name,
    picture: update.author.profile.picture,
    text: update.text,
    application: update.application,
    favorited: update.favoritedBy.length !== 0,
    createdAt: update.createdAt,
    parent,
  };
});

export const getUpdateMetadata = cache(async (id: string) => {
  const update = await db.query.updates.findFirst({
    where: (updates, { eq }) => eq(updates.id, Number(id)),
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
