import { z } from "zod";

export const updateSchema = z.object({
  update: z.string().min(1).max(140),
  parent: z.number().nullable(),
});
