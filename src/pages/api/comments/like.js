import prisma from '@/helpers/prisma';

export default async function likeCommentHandler(req, res) {
  const data = req.body;
  // TODO: check if the user id matches the comment's author id
  try {
    const like = await prisma.like.findUnique({
      where: { userUri_commentId: data }
    });

    if (!like) {
      await prisma.like.create({ data });
      res.send({ addLike: true });
    } else {
      await prisma.like.delete({ where: { userUri_commentId: data } });
      res.send({ addLike: false });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
