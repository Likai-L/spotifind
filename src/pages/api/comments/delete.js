import prisma from '@/helpers/prisma';

export default async function updateCommentHandler(req, res) {
  console.log('inside delete comments api', req.body);
  const { id } = req.body;
  // TODO: check if the user id matches the comment's author id
  try {
    const comment = await prisma.comment.delete({
      where: { id }
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).send(err);
  }
}
