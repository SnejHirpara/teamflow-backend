import bcrypt from "bcrypt";
import prismaClient from "../../db/prisma.js";

export const createUser = async ({ name, email, password }) => {
  const encryptedPassword = await bcrypt.hash(password, 10);

  return prismaClient.user.create({
    data: { name, email, password: encryptedPassword },
  });
};

export const getUserIdByEmail = async (email) => {
  return prismaClient.user.findUnique({
    where: { email },
    select: { id: true },
  });
};

export const getUserInfoByEmail = async (email) => {
  return prismaClient.user.findUnique({ where: { email } });
};
