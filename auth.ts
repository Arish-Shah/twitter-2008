import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth({
  providers: [
    Credentials({
      async authorize() {
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
