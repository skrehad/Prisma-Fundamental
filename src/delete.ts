import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("hello");
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(singleDelete);

  const manyDelete = await prisma.post.deleteMany({
    where: {
      published: false,
    },
  });
  console.log(manyDelete);
};

main();
