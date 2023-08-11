import { db } from "@/drizzle";
import { validateUsername } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") ?? "";
  const message = validateUsername(username);

  if (message) {
    return NextResponse.json({ message, success: false });
  }

  const exists = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.username, username!),
  });

  if (exists) {
    return NextResponse.json({
      message: "That name has been taken. Please choose another.",
      success: false,
    });
  }

  return NextResponse.json({ message: "Available!", success: true });
}
