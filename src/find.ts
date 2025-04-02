import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("hello");

  // find all
  const getAllFromBD = await prisma.post.findMany();
  console.log(getAllFromBD);
};

main();
