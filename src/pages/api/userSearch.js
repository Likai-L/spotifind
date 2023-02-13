import prisma from '@/helpers/prisma';

export default async function userSearchHandler(req, res) {
  const user = req.body;
  console.log('user!!!!:::::', user);
  await prisma.user({
    where: { name: user }
  });
  console.log('returned user from USERSEARCH:', res);
  res.end();
}
