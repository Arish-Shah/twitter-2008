"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { cache } from "react";
import { getUserId } from "../get-user-id";
import { follows } from "@/drizzle/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getFollow = cache(async (username: string) => {
  const session = await auth();
  if (!session?.user) return null;
  const followerId = Number(session.user.id);

  const followingId = await getUserId(username);

  const data = await db
    .select({ deviceUpdates: follows.deviceUpdates })
    .from(follows)
    .where(
      and(
        eq(follows.followerId, followerId),
        eq(follows.followingId, followingId)
      )
    );

  if (data.length === 1) return data[0];
  return null;
});

export const postFollow = async (username: string) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  const followerId = Number(session.user.id);

  const followingId = await getUserId(username);

  await db.insert(follows).values({ followerId, followingId });

  revalidatePath("/[username]");
  revalidatePath("/home");
};

export const postUnfollow = async (username: string) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  const followerId = Number(session.user.id);

  const followingId = await getUserId(username);

  await db
    .delete(follows)
    .where(
      and(
        eq(follows.followerId, followerId),
        eq(follows.followingId, followingId)
      )
    );

  revalidatePath("/[username]");
  revalidatePath("/home");
};
