"use server";

import { db } from "@/lib/db";
import { signupSchema } from "@/lib/validations/auth";

export type UsernameAvailableResponse = {
  message: string | null;
  success: boolean;
};

export async function usernameAvailable(username: string) {
  const exists = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.username, username),
  });
  if (exists) return { success: false };
  return { success: true };
}

export async function usernameAvailableActive(
  username: string
): Promise<UsernameAvailableResponse> {
  const parse = await signupSchema
    .pick({ username: true })
    .safeParseAsync({ username });

  if (!parse.success) {
    return {
      message: parse.error.issues[0].message,
      success: false,
    };
  }

  const available = await usernameAvailable(username);
  if (!available) {
    return {
      message: "That name has been taken. Please choose another.",
      success: false,
    };
  }

  return { message: "Available!", success: true };
}
