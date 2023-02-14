import prisma from '@/helpers/prisma';

export default async function songCommentsHandler(req, res) {
  const { songUri } = req.params;
  console.log('Inside songComments api, got song Uri:', songUri);
  const comments = await prisma.comment.findMany({
    where: { songUri },
    select: {
      id: true,
      content: true,
      parentId: true,
      createdAt: true,
      author: {
        select: {
          spotifyUserUri: true,
          username: true,
          profilePictureUrl: true
        }
      }
    }
  });
}
