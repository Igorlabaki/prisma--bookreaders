import { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const bookId  = JSON.parse(req.body)
  try {
    const savedBook = await prisma.books.findFirst({
      where:{
          id: bookId
      }
    });
    resp.json(savedBook)
  } catch (error) {
    resp.json(error.message)
  }

}