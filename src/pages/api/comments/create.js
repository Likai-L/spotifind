import prisma from '@/helpers/prisma';

export default async function createCommentHandler(req, res) {
  console.log('inside create comments api', req.body);
  if (!req.body.content) {
    res.status(400).send({ message: 'Comment cannot be blank' });
    return;
  }
  res.send(req.body);
}
