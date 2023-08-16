"use server";

import { users } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { signupSchema } from "@/lib/validations/auth";
import { sql } from "drizzle-orm";
import { cache } from "react";

export type UsernameAvailableResponse = {
  message: string | null;
  success: boolean;
};

export const getUsernameAvailable = cache(async (username: string) => {
  const data = await db
    .select()
    .from(users)
    .where(sql`lower(${users.username}) = ${username.toLowerCase()}`);

  if (data.length > 0) return { success: false };
  return { success: true };
});

export const getUsernameAvailableActive = cache(
  async (username: string): Promise<UsernameAvailableResponse> => {
    const parse = await signupSchema
      .pick({ username: true })
      .safeParseAsync({ username });

    if (!parse.success) {
      return {
        message: parse.error.issues[0].message,
        success: false,
      };
    }

    const available = await getUsernameAvailable(username);
    if (!available) {
      return {
        message: "That name has been taken. Please choose another.",
        success: false,
      };
    }

    return { message: "Available!", success: true };
  }
);
