"use server";

import { cache } from "react";
import { auth } from "../auth";
import { getProfile } from "./profile/get-profile";

export const getLoggedInUsername = cache(async () => {
  const session = await auth();
  if (session?.user) {
    const profile = await getProfile();
    return profile.username;
  }
});
