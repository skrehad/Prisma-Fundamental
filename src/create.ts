import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("hello");
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "this is title",
        content: "this is content....",
        authorName: "Rehad",
      },
      {
        title: "this is title 2",
        content: "this is content....",
        authorName: "Rehad 2",
      },
      {
        title: "this is title 3",
        content: "this is content....",
        authorName: "Rehad 3",
      },
      {
        title: "this is title 4",
        content: "this is content....",
        authorName: "Rehad 4",
      },
    ],
  });

  console.log(createMany);
};

main();
