import prisma from '@/helpers/prisma';

export default async function createCommentHandler(req, res) {
  console.log('inside create comments api', req.body);
  const { content, commentId } = req.body;
  if (!content) {
    res.status(400).send({ message: 'Comment cannot be blank' });
    return;
  }

  try {
    const comment = await prisma.comment.update({
      where: { id: commentId },
      data: { content },
      select: { content: true }
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).send('Database server error: please try again later');
  }
}
