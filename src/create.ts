import { Post } from "./../generated/prisma/index.d";
import { PrismaClient, UserRole } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("hello");
  // const createUser = await prisma.user.create({
  //   data: {
  //     userName: "user2",
  //     email: "user2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(createUser);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio....",
  //     userId: 1,
  //   },
  // });
  // console.log(createProfile);

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "programming",
  //   },
  // });
  // console.log(createCategory);

  const createPost = await prisma.post.create({
    data: {
      title: "this is title 5",
      content: "this is content 5",
      authorId: 3,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
