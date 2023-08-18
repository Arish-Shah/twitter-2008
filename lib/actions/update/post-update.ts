"use server";

import { applications, messages, updates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { UpdateDataType } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postUpdate = async (
  data: UpdateDataType,
  from: string = "web"
) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  const authorId = Number(session.user.id);
  const text = data.text.trim();

  const application = await db
    .select()
    .from(applications)
    .where(eq(applications.name, from));
  if (application.length === 0) throw new Error("Application not found");
  const applicationId = application[0].id;

  if (data.kind === "update") {
    await db.insert(updates).values({ text, authorId, applicationId });
  } else if (data.kind === "reply") {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.username, data.to!),
      with: {
        updates: {
          limit: 1,
          columns: { id: true },
          orderBy: (updates, { desc }) => [desc(updates.createdAt)],
        },
      },
    });
    let parentId =
      user && user.updates.length === 1 ? user.updates[0].id : null;

    await db
      .insert(updates)
      .values({ text, authorId, applicationId, parentId });
  } else {
    // TODO: also check if the user follows me
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.username, data.to!),
    });

    if (user) {
      await db.insert(messages).values({
        fromId: authorId,
        toId: user.id,
        text: text.split(" ").slice(1).join(" "), // remove the d/dm as first word
      });
    }
  }

  revalidatePath("/home");
  revalidatePath("/[username]");
};
