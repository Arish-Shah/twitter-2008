"use server";

import { profiles, users } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { AccountSettingsDataType } from "@/types";
import { compare } from "bcrypt";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

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

  // set name to username if not defined
  if (data.name === null || data.name.trim() === "") data.name = data.username;

  await db
    .update(users)
    .set({ username: data.username!, email: data.email })
    .where(eq(users.id, userId));
  await db
    .update(profiles)
    .set({
      name: data.name?.trim(),
      web: data.web?.trim(),
      bio: data.bio?.trim(),
      location: data.location?.trim(),
      protected: data.protected,
    })
    .where(eq(profiles.userId, userId));

  revalidatePath("/account/settings");
  revalidatePath("/[username]");
  revalidatePath("/home");
};
