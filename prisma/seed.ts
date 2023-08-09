import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const ars = await prisma.user.create({
    data: {
      email: "ars@ars.com",
      password: "ars",
      username: "ars",
    },
  });

  const updates = await prisma.update.createMany({
    data: [
      {
        text: "just setting up my twttr",
        authorId: ars.id,
      },
      {
        text: "to be or not to be that is the question, whether it is nobler in the mind to suffer the slings and arrows of outrageous fortune",
        authorId: ars.id,
      },
      {
        text: "trying to see if this works",
        authorId: ars.id,
      },
    ],
  });

  console.log({ ars, updates });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
