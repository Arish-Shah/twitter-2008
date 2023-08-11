import { db } from "@/drizzle";
import { users } from "@/drizzle/schema";
import { validateSignupBody } from "@/lib/validation";
import type { SignupBodyType } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body: SignupBodyType = await req.json();
  const message = validateSignupBody(body);

  if (message) {
    return NextResponse.json({ message, success: false });
  }

  const user = await db
    .insert(users)
    .values({
      username: body.username,
      email: body.email,
      password: body.password,
    })
    .returning({ userId: users.id });

  console.log(user);

  return NextResponse.json({ message: null, success: true });
}
