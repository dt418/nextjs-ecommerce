import { PrismaClient } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";

/**
 * The singleton instance of a PrismaClient with the `withOptimize` optimization
 * and a custom computed field on the `User` model.
 *
 * @returns {PrismaClient} The singleton instance of a PrismaClient with the
 * `withOptimize` optimization and the custom computed field on the `User`
 * model.
 */
const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withOptimize()).$extends({
    result: {
      user: {
        fullName: {
          needs: { firstName: true, lastName: true },
          compute(user) {
            return `${user.firstName} ${user.lastName}`;
          },
        },
      },
    },
  });
};

declare const globalThis: {
  /**
   * The global singleton instance of the optimized PrismaClient. This is
   * lazily initialized and memoized to prevent multiple instances of the
   * PrismaClient from being created.
   */
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
