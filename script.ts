import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient().$extends({
  query: {
    $allModels: {
      $allOperations({ model, operation, args, query }) {
        return query(args);
      },
    },
  },
});

async function main() {
  await prisma.user.create({ data: { config: Prisma.DbNull, email: "" } });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
