import { COMMENT_SELECT_FIELD } from 'public/constants/prismaConstants';
import prisma from '@/helpers/prisma';

export default async function createCommentHandler(req, res) {
  console.log('inside create comments api', req.body);
  if (!req.body.content) {
    res.status(400).send({ message: 'Comment cannot be blank' });
    return;
  }
  const { track, ...commentData } = req.body;
  if (track) {
    // if track is in req.body it means we this is a root comment, need to check if the song exists
    await prisma.song.upsert({
      where: { spotifySongUri: track.uri },
      update: {
        spotifySongUri: track.uri,
        name: track.trackName,
        artist: track.artistName,
        album: track.albumName
      },
      create: {
        spotifySongUri: track.uri,
        name: track.trackName,
        artist: track.artistName,
        album: track.albumName
      }
    });
  }

  try {
    const comment = await prisma.comment.create({
      data: commentData,
      select: COMMENT_SELECT_FIELD
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).send('Database server error: please try again later');
  }
}
