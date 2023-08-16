import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound, redirect } from "next/navigation";

export async function GET(
  _: Request,
  { params }: { params: { username: string } }
) {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  const user = await db.query.users.findFirst({
    columns: {},
    where: (users, { sql }) =>
      sql`lower(${users.username}) = ${params.username.toLowerCase()}`,
    with: {
      profile: {
        columns: {
          picture: true,
        },
      },
    },
  });
  if (!user) return notFound();

  return redirect(user.profile.picture);
}
