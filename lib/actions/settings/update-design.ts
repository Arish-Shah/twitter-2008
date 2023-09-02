"use server";

import { profiles, themes } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { DesignDataType } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const updateDesign = async (design: DesignDataType) => {
  const { user } = await auth();
  const profile = await db
    .select({ profileId: profiles.id })
    .from(profiles)
    .where(eq(profiles.userId, Number(user.id)));
  if (profile.length !== 1) return notFound();

  await db
    .update(themes)
    .set(design)
    .where(eq(themes.profileId, profile[0].profileId));
  revalidatePath("/account/profile_settings");
};
