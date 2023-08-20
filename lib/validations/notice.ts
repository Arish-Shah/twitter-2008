import { replyEnumValues } from "@/drizzle/schema";
import { z } from "zod";

export const noticeSchema = z.object({
  nudge: z.boolean(),
  replies: z.enum(replyEnumValues),
  newFollower: z.boolean(),
  directText: z.boolean(),
  newsletter: z.boolean(),
});
