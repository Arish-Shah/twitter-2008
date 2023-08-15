"use server";

import { db } from "@/lib/db";
import { cache } from "react";

export const getEmailAvailable = cache(async (email: string) => {
  const exists = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });
  if (exists) return { success: false };
  return { success: true };
});
