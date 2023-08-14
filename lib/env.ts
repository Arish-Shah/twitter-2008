import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  AUTH_URL: z.string().url(),
  AUTH_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
