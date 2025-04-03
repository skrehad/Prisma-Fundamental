import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("hello");

  // find all
  const getAllFromBD = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirst({
    where: {
      id: 1,
    },
  });

  const findUnique = await prisma.post.findUnique({
    where: {
      id: 8,
    },
    select: {
      title: true,
      content: true,
      authorName: true,
      // published: true,
    },
  });

  console.log(findUnique);
};

main();
