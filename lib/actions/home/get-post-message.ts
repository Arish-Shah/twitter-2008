"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { cache } from "react";

export const getReceipents = cache(async () => {
  const { user } = await auth();
  const userId = Number(user.id);

  const followers = await db.query.follows.findMany({
    columns: {},
    where: (follows, { eq }) => eq(follows.followingId, userId),
    with: {
      follower: {
        columns: {
          username: true,
        },
      },
    },
  });

  return followers.map((user) => user.follower.username);
});
