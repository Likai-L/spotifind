import prisma from '@/helpers/prisma';

export default async function usersBySongHandler(req, res) {
  const songUri = req.body;

  const result = await prisma.user.findMany({
    where: songUri
  });
  console.log('result from usersBySongHandler', result);
  res.send(result);
  res.end;
}
