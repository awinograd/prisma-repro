import { PrismaClient, type Prisma } from "@prisma/client";

export function getDbClient(options: Prisma.PrismaClientOptions) {
  const client = new PrismaClient(options).$extends({});

  return client;
}
