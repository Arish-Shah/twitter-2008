import { follows, updates, users } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq, sql, type SQL } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";

export const getStats = cache(async (username?: string) => {
  let where: SQL<unknown>;

  if (username) {
    where = sql`lower(${users.username}) = ${username.toLowerCase()}`;
  } else {
    const session = await auth();
    if (!session?.user) return redirect("/login");
    where = eq(users.id, Number(session.user.id));
  }

  const user = await db.query.users.findFirst({
    columns: { id: true },
    where,
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
