import { COMMENT_SELECT_FIELD } from 'public/constants/prismaConstants';
import prisma from '@/helpers/prisma';

export default async function songCommentsHandler(req, res) {
  const { songUri } = req.query;
  const { userUri } = req.body;
  console.log('Inside songComments api, got song Uri:', songUri);
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    where: { songUri },
    select: { ...COMMENT_SELECT_FIELD, _count: { select: { likes: true } } }
  });

  const likes = await prisma.like.findMany({
    where: {
      userUri,
      commentId: { in: comments.map(comment => comment.id) }
    }
  });

  const commentsWithLikes = comments.map(comment => {
    return {
      ...comment,
      likedByMe: likes.find(like => like.commentId === comment.id)
    };
  });
  res.send(commentsWithLikes);
}
