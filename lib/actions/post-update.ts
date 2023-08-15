"use server";

import { updates } from "@/drizzle/schema";
import { UpdateDataType } from "@/types";
import { auth } from "../auth";
import { db } from "../db";

export async function postUpdate(data: UpdateDataType) {
  const session = await auth();
  if (!session) throw new Error("Unauthenticated");

  await db.insert(updates).values({
    text: data.update,
    authorId: Number(session.user.id),
    parentId: data.parent,
  });
}
