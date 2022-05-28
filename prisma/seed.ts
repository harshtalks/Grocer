import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const runSeedingUserGenerator = async () => {
  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "abc@test.com" },
    update: {},
    create: {
      email: "abc@test.com",
      name: "abc",
      password: bcrypt.hashSync("pabcassword", salt),
    },
  });
};

runSeedingUserGenerator()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
