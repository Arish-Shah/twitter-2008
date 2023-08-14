"use server";

import {
  deviceUpdates,
  notices,
  profiles,
  themes,
  users,
} from "@/drizzle/schema";
import { db } from "@/lib/db";
import { SignupData } from "@/types";
import { hash } from "bcrypt";

export async function signup(data: SignupData) {
  const password = await hash(data.password, 10);
  const userResult = await db
    .insert(users)
    .values({ ...data, password })
    .returning({ userId: users.id });
  const userId = userResult[0].userId;
  const profileResult = await db
    .insert(profiles)
    .values({ userId })
    .returning({ profileId: profiles.id });
  await db.insert(themes).values({ profileId: profileResult[0].profileId });
  await db.insert(notices).values({ userId, newsletter: data.newsletter });
  await db.insert(deviceUpdates).values({ userId });
}
