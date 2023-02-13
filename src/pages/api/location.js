import prisma from '@/helpers/prisma';

export default async function locationHandler(req, res) {
  const user = req.body;
  console.log('req.body inside locationhandler!', req.body);
  await prisma.user.update({
    where: { username: user.username },
    data: user
  });
  res.end();
}
