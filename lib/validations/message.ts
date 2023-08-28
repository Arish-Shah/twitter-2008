import { z } from "zod";

export const messageSchema = z.object({
  to: z.string().min(1),
  text: z.string().min(1).max(140),
});
