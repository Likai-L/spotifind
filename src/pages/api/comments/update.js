import prisma from '@/helpers/prisma';

export default async function updateCommentHandler(req, res) {
  console.log('inside update comments api', req.body);
  const { content, commentId } = req.body;
  // TODO: check if the user id matches the comment's author id
  if (!content) {
    res.status(400).send({ message: 'Comment cannot be blank' });
    return;
  }

  try {
    const comment = await prisma.comment.update({
      where: { id: commentId },
      data: { content },
      select: { content: true, id: true }
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).send(err);
  }
}
