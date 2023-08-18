import { z } from "zod";

export const updateSchema = z.object({
  text: z.string().min(1).max(140),
  kind: z.enum(["update", "reply", "direct_message"]),
  to: z.string().nullable(),
});
