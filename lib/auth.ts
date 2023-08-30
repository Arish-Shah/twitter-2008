import { notices, profiles, themes, users } from "@/drizzle/schema";
import type { CredentialsDataType } from "@/types";
import { compare, hash } from "bcrypt";
import { or, sql } from "drizzle-orm";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const params = credentials as CredentialsDataType;
        if (params.kind === "signup") {
          const password = await hash(params.password, 10);
          const userResult = await db
            .insert(users)
            .values({ ...params, password })
            .returning({
              id: users.id,
              role: users.role,
            });
          const userId = userResult[0].id;

          const profileResult = await db
            .insert(profiles)
            .values({ userId, name: params.username })
            .returning({ id: profiles.id });

          await db.insert(themes).values({ profileId: profileResult[0].id });
          await db
            .insert(notices)
            .values({ userId, newsletter: params.newsletter === "true" });

          return {
            id: userResult[0].id.toString(),
            role: userResult[0].role,
          };
        } else if (params.kind === "login") {
          const { usernameOrEmail, password } = params;
          const lowercase = usernameOrEmail.toLowerCase();

          const data = await db
            .select({
              id: users.id,
              password: users.password,
              role: users.role,
            })
            .from(users)
            .where(
              or(
                sql`lower(${users.username}) = ${lowercase}`,
                sql`lower(${users.email}) = ${lowercase}`
              )
            );

          if (data.length === 0) throw new Error();
          const user = data[0];

          const valid = await compare(password, user.password);
          if (!valid) throw new Error("Incorrect password");

          return {
            id: user.id.toString(),
            role: user.role,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token = { ...token, ...user };
      return token;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/signout",
    error: "/login",
  },
});
