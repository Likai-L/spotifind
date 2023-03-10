import prisma from '@/helpers/prisma';

export default async function profileHandler(req, res) {
  const user = req.body;
  // if user found, update; if not, create
  await prisma.user.upsert({
    where: { spotifyUserUri: user.spotifyUserUri },
    update: user,
    create: user
  });

  res.end();
}
