import prisma from '@/helpers/prisma';

export default async function nowPlayingHandler(req, res) {
  const { spotifyUserUri, ...currentSong } = req.body;
  console.log('user uri', spotifyUserUri);
  if (!currentSong.spotifySongUri) {
    await prisma.user.update({
      where: { spotifyUserUri },
      data: {
        nowPlaying: {
          disconnect: true
        }
      }
    });
    res.end();
    return;
  }
  await prisma.song.upsert({
    where: { spotifySongUri: currentSong.spotifySongUri },
    update: { ...currentSong, playedBy: { connect: { spotifyUserUri } } },
    create: { ...currentSong, playedBy: { connect: { spotifyUserUri } } }
  });

  res.end();
}
