import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getInfo = cache(async (username: string) => {
  const data = await db.query.users.findFirst({
    columns: {},
    where: (users, { sql }) =>
      sql`lower(${users.username}) = ${username.toLowerCase()}`,
    with: {
      profile: {
        columns: {
          name: true,
          location: true,
          web: true,
          bio: true,
        },
      },
    },
  });
  if (!data) return notFound();
  return data.profile;
});
