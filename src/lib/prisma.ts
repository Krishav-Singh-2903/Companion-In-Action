export function getPrismaClientUnavailable(): never {
  throw new Error(
    "Prisma Client will be enabled after application models are added in a later phase."
  );
}
