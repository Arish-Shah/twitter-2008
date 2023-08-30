import { z } from "zod";
import { signupSchema } from "./auth";

export const accountSettingsSchema = z.object({
  name: z.string().max(20, "Your name must be less than 20 chars.").nullable(),
  username: signupSchema.shape.username.nullable(),
  email: signupSchema.shape.email,
  password: z.string().nullable(),
  web: z.string().nullable(),
  bio: z.string().max(160, "Your bio must be less than 160 chars.").nullable(),
  location: z
    .string()
    .max(30, "Your location must be less than 30 chars.")
    .nullable(),
  protected: z.boolean(),
});

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required."),
    newPassword: z.string().min(6, "At least 6 chars."),
    verifyPassword: z.string().min(1, "Re-enter new password."),
  })
  .refine((data) => data.newPassword === data.verifyPassword, {
    message: "Passwords do not match.",
    path: ["verifyPassword"],
  });
