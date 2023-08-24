"use server";

import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { cache } from "react";
import { auth } from "../auth";
import { db } from "../db";

export const getEmail = cache(async () => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  const userId = Number(session.user.id);

  const data = await db
    .select({ email: users.email })
    .from(users)
    .where(eq(users.id, userId));
  if (data.length === 0) throw new Error("User not found");

  return data[0].email;
});
