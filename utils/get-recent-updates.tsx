import { cache } from "react";
import { db } from "./db";

export const getRecentUpdates = cache(async (take = 20) => {
  return db.update.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take,
  });
});
