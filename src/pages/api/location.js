import { useGlobalContext } from 'app/(context)';
import prisma from '@/helpers/prisma';

export default async function locationHandler(req, res) {
  const user = req.body;
  if (useGlobalContext.longitude !== '' && useGlobalContext.latitude !== '') {
    const updatedUser = await prisma.user.upsert({
      where: { spotifyUserUri: user.spotifyUserUri },
      create: {
        longitude: useGlobalContext.longitude,
        latitude: useGlobalContext.latitude
      },
      update: {
        longitude: useGlobalContext.longitude,
        latitude: useGlobalContext.latitude
      }
    });
    console.log(updatedUser);

    res.end();
  }
}
