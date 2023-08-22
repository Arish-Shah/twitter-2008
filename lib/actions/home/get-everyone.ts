import { auth } from "@/lib/auth";
import { cache } from "react";
import { getUpdates } from "../get-updates";

export const getEveryone = cache(async (page = 1, limit = 20) => {
  const { user } = await auth();
  const userId = Number(user.id);

  return getUpdates(userId, { page, limit });
});
