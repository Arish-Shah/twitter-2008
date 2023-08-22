import { getEmailAvailable } from "@/lib/actions/get-email-available";
import { getUsernameAvailable } from "@/lib/actions/get-username-available";
import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(1, "Username can't be blank")
    .max(15, "Username must be less than 15 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers and '_'"
    )
    .refine(
      async (val) => {
        const available = await getUsernameAvailable(val);
        return available.success;
      },
      () => ({ message: "That name has been taken. Please choose another." })
    ),
  password: z
    .string()
    .min(6, "Your password needs to be at least 6 characters."),
  email: z
    .string()
    .email("Please enter a valid email")
    .refine(
      async (val) => {
        const available = await getEmailAvailable(val);
        return available.success;
      },
      (val) => ({ message: `Email${val} Email has already been taken` })
    ),
  humanness: z
    .boolean({
      required_error: "Incorrect captcha",
    })
    .refine((val) => val, "Incorrect captcha"),
  newsletter: z.boolean().or(z.string()),
});

export const loginSchema = z.object({
  usernameOrEmail: z.string().min(1),
  password: z.string().min(1),
  remember: z.boolean(),
});

export const completeSchema = z.object({
  phone: z
    .string()
    .min(9, "Please enter a valid number")
    .max(14, "Please enter a valid number"),
});

export const resendPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});
