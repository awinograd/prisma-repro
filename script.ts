import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const email = `myemail+${Date.now()}@email.com`;

  const user = await prisma.$transaction(
    async (pris) => {
      const u = await pris.user.create({
        data: { email },
      });

      await new Promise((res) => setTimeout(res, 600));

      return u;
    },
    { timeout: 500 }
  );

  console.log("Created user", user);

  const persistedUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!persistedUser) {
    throw new Error("user not persisted");
  }

  console.log("Loaded user from db", persistedUser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
