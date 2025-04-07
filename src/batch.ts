import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      userName: "rehad",
      email: "rehad@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 3,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};

batchTransaction();
