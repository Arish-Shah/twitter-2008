import { users } from "@/drizzle/schema";
import type { InferModel } from "drizzle-orm";
import "next-auth";

interface NextAuthUser {
  id: number;
  username: string;
  role: InferModel<typeof users, "insert">["role"];
}

declare module "next-auth" {
  interface User extends NextAuthUser {}

  interface Session {
    user: NextAuthUser;
  }
}
