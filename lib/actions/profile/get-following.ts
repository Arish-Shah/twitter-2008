import { db } from "@/lib/db";
import { cache } from "react";

export const getFollowingSection = cache(
  async (username: string, limit = 37) => {
    const data = await db.query.users.findFirst({
      columns: {},
      where: (users, { sql }) =>
        sql`lower(${users.username}) = ${username.toLowerCase()}`,
      with: {
        following: {
          limit: limit + 1,
          columns: {},
          with: {
            following: {
              columns: {
                username: true,
              },
              with: {
                profile: {
                  columns: {
                    name: true,
                    picture: true,
                  },
                },
              },
            },
          },
          orderBy: (following, { asc }) => [asc(following.createdAt)],
        },
      },
    });
    if (!data) return { following: [], hasMore: false };

    const following = data.following.map((user) => ({
      username: user.following.username,
      name: user.following.profile.name,
      picture: user.following.profile.picture,
    }));

    return {
      following: following.slice(0, limit),
      hasMore: following.length > limit,
    };
  }
);
