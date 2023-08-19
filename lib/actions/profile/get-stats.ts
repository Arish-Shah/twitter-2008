import { follows, updates } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { eq, sql } from "drizzle-orm";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getStats = cache(async (username: string) => {
  const user = await db.query.users.findFirst({
    columns: { id: true },
    where: (users, { sql }) =>
      sql`lower(${users.username}) = ${username.toLowerCase()}`,
  });
  if (!user) return notFound();
  const userId = user.id;

  const followingData = await db
    .select({ count: sql<number>`count(*)` })
    .from(follows)
    .where(eq(follows.followerId, userId));

  const followersData = await db
    .select({ count: sql<number>`count(*)` })
    .from(follows)
    .where(eq(follows.followingId, userId));

  const updatesData = await db
    .select({ count: sql<number>`count(*)` })
    .from(updates)
    .where(eq(updates.authorId, userId));

  return {
    following: followingData[0].count,
    followers: followersData[0].count,
    updates: updatesData[0].count,
  };
});
