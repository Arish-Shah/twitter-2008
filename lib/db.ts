import { env } from "@/lib/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../drizzle/schema";

const drizzleSingleton = () => {
  const client = postgres(env.DATABASE_URL);
  return drizzle(client, { schema });
};

type DrizzleSingleton = ReturnType<typeof drizzleSingleton>;

const globalForDrizzle = globalThis as unknown as {
  db: DrizzleSingleton | undefined;
};

export const db = globalForDrizzle.db ?? drizzleSingleton();

if (process.env.NODE_ENV !== "production") globalForDrizzle.db = db;
