import { COMMENT_SELECT_FIELD } from 'public/constants/prismaConstants';
import prisma from '@/helpers/prisma';

export default async function createCommentHandler(req, res) {
  console.log('inside create comments api', req.body);
  if (!req.body.content) {
    res.status(400).send({ message: 'Comment cannot be blank' });
    return;
  }
  try {
    const comment = await prisma.comment.create({
      data: req.body,
      select: COMMENT_SELECT_FIELD
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).send('Database server error: please try again later');
  }
}
