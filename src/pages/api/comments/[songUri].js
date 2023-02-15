import { COMMENT_SELECT_FIELD } from 'public/constants/prismaConstants';
import prisma from '@/helpers/prisma';

export default async function songCommentsHandler(req, res) {
  const { songUri } = req.query;
  console.log('Inside songComments api, got song Uri:', songUri);
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    where: { songUri },
    select: COMMENT_SELECT_FIELD
  });
  res.send(comments);
}
