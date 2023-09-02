import { inArray } from "drizzle-orm";
import { cache } from "react";
import { db } from "../db";

export const getEmployees = cache(async (usernames: string[]) => {
  const employees = await db.query.users.findMany({
    where: (users) => inArray(users.username, usernames),
    with: {
      profile: {
        columns: {
          name: true,
          picture: true,
        },
      },
    },
  });

  return employees;
});
