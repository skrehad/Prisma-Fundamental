import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
      // include: {
      //   post: true,
      // },
    })
    .profile();

  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUsers, { depth: Infinity });
};
relationalQueries();
