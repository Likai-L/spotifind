import prisma from "@/helpers/prisma";

export default async function usersBySongHandler(req, res) {
  const songUri = req.body;

  const result = await prisma
}