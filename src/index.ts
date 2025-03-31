import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  console.log("hello");
  // const result = await prisma.post.create({
  //   data: {
  //     title: "this is title",
  //     content: "this is content....",
  //     authorName: "Rehad",
  //   },
  // });
  // console.log(result);

  const getAllFromBD = await prisma.post.findMany();
  console.log(getAllFromBD);
};

main();
