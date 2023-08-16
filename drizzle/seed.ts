import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { applications, profiles, themes, updates, users } from "./schema";

export async function main() {
  const password = await hash("arish", 10);

  const userResult = await db
    .insert(users)
    .values({
      username: "arish",
      password,
      email: "arish@x-2008.vercel.app",
    })
    .returning({ userId: users.id });
  const userId = userResult[0].userId;

  const profileResult = await db
    .insert(profiles)
    .values({
      bio: "color my life with the chaos of trouble",
      name: "Arish Rahil Shah",
      web: "https://github.com/Arish-Shah",
      location: "Amsterdam, The Netherlands",
      userId,
    })
    .returning({ profileId: profiles.id });
  const profileId = profileResult[0].profileId;

  await db.insert(themes).values({
    background: "#ebebeb",
    text: "#333333",
    links: "#990000",
    sidebar: "#f3f3f3",
    sidebarBorder: "#dfdfdf",
    backgroundImage: "/images/themes/theme7.gif",
    tile: false,
    profileId,
  });

  const applicationResult = await db
    .insert(applications)
    .values({
      name: "web",
    })
    .returning({ applicationId: applications.id });
  const applicationId = applicationResult[0].applicationId;

  const updateResult = await db
    .insert(updates)
    .values({
      text: "just setting up my twttr",
      authorId: userId,
      applicationId,
    })
    .returning({ updateId: updates.id });
  const updateId = updateResult[0].updateId;

  await db.insert(updates).values({
    text: "@arish i think the updates are at least working fine",
    authorId: userId,
    applicationId,
    parentId: updateId,
  });
}
