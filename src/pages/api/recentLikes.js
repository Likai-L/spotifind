import prisma from '@/helpers/prisma';

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

  if (!oldLikes[0]) {
    // first time updating likes
    // use Promise.all to run all queries concurrently
    await Promise.all(
      recentLikes.map(like => {
        // return a promise that connects or creates a song
        return prisma.user.update({
          where: { spotifyUserUri },
          data: {
            recentLikes: {
              connectOrCreate: {
                create: {
                  spotifySongUri: like.uri,
                  name: like.trackName,
                  artist: like.artist.name
                },
                where: { spotifySongUri: like.uri }
              }
            }
          }
        });
      })
    );
  }
  // const newLikes = recentLikes.filter(like => {
  //   oldLikes.forEach(oldLike => {
  //     if (oldLike.uri === like.uri) {
  //       return false;
  //     }
  //   });
  //   return true;
  // });
  // console.log(newLikes);

  res.end();
}
