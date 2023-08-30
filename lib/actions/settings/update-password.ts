"use server";

import { users } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { UpdatePasswordDataType } from "@/types";
import { compare, hash } from "bcrypt";
import { eq } from "drizzle-orm";

export const updatePassword = async (data: UpdatePasswordDataType) => {
  if (data.newPassword !== data.verifyPassword)
    throw new Error("Passwords do not match.");

  const { user } = await auth();
  const result = await db
    .select({ password: users.password })
    .from(users)
    .where(eq(users.id, Number(user.id)));
  if (result.length === 0) throw new Error("User not found");

  const valid = await compare(data.currentPassword, result[0].password);
  if (!valid) throw new Error("Your current password is incorrect.");

  const password = await hash(data.newPassword, 10);
  await db
    .update(users)
    .set({ password })
    .where(eq(users.id, Number(user.id)));
};
