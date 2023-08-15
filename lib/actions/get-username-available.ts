"use server";

import { db } from "@/lib/db";
import { signupSchema } from "@/lib/validations/auth";
import { cache } from "react";

export type UsernameAvailableResponse = {
  message: string | null;
  success: boolean;
};

export const getUsernameAvailable = cache(async (username: string) => {
  const exists = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.username, username),
  });
  if (exists) return { success: false };
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
