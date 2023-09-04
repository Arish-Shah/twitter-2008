"use server";

import { profiles, updates, users } from "@/drizzle/schema";
import { desc, eq, ilike, or, placeholder, sql } from "drizzle-orm";
import { cache } from "react";
import { auth } from "../auth";
import { db } from "../db";

export const getSearchResults = cache(
  async (query: string, page = 1, limit = 20) => {
    const { user } = await auth();
    const loggedInUserId = Number(user.id);

    const where = or(
      ilike(profiles.name, `%${query}%`),
      ilike(profiles.location, `%${query}%`)
    );

    const countData = await db
      .select({ count: sql<number>`count(*)` })
      .from(profiles)
      .where(where);

    const data = await db
      .select({
        username: users.username,
        name: profiles.name,
        location: profiles.location,
        web: profiles.web,
        bio: profiles.bio,
        picture: profiles.picture,
        userId: profiles.userId,
      })
      .from(profiles)
      .where(where)
      .innerJoin(users, eq(profiles.userId, users.id))
      .limit(limit + 1)
      .offset(limit * (page - 1));

    const preparedUpdates = db
      .select({
        text: updates.text,
        createdAt: updates.createdAt,
      })
      .from(updates)
      .where(eq(updates.authorId, placeholder("authorId")))
      .orderBy(desc(updates.createdAt));

    const preparedFollowing = db.query.follows
      .findFirst({
        columns: {
          deviceUpdates: true,
        },
        where: (follows, { eq, and }) =>
          and(
            eq(follows.followerId, loggedInUserId),
            eq(follows.followingId, placeholder("followingId"))
          ),
      })
      .prepare("following");

    const results = await Promise.all(
      data.map(async (row) => {
        const update = await preparedUpdates.execute({
          authorId: row.userId,
        });

        const following = await preparedFollowing.execute({
          followingId: row.userId,
        });

        return {
          ...row,
          recentUpdate: update?.[0] ?? null,
          following: !!following,
        };
      })
    );

    return {
      count: countData[0].count,
      results,
    };
  }
);
