import prisma from '@/helpers/prisma';
import { sortLikedTrack } from '@/helpers/helpers';

export default async function recentLikesHandler(req, res) {
  const { recentLikes, spotifyUserUri } = req.body;
  // if (user.recentLikes[0] !== recentLikes[0]) {
  //   console.log('recent liked songs updated, most recent:', recentLikes[0]);
  // }

  const user = await prisma.user.findUnique({
    where: { spotifyUserUri },
    include: { recentLikes: true }
  });

  const oldLikes = user.recentLikes;
  const sortedLikes = recentLikes.map(like => sortLikedTrack(like));

  if (!oldLikes[0]) {
    // first time updating likes
    // use Promise.all to run all queries concurrently
    await Promise.all(
      sortedLikes.map(like => {
        // return a promise that connects or creates a song
        return prisma.user.update({
          where: { spotifyUserUri },
          data: {
            recentLikes: {
              connectOrCreate: {
                create: like,
                where: { spotifySongUri: like.spotifySongUri }
              }
            }
          }
        });
      })
    );
  }
  // console.log('old likes😈😈😈', oldLikes);
  // console.log('recent likes😈😈😈', sortedLikes);
  const newLikes = sortedLikes.filter(like => {
    return oldLikes.every(oldLike => {
      if (oldLike.spotifySongUri === like.spotifySongUri) {
        return false;
      }
      return true;
    });
  });
  console.log('💀💀💀new likes: ', newLikes);

  res.end();
}
