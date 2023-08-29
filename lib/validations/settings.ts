import { z } from "zod";
import { signupSchema } from "./auth";

export const accountSettingsSchema = z.object({
  name: z.string().max(20).nullable(),
  username: signupSchema.shape.username.nullable(),
  email: signupSchema.shape.email,
  password: z.string().nullable(),
  web: z.string().nullable(),
  bio: z.string().max(160).nullable(),
  location: z.string().max(30).nullable(),
  protected: z.boolean(),
});
