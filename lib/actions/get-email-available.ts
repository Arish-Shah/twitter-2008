"use server";

import { users } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { eq, sql } from "drizzle-orm";
import { cache } from "react";
import { auth } from "../auth";

export const getEmailAvailable = cache(async (email: string) => {
  const data = await db
    .select({ email: users.email })
    .from(users)
    .where(sql`lower(${users.email}) = ${email.toLowerCase()}`);

  if (data.length > 0) {
    // check if the email belongs to the currently logged in user's
    const session = await auth();
    if (session?.user) {
      const data = await db
        .select({ email: users.email })
        .from(users)
        .where(eq(users.id, Number(session.user.id)));
      if (data.length === 0) return { success: true };
      if (email === data[0].email) return { success: true };
    }
    return { success: false };
  }
  return { success: true };
});
