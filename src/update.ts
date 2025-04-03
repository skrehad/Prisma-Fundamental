import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("hello");
  // const singleUpdate = await prisma.post.update({
  //   where: {
  //     id: 5,
  //   },
  //   data: {
  //     title: "Title 5",
  //   },
  // });

  // console.log(singleUpdate);

  // const multipleUpdate = await prisma.post.updateMany({
  //   where: {
  //     title: "this is title",
  //   },
  //   data: {
  //     published: true,
  //   },
  // });

  // console.log(multipleUpdate);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "update title",
    },
    create: {
      title: "title 1",
      content: "content 1",
      authorName: "Rehad 1",
    },
  });
  console.log(upsertData);
};

main();
