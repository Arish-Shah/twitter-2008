"use server";

import { deviceUpdates } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  DeviceSetupDataType,
  DeviceUpdateSleepDataType,
  DeviceUpdateTypeDataType,
} from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const getDeviceUpdates = cache(async () => {
  const { user } = await auth();
  const userId = Number(user.id);

  const data = await db
    .select({
      id: deviceUpdates.id,
      phone: deviceUpdates.phone,
      type: deviceUpdates.type,
      sleep: deviceUpdates.sleep,
      from: deviceUpdates.from,
      to: deviceUpdates.to,
    })
    .from(deviceUpdates)
    .where(eq(deviceUpdates.userId, userId));

  if (data.length === 0) return null;
  return data[0];
});

export const postDeviceSetup = async (data: DeviceSetupDataType) => {
  const { user } = await auth();
  const userId = Number(user.id);

  await db.insert(deviceUpdates).values({ ...data, userId });
  revalidatePath("/devices");
  revalidatePath("/home");
};

export const updateDeviceUpdateType = async (
  deviceUpdateId: number,
  data: DeviceUpdateTypeDataType
) => {
  await db
    .update(deviceUpdates)
    .set({ ...data })
    .where(eq(deviceUpdates.id, deviceUpdateId));
  revalidatePath("/devices");
  revalidatePath("/home");
};

export const updateDeviceSleep = async (
  deviceUpdateId: number,
  data: DeviceUpdateSleepDataType
) => {
  await db
    .update(deviceUpdates)
    .set({ ...data })
    .where(eq(deviceUpdates.id, deviceUpdateId));
  revalidatePath("/devices");
};

export const deleteDeviceUpdates = async (deviceUpdateId: number) => {
  await db.delete(deviceUpdates).where(eq(deviceUpdates.id, deviceUpdateId));
  revalidatePath("/devices");
  revalidatePath("/home");
};
