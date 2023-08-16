import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getMastHead = cache(async (username: string) => {
  const result = await db.query.users.findFirst({
    columns: {},
    where: (users, { eq }) => eq(users.username, username),
    with: {
      profile: {
        columns: {
          picture: true,
        },
      },
    },
  });
  if (!result) return notFound();

  return {
    username,
    picture: result?.profile.picture,
  };
});
