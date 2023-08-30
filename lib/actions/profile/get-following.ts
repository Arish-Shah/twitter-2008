import { users } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq, sql, type SQL } from "drizzle-orm";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getFollowingSection = cache(
  async (username?: string, limit = 36) => {
    let where: SQL<unknown>;

    if (username) {
      where = sql`lower(${users.username}) = ${username.toLowerCase()}`;
    } else {
      const session = await auth();
      if (!session?.user) return redirect("/login");
      where = eq(users.id, Number(session.user.id));
    }

    const data = await db.query.users.findFirst({
      columns: {},
      where,
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
