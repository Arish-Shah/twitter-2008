import { z } from "zod";

export const inviteSchema = z.object({
  username: z.string().min(1),
  provider: z.string().min(1),
  password: z.string().min(1),
});

export const inviteEmailSchema = z.object({
  emails: z.string(),
});

export const searchSchema = z.object({
  keyword: z.string().min(1),
});
