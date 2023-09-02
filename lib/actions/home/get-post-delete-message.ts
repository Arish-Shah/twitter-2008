"use server";

import { follows, messages, users } from "@/drizzle/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { MessageDataType } from "@/types";
import { and, eq, ilike, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getUnreadCount = cache(async () => {
  const { user } = await auth();
  const userId = Number(user.id);

  const data = await db
    .select({ count: sql<number>`count(*)` })
    .from(messages)
    .where(and(eq(messages.toId, userId), eq(messages.toDeleted, false)));
  return data[0].count;
});

export const getReceipents = cache(async () => {
  const { user } = await auth();
  const userId = Number(user.id);

  const followers = await db.query.follows.findMany({
    columns: {},
    where: (follows, { eq }) => eq(follows.followingId, userId),
    with: {
      follower: {
        columns: {
          username: true,
        },
      },
    },
  });

  return followers.map((user) => user.follower.username);
});

export const postMessage = async (data: MessageDataType) => {
  const { user } = await auth();
  const userId = Number(user.id);

  const userResult = await db
    .select({ id: users.id })
    .from(users)
    .where(ilike(users.username, data.to));
  if (userResult.length !== 1)
    throw new Error(`User ${data.to} does not exist.`);
  const followerId = userResult[0].id;

  const following = await db
    .select({})
    .from(follows)
    .where(
      and(eq(follows.followerId, followerId), eq(follows.followingId, userId))
    );
  if (following.length !== 1)
    throw new Error(`${data.to} does not follow you.`);

  await db
    .insert(messages)
    .values({ fromId: userId, toId: followerId, text: data.text });

  revalidatePath("/direct_messages/sent");
};

export const getSentDirectMessages = cache(async (page = 1, limit = 20) => {
  const { user } = await auth();
  const userId = Number(user.id);

  const data = await db.query.messages.findMany({
    where: (messages, { eq, and }) =>
      and(eq(messages.fromId, userId), eq(messages.fromDeleted, false)),
    limit: limit + 1,
    offset: limit * (page - 1),
    columns: {
      id: true,
      text: true,
      createdAt: true,
    },
    with: {
      to: {
        columns: {
          username: true,
        },
        with: {
          profile: {
            columns: {
              name: true,
              picture: true,
            },
          },
        },
      },
    },
    orderBy: (messages, { desc }) => [desc(messages.createdAt)],
  });

  return {
    messages: data.slice(0, limit),
    hasMore: data.length > limit,
  };
});

export const getDirectMessages = cache(async (page = 1, limit = 20) => {
  const { user } = await auth();
  const userId = Number(user.id);

  const data = await db.query.messages.findMany({
    where: (messages, { eq, and }) =>
      and(eq(messages.toId, userId), eq(messages.toDeleted, false)),
    limit: limit + 1,
    offset: limit * (page - 1),
    columns: {
      id: true,
      text: true,
      createdAt: true,
    },
    with: {
      from: {
        columns: {
          username: true,
        },
        with: {
          profile: {
            columns: {
              name: true,
              picture: true,
            },
          },
        },
      },
    },
    orderBy: (messages, { desc }) => [desc(messages.createdAt)],
  });

  const mappedData = data.map((message) => ({
    id: message.id,
    text: message.text,
    createdAt: message.createdAt,
    to: {
      ...message.from,
    },
  }));

  return {
    messages: mappedData.slice(0, limit),
    hasMore: data.length > limit,
  };
});

// TODO: maybe delete when both toDeleted and fromDeleted are true (DB triggers?)
export const deleteMessage = async (messageId: number) => {
  console.log(messageId);
  const { user } = await auth();

  const data = await db
    .select({ toId: messages.toId, fromId: messages.fromId })
    .from(messages)
    .where(eq(messages.id, messageId));
  if (data.length !== 1) return notFound();

  const set =
    data[0].fromId === Number(user.id)
      ? { fromDeleted: true }
      : { toDeleted: true };
  await db.update(messages).set(set).where(eq(messages.id, messageId));

  revalidatePath("/direct_messages");
};
