import { useGlobalContext } from 'app/(context)';
import prisma from '@/helpers/prisma';

export default async function locationHandler(req, res) {
  const currentUser = req.body;
  if (useGlobalContext.longitude !== '' && useGlobalContext.latitude !== '') {
    await prisma.User.update({
      where: { spotifyUserUri: currentUser.spotifyUserUri },
      data: {
        upsert: {
          create: {
            longitude: useGlobalContext.longitude,
            latitude: useGlobalContext.latitude
          },
          update: {
            longitude: useGlobalContext.longitude,
            latitude: useGlobalContext.latitude
          }
        }
      }
    });
  }
}
