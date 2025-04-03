import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("hello");
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 1",
        content: "Content for the first post...",
        authorName: "Rehad",
      },
      {
        title: "Title 2",
        content: "Content for the second post...",
        authorName: "Rehad",
      },
      {
        title: "Title 3",
        content: "Content for the third post...",
        authorName: "Rehad",
      },
      {
        title: "Title 4",
        content: "Content for the fourth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 5",
        content: "Content for the fifth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 6",
        content: "Content for the sixth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 7",
        content: "Content for the seventh post...",
        authorName: "Rehad",
      },
      {
        title: "Title 8",
        content: "Content for the eighth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 9",
        content: "Content for the ninth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 10",
        content: "Content for the tenth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 11",
        content: "Content for the eleventh post...",
        authorName: "Rehad",
      },
      {
        title: "Title 12",
        content: "Content for the twelfth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 13",
        content: "Content for the thirteenth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 14",
        content: "Content for the fourteenth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 15",
        content: "Content for the fifteenth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 16",
        content: "Content for the sixteenth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 17",
        content: "Content for the seventeenth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 18",
        content: "Content for the eighteenth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 19",
        content: "Content for the nineteenth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 20",
        content: "Content for the twentieth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 21",
        content: "Content for the twenty-first post...",
        authorName: "Rehad",
      },
      {
        title: "Title 22",
        content: "Content for the twenty-second post...",
        authorName: "Rehad",
      },
      {
        title: "Title 23",
        content: "Content for the twenty-third post...",
        authorName: "Rehad",
      },
      {
        title: "Title 24",
        content: "Content for the twenty-fourth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 25",
        content: "Content for the twenty-fifth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 26",
        content: "Content for the twenty-sixth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 27",
        content: "Content for the twenty-seventh post...",
        authorName: "Rehad",
      },
      {
        title: "Title 28",
        content: "Content for the twenty-eighth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 29",
        content: "Content for the twenty-ninth post...",
        authorName: "Rehad",
      },
      {
        title: "Title 30",
        content: "Content for the thirtieth post...",
        authorName: "Rehad",
      },
    ],
  });

  console.log(createMany);
};

main();
