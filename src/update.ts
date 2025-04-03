import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("hello");
  const singleUpdate = await prisma.post.update({
    where: {
      id: 5,
    },
    data: {
      title: "Title 5",
    },
  });

  console.log(singleUpdate);

  const multipleUpdate = await prisma.post.updateMany({
    where: {
      title: "this is title",
    },
    data: {
      published: true,
    },
  });

  console.log(multipleUpdate);
};

main();
