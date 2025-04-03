import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //   offset pagination

  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });
  //   console.log(offsetData);
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 15,
    },
  });
  //   console.log(cursorData);

  // sorting
  const sortData = await prisma.post.findMany({
    orderBy: {
      title: "asc",
      //   title: "desc",
    },
    where: {
      title: "Title 1",
    },
  });
  console.log(sortData);
};

paginationSorting();
