"use server";

import { deviceUpdates } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "../db";

export const getPhoneAvailable = cache(async (phone: string) => {
  const data = await db
    .select({})
    .from(deviceUpdates)
    .where(eq(deviceUpdates.phone, phone));

  if (data.length > 0) return { success: false };
  return { success: true };
});
