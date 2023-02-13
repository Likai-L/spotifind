import prisma from './prisma';

export async function getUserByName(name) {
  try {
    const user = await prisma.user.findUnique({ where: { name } });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}
