"use server";

import { applications, updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { UpdateDataType } from "@/types";
import { eq } from "drizzle-orm";

export async function postUpdate(data: UpdateDataType, from: string = "web") {
  const session = await auth();
  if (!session) throw new Error("Unauthenticated");

  const application = await db
    .select()
    .from(applications)
    .where(eq(applications.name, from));
  if (application.length === 0) throw new Error("Application not found");

  await db.insert(updates).values({
    text: data.update.trim(),
    authorId: Number(session.user.id),
    applicationId: application[0].id,
    parentId: data.parent,
  });
}
