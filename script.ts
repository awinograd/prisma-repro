import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const extendedClient = new PrismaClient().$extends({});

// A `main` function so that you can use async/await
async function main() {
  const user = await prisma.user.findFirstOrThrow();
  console.log(user.name);

  const user2 = await extendedClient.user.findFirstOrThrow();
  console.log(user2.name);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
