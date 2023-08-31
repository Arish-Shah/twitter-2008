"use server";

import { profiles } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const updatePicture = async (url: string) => {
  const { user } = await auth();
  await db
    .update(profiles)
    .set({ picture: url, pictureChanged: true })
    .where(eq(profiles.userId, Number(user.id)));
  revalidatePath("/account/picture");
};

export const deletePicture = async () => {
  const { user } = await auth();
  await db
    .update(profiles)
    .set({
      picture: "/images/profile/default_profile.png",
      pictureChanged: false,
    })
    .where(eq(profiles.userId, Number(user.id)));
  revalidatePath("/account/picture");
};
