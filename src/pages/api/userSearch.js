import prisma from '@/helpers/prisma';

export default async function userSearchHandler(req, res) {
  const user = req.body;
  // console.log('req.body inside userSearchHandler!', user);
  const result = await prisma.user.findUnique({
    where: user
  });
  // console.log('returned user from userSearchHandler:', result);
  res.send(result);
  res.end();
}
