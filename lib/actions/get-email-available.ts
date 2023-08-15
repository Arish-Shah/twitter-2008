"use server";

import { users } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { sql } from "drizzle-orm";
import { cache } from "react";

export const getEmailAvailable = cache(async (email: string) => {
  const result = await db
    .select()
    .from(users)
    .where(sql`lower(${users.email}) = ${email.toLowerCase()}`);

  if (result.length > 0) return { success: false };
  return { success: true };
});
