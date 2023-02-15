import prisma from '@/helpers/prisma';
import { COMMENT_SELECT_FIELD } from 'public/constants/prismaConstants';

export default async function songCommentsHandler(req, res) {
  const { songUri } = req.query;
  console.log('Inside songComments api, got song Uri:', songUri);
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    where: { songUri },
    select: {
      id: true,
      content: true,
      parentId: true,
      createdAt: true,
      author: {
        select: COMMENT_SELECT_FIELD
      }
    }
  });
  res.send(comments);
}
