import { users } from "@/drizzle/schema";
import { InferModel } from "drizzle-orm";
import "next-auth";

declare module "next-auth" {
  interface User {
    id: any;
    role: InferModel<typeof users, "select">["role"];
  }
}
