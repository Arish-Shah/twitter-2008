import { z } from "zod";

export const usernameSchema = z
  .string()
  .min(1, "Username can't be blank")
  .max(15, "Username must be less than 15 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username can only contain letters, numbers and '_'"
  );

export const signupSchema = z.object({
  username: usernameSchema,
  password: z
    .string()
    .min(6, "Your password needs to be at least 6 characters."),
  email: z.string().email("Please enter a valid email."),
  humanness: z.literal(true, {
    errorMap: () => ({ message: "Incorrect Captcha." }),
  }),
  newsletter: z.boolean(),
});

export function validateUsername(username: string) {
  const parse = usernameSchema.safeParse(username);
  if (!parse.success) return parse.error.errors[0].message;
  return null;
}

export function validateSignupBody(body: unknown) {
  const parse = signupSchema.safeParse(body);
  if (!parse.success) return parse.error.errors[0].message;
  return null;
}
