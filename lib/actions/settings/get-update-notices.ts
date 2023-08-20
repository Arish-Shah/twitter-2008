"use server";

import { notices } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NoticeDataType } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getNotices = cache(async () => {
  const { user } = await auth();
  const userId = Number(user.id);

  const data = await db
    .select({
      id: notices.id,
      nudge: notices.nudge,
      replies: notices.replies,
      newFollower: notices.newFollower,
      directText: notices.directText,
      newsletter: notices.newsletter,
    })
    .from(notices)
    .where(eq(notices.userId, userId));
  if (data.length === 0) return redirect("/login");

  return data[0];
});

export const updateNotices = async (noticeId: number, data: NoticeDataType) => {
  await db
    .update(notices)
    .set({ ...data })
    .where(eq(notices.id, noticeId));

  revalidatePath("/account/notifications");
};
