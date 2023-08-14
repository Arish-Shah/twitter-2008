import { LoginData } from "@/types";
import { compare } from "bcrypt";
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
        const { usernameOrEmail, password } = credentials as LoginData;

        const user = await db.query.users.findFirst({
          columns: {
            id: true,
            role: true,
            password: true,
          },
          where: (users, { or, eq }) =>
            or(
              eq(users.email, usernameOrEmail),
              eq(users.username, usernameOrEmail)
            ),
        });
        if (!user) throw new Error();

        const match = await compare(password, user.password);
        if (!match) throw new Error();

        return { id: user.id.toString(), role: user.role };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/signout",
    error: "/login",
    // TODO: change this to point to invitations
    newUser: "/home",
  },
});
