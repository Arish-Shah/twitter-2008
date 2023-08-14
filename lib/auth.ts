import {
  deviceUpdates,
  notices,
  profiles,
  themes,
  users,
} from "@/drizzle/schema";
import type { CredentialsDataType } from "@/types";
import { compare, hash } from "bcrypt";
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
              username: users.username,
              role: users.role,
            });
          const userId = userResult[0].id;

          const profileResult = await db
            .insert(profiles)
            .values({ userId })
            .returning({ id: profiles.id });

          await db.insert(themes).values({ profileId: profileResult[0].id });
          await db
            .insert(notices)
            .values({ userId, newsletter: params.newsletter });
          await db.insert(deviceUpdates).values({ userId });

          return {
            id: userResult[0].id.toString(),
            username: userResult[0].username,
            role: userResult[0].role,
          };
        } else if (params.kind === "login") {
          const { usernameOrEmail, password } = params;

          const result = await db.query.users.findFirst({
            columns: {
              id: true,
              username: true,
              role: true,
              password: true,
            },
            where: (users, { eq, or }) =>
              or(
                eq(users.username, usernameOrEmail),
                eq(users.email, usernameOrEmail)
              ),
          });
          if (!result) throw new Error();

          const valid = await compare(password, result.password);
          if (!valid) throw new Error();

          return {
            id: result.id.toString(),
            username: result.username,
            role: result.role,
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
