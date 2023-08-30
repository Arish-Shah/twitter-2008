"use server";

import { profiles, users } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { AccountSettingsDataType } from "@/types";
import { compare } from "bcrypt";
import { eq, sql, type SQL } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";

export const getProfile = cache(async (username?: string) => {
  let where: SQL<unknown>;

  if (username) {
    where = sql`lower(${users.username}) = ${username.toLowerCase()}`;
  } else {
    const session = await auth();
    if (!session?.user) return redirect("/login");
    where = eq(users.id, Number(session.user.id));
  }

  const data = await db.query.users.findFirst({
    columns: {
      id: true,
      username: true,
      email: true,
    },
    where,
    with: {
      profile: {
        columns: {
          name: true,
          web: true,
          bio: true,
          location: true,
          protected: true,
          picture: true,
          pictureChanged: true,
          userId: true,
        },
      },
    },
  });
  if (!data) return notFound();

  return {
    name: data.profile.name,
    username: data.username,
    email: data.email,
    web: data.profile.web,
    bio: data.profile.bio,
    location: data.profile.location,
    protected: data.profile.protected,
    picture: data.profile.picture,
    pictureChanged: data.profile.pictureChanged,
    userId: data.id,
  };
});

export const updateProfile = async (data: AccountSettingsDataType) => {
  const { user } = await auth();
  const userId = Number(user.id);

  const result = await db
    .select({
      username: users.username,
      email: users.email,
      password: users.password,
    })
    .from(users)
    .where(eq(users.id, userId));

  if (result.length === 0) return notFound();

  if (result[0].username !== data.username || result[0].email !== data.email) {
    const valid = await compare(data.password || "", result[0].password);
    if (!valid) throw new Error("Incorrect password.");
  }

  await db
    .update(users)
    .set({ username: data.username!, email: data.email })
    .where(eq(users.id, userId));
  await db
    .update(profiles)
    .set({
      name: data.name,
      web: data.web,
      bio: data.bio,
      location: data.location,
      protected: data.protected,
    })
    .where(eq(profiles.userId, userId));

  revalidatePath("/account/settings");
  revalidatePath("/[username]");
  revalidatePath("/home");
};
