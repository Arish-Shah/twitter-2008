import { deviceUpdateTypeEnumValues } from "@/drizzle/schema";
import { z } from "zod";
import { getPhoneAvailable } from "../actions/get-phone-available";

export const deviceSetupSchema = z.object({
  phone: z
    .string()
    .regex(/^\+?[1-9][0-9]{7,14}$/, "Invalid phone number")
    .refine(
      async (val) => {
        const available = await getPhoneAvailable(val);
        return available.success;
      },
      () => ({ message: "That number is already in use" })
    ),
  type: z
    .enum(deviceUpdateTypeEnumValues)
    .or(z.boolean().transform((val) => (val ? "on" : "off"))),
});

export const deviceUpdateTypeSchema = z.object({
  type: z.enum(deviceUpdateTypeEnumValues),
});

export const deviceUpdateSleepSchema = z.object({
  sleep: z.boolean(),
  from: z
    .number()
    .or(z.string().regex(/\d+/).transform(Number))
    .refine((n) => n >= 0 && n <= 24),
  to: z
    .number()
    .or(z.string().regex(/\d+/).transform(Number))
    .refine((n) => n >= 0 && n <= 24),
});

export const followDeviceUpdatesSchema = z.object({
  deviceUpdates: z.enum(["on", "off"]),
});
